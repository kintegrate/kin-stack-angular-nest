import { Network } from '@kin-nxpm-stack/api/core/data-access'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Wallet {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field(() => Network, { nullable: true })
  network?: Network

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  publicKey?: string
}
