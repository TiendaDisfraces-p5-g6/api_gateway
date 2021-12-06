const prendaInventarioResolver = {
    Query: {
        detallePrendaInventarioPorId: async(_, { prendaId }, { dataSources} ) => {
            return await dataSources.authAPI.obtenerPrendaInventario( prendaId)
            
         }
    },   
    Mutation: {
        actualizacionPrendaInventario: async(_, { prendaInventarioId }, { dataSources }) => {
            return await dataSources.authAPI.actualizarPrendaInventario(prendaInventarioId)

        },
        eliminarPrendaInventario: async(_, { prendaId}, { dataSources }) => {
            return await dataSources.authAPI.eliminarPrendaInventario(prendaId)
        }
    }
};

module.exports = prendaInventarioResolver;