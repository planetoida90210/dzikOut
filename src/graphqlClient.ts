import { GraphQLClient } from 'graphql-request';

const url = 'https://saojose.stepzen.net/api/maudlin-oyster/__graphql';

const apiKey = process.env.EXPO_PUBLIC_STEPZEN_API_KEY;

const client = new GraphQLClient(url, {
  headers: {
    Authorization: `apikey ${apiKey}`,
  },
});

export default client;
