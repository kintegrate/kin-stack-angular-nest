import { Environment, quarksToKin } from '@kinecosystem/kin-sdk-v2'
import {
  CreateAccountHandler,
  CreateAccountRequest,
  CreateAccountResponse,
  Event,
  EventsHandler,
  SignTransactionHandler,
  SignTransactionRequest,
  SignTransactionResponse,
} from '@kinecosystem/kin-sdk-v2/dist/webhook'
import { Injectable, Logger } from '@nestjs/common'
import * as bs58 from 'bs58'

@Injectable()
export class ApiIntegrationKinService {
  private readonly secret = process.env.KIN_WEBHOOK_SECRET
  private readonly env: Environment =
    process.env.KIN_DEFAULT_NETWORK === 'mainnet' ? Environment.Prod : Environment.Test
  private readonly logger = new Logger('ApiIntegrationKinService')
  constructor() {
    this.logger.log('Hello!')
  }

  signTransactionHandler(req: SignTransactionRequest, res: SignTransactionResponse) {
    // Get the Transaction ID
    const txId = bs58.encode(req.txId())
    this.logger.verbose(`sign-transaction with id: ${txId}`)

    // Go over the payments
    for (const payment of req.payments) {
      console.log('Sender:      ', payment.sender.toBase58())
      console.log('Destination: ', payment.destination.toBase58())
      console.log('Kin:         ', quarksToKin(payment.quarks))

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
