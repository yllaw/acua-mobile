<template>
  <Page>
    <ActionBar title="FAQ"/>

    <StackLayout>
      <!-- <SearchBar v-model="search" hint="Enter text..." @submit="checkFaq" /> -->

      <RadListView ref="listView"
                   for="faq in faqs"
                   pullToRefresh="true"
                   @pullToRefreshInitiated="onPullToRefreshInitiated"
                   @itemTap="onItemTap">
        <v-template>
          <FaqInfo :item="faq" />
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
</template>

<script>
import FaqInfo from "@/components/sublists/FaqInfo.vue"
import Ticket from './Ticket.vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import Faq from '@/models/Faq'

export default {
  data() {
    return {
      search: '',
      ticket: Ticket
    }
  },
  methods: {
    ...mapActions(['loadFaqs']),
    ...mapMutations(['storeFaq']),
    checkFaq () {
      // in the future this is where to check if a user is on site, otherwise no ticket option
      if (this.faqs.filter(faq => faq.question === this.search).length === 0) {
        this.storeFaq(new Faq(this.search))
        this.$navigateTo(this.ticket)
      }
    },
    onItemTap () {
      // TODO
    },
    onPullToRefreshInitiated ({ object }) {
      console.log('Pulling...')
      setTimeout(() => {
        object.notifyPullToRefreshFinished()
      })
    }
  },
  computed: {
    ...mapState(['faqs'])
  },
  mounted () {
    this.loadFaqs()
  },
  components: {
    Ticket,
    FaqInfo
  }
}
</script>

<style scoped>
  ActionBar {
    background-color: #009fca;
    color: #ffffff;
  }

  .message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #000000;
  }

  .faq_question{
    font-weight: bold;
    font-size: 20;
    color: black;
  }
  .faq_answer{
    color: #454545;
  }
</style>
