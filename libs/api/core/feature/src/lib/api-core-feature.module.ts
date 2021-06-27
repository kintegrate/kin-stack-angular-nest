import { GraphQLIntercomModule } from '@kikstart-playground/graphql-intercom'
import { ApiAccountFeatureModule } from '@kin-nxpm-stack/api/account/feature'
import { ApiAuthFeatureModule } from '@kin-nxpm-stack/api/auth/feature'
import { ApiIntegrationKinModule } from '@kin-nxpm-stack/api/integration/kin'
import { ApiUserFeatureModule } from '@kin-nxpm-stack/api/user/feature'
import { ApiTransactionFeatureModule } from '@kin-nxpm-stack/api/transaction/feature'
import { ApiWalletFeatureModule } from '@kin-nxpm-stack/api/wallet/feature'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { join } from 'path'

import { ApiCoreFeatureController } from './api-core-feature.controller'
import { ApiCoreFeatureResolver } from './api-core-feature.resolver'
import { ApiCoreFeatureService } from './api-core-feature.service'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'api-schema.graphql'),
      context: ({ req, res }) => ({ req, res }),
      installSubscriptionHandlers: true,
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
      sortSchema: true,
    }),
    GraphQLIntercomModule.forRoot({ pubSub: new PubSub() }),
    ApiAccountFeatureModule,
    ApiAuthFeatureModule,
    ApiIntegrationKinModule,
    ApiUserFeatureModule,
    ApiTransactionFeatureModule,
    ApiWalletFeatureModule,
  ],
  controllers: [ApiCoreFeatureController],
  providers: [ApiCoreFeatureResolver, ApiCoreFeatureService],
  exports: [ApiCoreFeatureService],
})
export class ApiCoreFeatureModule {}
