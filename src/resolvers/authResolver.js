const usuarioResolver = {
    Query: {
        detalleUsuarioPorId: async(_, {usuarioId}, { dataSources, usuarioIdToken }) => {
            console.log(usuarioId)
            console.log(usuarioIdToken)
            if(usuarioId == usuarioIdToken)
                return await dataSources.authAPI.obtenerUsuario(usuarioId);
            else
                return null;
        }
    },
    Mutation: {
        registroUsuario: async (_, {entradaUsuario}, { dataSources }) => {

            const usuarioIngreso = {
                username : entradaUsuario.username,
                password : entradaUsuario.password,
                name     : entradaUsuario.name,
                phone    : entradaUsuario.phone,
                email    : entradaUsuario.email,
                account  :{
                    prendasAlquiladas: entradaUsuario.prendasAlquiladas  
                } 
            }
            const userResponse = await dataSources.authAPI.crearUsuario(usuarioIngreso);
            return userResponse;
        },

        logIn: async(_, { credenciales }, { dataSources }) => {
            return await dataSources.authAPI.requestAutenticacion(credenciales);
        },
        refreshToken: async(_, { token }, { dataSources }) => {
            return await dataSources.authAPI.refreshToken(token);
        },
        actualizacionUsuario:async(_, { usuarioId}, { dataSources, usuarioIdToken }) => {
            if(usuario.id == usuarioIdToken)
                return await dataSources.authAPI.actualizarUsuario(usuarioId);
            else
                return null;
        },
    }
};

module.exports = usuarioResolver;