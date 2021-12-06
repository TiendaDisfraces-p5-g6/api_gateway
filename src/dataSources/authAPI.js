const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');


class AuthAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async crearUsuario(usuario){
        usuario = new Object(JSON.parse(JSON.stringify(usuario)));
        return await this.post('/user/', usuario);
    }
    async obtenerUsuario(usuarioId){   
        return await this.get(`/user/${usuarioId}/`);
    }
    async actualizarUsuario(usuario){
        usuario = new Object(JSON.parse(JSON.stringify(usuario)));
        let usuarioId = usuario.id;
        return await this.put(`/user/update/${usuarioId}/`, usuario);
    }
    async requestAutenticacion(credenciales){
        credenciales = new Object(credenciales);
        return await this.post('/login/', credenciales);
    }
    async refreshToken(token){
        token = new Object( token );
        return await this.post('/refresh/', token);
    }
    async cuentaPorId(cuentaId){
        return await this.get(`/cuenta/${cuentaId}/`);
    }
    async obtenerPrendaInventario(prendaId){
        return await this.get(`/prendaInventarioList/${prendaId}/`);
    }
    async actualizarPrendaInventario(prendaInventario){
        prendaInventario = new Object(JSON.parse(JSON.stringify(prendaInventario)));
        let prendaInventarioId = prendaInventario.id;
        return await this.put(`/prendaInventarioActualizar/${prendaInventarioId}/`, prendaInventario);
        
    }
    async eliminarPrendaInventario(prendaInventarioId){
        return await this.delete(`/prendaInventarioBorrar/${prendaInventarioId}/`);
    }  


}
module.exports = AuthAPI;