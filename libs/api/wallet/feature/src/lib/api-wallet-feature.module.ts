import { Module } from '@nestjs/common'
import { ApiWalletDataAccessModule } from '@kin-nxpm-stack/api/wallet/data-access'

import { ApiWalletFeatureAdminResolver } from './api-wallet-feature-admin.resolver'
import { ApiWalletFeaturePublicResolver } from './api-wallet-feature-public.resolver'
import { ApiWalletFeatureUserResolver } from './api-wallet-feature-user.resolver'

@Module({
  imports: [ApiWalletDataAccessModule],
  providers: [ApiWalletFeatureAdminResolver, ApiWalletFeaturePublicResolver, ApiWalletFeatureUserResolver],
})
export class ApiWalletFeatureModule {}
