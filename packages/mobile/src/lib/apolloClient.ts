import { createUploadLink } from 'apollo-upload-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const httpLink = createUploadLink({
  uri: 'http://192.168.1.201:5000/graphql', // 192.168.1.232 --> GUI; 192.168.1.200 --> BRANDON
  credentials: 'include',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('accessToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
