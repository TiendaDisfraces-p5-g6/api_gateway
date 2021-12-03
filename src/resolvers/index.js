const authResolver             = require('./authResolver')
const accountResolver          = require('./accountResolver')
const prendaInventarioResolver = require('./prendaInventarioResolver')
const pedidosResolver          = require('./pedidosResolver')
const prendaResolver           = require('./prendaResolver')
const lodash                   = require('lodash')

const resolvers = lodash.merge(authResolver, accountResolver, prendaInventarioResolver, pedidosResolver, prendaResolver);
module.exports = resolvers;