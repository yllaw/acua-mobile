<template>
  <Page>
    <ActionBar :title="actionBar"/>
      <StackLayout>

      <!-- SearchBar v-model="search" hint="Enter text..." / -->


      <!--Label class="message" :text="search" /-->

      <GridLayout class="layout" columns="*,*" rows="*,*,*">
        <CategoryButton margin="10" row="0" col="0" :title="titles[0]" :action="toFaq" class="HomeButton1"/>
              
        <CategoryButton margin="10" row="0" col="1" :title="titles[1]" :action="toFaq" class="HomeButton2"/>
              
        <CategoryButton margin="10" row="1" col="0" :title="titles[2]" :action="toFaq" class="HomeButton3"/>
              
        <CategoryButton margin="10" row="1" col="1" :title="titles[3]" :action="toFaq" class="HomeButton4"/>
                
        <CategoryButton margin="10" row="2" col="0" :title="titles[4]" :action="toFaq" class="HomeButton5"/>
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
      actionBar: "Welcome",
      msg: "Hello World!",
      titles: [
        "Adopt an Animal!",
        "Services & Fees",
        "Service Request",
        "FAQ",
        "Contact Us"
      ],
      //search: "this will change as you type",
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
        background-color: #009fca;
        color: #ffffff;
    }

    .S_Bar{
        color: #050505
    }

    .HomeButton1{
        text: Adopt an Animal;
        background:linear-gradient(180deg, rgb(255, 157, 157), rgb(255, 89, 60));
        font-size: 35;
        color: #930000;
        width: 200;
        height: 200;
        border-radius: 25;
        font-weight: bold;
        letter-spacing: 0;
    }

    .HomeButton2{
        text: FAQ;
        background:linear-gradient(180deg, lightgreen, rgb(82, 255, 73));
        font-size: 50;
        color: #0b4e01;
        width: 200;
        height: 200;
        border-radius: 25;
        font-weight: bold;
        letter-spacing: 0;
    }

    .HomeButton3{
        text: Servies & Fees;
        background:linear-gradient(180deg, rgb(255, 219, 151), rgb(255, 175, 55));
        font-size: 35;
        color: rgb(59, 38, 0);
        width: 200;
        height: 200;
        border-radius: 25;
        font-weight: bold;
        letter-spacing: 0;
    }

    .HomeButton4{
        text: Servies Request;
        background:linear-gradient(180deg, rgb(255, 255, 255), rgb(179, 179, 179));
        font-size: 30;
        color: #323232;
        width: 200;
        height: 200;
        border-radius: 25;
        font-weight: bold;
        letter-spacing: 0;
    }

    .HomeButton5{
        text: Contact Us;
        background:linear-gradient(180deg, rgb(240, 175, 255),  rgb(208, 0, 255));
        font-size: 30;
        color: #1f0025;
        width: 200;
        height: 200;
        border-radius: 25;
        font-weight: bold;
        letter-spacing: 0;
    }
    
    .layout{
        background-color: #e2f6ff
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #252525;
    }
</style>

