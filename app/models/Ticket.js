export default class {
  constructor (question) {
    this.id = Math.floor(Math.random()*100)
    this.phoneAreaCode = null
    this.phoneNumber = null
    this.timeIn = new Date()
    this.question = question
    this.geoLocation = null
  }
}