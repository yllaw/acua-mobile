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
      home: Home
    }
  },
  methods: {
    ...mapMutations(['setTicketInfo']),
    // this.setTicketInfo(object), where object contains phone, name, query, comment properties,
    submitTicket () {
      this.setTicketInfo({ 
        phone: this.phone,
        name: this.name,
        query: this.query
      })

      this.$navigateTo(this.home)

      setTimeout(() => {
        // if this alert doesn't show up please upgrade to {N} 2.4.0+
        alert({
          title: "Ticket Submitted",
          message: "Hello " + this.userTicket.name + ", you're ticket # is " + Math.floor(Math.random() * 100),
          okButtonText: "OK"
        })
      }, 500)
    }
  },
  computed: {
    ...mapState(['userTicket'])
  },
  props: {
    query: String
  }
}
</script>

<style scoped>

</style>
