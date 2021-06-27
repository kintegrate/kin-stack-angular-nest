import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@kin-nxpm-stack/api/core/data-access'

import { AdminCreateWalletInput } from './dto/admin-create-wallet.input'
import { AdminListWalletInput } from './dto/admin-list-wallet.input'
import { AdminUpdateWalletInput } from './dto/admin-update-wallet.input'

@Injectable()
export class ApiWalletDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminWallets(adminId: string, input?: AdminListWalletInput) {
    return this.data.wallet.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountWallets(adminId: string, input?: AdminListWalletInput): Promise<CorePaging> {
    const total = await this.data.wallet.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  adminWallet(adminId: string, walletId) {
    return this.data.wallet.findUnique({ where: { id: walletId } })
  }

  adminCreateWallet(adminId: string, input: AdminCreateWalletInput) {
    return this.data.wallet.create({
      data: { ...input },
    })
  }

  adminUpdateWallet(adminId: string, walletId, input: AdminUpdateWalletInput) {
    return this.data.wallet.update({
      where: { id: walletId },
      data: { ...input },
    })
  }

  adminDeleteWallet(adminId: string, walletId) {
    return this.data.wallet.delete({ where: { id: walletId } })
  }
}
