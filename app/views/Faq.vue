<template>
  <Page>
    <ActionBar title="FAQ"/>

    <GridLayout columns="*" rows="*">
    </GridLayout>

    <ListView for="faq in faqs" class="list-group">
      <v-template>
        <StackLayout class="list-group-item">
          <Label :text="faq.question" />
          <Label :text="faq.answer" />
        </StackLayout>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    ...mapActions(['loadFaqs'])
  },
  computed: {
    ...mapState(['faqs'])
  },
  mounted () {
    this.loadFaqs()
  }
}
</script>

<style scoped>
  ActionBar {
    background-color: #53ba82;
    color: #ffffff;
  }

  .message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
  }
</style>
