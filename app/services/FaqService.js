const httpModule = require('tns-core-modules/http')

export default {
  getFaqs () {
    return httpModule.getJSON('https://acua-server.herokuapp.com/faqs')
  },
  addFaq (faq) {
    return httpModule.request({
      url: `https://acua-server.herokuapp.com/faqs`,
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify(faq)
    })
  }
}
