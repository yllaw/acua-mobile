<template>
  <Page>
    <ActionBar title="Ticket Reason" />
    <GridLayout columns="*" rows="auto, auto, auto, auto">
      <Label class="msg" textWrap="true" row="0">You are at the {{site}} Animal Care and Control Center.</Label>

      <ListPicker row="1" :items="choices" selectedIndex="0"
        @selectedIndexChange="selectedIndexChanged" v-model="selectedIndex" />

      <Label class="msg" row="2" text="You are always allowed to go to the kennels without asking"
        v-if="!isTicket" textWrap="true" />

      <StackLayout row="3" v-if="isTicket">
        <Label class="msg" text="Tell us about what you would like to know" textWrap="true"/>

        <TextView v-model="otherText" />
        
        <Button text="Home" @tap="toHome" />
        <Button text="Create Ticket" @tap="createTicket" />
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import Home from './Home.vue'
import TicketForm from './TicketForm.vue'

export default {
  data () {
    return {
      choices: [
        'Can I go to the kennel?',
        'other'
      ],
      otherText: '',
      selectedIndex: 0,
      isTicket: false,
      home: Home,
      ticketForm: TicketForm,
    }
  },
  methods: {
    toHome () {
      this.$navigateTo(this.home)
    },
    createTicket () {
      this.$navigateTo(this.ticketForm, { props: { query: this.otherText } })
    },
    selectedIndexChanged () {
      if (this.selectedIndex === 1)
        this.isTicket = true
      else
        this.isTicket = false
    }
  },
  props: {
    site: String
  }
}
</script>

<style scoped>
  .msg {
    font-size: 18;
    color: black;
  }
</style>
