import Api from '@/services/Api'

export default {
  getTickets () {
    return Api().get('/tickets')
  },
  addTicket (ticket) {
    return Api().post('/ticket', ticket)
  }
}
