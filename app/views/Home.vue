<template>
  <Page>
    <ActionBar :title="actionBar"/>
      <StackLayout>

      <SearchBar v-model="search" hint="Enter text..." />


      <Label class="message" :text="search" />

      <GridLayout columns="*,*" rows="*,*,*">
        <CategoryButton margin="10" row="0" col="0" :title="titles[0]" :action="toFaq" backgroundColor="#6AFF5A" />
              
        <CategoryButton margin="10" row="0" col="1" :title="titles[1]" :action="toFaq" backgroundColor="#ff0080" />
              
        <CategoryButton margin="10" row="1" col="0" :title="titles[2]" :action="toFaq" backgroundColor="#00ffbf" />
              
        <CategoryButton margin="10" row="1" col="1" :title="titles[3]" :action="toFaq" backgroundColor="#0040ff" />
                
        <CategoryButton margin="10" row="2" col="0" :title="titles[4]" :action="toFaq" backgroundColor="#8000ff" />
      </GridLayout>

      <Label class="message" :text="search" />

      </StackLayout>

  </Page>
</template>

<script>
import CategoryButton from "@/components/buttons/CategoryButton.vue"
import Faq from "./Faq.vue"

export default {
  data() {
    return {
      actionBar: "ACUA Home",
      msg: "Hello World!",
      titles: [
        "Adopt an Animal!",
        "Services & Fees",
        "Service Request",
        "FAQ",
        "Contact Us"
      ],
      search: "this will change as you type",
      results: [],
      faq: Faq
    };
  },

  methods: {

  toFaq () {
      this.$navigateTo(this.faq)
    },
  },

  components: {
    CategoryButton,
    Faq
  }
}
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>

