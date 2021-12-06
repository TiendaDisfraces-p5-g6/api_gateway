// call all typeDefs
const authTypes             = require("./authTypeDefs")
const accountTypes          = require('./accountTypeDefs')
const prendaInventarioTypes = require('./prendaInventarioTypeDefs')
const pedidoTypes           = require('./pedidosTypeDefs')
const prendaTypes           = require('./prendaTypeDefs')

const schemaArrays = [authTypes, accountTypes, prendaInventarioTypes, pedidoTypes, prendaTypes]
module.exports     = schemaArrays