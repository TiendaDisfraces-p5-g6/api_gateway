const prendaResolver = {
    Query: {
        detallePrendaPorNombre: async(_, { prenda }, { dataSources, usuarioIdToken}) => {
            usernameToken = (await dataSources.authAPI.obtenerUsuario(usuarioIdToken)).username
            if(username == usernameToken) 
                return await dataSources.accountAPI.obtenerPrenda(prenda);
            else
                return null;
        }
    },
    Mutation: {
        crearPrenda: async(_, { prenda }, { dataSources, usuarioIdToken }) => {
            usernameToken = (await dataSources.authAPI.obtenerUsuario(usuarioIdToken)).username
            if(pedido.username == usernameToken)
                return await dataSources.accountAPI.crearPrenda(prenda);
            else
                return null;
        }
    }
};

module.exports = prendaResolver;