const prendaInventarioResolver = {
    Query: {
        detallePrendaInventarioPorId: async(_, { prendaId }, { dataSources} ) => {
            await dataSources.authAPI.obtenerPrendaInventario( prendaId)
            
         }
    },   
    Mutation: {
        actualizacionPrendaInventario: async(_, { prenda }, { dataSources }) => {
            await dataSources.authAPI.actualizarPrendaInventario(prenda)

        },
        eliminarPrendaInventario: async(_, { prendaId}, { dataSources }) => {
            await dataSources.authAPI.eliminarPrendaInventario(prendaId)
        }
    }
};

module.exports = prendaInventarioResolver;