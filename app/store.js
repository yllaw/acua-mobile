import Vue from 'vue'
import Vuex from 'vuex'
import Ticket from '@/models/Ticket'
import TicketService from '@/services/TicketService'
// import FaqService from '@/services/FaqService'
// import TicketService from '@/services/FakeTicketService'
import FaqService from '@/services/FakeFaqService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    faqs: [],
    userFaq: {},
    location: 'Downey',
    userTicket: new Ticket(),
    approvedTicket: undefined
  },
  // change the state of the app (must be synchronous)
  mutations: {
    storeFaq (state, faq) {
      state.userFaq = faq
    },
    setTicketLocation (state, location) {
      state.location = location
    },
    setTicketInfo (state, userInput) {
      state.userTicket.setTicketInfo(userInput)
    },
    storeTicket (state, ticket) {
      state.userTicket = ticket
    },
    SET_TICKETS (state, tickets) {
      state.tickets = tickets
    },
    ADD_TICKET (state, ticket) {
      state.approvedTicket = ticket
    },
    SET_FAQS (state, faqs) {
      state.faqs = faqs
    },
    ADD_FAQ (state, faq) {
      state.faqs.push(faq)
    }
  },
  // asynchronous operations (Such as API calls)
  actions: {
    loadTickets ({ commit }) {
      TicketService.getTickets()
        .then(res => {
          commit('SET_TICKETS', res)
        })
    },
    addTicket ({ commit }, ticket) {
      TicketService.addTicket(ticket)
        .then(res => {
          commit('ADD_TICKET', res.content.toJSON())
        })
    },
    loadFaqs ({ commit }) {
      FaqService.getFaqs()
        .then(res => {
          commit('SET_FAQS', res)
        })
    },
    addFaq ({ commit }, faq) {
      FaqService.addFaq(faq)
        .then(res => {
          commit('ADD_FAQ', res.content.toJSON())
        })
    }
  },
  getters: {
    getSearchResults: state => search => {
      if (search === '')
        return state.faqs
      
      const words = search.split(' ')
      
      return state.faqs.filter(faq => words.some(
        word => faq.question.toLowerCase().includes(word.toLowerCase())
        || faq.answer.toLowerCase().includes(word.toLowerCase())))
    }
  }
})
