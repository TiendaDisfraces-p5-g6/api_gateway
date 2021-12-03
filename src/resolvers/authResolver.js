const usuarioResolver = {
    Query: {
        detalleUsuarioPorId: async(_, {usuarioId}, { dataSources, usuarioIdToken }) => {
            if(usuarioId == usuarioIdToken)
                return await dataSources.authAPI.obtenerUsuario(usuarioId);
            else
                return null;
        }
    },
    Mutation: {
        registroUsuario: async (_, {entradaUsuario}, { dataSources }) => {
            const cuentaIngreso = {
                username          : entradaUsuario.username,
                prendasAlquiladas : entradaUsuario.prendasAlquiladas,
                ultimoAlquiler    : (new Date()).toISOString()
            }

            const usuarioIngreso = {
                username : entradaUsuario.username,
                password : entradaUsuario.password,
                name     : entradaUsuario.name,
                phone    : entradaUsuario.phone,
                email    : entradaUsuario.email 
            }
            const userResponse = await dataSources.authAPI.crearUsuario(usuarioIngreso);
            if(userResponse.hasOwnProperty('refresh') && userResponse.hasOwnProperty('access'))
                await dataSources.authAPI.creacionCuenta(cuentaIngreso);
            return userResponse;
        },

        logIn: async(_, { credenciales }, { dataSources }) => {
            return await dataSources.authAPI.requestAutenticacion(credenciales);
        },
        refreshToken: async(_, { token }, { dataSources }) => {
            return await dataSources.authAPI.refreshToken(token);
        },
        actualizacionUsuario:async(_, { usuario}, { dataSources, usuarioIdToken }) => {
            if(usuario.id == usuarioIdToken)
                return await dataSources.authAPI.actualizarUsuario(usuario);
            else
                return null;
        },
    }
};

module.exports = usuarioResolver;