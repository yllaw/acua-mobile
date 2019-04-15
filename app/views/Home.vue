<template>
  <Page >
    <ActionBar ios.position="left" class="Action_Bar">
      <Label text="Welcome" fontSize="20" verticalAlignment="center"/>
      <ActionItem @tap="toFaq" ios.systemIcon="12" ios.position="right" android.systemIcon="ic_menu_search" android.position="actionBar" />
    </ActionBar>

    <StackLayout backgroundColor="#b21a82">

      <GridLayout class="layout cover" columns="*,*" rows="*,*,*">
        <!--Adoption -->
        <CategoryButton verticalAlignment="center" margin="5" row="0" col="0" src="~/assets/images/animals.icon.png" :icon="''"
        :title="titles[0]" :action="toAdoption" class="homepage-blue HomeButton1" textWrap="true"/>
          
        <!--Service Request -->
        <CategoryButton verticalAlignment="center"  margin="5" row="1" col="0" src="~/assets/images/services.icon.png" :icon="''"
        :title="titles[2]" :action="toServiceRequest" class="homepage-blue HomeButton3" textWrap="true"/>
         
        <!--FAQ -->
        <CategoryButton verticalAlignment="center"  margin="5" row="0" col="1" src="~/assets/images/noise.icon.png" :icon="''"
        :title="titles[3]" :action="toFaq" class="homepage-blue HomeButton4" textWrap="true"/>
        
        <!--Ticket -->
        <CategoryButton verticalAlignment="center"  margin="5" row="2" col="0" src="~/assets/images/hoursicon.png" 
        :icon="'fa-map-marker' | fonticon" :title="titles[4]" :action="toQRScanner" class="fa homepage-blue HomeButton5" textWrap="true"/>
       
        <!--Find a Location -->
        <CategoryButton verticalAlignment="center" margin="5" row="1" col="1" src="~/assets/images/locationicon.png" :icon="''"
        :title="titles[5]" :action="toAnimalCenterList" class="homepage-blue HomeButton6" textWrap="true"/>
      
      </GridLayout>

    </StackLayout>
    
  </Page>
  
</template>

<script>
import CategoryButton from "@/components/buttons/CategoryButton.vue"
import Faq from "./Faq.vue"
import AnimalCenterList from "./AnimalCenterList.vue"
import QRScanner from "./QRScanner.vue"
import Adoption from "./Adoption.vue"
import ServiceRequest from "./ServiceRequest.vue"

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
        "Grab a Ticket!",
        "Find Our Location"
      ],
      textWrap: false,
      //search: "this will change as you type",
      results: [],
      faq: Faq,
      animalCenterList: AnimalCenterList,
      qrScanner: QRScanner,
      adoption: Adoption,
      serviceRequest: ServiceRequest,

    };
  },

  methods: {
    toAnimalCenterList() {
      this.$navigateTo(this.animalCenterList);
    },
    toFaq() {
      this.$navigateTo(this.faq);
    },
    toQRScanner () {
      this.$navigateTo(this.qrScanner)
    },
    toAdoption () {
      this.$navigateTo(this.adoption)
    },
    toServiceRequest () {
      this.$navigateTo(this.serviceRequest)
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
    background: linear-gradient(45deg, plum, #009fca)
}

.homepage-blue {
  color: $homepage-blue;
}

.Action_Text {
  text: Welcome;
  margin-right: 0;
}

.HomeButton1 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25;
  font-size: 14%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.HomeButton2 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25;
  font-size: 14%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.HomeButton3 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25;
  font-size: 14%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.HomeButton4 {
  background-color: rgba(255, 255, 253, 1);
  border-radius: 25;
  font-size: 14%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.HomeButton5 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25;
  font-size: 14%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.HomeButton6 {
  background-color: rgba(255, 255, 255, 1);
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

