import { ApiCoreDataAccessModule } from '@kin-nxpm-stack/api/core/data-access'
import { Module } from '@nestjs/common'
import { ApiIntegrationKinController } from './api-integration-kin.controller'
import { ApiIntegrationKinService } from './api-integration-kin.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  controllers: [ApiIntegrationKinController],
  providers: [ApiIntegrationKinService],
  exports: [ApiIntegrationKinService],
})
export class ApiIntegrationKinModule {}
