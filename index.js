const { ApolloServer } = require("apollo-server");
const { ApolloServerPluginInlineTrace } = require("apollo-server-core");
const typeDefs = require("./db/schema.gql");
const resolvers = require("./db/resolvers");
const connectDB = require("./config/db");

// Connect to the database
connectDB();
// Server
const server = new ApolloServer({
  typeDefs,
  resolvers,

  plugins: [ApolloServerPluginInlineTrace()],
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚁 🇪🇸 🏎️  🏎️ Josés Server läuft in  ${url} 💣`);
});
