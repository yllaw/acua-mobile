<template>
  <Page>
    <ActionBar title="Welcome" fontSize="24" android.icon="~/assets/images/Acua.png" android.iconVisibility="always" class="Action_Bar">
      <ActionItem @tap="toFaq" ios.systemIcon="12" ios.position="left" android.systemIcon="ic_menu_search" android.position="actionBar" />
      <ActionItem @tap="toFaq" ios.systemIcon="16" ios.position="right" text="delete" android.position="popup" />
    </ActionBar>

    <StackLayout>

      <!--FlexboxLayout alignItems="center" justifyContent="space-between" class="Action_Bar">
        <Image src="~/assets/images/Acua.png" width="40" height="40" horizontalAligment="left" alignSelf="flex-start"/>
        <Label text="Welcome" fontSize="24"  horizontalAligment="left" alignSelf="flex-start"/>
        <Button class="S_Button" width="40" height="40" @tap="toFaq" horizontalAligment="right"/>
      </FlexboxLayout-->

      <GridLayout class="layout" columns="*,*" rows="*,*,*">
        <CategoryButton margin="10" row="0" col="0"  :title="titles[0]" :action="toFaq" class="HomeButton1" textWrap="true"/>
              
        <CategoryButton margin="10" row="0" col="1" :title="titles[1]" :action="toFaq" class="HomeButton2" textWrap="true"/>
              
        <CategoryButton margin="10" row="1" col="0" :title="titles[2]" :action="toFaq" class="HomeButton3" textWrap="true"/>
              
        <CategoryButton margin="10" row="1" col="1" :title="titles[3]" :action="toFaq" class="HomeButton4" textWrap="true"/>
                
        <CategoryButton margin="10" row="2" col="0" :title="titles[4]" :action="toFaq" class="HomeButton5" textWrap="true"/>

        <CategoryButton margin="10" row="2" col="1" :title="titles[5]" :action="toFaq" class="HomeButton6" textWrap="true"/>
      </GridLayout>

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
        "Contact Us",
        "Find Our Location"
      ],
      textWrap: false,
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
    .Action_Bar {
        background-color: #009fca;
        color: #ffffff;
    }

    .S_Bar{
        color: #050505
    }

    .S_Button{
       /* text="right"; 
        horizontalAlignment="right";
        width="33%" 
        height="70" 
        /*backgroundColor="#1c6b48"/>*/
        background-image:url("~/assets/images/NativeScript-Vue.png");
        background-repeat:no-repeat;
        background-size:cover;
        
    }  

    .Action_Text{
      text: Welcome;
      margin-right:0;
      font-size:30;
    }

    .HomeButton1{
        background:linear-gradient(180deg, rgb(255, 157, 157), rgb(255, 89, 60));
        font-size: 35;
        color: #5b0101;
        
        border-radius: 25;
        font-weight: bold;
        letter-spacing: 0;
        image:url("~/assets/images/Acua.png");
        /*background-repeat:no-repeat;
        background-size:cover;*/
    }

    .HomeButton2{
        background:linear-gradient(180deg, lightgreen, rgb(82, 255, 73));
        font-size: 35;
        color: #083201;
        border-radius: 25;
        font-weight: bold;
        letter-spacing: 0;
    }

    .HomeButton3{
        background:linear-gradient(180deg, rgb(255, 219, 151), rgb(255, 175, 55));
        font-size: 35;
        color: rgb(59, 38, 0);
        border-radius: 25;
        font-weight: bold;
        letter-spacing: 0;
    }

    .HomeButton4{
        background:linear-gradient(180deg, rgb(255, 255, 255), rgb(179, 179, 179));
        font-size: 30;
        color: #292929;
        border-radius: 25;
        font-weight: bold;
        letter-spacing: 0;
    }

    .HomeButton5{
        background:linear-gradient(180deg, rgb(240, 175, 255),  rgb(208, 0, 255));
        font-size: 30;
        color: #1f0025;
        border-radius: 25;
        font-weight: bold;
        letter-spacing: 0;
    }

    .HomeButton6{
        background:linear-gradient(180deg, rgb(185, 234, 255),  rgb(0, 136, 194));
        font-size: 30;
        color: #000f56;
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

