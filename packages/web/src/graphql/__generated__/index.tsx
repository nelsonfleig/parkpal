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
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  parkingSpot: ParkingSpot;
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
  /** Create ParkingSpot */
  createParkingSpot: ParkingSpot;
  /** Custom Create Todo */
  createTodo: Todo;
  /** Create User */
  createUser: User;
  /** Delete ParkingSpot */
  deleteParkingSpot: ParkingSpot;
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
  /** Update ParkingSpot */
  updateParkingSpot: ParkingSpot;
  /** Logout user */
  updateProfile: AuthResponse;
  /** Update Todo */
  updateTodo: Todo;
  /** Update User */
  updateUser: User;
};


export type MutationCreateParkingSpotArgs = {
  input: ParkingSpotInput;
};


export type MutationCreateTodoArgs = {
  input: TodoInput;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationDeleteParkingSpotArgs = {
  id: Scalars['ID'];
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


export type MutationUpdateParkingSpotArgs = {
  id: Scalars['ID'];
  input: ParkingSpotInput;
};


export type MutationUpdateProfileArgs = {
  input: ProfileInput;
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
  city?: Maybe<Scalars['String']>;
  complains?: Maybe<User>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  daysAvailable: Array<Scalars['Float']>;
  endHour: Scalars['Float'];
  id: Scalars['ID'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  picture_url?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  reservations?: Maybe<Array<Reservation>>;
  startHour: Scalars['Float'];
  street?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
  zipCode?: Maybe<Scalars['String']>;
};

export type ParkingSpotInput = {
  daysAvailable: Array<Scalars['Float']>;
  endHour: Scalars['Float'];
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  price?: InputMaybe<Scalars['Float']>;
  startHour: Scalars['Float'];
};

export type ProfileInput = {
  bankInfo: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Find all ParkingSpots */
  findAllParkingSpots: Array<ParkingSpot>;
  /** List all Todos */
  findAllTodos: Array<Todo>;
  /** List all Users */
  findAllUsers: Array<User>;
  /** Find logged in user's ParkingSpots */
  findMyParkingSpots: Array<ParkingSpot>;
  /** Find one ParkingSpot */
  findOneParkingSpot: ParkingSpot;
  /** Find one Todo */
  findOneTodo: Todo;
  /** Find one User */
  findOneUser: User;
  /** Get logged in user */
  me?: Maybe<User>;
  protect: Scalars['String'];
  testGeocoding: Scalars['String'];
};


export type QueryFindOneParkingSpotArgs = {
  id: Scalars['ID'];
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
  user: User;
  userId: Scalars['Float'];
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
  todos?: Maybe<Array<Todo>>;
  updatedAt: Scalars['DateTime'];
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type ParkingSpotDetailsFragment = { __typename?: 'ParkingSpot', id: string, lat: number, lng: number, price: number, daysAvailable: Array<number>, startHour: number, endHour: number, street?: string | null | undefined, zipCode?: string | null | undefined, city?: string | null | undefined, country?: string | null | undefined, userId: number };

export type TodoExcerptFragment = { __typename?: 'Todo', id: string, title: string, completed?: boolean | null | undefined };

export type UserExcerptFragment = { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, roles: Array<Role> };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: string } };

export type CreateParkingSpotMutationVariables = Exact<{
  input: ParkingSpotInput;
}>;


export type CreateParkingSpotMutation = { __typename?: 'Mutation', createParkingSpot: { __typename?: 'ParkingSpot', id: string, lat: number, lng: number, price: number, daysAvailable: Array<number>, startHour: number, endHour: number, street?: string | null | undefined, zipCode?: string | null | undefined, city?: string | null | undefined, country?: string | null | undefined, userId: number } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, roles: Array<Role> } | null | undefined };

export type FindMyParkingSpotsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyParkingSpotsQuery = { __typename?: 'Query', parkingSpots: Array<{ __typename?: 'ParkingSpot', id: string, lat: number, lng: number, price: number, daysAvailable: Array<number>, startHour: number, endHour: number, street?: string | null | undefined, zipCode?: string | null | undefined, city?: string | null | undefined, country?: string | null | undefined, userId: number }> };

export type FindAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, completed?: boolean | null | undefined }> };

export const ParkingSpotDetailsFragmentDoc = gql`
    fragment ParkingSpotDetails on ParkingSpot {
  id
  lat
  lng
  price
  daysAvailable
  startHour
  endHour
  street
  zipCode
  city
  country
  userId
}
    `;
export const TodoExcerptFragmentDoc = gql`
    fragment TodoExcerpt on Todo {
  id
  title
  completed
}
    `;
export const UserExcerptFragmentDoc = gql`
    fragment UserExcerpt on User {
  id
  firstName
  lastName
  email
  roles
}
    `;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    id
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateParkingSpotDocument = gql`
    mutation CreateParkingSpot($input: ParkingSpotInput!) {
  createParkingSpot(input: $input) {
    ...ParkingSpotDetails
  }
}
    ${ParkingSpotDetailsFragmentDoc}`;
export type CreateParkingSpotMutationFn = Apollo.MutationFunction<CreateParkingSpotMutation, CreateParkingSpotMutationVariables>;

/**
 * __useCreateParkingSpotMutation__
 *
 * To run a mutation, you first call `useCreateParkingSpotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateParkingSpotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createParkingSpotMutation, { data, loading, error }] = useCreateParkingSpotMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateParkingSpotMutation(baseOptions?: Apollo.MutationHookOptions<CreateParkingSpotMutation, CreateParkingSpotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateParkingSpotMutation, CreateParkingSpotMutationVariables>(CreateParkingSpotDocument, options);
      }
export type CreateParkingSpotMutationHookResult = ReturnType<typeof useCreateParkingSpotMutation>;
export type CreateParkingSpotMutationResult = Apollo.MutationResult<CreateParkingSpotMutation>;
export type CreateParkingSpotMutationOptions = Apollo.BaseMutationOptions<CreateParkingSpotMutation, CreateParkingSpotMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserExcerpt
  }
}
    ${UserExcerptFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const FindMyParkingSpotsDocument = gql`
    query FindMyParkingSpots {
  parkingSpots: findMyParkingSpots {
    ...ParkingSpotDetails
  }
}
    ${ParkingSpotDetailsFragmentDoc}`;

/**
 * __useFindMyParkingSpotsQuery__
 *
 * To run a query within a React component, call `useFindMyParkingSpotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyParkingSpotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyParkingSpotsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindMyParkingSpotsQuery(baseOptions?: Apollo.QueryHookOptions<FindMyParkingSpotsQuery, FindMyParkingSpotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMyParkingSpotsQuery, FindMyParkingSpotsQueryVariables>(FindMyParkingSpotsDocument, options);
      }
export function useFindMyParkingSpotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMyParkingSpotsQuery, FindMyParkingSpotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMyParkingSpotsQuery, FindMyParkingSpotsQueryVariables>(FindMyParkingSpotsDocument, options);
        }
export type FindMyParkingSpotsQueryHookResult = ReturnType<typeof useFindMyParkingSpotsQuery>;
export type FindMyParkingSpotsLazyQueryHookResult = ReturnType<typeof useFindMyParkingSpotsLazyQuery>;
export type FindMyParkingSpotsQueryResult = Apollo.QueryResult<FindMyParkingSpotsQuery, FindMyParkingSpotsQueryVariables>;
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