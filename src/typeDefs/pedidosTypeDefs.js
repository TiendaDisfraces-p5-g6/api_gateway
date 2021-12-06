const { gql } = require('apollo-server');

const pedidoTypes = gql `
    type Pedido {
        id          :String!
        fechaPedido :String!
        username    :String!
        valor       :Int!
        fechaEntrega:String!
        nombrePrenda:String!
        talla       :String!
    }
    input PedidoIngreso {
        fechaPedido :String!
        username    :String!
        valor       :Int!
        fechaEntrega:String!
        nombrePrenda:String!
        talla       :String!
    }

    type PedidoBorrado {
        status : String!
    }
    
    extend type Query{
        pedidoPorUsername(username:String!):[Pedido] 
    }
    extend type Mutation{
        crearPedido(pedido:PedidoIngreso!):Pedido
        borrarPedido(pedidoId:String!):PedidoBorrado!
    }
`;
module.exports = pedidoTypes;