<template>
  <Page>
    <Button @tap="toHome" text="Home"></Button>
  </Page>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Home from './Home.vue'

export default {
  data () {
    return {
      home: Home
    }
  },
  methods: {
    ...mapMutations(['setTicketInfo']),
    // this.setTicketInfo(object), where object contains phone, name, query, comment properties
    toHome () {
      this.$navigateTo(this.home)
    }
  }
}
</script>

<style scoped>

</style>
