import { GraphQLIntercomModule } from '@kikstart-playground/graphql-intercom'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { join } from 'path'
import { ApiAccountFeatureModule } from '@kin-nxpm-stack/api/account/feature'
import { ApiAuthFeatureModule } from '@kin-nxpm-stack/api/auth/feature'
import { ApiUserFeatureModule } from '@kin-nxpm-stack/api/user/feature'
import { ApiWalletFeatureModule } from '@kin-nxpm-stack/api/wallet/feature'

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
    ApiUserFeatureModule,
    ApiWalletFeatureModule,
  ],
  controllers: [ApiCoreFeatureController],
  providers: [ApiCoreFeatureResolver, ApiCoreFeatureService],
  exports: [ApiCoreFeatureService],
})
export class ApiCoreFeatureModule {}
