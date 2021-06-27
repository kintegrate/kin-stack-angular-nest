import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateWalletInput {
  @Field({ nullable: true })
  name?: string
}
