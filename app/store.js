import Vue from 'vue'
import Vuex from 'vuex'
import Ticket from '@/models/Ticket'
// import TicketService from '@/services/TicketService'
// import FaqService from '@/services/FaqService'
import TicketService from '@/services/FakeTicketService'
import FaqService from '@/services/FakeFaqService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: [],
    faqs: [],
    userFaq: {},
    userTicket: new Ticket()
  },
  // change the state of the app (must be synchronous)
  mutations: {
    storeFaq (state, faq) {
      state.userFaq = faq
    },
    setTicketLocation (state, location) {
      state.userTicket.setLocation(location)
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
      state.tickets.push(ticket)
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
          commit('ADD_TICKET', res)
        })
    },
    loadFaqs ({ commit }) {
      FaqService.getFaqs()
        .then(res => {
          console.log('test', res)
          commit('SET_FAQS', res)
        })
    },
    addFaq ({ commit }, faq) {
      FaqService.addFaq(faq)
        .then(res => {
          commit('ADD_FAQ', res)
        })
    }
  }
})
