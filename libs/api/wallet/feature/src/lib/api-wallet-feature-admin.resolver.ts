import { CtxUser, GqlAuthAdminGuard } from '@kin-nxpm-stack/api/auth/util'
import { CorePaging } from '@kin-nxpm-stack/api/core/data-access'
import { User } from '@kin-nxpm-stack/api/user/data-access'
import {
  AdminCreateWalletInput,
  AdminListWalletInput,
  AdminUpdateWalletInput,
  ApiWalletDataAccessAdminService,
  Wallet,
} from '@kin-nxpm-stack/api/wallet/data-access'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiWalletFeatureAdminResolver {
  constructor(private readonly service: ApiWalletDataAccessAdminService) {}

  @Query(() => [Wallet], { nullable: true })
  adminWallets(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListWalletInput, nullable: true }) input?: AdminListWalletInput,
  ) {
    return this.service.adminWallets(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountWallets(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListWalletInput, nullable: true }) input?: AdminListWalletInput,
  ) {
    return this.service.adminCountWallets(admin.id, input)
  }

  @Query(() => Wallet, { nullable: true })
  adminWallet(@CtxUser() admin: User, @Args('walletId') walletId: string) {
    return this.service.adminWallet(admin.id, walletId)
  }

  @Mutation(() => Wallet, { nullable: true })
  adminCreateWallet(@CtxUser() admin: User, @Args('input') input: AdminCreateWalletInput) {
    return this.service.adminCreateWallet(admin.id, input)
  }

  @Mutation(() => Wallet, { nullable: true })
  adminUpdateWallet(
    @CtxUser() admin: User,
    @Args('walletId') walletId: string,
    @Args('input') input: AdminUpdateWalletInput,
  ) {
    return this.service.adminUpdateWallet(admin.id, walletId, input)
  }

  @Mutation(() => Wallet, { nullable: true })
  adminDeleteWallet(@CtxUser() admin: User, @Args('walletId') walletId: string) {
    return this.service.adminDeleteWallet(admin.id, walletId)
  }
}
