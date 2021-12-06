const { gql } = require('apollo-server');

const authTypes = gql `
    type Tokens {
        refresh:String!
        access :String!
    }
    type Access {
        access:String!
    }
    input Refresh {
        refresh:String!
    }
    input CredencialesIngreso {
        username:String!
        password:String!
    }
    input RegistroIngreso {
        username         :String!
        password         :String!
        name             :String!
        phone            :Int!
        email            :String!
        prendasAlquiladas:Int!
    }
    type DetalleUsuario{
        id      :Int!
        username:String!
        name    :String!
        phone   :Int!
        email   :String!
    }
    input ActualizarUsuario{
        id    :Int!
        name  :String!
        phone :Int!
        email :String!
    }
    type Query {
        detalleUsuarioPorId(usuarioId:Int!):DetalleUsuario!
    }
    type Mutation{
        registroUsuario(entradaUsuario:RegistroIngreso):Tokens!
        logIn(credenciales:CredencialesIngreso!):Tokens!
        refreshToken(token:Refresh!):Access!
        actualizacionUsuario(usuario:ActualizarUsuario!):DetalleUsuario!
       
    }
`;
module.exports = authTypes;