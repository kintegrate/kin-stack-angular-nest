import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@kin-nxpm-stack/api/core/data-access'

@InputType()
export class UserListTransactionInput extends CorePagingInput {
  @Field({ nullable: true })
  txid?: string
}
