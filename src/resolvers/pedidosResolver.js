const pedidosResolver = {
    Query: {
        pedidoPorUsername: async(_, { username }, { dataSources, usuarioIdToken}) => {
            usernameToken = (await dataSources.authAPI.obtenerUsuario(usuarioIdToken)).username
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
        borrarPedido: async(_, { username }, { dataSources, usuarioIdToken }) => {
            usernameToken = (await dataSources.authAPI.obtenerUsuario(usuarioIdToken)).username
        }
    }
};

module.exports = pedidosResolver;