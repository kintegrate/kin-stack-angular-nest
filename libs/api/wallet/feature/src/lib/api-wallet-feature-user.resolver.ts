import { Transaction } from '@kin-nxpm-stack/api/transaction/data-access'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  UserCreateWalletInput,
  UserListWalletInput,
  UserUpdateWalletInput,
  ApiWalletDataAccessUserService,
  Wallet,
} from '@kin-nxpm-stack/api/wallet/data-access'
import { CorePaging } from '@kin-nxpm-stack/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@kin-nxpm-stack/api/auth/util'
import { User } from '@kin-nxpm-stack/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiWalletFeatureUserResolver {
  constructor(private readonly service: ApiWalletDataAccessUserService) {}

  @Query(() => [Wallet], { nullable: true })
  userWallets(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListWalletInput, nullable: true }) input?: UserListWalletInput,
  ) {
    return this.service.userWallets(user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountWallets(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListWalletInput, nullable: true }) input?: UserListWalletInput,
  ) {
    return this.service.userCountWallets(user.id, input)
  }

  @Query(() => Wallet, { nullable: true })
  userWallet(@CtxUser() user: User, @Args('walletId') walletId: string) {
    return this.service.userWallet(user.id, walletId)
  }

  @Query(() => [Transaction], { nullable: true })
  userWalletTransactions(@CtxUser() user: User, @Args('walletId') walletId: string) {
    return this.service.userWalletTransactions(user.id, walletId)
  }

  @Mutation(() => Wallet, { nullable: true })
  userCreateWallet(@CtxUser() user: User, @Args('input') input: UserCreateWalletInput) {
    return this.service.userCreateWallet(user.id, input)
  }

  @Mutation(() => Wallet, { nullable: true })
  userUpdateWallet(
    @CtxUser() user: User,
    @Args('walletId') walletId: string,
    @Args('input') input: UserUpdateWalletInput,
  ) {
    return this.service.userUpdateWallet(user.id, walletId, input)
  }

  @Mutation(() => Wallet, { nullable: true })
  userDeleteWallet(@CtxUser() user: User, @Args('walletId') walletId: string) {
    return this.service.userDeleteWallet(user.id, walletId)
  }
}
