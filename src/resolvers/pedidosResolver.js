const pedidosResolver = {
    Query: {
        pedidoPorUsername: async(_, { username }, { dataSources, usuarioIdToken}) => {
            usernameToken = (await dataSources.authAPI.obtenerUsuario(usuarioIdToken)).username
            console.log(username)
            console.log(usernameToken)
            if(username == usernameToken) 
                return await dataSources.accountAPI.obtenerPedidoPorUsername(username);
            else
                return null;
        }
    },
    Mutation: {
        crearPedido: async(_, { pedido }, { dataSources, usuarioIdToken }) => {
            usernameToken = (await dataSources.authAPI.obtenerUsuario(usuarioIdToken)).username
            if(pedido.username == usernameToken)
                return await dataSources.accountAPI.crearPedido(pedido);
            else
                return null;
        },
        borrarPedido: async(_, {pedidoId }, { dataSources, usuarioIdToken }) => {
            console.log("SDFADSF " + pedidoId)
            //usernameToken= (await dataSources.authAPI.obtenerUsuario(usuarioIdToken)).username
            let resultado = await dataSources.accountAPI.borrarPedido(pedidoId); 
            console.log("Resultado " + resultado);

            if ( "pedido eliminado con exito" === resultado) {
                return { "status": "ok" } 
            } else {
                return { "status": "fail" } 
            }
           
                
        }
    }
};

module.exports = pedidosResolver;