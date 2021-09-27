import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:3001/api/graphql',
    cache: new InMemoryCache({
      typePolicies: {
        metaData: {
          keyFields: ["title"],
        }
      }
    }),
    
  })

  
   