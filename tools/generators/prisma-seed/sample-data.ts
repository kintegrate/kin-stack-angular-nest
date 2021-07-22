import { Prisma, Role } from '@prisma/client'
import { hashSync } from 'bcryptjs'
import { createUser } from './lib/helpers'

const PASSWORD = hashSync('kintegrate-dot-dev!', 10)

export const users: Prisma.UserCreateInput[] = [
  createUser('admin', 'admin', 'admin@kintegrate.dev', PASSWORD, Role.Admin),
  createUser('user', 'user', 'user@kintegrate.dev', PASSWORD, Role.User),
]
