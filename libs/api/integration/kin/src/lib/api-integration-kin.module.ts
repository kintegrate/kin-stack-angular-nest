import { Module } from '@nestjs/common'
import { ApiIntegrationKinController } from './api-integration-kin.controller'
import { ApiIntegrationKinService } from './api-integration-kin.service'

@Module({
  controllers: [ApiIntegrationKinController],
  providers: [ApiIntegrationKinService],
  exports: [ApiIntegrationKinService],
})
export class ApiIntegrationKinModule {}
