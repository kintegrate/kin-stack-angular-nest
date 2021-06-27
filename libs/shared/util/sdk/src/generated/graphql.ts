import { gql } from 'apollo-angular'
import { Injectable } from '@angular/core'
import * as Apollo from 'apollo-angular'
import * as ApolloCore from '@apollo/client/core'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AccountCreateEmailInput = {
  email: Scalars['String']
}

export type AccountUpdatePasswordInput = {
  currentPassword: Scalars['String']
  password: Scalars['String']
  verified: Scalars['String']
}

export type AccountUpdateProfileInput = {
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  dob?: Maybe<Scalars['DateTime']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

export type AdminCreateUserInput = {
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  role: Role
  username?: Maybe<Scalars['String']>
}

export type AdminCreateWalletInput = {
  name: Scalars['String']
  network: Network
  ownerId: Scalars['String']
  publicKey: Scalars['String']
}

export type AdminListTransactionInput = {
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  txid?: Maybe<Scalars['String']>
}

export type AdminListWalletInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type AdminUpdateUserInput = {
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  username?: Maybe<Scalars['String']>
}

export type AdminUpdateWalletInput = {
  name?: Maybe<Scalars['String']>
}

export type AuthToken = {
  __typename?: 'AuthToken'
  /** JWT Bearer token */
  token: Scalars['String']
}

export type CorePaging = {
  __typename?: 'CorePaging'
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Int']>
}

export type CorePagingInput = {
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type Email = {
  __typename?: 'Email'
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  primary?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  updatedAt?: Maybe<Scalars['DateTime']>
  verified?: Maybe<Scalars['Boolean']>
}

export type IntercomMessage = {
  __typename?: 'IntercomMessage'
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  accountCreateEmail?: Maybe<Email>
  accountDeleteEmail?: Maybe<Email>
  accountMarkEmailPrimary?: Maybe<Email>
  accountMarkEmailPrivate?: Maybe<Email>
  accountMarkEmailPublic?: Maybe<Email>
  accountResetPassword?: Maybe<Scalars['Boolean']>
  accountUpdatePassword?: Maybe<Scalars['Boolean']>
  accountUpdateProfile?: Maybe<User>
  accountUpdateUsername?: Maybe<User>
  adminCreateUser?: Maybe<User>
  adminCreateWallet?: Maybe<Wallet>
  adminDeleteUser?: Maybe<User>
  adminDeleteWallet?: Maybe<Wallet>
  adminSetUserPassword?: Maybe<User>
  adminUpdateUser?: Maybe<User>
  adminUpdateWallet?: Maybe<Wallet>
  intercomPub?: Maybe<IntercomMessage>
  login?: Maybe<AuthToken>
  logout?: Maybe<Scalars['Boolean']>
  register?: Maybe<AuthToken>
  userCreateWallet?: Maybe<Wallet>
  userDeleteWallet?: Maybe<Wallet>
  userUpdateWallet?: Maybe<Wallet>
}

export type MutationAccountCreateEmailArgs = {
  input: AccountCreateEmailInput
}

export type MutationAccountDeleteEmailArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPrimaryArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPrivateArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPublicArgs = {
  emailId: Scalars['String']
}

export type MutationAccountUpdatePasswordArgs = {
  input: AccountUpdatePasswordInput
}

export type MutationAccountUpdateProfileArgs = {
  input: AccountUpdateProfileInput
}

export type MutationAccountUpdateUsernameArgs = {
  username: Scalars['String']
}

export type MutationAdminCreateUserArgs = {
  input: AdminCreateUserInput
}

export type MutationAdminCreateWalletArgs = {
  input: AdminCreateWalletInput
}

export type MutationAdminDeleteUserArgs = {
  userId: Scalars['String']
}

export type MutationAdminDeleteWalletArgs = {
  walletId: Scalars['String']
}

export type MutationAdminSetUserPasswordArgs = {
  password: Scalars['String']
  userId: Scalars['String']
}

export type MutationAdminUpdateUserArgs = {
  input: AdminUpdateUserInput
  userId: Scalars['String']
}

export type MutationAdminUpdateWalletArgs = {
  input: AdminUpdateWalletInput
  walletId: Scalars['String']
}

export type MutationIntercomPubArgs = {
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationUserCreateWalletArgs = {
  input: UserCreateWalletInput
}

export type MutationUserDeleteWalletArgs = {
  walletId: Scalars['String']
}

export type MutationUserUpdateWalletArgs = {
  input: UserUpdateWalletInput
  walletId: Scalars['String']
}

export enum Network {
  KinMainnet = 'KinMainnet',
  KinTestnet = 'KinTestnet',
}

export type Query = {
  __typename?: 'Query'
  accountEmails?: Maybe<Array<Email>>
  accountProfile?: Maybe<User>
  accountUsernameAvailable?: Maybe<Scalars['Boolean']>
  adminCountTransactions?: Maybe<CorePaging>
  adminCountUsers?: Maybe<CorePaging>
  adminCountWallets?: Maybe<CorePaging>
  adminTransaction?: Maybe<Transaction>
  adminTransactions?: Maybe<Array<Transaction>>
  adminUser?: Maybe<User>
  adminUsers?: Maybe<Array<User>>
  adminWallet?: Maybe<Wallet>
  adminWallets?: Maybe<Array<Wallet>>
  me?: Maybe<User>
  uptime?: Maybe<Scalars['Float']>
  userCountTransactions?: Maybe<CorePaging>
  userCountWallets?: Maybe<CorePaging>
  userTransaction?: Maybe<Transaction>
  userTransactions?: Maybe<Array<Transaction>>
  userWallet?: Maybe<Wallet>
  userWalletTransactions?: Maybe<Array<Transaction>>
  userWallets?: Maybe<Array<Wallet>>
}

export type QueryAccountUsernameAvailableArgs = {
  username: Scalars['String']
}

export type QueryAdminCountTransactionsArgs = {
  input?: Maybe<AdminListTransactionInput>
}

export type QueryAdminCountUsersArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QueryAdminCountWalletsArgs = {
  input?: Maybe<AdminListWalletInput>
}

export type QueryAdminTransactionArgs = {
  transactionId: Scalars['String']
}

export type QueryAdminTransactionsArgs = {
  input?: Maybe<AdminListTransactionInput>
}

export type QueryAdminUserArgs = {
  userId: Scalars['String']
}

export type QueryAdminUsersArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QueryAdminWalletArgs = {
  walletId: Scalars['String']
}

export type QueryAdminWalletsArgs = {
  input?: Maybe<AdminListWalletInput>
}

export type QueryUserCountTransactionsArgs = {
  input?: Maybe<UserListTransactionInput>
}

export type QueryUserCountWalletsArgs = {
  input?: Maybe<UserListWalletInput>
}

export type QueryUserTransactionArgs = {
  transactionId: Scalars['String']
}

export type QueryUserTransactionsArgs = {
  input?: Maybe<UserListTransactionInput>
}

export type QueryUserWalletArgs = {
  walletId: Scalars['String']
}

export type QueryUserWalletTransactionsArgs = {
  walletId: Scalars['String']
}

export type QueryUserWalletsArgs = {
  input?: Maybe<UserListWalletInput>
}

export type RegisterInput = {
  avatarUrl?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  password: Scalars['String']
  phone?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

export enum Role {
  Admin = 'Admin',
  User = 'User',
}

export type Subscription = {
  __typename?: 'Subscription'
  intercomSub?: Maybe<IntercomMessage>
}

export type SubscriptionIntercomSubArgs = {
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type Transaction = {
  __typename?: 'Transaction'
  amount?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  destination?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  invoice?: Maybe<Scalars['JSON']>
  memo?: Maybe<Scalars['String']>
  network?: Maybe<Network>
  sender?: Maybe<Scalars['String']>
  txid?: Maybe<Scalars['String']>
  type?: Maybe<TransactionType>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum TransactionType {
  Incoming = 'Incoming',
  Outgoing = 'Outgoing',
}

export type User = {
  __typename?: 'User'
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  emails?: Maybe<Array<Email>>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
}

export type UserCreateWalletInput = {
  name: Scalars['String']
  network: Network
  publicKey: Scalars['String']
}

export type UserListTransactionInput = {
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  txid?: Maybe<Scalars['String']>
}

export type UserListWalletInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type UserUpdateWalletInput = {
  name?: Maybe<Scalars['String']>
  publicKey?: Maybe<Scalars['String']>
}

export type Wallet = {
  __typename?: 'Wallet'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  network?: Maybe<Network>
  publicKey?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type AccountEmailsQueryVariables = Exact<{ [key: string]: never }>

export type AccountEmailsQuery = { __typename?: 'Query' } & {
  accountEmails?: Maybe<Array<{ __typename?: 'Email' } & EmailDetailsFragment>>
}

export type AccountProfileQueryVariables = Exact<{ [key: string]: never }>

export type AccountProfileQuery = { __typename?: 'Query' } & {
  accountProfile?: Maybe<
    { __typename?: 'User' } & {
      emails?: Maybe<Array<{ __typename?: 'Email' } & EmailDetailsFragment>>
    } & UserDetailsFragment
  >
}

export type AccountUsernameAvailableQueryVariables = Exact<{
  username: Scalars['String']
}>

export type AccountUsernameAvailableQuery = { __typename?: 'Query' } & Pick<Query, 'accountUsernameAvailable'>

export type AccountCreateEmailMutationVariables = Exact<{
  input: AccountCreateEmailInput
}>

export type AccountCreateEmailMutation = { __typename?: 'Mutation' } & {
  accountCreateEmail?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountDeleteEmailMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountDeleteEmailMutation = { __typename?: 'Mutation' } & {
  accountDeleteEmail?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountMarkEmailPrimaryMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPrimaryMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPrimary?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountMarkEmailPrivateMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPrivateMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPrivate?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountMarkEmailPublicMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPublicMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPublic?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountUpdateProfileMutationVariables = Exact<{
  input: AccountUpdateProfileInput
}>

export type AccountUpdateProfileMutation = { __typename?: 'Mutation' } & {
  accountUpdateProfile?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AccountUpdateUsernameMutationVariables = Exact<{
  username: Scalars['String']
}>

export type AccountUpdateUsernameMutation = { __typename?: 'Mutation' } & {
  accountUpdateUsername?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AccountUpdatePasswordMutationVariables = Exact<{
  input: AccountUpdatePasswordInput
}>

export type AccountUpdatePasswordMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'accountUpdatePassword'>

export type AuthTokenDetailsFragment = { __typename?: 'AuthToken' } & Pick<AuthToken, 'token'>

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & { me?: Maybe<{ __typename?: 'User' } & UserDetailsFragment> }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'logout'>

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<{ __typename?: 'AuthToken' } & AuthTokenDetailsFragment>
}

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register?: Maybe<{ __typename?: 'AuthToken' } & AuthTokenDetailsFragment>
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

export type CorePagingDetailsFragment = { __typename?: 'CorePaging' } & Pick<CorePaging, 'limit' | 'skip' | 'total'>

export type IntercomDetailsFragment = { __typename?: 'IntercomMessage' } & Pick<
  IntercomMessage,
  'type' | 'scope' | 'payload'
>

export type IntercomPubMutationVariables = Exact<{
  type: Scalars['String']
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}>

export type IntercomPubMutation = { __typename?: 'Mutation' } & {
  intercomPub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type IntercomSubSubscriptionVariables = Exact<{ [key: string]: never }>

export type IntercomSubSubscription = { __typename?: 'Subscription' } & {
  intercomSub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type TransactionDetailsFragment = { __typename?: 'Transaction' } & Pick<
  Transaction,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'txid'
  | 'network'
  | 'type'
  | 'sender'
  | 'destination'
  | 'amount'
  | 'memo'
  | 'invoice'
>

export type AdminTransactionsQueryVariables = Exact<{
  input?: Maybe<AdminListTransactionInput>
}>

export type AdminTransactionsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'Transaction' } & TransactionDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCountTransactionsQueryVariables = Exact<{
  input?: Maybe<AdminListTransactionInput>
}>

export type AdminCountTransactionsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminTransactionQueryVariables = Exact<{
  transactionId: Scalars['String']
}>

export type AdminTransactionQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'Transaction' } & TransactionDetailsFragment>
}

export type UserTransactionsQueryVariables = Exact<{
  input?: Maybe<UserListTransactionInput>
}>

export type UserTransactionsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'Transaction' } & TransactionDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserCountTransactionsQueryVariables = Exact<{
  input?: Maybe<UserListTransactionInput>
}>

export type UserCountTransactionsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserTransactionQueryVariables = Exact<{
  transactionId: Scalars['String']
}>

export type UserTransactionQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'Transaction' } & TransactionDetailsFragment>
}

export type UserDetailsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'firstName' | 'lastName' | 'name' | 'username' | 'avatarUrl' | 'email' | 'location' | 'phone' | 'bio' | 'role'
>

export type EmailDetailsFragment = { __typename?: 'Email' } & Pick<
  Email,
  'id' | 'createdAt' | 'updatedAt' | 'email' | 'public' | 'primary' | 'verified'
>

export type AdminUsersQueryVariables = Exact<{
  paging?: Maybe<CorePagingInput>
}>

export type AdminUsersQuery = { __typename?: 'Query' } & {
  users?: Maybe<Array<{ __typename?: 'User' } & UserDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminUserQueryVariables = Exact<{
  userId: Scalars['String']
}>

export type AdminUserQuery = { __typename?: 'Query' } & {
  adminUser?: Maybe<
    { __typename?: 'User' } & {
      emails?: Maybe<Array<{ __typename?: 'Email' } & EmailDetailsFragment>>
    } & UserDetailsFragment
  >
}

export type AdminCreateUserMutationVariables = Exact<{
  input: AdminCreateUserInput
}>

export type AdminCreateUserMutation = { __typename?: 'Mutation' } & {
  adminCreateUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminUpdateUserMutationVariables = Exact<{
  userId: Scalars['String']
  input: AdminUpdateUserInput
}>

export type AdminUpdateUserMutation = { __typename?: 'Mutation' } & {
  adminUpdateUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminSetUserPasswordMutationVariables = Exact<{
  userId: Scalars['String']
  password: Scalars['String']
}>

export type AdminSetUserPasswordMutation = { __typename?: 'Mutation' } & {
  adminSetUserPassword?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminDeleteUserMutationVariables = Exact<{
  userId: Scalars['String']
}>

export type AdminDeleteUserMutation = { __typename?: 'Mutation' } & {
  adminDeleteUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type WalletDetailsFragment = { __typename?: 'Wallet' } & Pick<
  Wallet,
  'id' | 'createdAt' | 'updatedAt' | 'network' | 'name' | 'publicKey'
>

export type AdminWalletsQueryVariables = Exact<{
  input?: Maybe<AdminListWalletInput>
}>

export type AdminWalletsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'Wallet' } & WalletDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCountWalletsQueryVariables = Exact<{
  input?: Maybe<AdminListWalletInput>
}>

export type AdminCountWalletsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminWalletQueryVariables = Exact<{
  walletId: Scalars['String']
}>

export type AdminWalletQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'Wallet' } & WalletDetailsFragment>
}

export type AdminCreateWalletMutationVariables = Exact<{
  input: AdminCreateWalletInput
}>

export type AdminCreateWalletMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'Wallet' } & WalletDetailsFragment>
}

export type AdminUpdateWalletMutationVariables = Exact<{
  walletId: Scalars['String']
  input: AdminUpdateWalletInput
}>

export type AdminUpdateWalletMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'Wallet' } & WalletDetailsFragment>
}

export type AdminDeleteWalletMutationVariables = Exact<{
  walletId: Scalars['String']
}>

export type AdminDeleteWalletMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'Wallet' } & WalletDetailsFragment>
}

export type UserWalletsQueryVariables = Exact<{
  input?: Maybe<UserListWalletInput>
}>

export type UserWalletsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'Wallet' } & WalletDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserCountWalletsQueryVariables = Exact<{
  input?: Maybe<UserListWalletInput>
}>

export type UserCountWalletsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserWalletQueryVariables = Exact<{
  walletId: Scalars['String']
}>

export type UserWalletQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'Wallet' } & WalletDetailsFragment>
}

