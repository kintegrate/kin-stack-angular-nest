import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { User } from '@kin-nxpm-stack/api/user/data-access'

@Resolver(() => User)
export class ApiUserFeatureResolver {
  @ResolveField(() => String, { nullable: true })
  name(@Parent() user: User) {
    const name = [user?.firstName, user?.lastName].join(' ').trim()
    return name.length ? name : user?.username
  }

  @ResolveField(() => String, { nullable: true })
  email(@Parent() user: User) {
    const hasPrimary = user.emails?.find((email) => email.primary)

    return hasPrimary ? hasPrimary.email : user.emails?.find((e) => e).email
  }
}
