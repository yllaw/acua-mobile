<template>
  <Page>
    <ActionBar title="Ticket Processing" class="Action_Bar"/>
    <StackLayout>
      <Label text="Phone number:" class="PhoneNumber"/>
      <TextView v-model="phone" />

      <Label text="First and last name:" class="FandL_Name"/>
      <TextView v-model="name" />

      <Label v-if="query" text="query:" />
      <Label textWrap="true">{{query}}</Label>
      
      <Button @tap="submitTicket" text="Submit Ticket" class="Button_Style"/>
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
.msg {
    font-size: 18;
    color: black;
}

.Action_Bar {
  background-color: #009fca;
  color: #ffffff;
}

.PhoneNumber{
  font-size: 18%;
  padding: 15%;
}

.FandL_Name{
  font-size: 18%;
  padding: 15%;
}

.Button_Style{
  background-color: #009fca;
  color: #ffffff;
  margin-top: 10%;
}
</style>
