const httpModule = require('tns-core-modules/http')

export default {
    addAnimal(animal) {
        return httpModule.request({
            url: `https://acua-server.herokuapp.com/animals`,
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify(animal)
        })
    }
}
