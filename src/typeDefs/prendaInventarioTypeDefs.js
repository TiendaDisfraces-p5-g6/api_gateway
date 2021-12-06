const { gql } = require('apollo-server');

const prendaInventarioTypes = gql `
    type PrendaInventario {
        id         :Int!
        tipo_Prenda :String!
        descripcion:String!
        talla      :String!
        cantidad   :Int!
    }
    type DetallePrenda{
        id         :Int!
        tipo_prenda :String!
        descripcion:String!
        talla      :String!
        cantidad   :Int!
    }
    input ActualizarPrenda{
        id          :Int!
        tipo_prenda :String!
        descripcion :String!
        talla       :String!
        cantidad    :Int!
    }
    type Query{
        detallePrendaInventarioPorId(prendaId:Int!):DetallePrenda!
    }

    type Mutation{
        actualizacionPrendaInventario(prendaInventarioId:ActualizarPrenda!):DetallePrenda!
        eliminarPrendaInventario(prendaId:Int!):String!
    }
    
`;
module.exports = prendaInventarioTypes;