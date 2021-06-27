import { ApiCoreDataAccessService, Network } from '@kin-nxpm-stack/api/core/data-access'
import { Prisma } from '@prisma/client'
import { quarksToKin } from '@kinecosystem/kin-sdk-v2'
import {
  CreateAccountRequest,
  CreateAccountResponse,
  Event,
  SignTransactionRequest,
  SignTransactionResponse,
} from '@kinecosystem/kin-sdk-v2/dist/webhook'
import { Injectable, Logger } from '@nestjs/common'
import * as bs58 from 'bs58'

@Injectable()
export class ApiIntegrationKinService {
  private readonly network: Network =
    process.env.KIN_DEFAULT_NETWORK === 'mainnet' ? Network.KinMainnet : Network.KinTestnet
  private readonly logger = new Logger('ApiIntegrationKinService')
  constructor(private readonly data: ApiCoreDataAccessService) {
    this.logger.log('Hello!')
  }

  async signTransactionHandler(req: SignTransactionRequest, res: SignTransactionResponse) {
    // Get the Transaction ID
    const txid = bs58.encode(req.txId())
    this.logger.verbose(`sign-transaction with id: ${txid}`)

    // Go over the payments
    for (const payment of req.payments) {
      const data: Prisma.TransactionCreateInput = {
        network: this.network,
        txid,
        sender: payment.sender.toBase58(),
        destination: payment.destination.toBase58(),
        amount: quarksToKin(payment.quarks),
        memo: payment.memo,
        invoice: JSON.stringify(payment.invoice),
      }

      await this.data.transaction.create({ data })
      console.log('Data: ', data)

      for (const item of payment?.invoice?.Items || []) {
        console.log('Invoice Item', item)
      }
    }
  }

  eventsHandler(events: Event[]) {
    this.logger.verbose('events-handler')
    console.log(events)
    return
  }

  createAccountHandler(req: CreateAccountRequest, res: CreateAccountResponse) {
    this.logger.verbose('create-account')
    return
  }
}
