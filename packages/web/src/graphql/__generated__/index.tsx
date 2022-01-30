// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type Complain = {
  __typename?: 'Complain';
  complain: ParkingSpot;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  pictureUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create Todo */
  createTodo: Todo;
  /** Create User */
  createUser: User;
  /** Delete Todo */
  deleteTodo: Todo;
  /** Delete User */
  deleteUser: User;
  /** Login user */
  login: AuthResponse;
  /** Logout user */
  logout: Scalars['Boolean'];
  /** Register user */
  register: User;
  /** Update Todo */
  updateTodo: Todo;
  /** Update User */
  updateUser: User;
};


export type MutationCreateTodoArgs = {
  input: TodoInput;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input: TodoInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UserInput;
};

export type ParkingSpot = {
  __typename?: 'ParkingSpot';
  complains: User;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  picture_url: Scalars['String'];
  price: Scalars['Float'];
  reservations: Array<Reservation>;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  /** List all Todos */
  findAllTodos: Array<Todo>;
  /** List all Users */
  findAllUsers: Array<User>;
  /** Find one Todo */
  findOneTodo: Todo;
  /** Find one User */
  findOneUser: User;
  /** Get logged in user */
  me?: Maybe<User>;
  protect: Scalars['String'];
};


export type QueryFindOneTodoArgs = {
  id: Scalars['ID'];
};


export type QueryFindOneUserArgs = {
  id: Scalars['ID'];
};

export type RegisterInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type Reservation = {
  __typename?: 'Reservation';
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  duration: Scalars['Float'];
  id: Scalars['ID'];
  parkingSpot: ParkingSpot;
  reservedDate: Scalars['String'];
  status: Array<ReservationStatus>;
  stripeChargeId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export enum ReservationStatus {
  Finished = 'FINISHED',
  Ongoing = 'ONGOING',
  Reserved = 'RESERVED'
}

export enum Role {
  Admin = 'ADMIN',
  Renter = 'RENTER',
  User = 'USER'
}

export type Todo = {
  __typename?: 'Todo';
  completed?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TodoInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  bankInfo?: Maybe<Scalars['String']>;
  complains?: Maybe<Array<Complain>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  parkingSpots?: Maybe<Array<ParkingSpot>>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  reservations?: Maybe<Array<Reservation>>;
  roles: Array<Role>;
  updatedAt: Scalars['DateTime'];
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type TodoExcerptFragment = { __typename?: 'Todo', id: string, title: string, completed?: boolean | null | undefined };

export type FindAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, completed?: boolean | null | undefined }> };

export const TodoExcerptFragmentDoc = gql`
    fragment TodoExcerpt on Todo {
  id
  title
  completed
}
    `;
export const FindAllTodosDocument = gql`
    query FindAllTodos {
  todos: findAllTodos {
    ...TodoExcerpt
  }
}
    ${TodoExcerptFragmentDoc}`;

/**
 * __useFindAllTodosQuery__
 *
 * To run a query within a React component, call `useFindAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllTodosQuery(baseOptions?: Apollo.QueryHookOptions<FindAllTodosQuery, FindAllTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllTodosQuery, FindAllTodosQueryVariables>(FindAllTodosDocument, options);
      }
export function useFindAllTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllTodosQuery, FindAllTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllTodosQuery, FindAllTodosQueryVariables>(FindAllTodosDocument, options);
        }
export type FindAllTodosQueryHookResult = ReturnType<typeof useFindAllTodosQuery>;
export type FindAllTodosLazyQueryHookResult = ReturnType<typeof useFindAllTodosLazyQuery>;
export type FindAllTodosQueryResult = Apollo.QueryResult<FindAllTodosQuery, FindAllTodosQueryVariables>;