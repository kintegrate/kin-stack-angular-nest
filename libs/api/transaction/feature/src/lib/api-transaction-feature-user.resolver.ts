import { CtxUser, GqlAuthGuard } from '@kin-nxpm-stack/api/auth/util'
import { CorePaging } from '@kin-nxpm-stack/api/core/data-access'
import {
  ApiTransactionDataAccessUserService,
  Transaction,
  UserListTransactionInput,
} from '@kin-nxpm-stack/api/transaction/data-access'
import { User } from '@kin-nxpm-stack/api/user/data-access'
import { UseGuards } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiTransactionFeatureUserResolver {
  constructor(private readonly service: ApiTransactionDataAccessUserService) {}

  @Query(() => [Transaction], { nullable: true })
  userTransactions(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListTransactionInput, nullable: true }) input?: UserListTransactionInput,
  ) {
    return this.service.userTransactions(user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountTransactions(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListTransactionInput, nullable: true }) input?: UserListTransactionInput,
  ) {
    return this.service.userCountTransactions(user.id, input)
  }

  @Query(() => Transaction, { nullable: true })
  userTransaction(@CtxUser() user: User, @Args('transactionId') transactionId: string) {
    return this.service.userTransaction(user.id, transactionId)
  }
}
