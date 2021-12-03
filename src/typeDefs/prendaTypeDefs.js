const { gql } = require('apollo-server');

const prendaTypes = gql `
    type Prenda {
        id          :String!
        vendedor    :String
        nombre      :String!
        tipoPrenda  :String!
        descripcion :String!
        cantidad    :Int!
        precio      :Int!
        img         :String
    }
    input PrendaIngreso {
        nombre      :String!
        tipoPrenda  :String!
        descripcion :String!
        cantidad    :Int!
        precio      :Int!
    }
    type DetallePrenda{
        nombre      :String!
        tipoPrenda  :String!
        descripcion :String!
        cantidad    :Int!
        precio      :Int!
    }
    
    type Query{
        detallePrendaPorNombre(prenda:String!):DetallePrenda!
    }
    extend type Mutation{
        crearPrenda(prenda:PrendaIngreso!):Prenda
        
    }
`;
module.exports = prendaTypes;