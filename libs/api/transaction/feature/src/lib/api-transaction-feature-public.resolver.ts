import { Resolver } from '@nestjs/graphql'
import { ApiTransactionDataAccessPublicService, Transaction } from '@kin-nxpm-stack/api/transaction/data-access'

@Resolver(() => Transaction)
export class ApiTransactionFeaturePublicResolver {
  constructor(private readonly service: ApiTransactionDataAccessPublicService) {}
}
