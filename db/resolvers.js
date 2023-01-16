const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

const createToken = (user, secret, expiresIn) => {
  //console.log(user);
  const { id, name, nachname, email } = user;
  return jwt.sign({ id, name, email, nachname }, secret, { expiresIn });
};

const resolvers = {
  Query: {
    getUser: async (_, { token }) => {
      const userId = await jwt.verify(token, process.env.SECRET);
      return userId;
    },
  },
  Mutation: {
    createNewUser: async (_, { input }) => {
      //console.log(input);
      const { email, password } = input;
      // control if user exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        throw new Error("User already exists");
      }
      // PASSWORD HASHING
      const salt = await bcrypt.genSalt(10);
      input.password = await bcrypt.hash(password, salt);
      // create user in db
      try {
        const user = new User(input);
        user.save();
        return user;
      } catch (error) {
        console.log(error);
      }
    },
    authUser: async (_, { input }) => {
      const { email, password } = input;
      // check if user exists
      const userExists = await User.findOne({ email });
      if (!userExists) {
        throw new Error("User does not exists");
      }
      // check if password is correct
      const correctPassword = await bcrypt.compare(
        password,
        userExists.password
      );
      if (!correctPassword) {
        throw new Error("Password is incorrect");
      }
      // create token
      return {
        token: createToken(userExists, process.env.SECRET, "24h"),
      };
    },
  },
};

module.exports = resolvers;
