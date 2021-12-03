const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');


class AccountAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.account_api_url;
    }

    async crearPedido(pedido){
        pedido = new Object(JSON.parse(JSON.stringify(pedido)));
        return await this.post('/setPedidos', pedido)
    }
    async obtenerPedidoPorUsername(username){
        return await this.get(`/getPedidos/${username}`);
    }
    async borrarPedido(pedidoId){
        return await this.delete(`/delPedido/${pedidoId}`);
    }
    async crearPrenda(prenda){
        prenda = new Object(JSON.parse(JSON.stringify(prenda)));
        return await this.post('/setPrendas', prenda)
    }
    async obtenerPrenda(prenda){
        return await this.get('/getPrendas', prenda);
    }

}
module.exports = AccountAPI;