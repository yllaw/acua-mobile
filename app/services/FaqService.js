const httpModule = require('http')
import env from '@/env.json'

export default {
  getFaqs () {
    return httpModule.getJSON(`https://${env.SUBURL}.ngrok.io/faqs`)
  },
  addFaq (faq) {
    return httpModule.request({
      url: `https://${env.SUBURL}.ngrok.io/faqs`,
      method: 'POST',
      headers: { "Content-Type": "application/json" }
    })
  }
}
