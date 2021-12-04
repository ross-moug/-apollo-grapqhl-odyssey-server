const {ApolloServer} = require("apollo-server");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const TrackApiDatasource = require("./datasources/track-api");

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
            trackApi: new TrackApiDatasource()
      };
    },
  });

  const { url } = await server.listen({
    port: process.env.PORT || 4000
  });

  console.log(`
    🚀 Server is running!
    🔉 Listening at ${url}
    📭 Query at https://studio.apollographql.com/dev
    `);
}

startApolloServer(typeDefs, resolvers);