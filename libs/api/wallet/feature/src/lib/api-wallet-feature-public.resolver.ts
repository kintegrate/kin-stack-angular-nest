import { Resolver } from '@nestjs/graphql'
import { ApiWalletDataAccessPublicService, Wallet } from '@kin-nxpm-stack/api/wallet/data-access'

@Resolver(() => Wallet)
export class ApiWalletFeaturePublicResolver {
  constructor(private readonly service: ApiWalletDataAccessPublicService) {}
}
