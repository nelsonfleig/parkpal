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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type BusinessStatsResponse = {
  __typename?: 'BusinessStatsResponse';
  timeSeries: Array<SeriesDataItem>;
  totalComplaints: Scalars['Float'];
  totalReservations: Scalars['Float'];
  totalRevenue: Scalars['Float'];
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
  /** Create Reservation */
  createReservation: Reservation;
  /** Custom Create Todo */
  createTodo: Todo;
  /** Create User */
  createUser: User;
  /** Delete ParkingSpot */
  deleteParkingSpot: ParkingSpot;
  /** Delete Reservation */
  deleteReservation: Reservation;
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
  updateProfilePicture: Scalars['String'];
  /** Update Reservation */
  updateReservation: Reservation;
  /** Update Todo */
  updateTodo: Todo;
  /** Update User */
  updateUser: User;
  uploadFile: Scalars['String'];
};


export type MutationCreateParkingSpotArgs = {
  input: ParkingSpotInput;
};


export type MutationCreateReservationArgs = {
  input: ReservationInput;
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


export type MutationDeleteReservationArgs = {
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


export type MutationUpdateProfilePictureArgs = {
  image: Scalars['Upload'];
};


export type MutationUpdateReservationArgs = {
  id: Scalars['ID'];
  input: ReservationInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input: TodoInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UserInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type NearParkingSpotsInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  /** Radius in Km */
  searchRadius: Scalars['Float'];
};

export type ParkingSpot = {
  __typename?: 'ParkingSpot';
  city?: Maybe<Scalars['String']>;
  complains?: Maybe<User>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  daysAvailable: Array<Scalars['Float']>;
  endHour?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  picture_url?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  reservations?: Maybe<Array<Reservation>>;
  startHour?: Maybe<Scalars['Float']>;
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
  bankInfo?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Find all ParkingSpots */
  findAllParkingSpots: Array<ParkingSpot>;
  /** Find all Reservations */
  findAllReservations: Array<Reservation>;
  /** List all Todos */
  findAllTodos: Array<Todo>;
  /** List all Users */
  findAllUsers: Array<User>;
  /** Find user's ParkingSpots reservations and profit */
  findCalendarInfo: Array<RenterCalendarResponse>;
  /** Find logged in user's ParkingSpots */
  findMyParkingSpots: Array<ParkingSpot>;
  /** Find Drivers reservations */
  findMyReservations: Array<Reservation>;
  /** Find parking spots near coords */
  findNearParkingSpots: Array<ParkingSpot>;
  /** Find one ParkingSpot */
  findOneParkingSpot: ParkingSpot;
  /** Find one Reservation */
  findOneReservation: Reservation;
  /** Find one Todo */
  findOneTodo: Todo;
  /** Find one User */
  findOneUser: User;
  getMyBusinessStats: BusinessStatsResponse;
  /** Get logged in user */
  me?: Maybe<User>;
  protect: Scalars['String'];
};


export type QueryFindNearParkingSpotsArgs = {
  input: NearParkingSpotsInput;
};


export type QueryFindOneParkingSpotArgs = {
  id: Scalars['ID'];
};


export type QueryFindOneReservationArgs = {
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

export type RenterCalendarResponse = {
  __typename?: 'RenterCalendarResponse';
  endHour: Scalars['Float'];
  name: Scalars['String'];
  spot: Scalars['Float'];
  startHour: Scalars['Float'];
};

export type Reservation = {
  __typename?: 'Reservation';
  createdAt: Scalars['DateTime'];
  endDate: Scalars['String'];
  id: Scalars['ID'];
  parkingSpot: ParkingSpot;
  parkingSpotId: Scalars['Float'];
  startDate: Scalars['String'];
  stripeChargeId?: Maybe<Scalars['String']>;
  total: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
};

export type ReservationInput = {
  endDate: Scalars['String'];
  parkingSpotId: Scalars['ID'];
  startDate: Scalars['String'];
  total: Scalars['Float'];
};

export enum Role {
  Admin = 'ADMIN',
  Renter = 'RENTER',
  User = 'USER'
}

export type SeriesDataItem = {
  __typename?: 'SeriesDataItem';
  date: Scalars['String'];
  sum: Scalars['Float'];
};

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

export type ParkingSpotDetailsFragment = { __typename?: 'ParkingSpot', id: string, lat: number, lng: number, price: number, daysAvailable: Array<number>, startHour?: number | null | undefined, endHour?: number | null | undefined, street?: string | null | undefined, zipCode?: string | null | undefined, city?: string | null | undefined, country?: string | null | undefined, userId: number };

export type TodoExcerptFragment = { __typename?: 'Todo', id: string, title: string, completed?: boolean | null | undefined };

export type UserExcerptFragment = { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, roles: Array<Role>, phone?: string | null | undefined, bankInfo?: string | null | undefined, pictureUrl?: string | null | undefined };

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


export type CreateParkingSpotMutation = { __typename?: 'Mutation', createParkingSpot: { __typename?: 'ParkingSpot', id: string, lat: number, lng: number, price: number, daysAvailable: Array<number>, startHour?: number | null | undefined, endHour?: number | null | undefined, street?: string | null | undefined, zipCode?: string | null | undefined, city?: string | null | undefined, country?: string | null | undefined, userId: number } };

export type UpdateProfileMutationVariables = Exact<{
  input: ProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'AuthResponse', accessToken: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type UpdateProfilePictureMutationVariables = Exact<{
  image: Scalars['Upload'];
}>;


export type UpdateProfilePictureMutation = { __typename?: 'Mutation', updateProfilePicture: string };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, roles: Array<Role>, phone?: string | null | undefined, bankInfo?: string | null | undefined, pictureUrl?: string | null | undefined } | null | undefined };

export type FindMyParkingSpotsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyParkingSpotsQuery = { __typename?: 'Query', parkingSpots: Array<{ __typename?: 'ParkingSpot', id: string, lat: number, lng: number, price: number, daysAvailable: Array<number>, startHour?: number | null | undefined, endHour?: number | null | undefined, street?: string | null | undefined, zipCode?: string | null | undefined, city?: string | null | undefined, country?: string | null | undefined, userId: number }> };

export type ParkingSpotResTestQueryVariables = Exact<{ [key: string]: never; }>;


export type ParkingSpotResTestQuery = { __typename?: 'Query', parkingSpots: Array<{ __typename?: 'RenterCalendarResponse', spot: number, startHour: number, endHour: number, name: string }> };

export type FindAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, completed?: boolean | null | undefined }> };

