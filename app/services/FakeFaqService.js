import { faqs } from '@/db/faqs.json'

export default {
  getFaqs () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(faqs)
      }, 10)
    })
  },
  addFaq (entry) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(entry)
      }, 10)
    })
  }
}
