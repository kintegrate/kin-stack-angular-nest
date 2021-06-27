import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@kin-nxpm-stack/api/core/data-access'

import { ApiAccountDataAccessService } from './api-account-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiAccountDataAccessService],
  exports: [ApiAccountDataAccessService],
})
export class ApiAccountDataAccessModule {}
