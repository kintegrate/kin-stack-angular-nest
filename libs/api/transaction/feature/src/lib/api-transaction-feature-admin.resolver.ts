import { CtxUser, GqlAuthAdminGuard } from '@kin-nxpm-stack/api/auth/util'
import { CorePaging } from '@kin-nxpm-stack/api/core/data-access'
import {
  AdminListTransactionInput,
  ApiTransactionDataAccessAdminService,
  Transaction,
} from '@kin-nxpm-stack/api/transaction/data-access'
import { User } from '@kin-nxpm-stack/api/user/data-access'
import { UseGuards } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiTransactionFeatureAdminResolver {
  constructor(private readonly service: ApiTransactionDataAccessAdminService) {}

  @Query(() => [Transaction], { nullable: true })
  adminTransactions(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListTransactionInput, nullable: true }) input?: AdminListTransactionInput,
  ) {
    return this.service.adminTransactions(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountTransactions(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListTransactionInput, nullable: true }) input?: AdminListTransactionInput,
  ) {
    return this.service.adminCountTransactions(admin.id, input)
  }

  @Query(() => Transaction, { nullable: true })
  adminTransaction(@CtxUser() admin: User, @Args('transactionId') transactionId: string) {
    return this.service.adminTransaction(admin.id, transactionId)
  }
}
