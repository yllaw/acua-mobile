// import { tickets } from '@/db/faqs.json'

export default {
  // getTickets () {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({ data: tickets })
  //     }, 10)
  //   })
  // },
  addTicket (entry) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(entry)
      }, 10)
    })
  }
}
