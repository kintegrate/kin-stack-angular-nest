import { Network } from '@kin-nxpm-stack/api/core/data-access'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateWalletInput {
  @Field()
  ownerId: string

  @Field(() => Network)
  network: Network

  @Field()
  name: string

  @Field()
  publicKey: string
}
