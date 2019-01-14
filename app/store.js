import Vue from 'vue'
import Vuex from 'vuex'
import TicketService from '@/services/TicketService'
import FaqService from '@/services/FaqService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: [],
    faqs: []
  },
  // change the state of the app (must be synchronous)
  mutations: {
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
          commit('SET_TICKETS', res.data)
        })
    },
    addEntry ({ commit }, ticket) {
      TicketService.addTicket(ticket)
        .then(res => {
          commit('ADD_TICKET', res.data)
        })
    },
    loadFaqs ({ commit }) {
      FaqService.getFaqs()
        .then(res => {
          commit('SET_FAQS', res.data)
        })
    },
    addFaq ({ commit }, faq) {
      FaqService.addFaq(faq)
        .then(res => {
          commit('ADD_FAQ', res.data)
        })
    }
  }
})
