const { gql } = require('apollo-server')

const accountTypes = gql `
    type Cuenta{
        id: Int!
        username:String!
        prendasAlquiladas:Int!
        ultimoAlquiler:String!
    }
    extend type Query{
        cuentaPorUsername(username:String!):Cuenta
    }
`;
module.exports = accountTypes;