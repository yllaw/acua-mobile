<template>
  <Page>
    <ActionBar title="Ticket Reason" class="Action_Bar"/>
    <GridLayout columns="*" rows="auto, auto, auto, auto">
      <Label class="Location_Title" textWrap="true" row="0">You are at the {{site}} Animal Care and Control Center.</Label>

      <ListPicker row="1" :items="choices" selectedIndex="0"
        @selectedIndexChange="selectedIndexChanged" v-model="selectedIndex" class="Option"/>

      <Label class="Answer_Style" row="2" text="You are always allowed to go to the kennels without asking"
        v-if="!isTicket" textWrap="true" />

      <StackLayout row="3" v-if="isTicket">
        <Label class="Answer_Style" text="Tell us about what you would like to know" textWrap="true"/>

        <TextView v-model="otherText" />
        
        <Button text="Home" @tap="toHome" class="Button_Style"/>
        <Button text="Create Ticket" @tap="createTicket" class="Button_Style"/>
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

<style scoped lang ="scss">
@import '../TicketProcess';

.msg {
    font-size: 18;
    color: black;
}
.Action_Bar {
  background-color: #009fca;
  color: #ffffff;
}
.Location_Title{
  font-size: 18%;
  color: black;
  text-align: center;
  padding-top: 15%;
}
.Option{
  font-size: 18;
  color: blue;
  border-color: black;
}
.Answer_Style{
  font-size: 18%;
  color: black;
  text-align: left;
  padding: 15%;
}
.Button_Style{
  background-color: #009fca;
  color: #ffffff;
}
</style>
