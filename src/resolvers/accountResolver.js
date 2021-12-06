const accountResolver = {
    Query: {
        cuentaPorId: async(_, {id}, { dataSources, usuarioIdToken }) => {
            idToken = (await dataSources.authAPI.obtenerUsuario(usuarioIdToken)).id
            if(id == idToken)
                return await dataSources.authAPI.cuentaPorId(id);
            else
                return null;
        }
    },
    Mutation: {
        
    }
};

module.exports = accountResolver;