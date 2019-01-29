const faqs = [
  {
    question: 'what?',
    answer: 'do this'
  },
  {
    question: 'how?',
    answer: 'like this'
  }
]

export default {
  getFaqs () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: faqs })
      })
    }, 10)
  }
}
