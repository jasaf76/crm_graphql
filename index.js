const { ApolloServer } = require("apollo-server");

const typeDefs = require("./db/schema.gql");
const resolvers = require("./db/resolvers");
const connectDB = require("./config/db");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });
// Connect to the database
connectDB();
// Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // console.log(req.headers["authorization"]);
    const token = req.headers["authorization"] || "";
    if (token) {
      try {
        const user = jwt.verify(token, process.env.SECRET);
        console.log(user);
        return {
          user,
        };
      } catch (error) {
        console.log(error);
      }
    }
  },
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚁 🇪🇸 🏎️  🏎️ Josés Server läuft in  ${url} 💣`);
});
