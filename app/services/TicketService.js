const httpModule = require('tns-core-modules/http')
import env from '@/env.json'

export default {
  getTickets () {
    return httpModule.getJSON(`https://${env.SUBURL}.ngrok.io/ticket`)
  },
  addTicket (ticket) {
    return httpModule.request({
      url: `https://${env.SUBURL}.ngrok.io/ticket`,
      method: 'POST',
      headers: { "Content-Type": "application/json" }
    })
  }
}
