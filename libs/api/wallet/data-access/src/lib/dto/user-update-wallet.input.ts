import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateWalletInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  publicKey?: string
}
