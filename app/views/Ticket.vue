<template>
  <Page>
    <ActionBar :title="actionBar"/>
      <StackLayout>
        <Label class="msg">We apologize. The question you are searching for has not been answered yet. Take this ticket if you want to submit this question and get an answer from the front desk.</Label>
        <GridLayout columns="*,*" rows="*,*,*">
          <CategoryButton row="0" col="0" :title="titles[0]" :action="toFaq" backgroundColor="#ff0000" />
          <CategoryButton row="0" col="1" :title="titles[1]" :action="submitTicket" backgroundColor="#6AFF5A" />
        </GridLayout>
      </StackLayout>
  </Page>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import CategoryButton from '@/components/buttons/CategoryButton.vue'
import Ticket from '@/models/Ticket'
import Faq from './Faq.vue'
import Home from './Home.vue'

export default {
  data () {
    return {
      actionBar: 'Ticket',
      titles: ['No', 'Yes'],
      faq: Faq,
      home: Home
    }
  },
  methods: {
    ...mapActions(['addFaq', 'addTicket']),
    ...mapMutations(['storeTicket']),
    submitTicket () {
      this.addFaq(this.userFaq)
      const ticket = new Ticket(this.userFaq.question)
      this.storeTicket(ticket)
      this.addTicket(ticket)
      this.$navigateTo(this.home)
      alert({
        title: 'Alert',
        message: 'You have successfully submitted a ticket!',
        okButtonText: 'OK'
      }).then(() => {
        console.log('id:', this.userTicket.id)
        console.log('time inserted:', this.userTicket.timeIn)
        console.log('question:', this.userTicket.question)
      })
    },
    toFaq () {
      this.$navigateTo(this.faq)
    }
  },
  computed: {
    ...mapState(['userFaq', 'tickets', 'userTicket'])
  },
  components: {
    CategoryButton,
    Faq,
    Home
  }
}
</script>

<style scoped>
  .msg {
    text-align: center;
    font-size: 20;
  }
</style>
