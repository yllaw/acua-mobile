<template>
  <Page >
    <ActionBar title="Welcome" fontSize="24" ios.position="left" android.icon="~/assets/images/seal.2016.png" android.iconVisibility="always" class="Action_Bar">
      <ActionItem @tap="toFaq" ios.systemIcon="12" ios.position="right" android.systemIcon="ic_menu_search" android.position="actionBar" />
    </ActionBar>

    <StackLayout>

      <!--FlexboxLayout alignItems="center" justifyContent="space-between" class="Action_Bar">
        <Image src="~/assets/images/Acua.png" width="40" height="40" horizontalAligment="left" alignSelf="flex-start"/>
        <Label text="Welcome" fontSize="24"  horizontalAligment="left" alignSelf="flex-start"/>
        <Button class="S_Button" width="40" height="40" @tap="toFaq" horizontalAligment="right"/>
      </FlexboxLayout-->

      <GridLayout class="layout cover" columns="*,*" rows="*,*,*">
        <CategoryButton verticalAlignment="center" margin="5" row="0" col="0" src="~/assets/images/animals.icon.png" :title="titles[0]" :action="toFaq" class="homepage-blue HomeButton1" textWrap="true"/>
              
        <CategoryButton verticalAlignment="center" margin="5" row="0" col="1" src="~/assets/images/license.icon.png" :title="titles[1]" :action="toFaq" class="homepage-blue HomeButton2" textWrap="true"/>
              
        <CategoryButton verticalAlignment="center"  margin="5" row="1" col="0" src="~/assets/images/services.icon.png" :title="titles[2]" :action="toFaq" class="homepage-blue HomeButton3" textWrap="true"/>
              
        <CategoryButton verticalAlignment="center"  margin="5" row="1" col="1" src="~/assets/images/noise.icon.png" :title="titles[3]" :action="toFaq" class="homepage-blue HomeButton4" textWrap="true"/>
                
        <CategoryButton verticalAlignment="center"  margin="5" row="2" col="0" src="~/assets/images/hoursicon.png" :title="titles[4]" :action="toQRScanner" class="homepage-blue HomeButton5" textWrap="true"/>

        <CategoryButton verticalAlignment="center" margin="5" row="2" col="1" src="~/assets/images/locationicon.png" :title="titles[5]" :action="toAnimalCenterList" class="homepage-blue HomeButton6" textWrap="true"/>
      </GridLayout>

    </StackLayout>
    
  </Page>
  
</template>

<script>
import CategoryButton from "@/components/buttons/CategoryButton.vue";
import Faq from "./Faq.vue";
import AnimalCenterList from "./AnimalCenterList.vue";
import QRScanner from "./QRScanner.vue";

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
        "TICKET",
        "Find Our Location"
      ],
      textWrap: false,
      //search: "this will change as you type",
      results: [],
      faq: Faq,
      animalCenterList: AnimalCenterList,
      qrScanner: QRScanner
    };
  },

  methods: {
    toAnimalCenterList() {
      this.$navigateTo(this.animalCenterList);
    },
    toFaq() {
      this.$navigateTo(this.faq);
    },
    toQRScanner() {
      this.$navigateTo(this.qrScanner);
    }
  },

  components: {
    CategoryButton,
    Faq
  }
};
</script>

<style scoped lang ="scss">
@import "../AnimalCenter";

.Action_Bar {
  background-color: #009fca;
  color: #ffffff;
}

.S_Bar {
  color: #050505;
}

.S_Button {
  /* text="right"; 
        horizontalAlignment="right";
        width="33%" 
        height="70" 
        /*backgroundColor="#1c6b48"/>*/
  background-image: url("~/assets/images/NativeScript-Vue.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.cover {
  background-image: url("~/assets/images/background-pug.jpg");
  background-repeat: no-repeat;
  background-size: cover;

}

.homepage-blue {
  color: $homepage-blue;
}

.Action_Text {
  text: Welcome;
  margin-right: 0;
}

.HomeButton1 {
  background-color: rgba(255, 209, 253, 0.6);
  border-radius: 25;
  font-size: 14%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.HomeButton2 {
  background-color: rgba(255, 209, 253, 0.6);
  border-radius: 25;
  font-size: 14%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.HomeButton3 {
  background-color: rgba(255, 209, 253, 0.6);
  border-radius: 25;
  font-size: 14%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.HomeButton4 {
  background-color: rgba(255, 209, 253, 0.6);
  border-radius: 25;
  font-size: 14%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.HomeButton5 {
  background-color: rgba(255, 209, 253, 0.6);
  border-radius: 25;
  font-size: 14%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.HomeButton6 {
  background-color: rgba(255, 209, 253, 0.6);
  border-radius: 25;
  font-size: 14%;
  font-weight: bold;
  padding-top: 7em;
  padding-bottom: 2em;
  letter-spacing: 0;
}

.layout {
  background-color: #eeeeee;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #252525;
}
</style>

