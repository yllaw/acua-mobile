<template>
  <Page>
    <ActionBar title="Service Request" fontSize="24" ios.position="left" android.icon="~/assets/images/seal.2016.png" android.iconVisibility="always" class="Action_Bar">
      <ActionItem @tap="toFaq" ios.systemIcon="12" ios.position="right" android.systemIcon="ic_menu_search" android.position="actionBar" />
      <ActionItem @tap="toHome" ios.systemIcon="0" text="Home Page" android.position="popup" />
      <ActionItem @tap="toFaq" ios.systemIcon="0" text="FAQ" android.position="popup" />
    </ActionBar>

    <StackLayout>
      <WebView src="http://animalcare.lacounty.gov/service-request/" />
    </StackLayout>
  </Page>
</template>

<script>
import FaqInfo from "@/components/sublists/FaqInfo.vue"
import Ticket from './Ticket.vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import Faq from '@/models/Faq'
import Home from './Home.vue'

export default {
  data() {
    return {
      search: '',
      home: Home

    }
  },
  computed: {
    ...mapState(['faqs'])
  },
  components: {
    Ticket,
    FaqInfo
  },
  methods: {
      toHome () {
          this.$navigateTo(this.home)
      }
  }
}
</script>

<style scoped>
  ActionBar {
    background-color: #009fca;
    color: #ffffff;
  }
</style>
