import { Network } from '@kin-nxpm-stack/api/core/data-access'
import { Field, ObjectType } from '@nestjs/graphql'
import GraphQLJSON from 'graphql-type-json'
import { TransactionType } from './transaction-type.enum'

@ObjectType()
export class Transaction {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field(() => Network, { nullable: true })
  network: Network

  @Field(() => TransactionType, { nullable: true })
  type?: TransactionType

  @Field({ nullable: true })
  txid?: string

  @Field({ nullable: true })
  sender?: string

  @Field({ nullable: true })
  destination?: string

  @Field({ nullable: true })
  amount?: string

  @Field({ nullable: true })
  memo?: string

  @Field(() => GraphQLJSON, { nullable: true })
  invoice?: any
}
