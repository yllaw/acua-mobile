import { faqs } from '@/db/faqs.json'

export default {
  getFaqs () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: faqs })
      }, 10)
    })
  },
  addFaq (entry) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: entry })
      }, 10)
    })
  }
}
