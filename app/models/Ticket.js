export default class {

  constructor () {
    this.location = 'temp'
  }

  setLocation (qrCode) {
    this.location = qrCode
  }

  setTicketInfo ({ phone, name, query, comment }) {
    this.phone = phone
    this.name = name
    this.query = query
    this.comment = comment
    this.timeIn = new Date()
  }

}
