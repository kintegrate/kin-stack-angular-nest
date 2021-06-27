import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@kin-nxpm-stack/api/core/data-access'

import { UserCreateWalletInput } from './dto/user-create-wallet.input'
import { UserListWalletInput } from './dto/user-list-wallet.input'
import { UserUpdateWalletInput } from './dto/user-update-wallet.input'

@Injectable()
export class ApiWalletDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userWallets(userId: string, input?: UserListWalletInput) {
    return this.data.wallet.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async userCountWallets(userId: string, input?: UserListWalletInput): Promise<CorePaging> {
    const total = await this.data.wallet.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  userWallet(userId: string, walletId) {
    return this.data.wallet.findUnique({ where: { id: walletId } })
  }

  userCreateWallet(userId: string, input: UserCreateWalletInput) {
    return this.data.wallet.create({
      data: { ...input, owner: { connect: { id: userId } } },
    })
  }

  userUpdateWallet(userId: string, walletId, input: UserUpdateWalletInput) {
    return this.data.wallet.update({
      where: { id: walletId },
      data: { ...input },
    })
  }

  userDeleteWallet(userId: string, walletId) {
    return this.data.wallet.delete({ where: { id: walletId } })
  }
}
