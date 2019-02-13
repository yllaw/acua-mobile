export default class {
  constructor (question) {
    this.id = Math.floor(Math.random()*100)
    this.question = question
    this.answer = null
    this.count = 0
  }
}