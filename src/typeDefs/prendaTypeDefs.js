const { gql } = require('apollo-server');

const prendaTypes = gql `
    type Prenda {
        id          :String!
        username    :String!
        nombre      :String!
        tipoPrenda  :String!
        descripcion :String!
        cantidad    :Int!
        precio      :Int!
        img         :String
    }
    input PrendaIngreso {
        username    :String!
        nombre      :String!
        tipoPrenda  :String!
        descripcion :String!
        cantidad    :Int!
        precio      :Int!
    }
    type DetallePrenda{
        username    :String!
        nombre      :String!
        tipoPrenda  :String!
        descripcion :String!
        cantidad    :Int!
        precio      :Int!
    }
    
    extend type Query{
        detallePrenda(tipoPrenda:String):[Prenda]
    }
    extend type Mutation{
        crearPrenda(prenda:PrendaIngreso!):Prenda
        
    }
`;
module.exports = prendaTypes;