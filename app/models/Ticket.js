export default class {

  constructor () {
    this.location = 'temp'
  }

  setLocation (qrCode) {
    this.location = qrCode
  }

  setTicketInfo ({ phone, name, query }) {
    this.phone = phone
    this.name = name
    this.query = query
    this.timeIn = new Date()
  }

}
