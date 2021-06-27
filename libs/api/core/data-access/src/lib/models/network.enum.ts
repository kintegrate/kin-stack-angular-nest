import { registerEnumType } from '@nestjs/graphql'
import { Network } from '@prisma/client'
export { Network }

registerEnumType(Network, { name: 'Network' })
