<template>
  <Page>
    <ActionBar title="Ticket Processing" />
    <StackLayout>
      <Label text="Phone number:" />
      <TextView v-model="phone" />

      <Label text="First and last name:" />
      <TextView v-model="name" />

      <Label v-if="query" text="query:" />
      <Label textWrap="true">{{query}}</Label>
      
      <Button @tap="submitTicket" text="Submit Ticket"/>
    </StackLayout>
  </Page>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Home from './Home.vue'

export default {
  data () {
    return {
      phone: '',
      name: '',
      home: Home,
      limit: 0
    }
  },
  methods: {
    ...mapActions(['addTicket']),
    // this.setTicketInfo(object), where object contains phone, name, query, comment properties,
    submitTicket () {

      this.$navigateTo(this.home)

      this.addTicket({
        name: this.name,
        phone: this.phone,
        query: this.query,
        location: this.location
      })
    }
  },
  computed: {
    ...mapState(['userTicket', 'approvedTicket', 'location'])
  },
  watch: {
    approvedTicket(newVal, oldVal) {
      if (this.limit < 1) {
        if (newVal !== null) {
          alert({
            title: "Ticket Submitted",
            message: "Hello " + newVal.name + ", you're ticket # is " + newVal.number
            + ". You will be served at window " + (newVal.window + 1) + ".",
            okButtonText: "OK"
          })
        } else {
          alert({
            title: "No service",
            message: "There are currently no employees serving tickets",
            okButtonText: "OK"
          })
        }
      }
      this.limit++
    }
  },
  props: {
    query: String
  }
}
</script>

<style scoped>

</style>
