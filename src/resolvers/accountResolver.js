const accountResolver = {
    Query: {
        cuentaPorUsername: async(_, {username}, { dataSources, usuarioIdToken }) => {
            usernameToken = (await dataSources.authAPI.obtenerUsuario(usuarioIdToken)).username
            if(username == usernameToken)
                return await dataSources.authAPI.cuentaPorId(username);
            else
                return null;
        }
    },
    Mutation: {
        
    }
};

module.exports = accountResolver;