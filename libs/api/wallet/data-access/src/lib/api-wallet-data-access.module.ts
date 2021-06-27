import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@kin-nxpm-stack/api/core/data-access'

import { ApiWalletDataAccessAdminService } from './api-wallet-data-access-admin.service'
import { ApiWalletDataAccessPublicService } from './api-wallet-data-access-public.service'
import { ApiWalletDataAccessUserService } from './api-wallet-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiWalletDataAccessAdminService, ApiWalletDataAccessPublicService, ApiWalletDataAccessUserService],
  exports: [ApiWalletDataAccessAdminService, ApiWalletDataAccessPublicService, ApiWalletDataAccessUserService],
})
export class ApiWalletDataAccessModule {}
