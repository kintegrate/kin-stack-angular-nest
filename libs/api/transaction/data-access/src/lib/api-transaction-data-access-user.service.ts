import { ApiCoreDataAccessService, CorePaging } from '@kin-nxpm-stack/api/core/data-access'
import { Injectable } from '@nestjs/common'
import { UserListTransactionInput } from './dto/user-list-transaction.input'

@Injectable()
export class ApiTransactionDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userTransactions(userId: string, input?: UserListTransactionInput) {
    return this.data.transaction.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async userCountTransactions(userId: string, input?: UserListTransactionInput): Promise<CorePaging> {
    const total = await this.data.transaction.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  userTransaction(userId: string, transactionId) {
    return this.data.transaction.findUnique({ where: { id: transactionId } })
  }
}
