import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@kin-nxpm-stack/api/core/data-access'

@InputType()
export class UserListWalletInput extends CorePagingInput {
  @Field({ nullable: true })
  name?: string
}
