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
  parkingSpotId: Scalars['Float'];
  pictureUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
};

export type ComplainInput = {
  description: Scalars['String'];
  parkingSpotId: Scalars['ID'];
  pictureUrl?: InputMaybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create Complain */
  createComplain: Complain;
  /** Create ParkingSpot */
  createParkingSpot: ParkingSpot;
  /** Create a Payment Intent */
  createPaymentIntent: Scalars['String'];
  /** Create Reservation */
  createReservation: Reservation;
  /** Custom Create Todo */
  createTodo: Todo;
  /** Create User */
  createUser: User;
  /** Delete Complain */
  deleteComplain: Complain;
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
  /** Update Complain */
  updateComplain: Complain;
  /** Update ParkingSpot */
  updateParkingSpot: ParkingSpot;
  /** Update user */
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


export type MutationCreateComplainArgs = {
  image?: InputMaybe<Scalars['Upload']>;
  input: ComplainInput;
};


export type MutationCreateParkingSpotArgs = {
  input: ParkingSpotInput;
};


export type MutationCreatePaymentIntentArgs = {
  input: PaymentInput;
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


export type MutationDeleteComplainArgs = {
  id: Scalars['ID'];
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


export type MutationUpdateComplainArgs = {
  id: Scalars['ID'];
  input: ComplainInput;
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

export type PaymentInput = {
  total: Scalars['Float'];
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
  /** Find all Complains */
  findAllComplains: Array<Complain>;
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
  /** Find user's Complains */
  findComplainInfo: Array<RenterComplainResponse>;
  /** Find Complains about renters parking spaces */
  findMyComplains: Array<Complain>;
  /** Find logged in user's ParkingSpots */
  findMyParkingSpots: Array<ParkingSpot>;
  /** Find Drivers reservations */
  findMyReservations: Array<Reservation>;
  /** Find parking spots near coords */
  findNearParkingSpots: Array<ParkingSpot>;
  /** Find one Complain */
  findOneComplain: Complain;
  /** Find one parking spot for reservations */
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


export type QueryFindOneComplainArgs = {
  id: Scalars['ID'];
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

export type RenterComplainResponse = {
  __typename?: 'RenterComplainResponse';
  city: Scalars['String'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Float'];
  pictureUrl?: Maybe<Scalars['String']>;
  street: Scalars['String'];
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
  stripeChargeId: Scalars['String'];
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

export type ParkingSpotDetailsFragment = { __typename?: 'ParkingSpot', id: string, lat: number, lng: number, price: number, daysAvailable: Array<number>, startHour?: number | null | undefined, endHour?: number | null | undefined, street?: string | null | undefined, zipCode?: string | null | undefined, city?: string | null | undefined, user: { __typename?: 'User', firstName: string, lastName: string, phone?: string | null | undefined }, reservations?: Array<{ __typename?: 'Reservation', startDate: string, endDate: string }> | null | undefined };

export type ReservationDetailsFragment = { __typename?: 'Reservation', startDate: string, endDate: string, id: string, parkingSpot: { __typename?: 'ParkingSpot', street?: string | null | undefined, lat: number, lng: number } };

export type UserExcerptFragment = { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, roles: Array<Role>, phone?: string | null | undefined, bankInfo?: string | null | undefined };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', email: string } };

export type CreateComplainMutationVariables = Exact<{
  input: ComplainInput;
  image?: InputMaybe<Scalars['Upload']>;
}>;


export type CreateComplainMutation = { __typename?: 'Mutation', createComplain: { __typename?: 'Complain', id: string } };

export type TestImageMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type TestImageMutation = { __typename?: 'Mutation', uploadFile: string };

export type CreateReservationMutationVariables = Exact<{
  input: ReservationInput;
}>;


export type CreateReservationMutation = { __typename?: 'Mutation', createReservation: { __typename?: 'Reservation', id: string } };

export type CreatePaymentIntentMutationVariables = Exact<{
  input: PaymentInput;
}>;


export type CreatePaymentIntentMutation = { __typename?: 'Mutation', createPaymentIntent: string };

export type GetSpotsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpotsQuery = { __typename?: 'Query', spaces: Array<{ __typename?: 'ParkingSpot', price: number, startHour?: number | null | undefined, endHour?: number | null | undefined, lat: number, lng: number, id: string, daysAvailable: Array<number>, street?: string | null | undefined, zipCode?: string | null | undefined, city?: string | null | undefined, user: { __typename?: 'User', firstName: string, lastName: string, phone?: string | null | undefined } }> };

export type FindNearParkingSpotsQueryVariables = Exact<{
  input: NearParkingSpotsInput;
}>;


export type FindNearParkingSpotsQuery = { __typename?: 'Query', parkingSpots: Array<{ __typename?: 'ParkingSpot', id: string, lat: number, lng: number, price: number, daysAvailable: Array<number>, startHour?: number | null | undefined, endHour?: number | null | undefined, street?: string | null | undefined, zipCode?: string | null | undefined, city?: string | null | undefined, user: { __typename?: 'User', firstName: string, lastName: string, phone?: string | null | undefined }, reservations?: Array<{ __typename?: 'Reservation', startDate: string, endDate: string }> | null | undefined }> };

export type GetMyReservationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyReservationsQuery = { __typename?: 'Query', reservations: Array<{ __typename?: 'Reservation', startDate: string, endDate: string, id: string, parkingSpot: { __typename?: 'ParkingSpot', street?: string | null | undefined, lat: number, lng: number } }> };

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, roles: Array<Role>, phone?: string | null | undefined, bankInfo?: string | null | undefined } | null | undefined };

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
  user {
    firstName
    lastName
    phone
  }
  reservations {
    startDate
    endDate
  }
}
    `;
export const ReservationDetailsFragmentDoc = gql`
    fragment ReservationDetails on Reservation {
  startDate
  endDate
  id
  parkingSpot {
    street
    lat
    lng
  }
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
    email
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
export const CreateComplainDocument = gql`
    mutation createComplain($input: ComplainInput!, $image: Upload) {
  createComplain(input: $input, image: $image) {
    id
  }
}
    `;
export type CreateComplainMutationFn = Apollo.MutationFunction<CreateComplainMutation, CreateComplainMutationVariables>;

/**
 * __useCreateComplainMutation__
 *
 * To run a mutation, you first call `useCreateComplainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateComplainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createComplainMutation, { data, loading, error }] = useCreateComplainMutation({
 *   variables: {
 *      input: // value for 'input'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateComplainMutation(baseOptions?: Apollo.MutationHookOptions<CreateComplainMutation, CreateComplainMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateComplainMutation, CreateComplainMutationVariables>(CreateComplainDocument, options);
      }
export type CreateComplainMutationHookResult = ReturnType<typeof useCreateComplainMutation>;
export type CreateComplainMutationResult = Apollo.MutationResult<CreateComplainMutation>;
export type CreateComplainMutationOptions = Apollo.BaseMutationOptions<CreateComplainMutation, CreateComplainMutationVariables>;
export const TestImageDocument = gql`
    mutation testImage($file: Upload!) {
  uploadFile(file: $file)
}
    `;
export type TestImageMutationFn = Apollo.MutationFunction<TestImageMutation, TestImageMutationVariables>;

/**
 * __useTestImageMutation__
 *
 * To run a mutation, you first call `useTestImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTestImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [testImageMutation, { data, loading, error }] = useTestImageMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useTestImageMutation(baseOptions?: Apollo.MutationHookOptions<TestImageMutation, TestImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TestImageMutation, TestImageMutationVariables>(TestImageDocument, options);
      }
export type TestImageMutationHookResult = ReturnType<typeof useTestImageMutation>;
export type TestImageMutationResult = Apollo.MutationResult<TestImageMutation>;
export type TestImageMutationOptions = Apollo.BaseMutationOptions<TestImageMutation, TestImageMutationVariables>;
export const CreateReservationDocument = gql`
    mutation CreateReservation($input: ReservationInput!) {
  createReservation(input: $input) {
    id
  }
}
    `;
export type CreateReservationMutationFn = Apollo.MutationFunction<CreateReservationMutation, CreateReservationMutationVariables>;

/**
 * __useCreateReservationMutation__
 *
 * To run a mutation, you first call `useCreateReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReservationMutation, { data, loading, error }] = useCreateReservationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReservationMutation(baseOptions?: Apollo.MutationHookOptions<CreateReservationMutation, CreateReservationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReservationMutation, CreateReservationMutationVariables>(CreateReservationDocument, options);
      }
export type CreateReservationMutationHookResult = ReturnType<typeof useCreateReservationMutation>;
export type CreateReservationMutationResult = Apollo.MutationResult<CreateReservationMutation>;
export type CreateReservationMutationOptions = Apollo.BaseMutationOptions<CreateReservationMutation, CreateReservationMutationVariables>;
export const CreatePaymentIntentDocument = gql`
    mutation CreatePaymentIntent($input: PaymentInput!) {
  createPaymentIntent(input: $input)
}
    `;
export type CreatePaymentIntentMutationFn = Apollo.MutationFunction<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;

/**
 * __useCreatePaymentIntentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentIntentMutation, { data, loading, error }] = useCreatePaymentIntentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePaymentIntentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>(CreatePaymentIntentDocument, options);
      }
export type CreatePaymentIntentMutationHookResult = ReturnType<typeof useCreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationResult = Apollo.MutationResult<CreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;
export const GetSpotsDocument = gql`
    query GetSpots {
  spaces: findAllParkingSpots {
    price
    startHour
    endHour
    lat
    lng
    id
    daysAvailable
    street
    zipCode
    city
    user {
      firstName
      lastName
      phone
    }
  }
}
    `;

/**
 * __useGetSpotsQuery__
 *
 * To run a query within a React component, call `useGetSpotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpotsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpotsQuery(baseOptions?: Apollo.QueryHookOptions<GetSpotsQuery, GetSpotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpotsQuery, GetSpotsQueryVariables>(GetSpotsDocument, options);
      }
export function useGetSpotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpotsQuery, GetSpotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpotsQuery, GetSpotsQueryVariables>(GetSpotsDocument, options);
        }
export type GetSpotsQueryHookResult = ReturnType<typeof useGetSpotsQuery>;
export type GetSpotsLazyQueryHookResult = ReturnType<typeof useGetSpotsLazyQuery>;
export type GetSpotsQueryResult = Apollo.QueryResult<GetSpotsQuery, GetSpotsQueryVariables>;
export const FindNearParkingSpotsDocument = gql`
    query FindNearParkingSpots($input: NearParkingSpotsInput!) {
  parkingSpots: findNearParkingSpots(input: $input) {
    ...ParkingSpotDetails
  }
}
    ${ParkingSpotDetailsFragmentDoc}`;

/**
 * __useFindNearParkingSpotsQuery__
 *
 * To run a query within a React component, call `useFindNearParkingSpotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindNearParkingSpotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindNearParkingSpotsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindNearParkingSpotsQuery(baseOptions: Apollo.QueryHookOptions<FindNearParkingSpotsQuery, FindNearParkingSpotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindNearParkingSpotsQuery, FindNearParkingSpotsQueryVariables>(FindNearParkingSpotsDocument, options);
      }
export function useFindNearParkingSpotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindNearParkingSpotsQuery, FindNearParkingSpotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindNearParkingSpotsQuery, FindNearParkingSpotsQueryVariables>(FindNearParkingSpotsDocument, options);
        }
export type FindNearParkingSpotsQueryHookResult = ReturnType<typeof useFindNearParkingSpotsQuery>;
export type FindNearParkingSpotsLazyQueryHookResult = ReturnType<typeof useFindNearParkingSpotsLazyQuery>;
export type FindNearParkingSpotsQueryResult = Apollo.QueryResult<FindNearParkingSpotsQuery, FindNearParkingSpotsQueryVariables>;
export const GetMyReservationsDocument = gql`
    query GetMyReservations {
  reservations: findMyReservations {
    startDate
    endDate
    id
    parkingSpot {
      street
      lat
      lng
    }
  }
}
    `;

/**
 * __useGetMyReservationsQuery__
 *
 * To run a query within a React component, call `useGetMyReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyReservationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyReservationsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyReservationsQuery, GetMyReservationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyReservationsQuery, GetMyReservationsQueryVariables>(GetMyReservationsDocument, options);
      }
export function useGetMyReservationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyReservationsQuery, GetMyReservationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyReservationsQuery, GetMyReservationsQueryVariables>(GetMyReservationsDocument, options);
        }
export type GetMyReservationsQueryHookResult = ReturnType<typeof useGetMyReservationsQuery>;
export type GetMyReservationsLazyQueryHookResult = ReturnType<typeof useGetMyReservationsLazyQuery>;
export type GetMyReservationsQueryResult = Apollo.QueryResult<GetMyReservationsQuery, GetMyReservationsQueryVariables>;
export const GetTodosDocument = gql`
    query GetTodos {
  todos: findAllTodos {
    id
    title
  }
}
    `;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
      }
export function useGetTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;
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