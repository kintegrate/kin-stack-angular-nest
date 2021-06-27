import { ApiCoreDataAccessService, CorePaging } from '@kin-nxpm-stack/api/core/data-access'
import { Injectable } from '@nestjs/common'
import { AdminListTransactionInput } from './dto/admin-list-transaction.input'

@Injectable()
export class ApiTransactionDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminTransactions(adminId: string, input?: AdminListTransactionInput) {
    return this.data.transaction.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountTransactions(adminId: string, input?: AdminListTransactionInput): Promise<CorePaging> {
    const total = await this.data.transaction.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  adminTransaction(adminId: string, transactionId) {
    return this.data.transaction.findUnique({ where: { id: transactionId } })
  }
}
