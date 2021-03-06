import { Prisma, Role } from '@prisma/client'

export function createUser(
  id: string,
  username: string,
  email: string,
  password: string,
  role: Role,
): Prisma.UserCreateInput {
  return {
    id,
    username,
    emails: { create: { email, primary: true } },
    role,
    password,
    avatarUrl: 'https://avatars.githubusercontent.com/u/54114845',
  }
}
