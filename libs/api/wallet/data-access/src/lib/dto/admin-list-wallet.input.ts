import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@kin-nxpm-stack/api/core/data-access'

@InputType()
export class AdminListWalletInput extends CorePagingInput {
  @Field({ nullable: true })
  name?: string
}
