import { registerEnumType } from '@nestjs/graphql'

export enum TransactionType {
  Incoming = 'Incoming',
  Outgoing = 'Outgoing',
}

registerEnumType(TransactionType, { name: 'TransactionType' })