export type GetMyBusinessStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyBusinessStatsQuery = { __typename?: 'Query', stats: { __typename?: 'BusinessStatsResponse', totalRevenue: number, totalComplaints: number, totalReservations: number, timeSeries: Array<{ __typename?: 'SeriesDataItem', date: string, sum: number }> } };

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
  phone
  bankInfo
  pictureUrl
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
export const UpdateProfileDocument = gql`
    mutation updateProfile($input: ProfileInput!) {
  updateProfile(input: $input) {
    accessToken
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const UpdateProfilePictureDocument = gql`
    mutation UpdateProfilePicture($image: Upload!) {
  updateProfilePicture(image: $image)
}
    `;
export type UpdateProfilePictureMutationFn = Apollo.MutationFunction<UpdateProfilePictureMutation, UpdateProfilePictureMutationVariables>;

/**
 * __useUpdateProfilePictureMutation__
 *
 * To run a mutation, you first call `useUpdateProfilePictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfilePictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfilePictureMutation, { data, loading, error }] = useUpdateProfilePictureMutation({
 *   variables: {
 *      image: // value for 'image'
 *   },
 * });
 */
export function useUpdateProfilePictureMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfilePictureMutation, UpdateProfilePictureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfilePictureMutation, UpdateProfilePictureMutationVariables>(UpdateProfilePictureDocument, options);
      }
export type UpdateProfilePictureMutationHookResult = ReturnType<typeof useUpdateProfilePictureMutation>;
export type UpdateProfilePictureMutationResult = Apollo.MutationResult<UpdateProfilePictureMutation>;
export type UpdateProfilePictureMutationOptions = Apollo.BaseMutationOptions<UpdateProfilePictureMutation, UpdateProfilePictureMutationVariables>;
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
export const ParkingSpotResTestDocument = gql`
    query ParkingSpotResTest {
  parkingSpots: findCalendarInfo {
    spot
    startHour
    endHour
    name
  }
}
    `;

/**
 * __useParkingSpotResTestQuery__
 *
 * To run a query within a React component, call `useParkingSpotResTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useParkingSpotResTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParkingSpotResTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useParkingSpotResTestQuery(baseOptions?: Apollo.QueryHookOptions<ParkingSpotResTestQuery, ParkingSpotResTestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParkingSpotResTestQuery, ParkingSpotResTestQueryVariables>(ParkingSpotResTestDocument, options);
      }
export function useParkingSpotResTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParkingSpotResTestQuery, ParkingSpotResTestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParkingSpotResTestQuery, ParkingSpotResTestQueryVariables>(ParkingSpotResTestDocument, options);
        }
export type ParkingSpotResTestQueryHookResult = ReturnType<typeof useParkingSpotResTestQuery>;
export type ParkingSpotResTestLazyQueryHookResult = ReturnType<typeof useParkingSpotResTestLazyQuery>;
export type ParkingSpotResTestQueryResult = Apollo.QueryResult<ParkingSpotResTestQuery, ParkingSpotResTestQueryVariables>;
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
export const GetMyBusinessStatsDocument = gql`
    query GetMyBusinessStats {
  stats: getMyBusinessStats {
    totalRevenue
    totalComplaints
    totalReservations
    timeSeries {
      date
      sum
    }
  }
}
    `;

/**
 * __useGetMyBusinessStatsQuery__
 *
 * To run a query within a React component, call `useGetMyBusinessStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyBusinessStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyBusinessStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyBusinessStatsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyBusinessStatsQuery, GetMyBusinessStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyBusinessStatsQuery, GetMyBusinessStatsQueryVariables>(GetMyBusinessStatsDocument, options);
      }
export function useGetMyBusinessStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyBusinessStatsQuery, GetMyBusinessStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyBusinessStatsQuery, GetMyBusinessStatsQueryVariables>(GetMyBusinessStatsDocument, options);
        }
export type GetMyBusinessStatsQueryHookResult = ReturnType<typeof useGetMyBusinessStatsQuery>;
export type GetMyBusinessStatsLazyQueryHookResult = ReturnType<typeof useGetMyBusinessStatsLazyQuery>;
export type GetMyBusinessStatsQueryResult = Apollo.QueryResult<GetMyBusinessStatsQuery, GetMyBusinessStatsQueryVariables>;