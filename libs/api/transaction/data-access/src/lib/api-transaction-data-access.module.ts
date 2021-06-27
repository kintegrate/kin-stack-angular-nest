import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@kin-nxpm-stack/api/core/data-access'

import { ApiTransactionDataAccessAdminService } from './api-transaction-data-access-admin.service'
import { ApiTransactionDataAccessPublicService } from './api-transaction-data-access-public.service'
import { ApiTransactionDataAccessUserService } from './api-transaction-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiTransactionDataAccessAdminService,
    ApiTransactionDataAccessPublicService,
    ApiTransactionDataAccessUserService,
  ],
  exports: [
    ApiTransactionDataAccessAdminService,
    ApiTransactionDataAccessPublicService,
    ApiTransactionDataAccessUserService,
  ],
})
export class ApiTransactionDataAccessModule {}
