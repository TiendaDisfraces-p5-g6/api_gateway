const { gql } = require('apollo-server');

const prendaInventarioTypes = gql `
    type PrendaInventario {
        id         :String!
        tipoPrenda :String!
        descripcion:String!
        talla      :String!
        cantidad   :Int!
    }
    type DetallePrenda{
        tipoPrenda :String!
        descripcion:String!
        talla      :String!
        cantidad   :Int!
    }
    input ActualizarPrenda{
        talla      :String!
        cantidad   :Int!
    }
    type Query{
        detallePrendaInventarioPorId(prendaId:Int!):DetallePrenda!
    }

    type Mutation{
        actualizacionPrendaInventario(prenda:ActualizarPrenda!):DetallePrenda!
        eliminarPrendaInventario(prendaId:String!):String!
    }
    
`;
module.exports = prendaInventarioTypes;