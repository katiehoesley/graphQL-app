const express = require('express');
const app = express(); 
const PORT = 8000; 
const userData = require("./MOCK_DATA.json")
const graphql = require("graphql");
const { 
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLInt,
    GraphQLString, 
    GraphQLList
   } = graphql;
const { graphqlhttp } = require("express-graphql")

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        email: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType), 
            args: { id: { type:  GraphQLInt }}, 
            resolve(parent, args) {
                return userData
            }
        }
    }
});
const Mutation = new GraphQLObjectType({
    name: "Mutation", 
    fields: {
        createUser: {
            type: UserType, 
            args: {
                id: { type: GraphQLInt },
                first_name: { type: GraphQLString },
                email: { type: GraphQLString }
            }, 
            resolve(parent, args) {
                userData.push({
                                id: args.id, 
                                first_name: args.first_name,
                                email: args.email 
                            })
                return args;
            }
        }
    }
})

const schema = new graphql.GraphQLSchema({
    query: RootQuery, 
    mutation: Mutation
})

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log("Server's Up!")
})