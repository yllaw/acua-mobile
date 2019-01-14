import Api from '@/services/Api'

export default {
  getFaqs () {
    return Api().get('/faqs')
  },
  addFaq (faq) {
    return Api().post('/faqs', faq)
  }
}
