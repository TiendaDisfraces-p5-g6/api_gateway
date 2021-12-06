const { gql } = require('apollo-server')

const accountTypes = gql `
    type Cuenta{
        id: Int
        username:String
        prendasAlquiladas:Int!
        fechaUltimoAlquiler:String
    }
    input CreacionCuenta{
        prendasAlquiladas:Int!
    }

    extend type Query{
        cuentaPorId(id:Int!):Cuenta
    }
       
    type Mutation{
        registroPrendasAlquiladas(prendasAlquiladas:Int!):Cuenta
    }
`;
module.exports = accountTypes;