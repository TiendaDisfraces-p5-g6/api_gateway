const prendaResolver = {
    Query: {
        detallePrenda: async(_, { tipoPrenda }, { dataSources }) => {
                return await dataSources.accountAPI.obtenerPrenda(tipoPrenda);
        }
    },
    Mutation: {
        crearPrenda: async(_, { prenda }, { dataSources, usuarioIdToken }) => {
            usernameToken = (await dataSources.authAPI.obtenerUsuario(usuarioIdToken)).username
            if(prenda.username == usernameToken)
                return await dataSources.accountAPI.crearPrenda(prenda);
            else
                return null;
        }
    }
};

module.exports = prendaResolver;