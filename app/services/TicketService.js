const httpModule = require('tns-core-modules/http')

export default {
  addTicket (ticket) {
    return httpModule.request({
      url: `https://acua-server.herokuapp.com/tickets`,
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify(ticket)
    })
  }
}
