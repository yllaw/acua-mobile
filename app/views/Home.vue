<template>
  <Page>
    <ActionBar title="Welcome" fontSize="24" ios.position="left" android.icon="~/assets/images/seal.2016.png" android.iconVisibility="always" class="Action_Bar">
      <ActionItem @tap="toFaq" ios.systemIcon="12" ios.position="right" android.systemIcon="ic_menu_search" android.position="actionBar" />
      <ActionItem @tap="toFaq" ios.systemIcon="0" text="Home Page" android.position="popup" />
      <ActionItem @tap="toFaq" ios.systemIcon="0" text="FAQ" android.position="popup" />
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
    }

    .HomeButton1{
        background-color:white;
        border-radius: 25;
        font-size: 15%;
        font-weight: bold;
        padding-top: 70%;
        letter-spacing: 0;
        background-image:url("~/assets/images/view.animals.icon_-120x120.png");
        background-repeat: no-repeat;
        background-position: center;
        background-position: top;
        background-origin:padding-box;
        background-size: 55% 55%;
    }

    .HomeButton2{
        background-color:white;
        border-radius: 25;
        font-size: 15%;
        font-weight: bold;
        padding-top: 70%;
        letter-spacing: 0;
        background-image:url("~/assets/images/services.icon_-120x120.png");
        background-repeat: no-repeat;
        background-position: center;
        background-position: top;
        background-origin:padding-box;
        background-size: 55% 55%;
    }

    .HomeButton3{
        background-color:white;
        border-radius: 25;
        font-size: 15%;
        font-weight: bold;
        padding-top: 70%;
        letter-spacing: 0;
        background-image:url("~/assets/images/license.icon_-120x120.png");
        background-repeat: no-repeat;
        background-position: center;
        background-position: top;
        background-origin:padding-box;
        background-size: 55% 55%;
    }

    .HomeButton4{
        background-color:white;
        border-radius: 25;
        font-size: 15%;
        font-weight: bold;
        padding-top: 70%;
        letter-spacing: 0;
        background-image:url("~/assets/images/noise.icon_-120x120.png");
        background-repeat: no-repeat;
        background-position: center;
        background-position: top;
        background-origin:padding-box;
        background-size: 55% 55%;
    }

    .HomeButton5{
        background-color:white;
        border-radius: 25;
        font-size: 15%;
        font-weight: bold;
        padding-top: 70%;
        letter-spacing: 0;
        background-image:url("~/assets/images/hoursicon-e1506467738461.png");
        background-repeat: no-repeat;
        background-position: center;
        background-position: top;
        background-origin:padding-box;
        background-size: 55% 55%;
    }

    .HomeButton6{
        background-color:white;
        border-radius: 25;
        font-size: 15%;
        font-weight: bold;
        padding-top: 70%;
        letter-spacing: 0;
        background-image:url("~/assets/images/locationicon-e1506468333331.png");
        background-repeat: no-repeat;
        background-position: center;
        background-position: top;
        background-origin:padding-box;
        background-size: 55% 55%;
        
        
    }
    
    .layout{
        background-color: #eeeeee
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #252525;
    }
</style>