export type UserWalletTransactionsQueryVariables = Exact<{
  walletId: Scalars['String']
}>

export type UserWalletTransactionsQuery = { __typename?: 'Query' } & {
  transactions?: Maybe<Array<{ __typename?: 'Transaction' } & TransactionDetailsFragment>>
}

export type UserCreateWalletMutationVariables = Exact<{
  input: UserCreateWalletInput
}>

export type UserCreateWalletMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'Wallet' } & WalletDetailsFragment>
}

export type UserUpdateWalletMutationVariables = Exact<{
  walletId: Scalars['String']
  input: UserUpdateWalletInput
}>

export type UserUpdateWalletMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'Wallet' } & WalletDetailsFragment>
}

export type UserDeleteWalletMutationVariables = Exact<{
  walletId: Scalars['String']
}>

export type UserDeleteWalletMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'Wallet' } & WalletDetailsFragment>
}

export const AuthTokenDetailsFragmentDoc = gql`
  fragment AuthTokenDetails on AuthToken {
    token
  }
`
export const CorePagingDetailsFragmentDoc = gql`
  fragment CorePagingDetails on CorePaging {
    limit
    skip
    total
  }
`
export const IntercomDetailsFragmentDoc = gql`
  fragment IntercomDetails on IntercomMessage {
    type
    scope
    payload
  }
`
export const TransactionDetailsFragmentDoc = gql`
  fragment TransactionDetails on Transaction {
    id
    createdAt
    updatedAt
    txid
    network
    type
    sender
    destination
    amount
    memo
    invoice
  }
`
export const UserDetailsFragmentDoc = gql`
  fragment UserDetails on User {
    id
    firstName
    lastName
    name
    username
    avatarUrl
    email
    location
    phone
    bio
    role
  }
`
export const EmailDetailsFragmentDoc = gql`
  fragment EmailDetails on Email {
    id
    createdAt
    updatedAt
    email
    public
    primary
    verified
  }
`
export const WalletDetailsFragmentDoc = gql`
  fragment WalletDetails on Wallet {
    id
    createdAt
    updatedAt
    network
    name
    publicKey
  }
`
export const AccountEmailsDocument = gql`
  query AccountEmails {
    accountEmails {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountEmailsGQL extends Apollo.Query<AccountEmailsQuery, AccountEmailsQueryVariables> {
  document = AccountEmailsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountProfileDocument = gql`
  query AccountProfile {
    accountProfile {
      ...UserDetails
      emails {
        ...EmailDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountProfileGQL extends Apollo.Query<AccountProfileQuery, AccountProfileQueryVariables> {
  document = AccountProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUsernameAvailableDocument = gql`
  query AccountUsernameAvailable($username: String!) {
    accountUsernameAvailable(username: $username)
  }
`

@Injectable({
  providedIn: 'root',
})
export class AccountUsernameAvailableGQL extends Apollo.Query<
  AccountUsernameAvailableQuery,
  AccountUsernameAvailableQueryVariables
> {
  document = AccountUsernameAvailableDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountCreateEmailDocument = gql`
  mutation AccountCreateEmail($input: AccountCreateEmailInput!) {
    accountCreateEmail(input: $input) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountCreateEmailGQL extends Apollo.Mutation<
  AccountCreateEmailMutation,
  AccountCreateEmailMutationVariables
> {
  document = AccountCreateEmailDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountDeleteEmailDocument = gql`
  mutation AccountDeleteEmail($emailId: String!) {
    accountDeleteEmail(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountDeleteEmailGQL extends Apollo.Mutation<
  AccountDeleteEmailMutation,
  AccountDeleteEmailMutationVariables
> {
  document = AccountDeleteEmailDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPrimaryDocument = gql`
  mutation AccountMarkEmailPrimary($emailId: String!) {
    accountMarkEmailPrimary(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPrimaryGQL extends Apollo.Mutation<
  AccountMarkEmailPrimaryMutation,
  AccountMarkEmailPrimaryMutationVariables
> {
  document = AccountMarkEmailPrimaryDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPrivateDocument = gql`
  mutation AccountMarkEmailPrivate($emailId: String!) {
    accountMarkEmailPrivate(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPrivateGQL extends Apollo.Mutation<
  AccountMarkEmailPrivateMutation,
  AccountMarkEmailPrivateMutationVariables
> {
  document = AccountMarkEmailPrivateDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPublicDocument = gql`
  mutation AccountMarkEmailPublic($emailId: String!) {
    accountMarkEmailPublic(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPublicGQL extends Apollo.Mutation<
  AccountMarkEmailPublicMutation,
  AccountMarkEmailPublicMutationVariables
> {
  document = AccountMarkEmailPublicDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdateProfileDocument = gql`
  mutation AccountUpdateProfile($input: AccountUpdateProfileInput!) {
    accountUpdateProfile(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdateProfileGQL extends Apollo.Mutation<
  AccountUpdateProfileMutation,
  AccountUpdateProfileMutationVariables
> {
  document = AccountUpdateProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdateUsernameDocument = gql`
  mutation AccountUpdateUsername($username: String!) {
    accountUpdateUsername(username: $username) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdateUsernameGQL extends Apollo.Mutation<
  AccountUpdateUsernameMutation,
  AccountUpdateUsernameMutationVariables
> {
  document = AccountUpdateUsernameDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdatePasswordDocument = gql`
  mutation AccountUpdatePassword($input: AccountUpdatePasswordInput!) {
    accountUpdatePassword(input: $input)
  }
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdatePasswordGQL extends Apollo.Mutation<
  AccountUpdatePasswordMutation,
  AccountUpdatePasswordMutationVariables
> {
  document = AccountUpdatePasswordDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MeDocument = gql`
  query me {
    me {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
  document = MeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`

@Injectable({
  providedIn: 'root',
})
export class LogoutGQL extends Apollo.Mutation<LogoutMutation, LogoutMutationVariables> {
  document = LogoutDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ...AuthTokenDetails
    }
  }
  ${AuthTokenDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
  document = LoginDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      ...AuthTokenDetails
    }
  }
  ${AuthTokenDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
  document = RegisterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UptimeDocument = gql`
  query Uptime {
    uptime
  }
`

@Injectable({
  providedIn: 'root',
})
export class UptimeGQL extends Apollo.Query<UptimeQuery, UptimeQueryVariables> {
  document = UptimeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomPubDocument = gql`
  mutation IntercomPub($type: String!, $scope: String, $payload: JSON) {
    intercomPub(type: $type, scope: $scope, payload: $payload) {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomPubGQL extends Apollo.Mutation<IntercomPubMutation, IntercomPubMutationVariables> {
  document = IntercomPubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomSubDocument = gql`
  subscription IntercomSub {
    intercomSub {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomSubGQL extends Apollo.Subscription<IntercomSubSubscription, IntercomSubSubscriptionVariables> {
  document = IntercomSubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminTransactionsDocument = gql`
  query AdminTransactions($input: AdminListTransactionInput) {
    items: adminTransactions(input: $input) {
      ...TransactionDetails
    }
    count: adminCountTransactions(input: $input) {
      ...CorePagingDetails
    }
  }
  ${TransactionDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminTransactionsGQL extends Apollo.Query<AdminTransactionsQuery, AdminTransactionsQueryVariables> {
  document = AdminTransactionsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCountTransactionsDocument = gql`
  query AdminCountTransactions($input: AdminListTransactionInput) {
    count: adminCountTransactions(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCountTransactionsGQL extends Apollo.Query<
  AdminCountTransactionsQuery,
  AdminCountTransactionsQueryVariables
> {
  document = AdminCountTransactionsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminTransactionDocument = gql`
  query AdminTransaction($transactionId: String!) {
    item: adminTransaction(transactionId: $transactionId) {
      ...TransactionDetails
    }
  }
  ${TransactionDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminTransactionGQL extends Apollo.Query<AdminTransactionQuery, AdminTransactionQueryVariables> {
  document = AdminTransactionDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserTransactionsDocument = gql`
  query UserTransactions($input: UserListTransactionInput) {
    items: userTransactions(input: $input) {
      ...TransactionDetails
    }
    count: userCountTransactions(input: $input) {
      ...CorePagingDetails
    }
  }
  ${TransactionDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserTransactionsGQL extends Apollo.Query<UserTransactionsQuery, UserTransactionsQueryVariables> {
  document = UserTransactionsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCountTransactionsDocument = gql`
  query UserCountTransactions($input: UserListTransactionInput) {
    count: userCountTransactions(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCountTransactionsGQL extends Apollo.Query<
  UserCountTransactionsQuery,
  UserCountTransactionsQueryVariables
> {
  document = UserCountTransactionsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserTransactionDocument = gql`
  query UserTransaction($transactionId: String!) {
    item: userTransaction(transactionId: $transactionId) {
      ...TransactionDetails
    }
  }
  ${TransactionDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserTransactionGQL extends Apollo.Query<UserTransactionQuery, UserTransactionQueryVariables> {
  document = UserTransactionDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUsersDocument = gql`
  query AdminUsers($paging: CorePagingInput) {
    users: adminUsers(paging: $paging) {
      ...UserDetails
    }
    count: adminCountUsers(paging: $paging) {
      ...CorePagingDetails
    }
  }
  ${UserDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUsersGQL extends Apollo.Query<AdminUsersQuery, AdminUsersQueryVariables> {
  document = AdminUsersDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUserDocument = gql`
  query AdminUser($userId: String!) {
    adminUser(userId: $userId) {
      ...UserDetails
      emails {
        ...EmailDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUserGQL extends Apollo.Query<AdminUserQuery, AdminUserQueryVariables> {
  document = AdminUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateUserDocument = gql`
  mutation AdminCreateUser($input: AdminCreateUserInput!) {
    adminCreateUser(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateUserGQL extends Apollo.Mutation<AdminCreateUserMutation, AdminCreateUserMutationVariables> {
  document = AdminCreateUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateUserDocument = gql`
  mutation AdminUpdateUser($userId: String!, $input: AdminUpdateUserInput!) {
    adminUpdateUser(userId: $userId, input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateUserGQL extends Apollo.Mutation<AdminUpdateUserMutation, AdminUpdateUserMutationVariables> {
  document = AdminUpdateUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminSetUserPasswordDocument = gql`
  mutation AdminSetUserPassword($userId: String!, $password: String!) {
    adminSetUserPassword(userId: $userId, password: $password) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminSetUserPasswordGQL extends Apollo.Mutation<
  AdminSetUserPasswordMutation,
  AdminSetUserPasswordMutationVariables
> {
  document = AdminSetUserPasswordDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteUserDocument = gql`
  mutation AdminDeleteUser($userId: String!) {
    adminDeleteUser(userId: $userId) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteUserGQL extends Apollo.Mutation<AdminDeleteUserMutation, AdminDeleteUserMutationVariables> {
  document = AdminDeleteUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminWalletsDocument = gql`
  query AdminWallets($input: AdminListWalletInput) {
    items: adminWallets(input: $input) {
      ...WalletDetails
    }
    count: adminCountWallets(input: $input) {
      ...CorePagingDetails
    }
  }
  ${WalletDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminWalletsGQL extends Apollo.Query<AdminWalletsQuery, AdminWalletsQueryVariables> {
  document = AdminWalletsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCountWalletsDocument = gql`
  query AdminCountWallets($input: AdminListWalletInput) {
    count: adminCountWallets(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCountWalletsGQL extends Apollo.Query<AdminCountWalletsQuery, AdminCountWalletsQueryVariables> {
  document = AdminCountWalletsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminWalletDocument = gql`
  query AdminWallet($walletId: String!) {
    item: adminWallet(walletId: $walletId) {
      ...WalletDetails
    }
  }
  ${WalletDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminWalletGQL extends Apollo.Query<AdminWalletQuery, AdminWalletQueryVariables> {
  document = AdminWalletDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateWalletDocument = gql`
  mutation AdminCreateWallet($input: AdminCreateWalletInput!) {
    created: adminCreateWallet(input: $input) {
      ...WalletDetails
    }
  }
  ${WalletDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateWalletGQL extends Apollo.Mutation<
  AdminCreateWalletMutation,
  AdminCreateWalletMutationVariables
> {
  document = AdminCreateWalletDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateWalletDocument = gql`
  mutation AdminUpdateWallet($walletId: String!, $input: AdminUpdateWalletInput!) {
    updated: adminUpdateWallet(walletId: $walletId, input: $input) {
      ...WalletDetails
    }
  }
  ${WalletDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateWalletGQL extends Apollo.Mutation<
  AdminUpdateWalletMutation,
  AdminUpdateWalletMutationVariables
> {
  document = AdminUpdateWalletDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteWalletDocument = gql`
  mutation AdminDeleteWallet($walletId: String!) {
    deleted: adminDeleteWallet(walletId: $walletId) {
      ...WalletDetails
    }
  }
  ${WalletDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteWalletGQL extends Apollo.Mutation<
  AdminDeleteWalletMutation,
  AdminDeleteWalletMutationVariables
> {
  document = AdminDeleteWalletDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserWalletsDocument = gql`
  query UserWallets($input: UserListWalletInput) {
    items: userWallets(input: $input) {
      ...WalletDetails
    }
    count: userCountWallets(input: $input) {
      ...CorePagingDetails
    }
  }
  ${WalletDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserWalletsGQL extends Apollo.Query<UserWalletsQuery, UserWalletsQueryVariables> {
  document = UserWalletsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCountWalletsDocument = gql`
  query UserCountWallets($input: UserListWalletInput) {
    count: userCountWallets(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCountWalletsGQL extends Apollo.Query<UserCountWalletsQuery, UserCountWalletsQueryVariables> {
  document = UserCountWalletsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserWalletDocument = gql`
  query UserWallet($walletId: String!) {
    item: userWallet(walletId: $walletId) {
      ...WalletDetails
    }
  }
  ${WalletDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserWalletGQL extends Apollo.Query<UserWalletQuery, UserWalletQueryVariables> {
  document = UserWalletDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserWalletTransactionsDocument = gql`
  query UserWalletTransactions($walletId: String!) {
    transactions: userWalletTransactions(walletId: $walletId) {
      ...TransactionDetails
    }
  }
  ${TransactionDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserWalletTransactionsGQL extends Apollo.Query<
  UserWalletTransactionsQuery,
  UserWalletTransactionsQueryVariables
> {
  document = UserWalletTransactionsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCreateWalletDocument = gql`
  mutation UserCreateWallet($input: UserCreateWalletInput!) {
    created: userCreateWallet(input: $input) {
      ...WalletDetails
    }
  }
  ${WalletDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCreateWalletGQL extends Apollo.Mutation<UserCreateWalletMutation, UserCreateWalletMutationVariables> {
  document = UserCreateWalletDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserUpdateWalletDocument = gql`
  mutation UserUpdateWallet($walletId: String!, $input: UserUpdateWalletInput!) {
    updated: userUpdateWallet(walletId: $walletId, input: $input) {
      ...WalletDetails
    }
  }
  ${WalletDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserUpdateWalletGQL extends Apollo.Mutation<UserUpdateWalletMutation, UserUpdateWalletMutationVariables> {
  document = UserUpdateWalletDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserDeleteWalletDocument = gql`
  mutation UserDeleteWallet($walletId: String!) {
    deleted: userDeleteWallet(walletId: $walletId) {
      ...WalletDetails
    }
  }
  ${WalletDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserDeleteWalletGQL extends Apollo.Mutation<UserDeleteWalletMutation, UserDeleteWalletMutationVariables> {
  document = UserDeleteWalletDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface WatchQueryOptionsAlone<V> extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

interface QueryOptionsAlone<V> extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

interface MutationOptionsAlone<T, V> extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

interface SubscriptionOptionsAlone<V> extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

@Injectable({ providedIn: 'root' })
export class ApolloAngularSDK {
  constructor(
    private accountEmailsGql: AccountEmailsGQL,
    private accountProfileGql: AccountProfileGQL,
    private accountUsernameAvailableGql: AccountUsernameAvailableGQL,
    private accountCreateEmailGql: AccountCreateEmailGQL,
    private accountDeleteEmailGql: AccountDeleteEmailGQL,
    private accountMarkEmailPrimaryGql: AccountMarkEmailPrimaryGQL,
    private accountMarkEmailPrivateGql: AccountMarkEmailPrivateGQL,
    private accountMarkEmailPublicGql: AccountMarkEmailPublicGQL,
    private accountUpdateProfileGql: AccountUpdateProfileGQL,
    private accountUpdateUsernameGql: AccountUpdateUsernameGQL,
    private accountUpdatePasswordGql: AccountUpdatePasswordGQL,
    private meGql: MeGQL,
    private logoutGql: LogoutGQL,
    private loginGql: LoginGQL,
    private registerGql: RegisterGQL,
    private uptimeGql: UptimeGQL,
    private intercomPubGql: IntercomPubGQL,
    private intercomSubGql: IntercomSubGQL,
    private adminTransactionsGql: AdminTransactionsGQL,
    private adminCountTransactionsGql: AdminCountTransactionsGQL,
    private adminTransactionGql: AdminTransactionGQL,
    private userTransactionsGql: UserTransactionsGQL,
    private userCountTransactionsGql: UserCountTransactionsGQL,
    private userTransactionGql: UserTransactionGQL,
    private adminUsersGql: AdminUsersGQL,
    private adminUserGql: AdminUserGQL,
    private adminCreateUserGql: AdminCreateUserGQL,
    private adminUpdateUserGql: AdminUpdateUserGQL,
    private adminSetUserPasswordGql: AdminSetUserPasswordGQL,
    private adminDeleteUserGql: AdminDeleteUserGQL,
    private adminWalletsGql: AdminWalletsGQL,
    private adminCountWalletsGql: AdminCountWalletsGQL,
    private adminWalletGql: AdminWalletGQL,
    private adminCreateWalletGql: AdminCreateWalletGQL,
    private adminUpdateWalletGql: AdminUpdateWalletGQL,
    private adminDeleteWalletGql: AdminDeleteWalletGQL,
    private userWalletsGql: UserWalletsGQL,
    private userCountWalletsGql: UserCountWalletsGQL,
    private userWalletGql: UserWalletGQL,
    private userWalletTransactionsGql: UserWalletTransactionsGQL,
    private userCreateWalletGql: UserCreateWalletGQL,
    private userUpdateWalletGql: UserUpdateWalletGQL,
    private userDeleteWalletGql: UserDeleteWalletGQL,
  ) {}

  accountEmails(variables?: AccountEmailsQueryVariables, options?: QueryOptionsAlone<AccountEmailsQueryVariables>) {
    return this.accountEmailsGql.fetch(variables, options)
  }

  accountEmailsWatch(
    variables?: AccountEmailsQueryVariables,
    options?: WatchQueryOptionsAlone<AccountEmailsQueryVariables>,
  ) {
    return this.accountEmailsGql.watch(variables, options)
  }

  accountProfile(variables?: AccountProfileQueryVariables, options?: QueryOptionsAlone<AccountProfileQueryVariables>) {
    return this.accountProfileGql.fetch(variables, options)
  }

  accountProfileWatch(
    variables?: AccountProfileQueryVariables,
    options?: WatchQueryOptionsAlone<AccountProfileQueryVariables>,
  ) {
    return this.accountProfileGql.watch(variables, options)
  }

  accountUsernameAvailable(
    variables: AccountUsernameAvailableQueryVariables,
    options?: QueryOptionsAlone<AccountUsernameAvailableQueryVariables>,
  ) {
    return this.accountUsernameAvailableGql.fetch(variables, options)
  }

  accountUsernameAvailableWatch(
    variables: AccountUsernameAvailableQueryVariables,
    options?: WatchQueryOptionsAlone<AccountUsernameAvailableQueryVariables>,
  ) {
    return this.accountUsernameAvailableGql.watch(variables, options)
  }

  accountCreateEmail(
    variables: AccountCreateEmailMutationVariables,
    options?: MutationOptionsAlone<AccountCreateEmailMutation, AccountCreateEmailMutationVariables>,
  ) {
    return this.accountCreateEmailGql.mutate(variables, options)
  }

  accountDeleteEmail(
    variables: AccountDeleteEmailMutationVariables,
    options?: MutationOptionsAlone<AccountDeleteEmailMutation, AccountDeleteEmailMutationVariables>,
  ) {
    return this.accountDeleteEmailGql.mutate(variables, options)
  }

  accountMarkEmailPrimary(
    variables: AccountMarkEmailPrimaryMutationVariables,
    options?: MutationOptionsAlone<AccountMarkEmailPrimaryMutation, AccountMarkEmailPrimaryMutationVariables>,
  ) {
    return this.accountMarkEmailPrimaryGql.mutate(variables, options)
  }

  accountMarkEmailPrivate(
    variables: AccountMarkEmailPrivateMutationVariables,
    options?: MutationOptionsAlone<AccountMarkEmailPrivateMutation, AccountMarkEmailPrivateMutationVariables>,
  ) {
    return this.accountMarkEmailPrivateGql.mutate(variables, options)
  }

  accountMarkEmailPublic(
    variables: AccountMarkEmailPublicMutationVariables,
    options?: MutationOptionsAlone<AccountMarkEmailPublicMutation, AccountMarkEmailPublicMutationVariables>,
  ) {
    return this.accountMarkEmailPublicGql.mutate(variables, options)
  }

  accountUpdateProfile(
    variables: AccountUpdateProfileMutationVariables,
    options?: MutationOptionsAlone<AccountUpdateProfileMutation, AccountUpdateProfileMutationVariables>,
  ) {
    return this.accountUpdateProfileGql.mutate(variables, options)
  }

  accountUpdateUsername(
    variables: AccountUpdateUsernameMutationVariables,
    options?: MutationOptionsAlone<AccountUpdateUsernameMutation, AccountUpdateUsernameMutationVariables>,
  ) {
    return this.accountUpdateUsernameGql.mutate(variables, options)
  }

  accountUpdatePassword(
    variables: AccountUpdatePasswordMutationVariables,
    options?: MutationOptionsAlone<AccountUpdatePasswordMutation, AccountUpdatePasswordMutationVariables>,
  ) {
    return this.accountUpdatePasswordGql.mutate(variables, options)
  }

  me(variables?: MeQueryVariables, options?: QueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.fetch(variables, options)
  }

  meWatch(variables?: MeQueryVariables, options?: WatchQueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.watch(variables, options)
  }

  logout(variables?: LogoutMutationVariables, options?: MutationOptionsAlone<LogoutMutation, LogoutMutationVariables>) {
    return this.logoutGql.mutate(variables, options)
  }

  login(variables: LoginMutationVariables, options?: MutationOptionsAlone<LoginMutation, LoginMutationVariables>) {
    return this.loginGql.mutate(variables, options)
  }

  register(
    variables: RegisterMutationVariables,
    options?: MutationOptionsAlone<RegisterMutation, RegisterMutationVariables>,
  ) {
    return this.registerGql.mutate(variables, options)
  }

  uptime(variables?: UptimeQueryVariables, options?: QueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.fetch(variables, options)
  }

  uptimeWatch(variables?: UptimeQueryVariables, options?: WatchQueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.watch(variables, options)
  }

  intercomPub(
    variables: IntercomPubMutationVariables,
    options?: MutationOptionsAlone<IntercomPubMutation, IntercomPubMutationVariables>,
  ) {
    return this.intercomPubGql.mutate(variables, options)
  }

  intercomSub(
    variables?: IntercomSubSubscriptionVariables,
    options?: SubscriptionOptionsAlone<IntercomSubSubscriptionVariables>,
  ) {
    return this.intercomSubGql.subscribe(variables, options)
  }

  adminTransactions(
    variables?: AdminTransactionsQueryVariables,
    options?: QueryOptionsAlone<AdminTransactionsQueryVariables>,
  ) {
    return this.adminTransactionsGql.fetch(variables, options)
  }

  adminTransactionsWatch(
    variables?: AdminTransactionsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminTransactionsQueryVariables>,
  ) {
    return this.adminTransactionsGql.watch(variables, options)
  }

  adminCountTransactions(
    variables?: AdminCountTransactionsQueryVariables,
    options?: QueryOptionsAlone<AdminCountTransactionsQueryVariables>,
  ) {
    return this.adminCountTransactionsGql.fetch(variables, options)
  }

  adminCountTransactionsWatch(
    variables?: AdminCountTransactionsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCountTransactionsQueryVariables>,
  ) {
    return this.adminCountTransactionsGql.watch(variables, options)
  }

  adminTransaction(
    variables: AdminTransactionQueryVariables,
    options?: QueryOptionsAlone<AdminTransactionQueryVariables>,
  ) {
    return this.adminTransactionGql.fetch(variables, options)
  }

  adminTransactionWatch(
    variables: AdminTransactionQueryVariables,
    options?: WatchQueryOptionsAlone<AdminTransactionQueryVariables>,
  ) {
    return this.adminTransactionGql.watch(variables, options)
  }

  userTransactions(
    variables?: UserTransactionsQueryVariables,
    options?: QueryOptionsAlone<UserTransactionsQueryVariables>,
  ) {
    return this.userTransactionsGql.fetch(variables, options)
  }

  userTransactionsWatch(
    variables?: UserTransactionsQueryVariables,
    options?: WatchQueryOptionsAlone<UserTransactionsQueryVariables>,
  ) {
    return this.userTransactionsGql.watch(variables, options)
  }

  userCountTransactions(
    variables?: UserCountTransactionsQueryVariables,
    options?: QueryOptionsAlone<UserCountTransactionsQueryVariables>,
  ) {
    return this.userCountTransactionsGql.fetch(variables, options)
  }

  userCountTransactionsWatch(
    variables?: UserCountTransactionsQueryVariables,
    options?: WatchQueryOptionsAlone<UserCountTransactionsQueryVariables>,
  ) {
    return this.userCountTransactionsGql.watch(variables, options)
  }

  userTransaction(
    variables: UserTransactionQueryVariables,
    options?: QueryOptionsAlone<UserTransactionQueryVariables>,
  ) {
    return this.userTransactionGql.fetch(variables, options)
  }

  userTransactionWatch(
    variables: UserTransactionQueryVariables,
    options?: WatchQueryOptionsAlone<UserTransactionQueryVariables>,
  ) {
    return this.userTransactionGql.watch(variables, options)
  }

  adminUsers(variables?: AdminUsersQueryVariables, options?: QueryOptionsAlone<AdminUsersQueryVariables>) {
    return this.adminUsersGql.fetch(variables, options)
  }

  adminUsersWatch(variables?: AdminUsersQueryVariables, options?: WatchQueryOptionsAlone<AdminUsersQueryVariables>) {
    return this.adminUsersGql.watch(variables, options)
  }

  adminUser(variables: AdminUserQueryVariables, options?: QueryOptionsAlone<AdminUserQueryVariables>) {
    return this.adminUserGql.fetch(variables, options)
  }

  adminUserWatch(variables: AdminUserQueryVariables, options?: WatchQueryOptionsAlone<AdminUserQueryVariables>) {
    return this.adminUserGql.watch(variables, options)
  }

  adminCreateUser(
    variables: AdminCreateUserMutationVariables,
    options?: MutationOptionsAlone<AdminCreateUserMutation, AdminCreateUserMutationVariables>,
  ) {
    return this.adminCreateUserGql.mutate(variables, options)
  }

  adminUpdateUser(
    variables: AdminUpdateUserMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateUserMutation, AdminUpdateUserMutationVariables>,
  ) {
    return this.adminUpdateUserGql.mutate(variables, options)
  }

  adminSetUserPassword(
    variables: AdminSetUserPasswordMutationVariables,
    options?: MutationOptionsAlone<AdminSetUserPasswordMutation, AdminSetUserPasswordMutationVariables>,
  ) {
    return this.adminSetUserPasswordGql.mutate(variables, options)
  }

  adminDeleteUser(
    variables: AdminDeleteUserMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteUserMutation, AdminDeleteUserMutationVariables>,
  ) {
    return this.adminDeleteUserGql.mutate(variables, options)
  }

  adminWallets(variables?: AdminWalletsQueryVariables, options?: QueryOptionsAlone<AdminWalletsQueryVariables>) {
    return this.adminWalletsGql.fetch(variables, options)
  }

  adminWalletsWatch(
    variables?: AdminWalletsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminWalletsQueryVariables>,
  ) {
    return this.adminWalletsGql.watch(variables, options)
  }

  adminCountWallets(
    variables?: AdminCountWalletsQueryVariables,
    options?: QueryOptionsAlone<AdminCountWalletsQueryVariables>,
  ) {
    return this.adminCountWalletsGql.fetch(variables, options)
  }

  adminCountWalletsWatch(
    variables?: AdminCountWalletsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCountWalletsQueryVariables>,
  ) {
    return this.adminCountWalletsGql.watch(variables, options)
  }

  adminWallet(variables: AdminWalletQueryVariables, options?: QueryOptionsAlone<AdminWalletQueryVariables>) {
    return this.adminWalletGql.fetch(variables, options)
  }

  adminWalletWatch(variables: AdminWalletQueryVariables, options?: WatchQueryOptionsAlone<AdminWalletQueryVariables>) {
    return this.adminWalletGql.watch(variables, options)
  }

  adminCreateWallet(
    variables: AdminCreateWalletMutationVariables,
    options?: MutationOptionsAlone<AdminCreateWalletMutation, AdminCreateWalletMutationVariables>,
  ) {
    return this.adminCreateWalletGql.mutate(variables, options)
  }

  adminUpdateWallet(
    variables: AdminUpdateWalletMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateWalletMutation, AdminUpdateWalletMutationVariables>,
  ) {
    return this.adminUpdateWalletGql.mutate(variables, options)
  }

  adminDeleteWallet(
    variables: AdminDeleteWalletMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteWalletMutation, AdminDeleteWalletMutationVariables>,
  ) {
    return this.adminDeleteWalletGql.mutate(variables, options)
  }

  userWallets(variables?: UserWalletsQueryVariables, options?: QueryOptionsAlone<UserWalletsQueryVariables>) {
    return this.userWalletsGql.fetch(variables, options)
  }

  userWalletsWatch(variables?: UserWalletsQueryVariables, options?: WatchQueryOptionsAlone<UserWalletsQueryVariables>) {
    return this.userWalletsGql.watch(variables, options)
  }

  userCountWallets(
    variables?: UserCountWalletsQueryVariables,
    options?: QueryOptionsAlone<UserCountWalletsQueryVariables>,
  ) {
    return this.userCountWalletsGql.fetch(variables, options)
  }

  userCountWalletsWatch(
    variables?: UserCountWalletsQueryVariables,
    options?: WatchQueryOptionsAlone<UserCountWalletsQueryVariables>,
  ) {
    return this.userCountWalletsGql.watch(variables, options)
  }

  userWallet(variables: UserWalletQueryVariables, options?: QueryOptionsAlone<UserWalletQueryVariables>) {
    return this.userWalletGql.fetch(variables, options)
  }

  userWalletWatch(variables: UserWalletQueryVariables, options?: WatchQueryOptionsAlone<UserWalletQueryVariables>) {
    return this.userWalletGql.watch(variables, options)
  }

  userWalletTransactions(
    variables: UserWalletTransactionsQueryVariables,
    options?: QueryOptionsAlone<UserWalletTransactionsQueryVariables>,
  ) {
    return this.userWalletTransactionsGql.fetch(variables, options)
  }

  userWalletTransactionsWatch(
    variables: UserWalletTransactionsQueryVariables,
    options?: WatchQueryOptionsAlone<UserWalletTransactionsQueryVariables>,
  ) {
    return this.userWalletTransactionsGql.watch(variables, options)
  }

  userCreateWallet(
    variables: UserCreateWalletMutationVariables,
    options?: MutationOptionsAlone<UserCreateWalletMutation, UserCreateWalletMutationVariables>,
  ) {
    return this.userCreateWalletGql.mutate(variables, options)
  }

  userUpdateWallet(
    variables: UserUpdateWalletMutationVariables,
    options?: MutationOptionsAlone<UserUpdateWalletMutation, UserUpdateWalletMutationVariables>,
  ) {
    return this.userUpdateWalletGql.mutate(variables, options)
  }

  userDeleteWallet(
    variables: UserDeleteWalletMutationVariables,
    options?: MutationOptionsAlone<UserDeleteWalletMutation, UserDeleteWalletMutationVariables>,
  ) {
    return this.userDeleteWalletGql.mutate(variables, options)
  }
}
