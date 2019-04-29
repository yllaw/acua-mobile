const httpModule = require('tns-core-modules/http')

export default {
    getAnimals() {
        return httpModule.getJSON(`https://acua-server.herokuapp.com/animals`)
    }
}


