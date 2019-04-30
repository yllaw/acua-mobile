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
        :title="titles[0]" :action="toAdoption" class="homepage-blue HomeButton" textWrap="true"/>
          
        <!--Service Request -->
        <CategoryButton verticalAlignment="center"  margin="5" row="1" col="0" src="~/assets/images/services.icon.png" :icon="''"
        :title="titles[2]" :action="toServiceRequest" class="homepage-blue HomeButton" textWrap="true"/>
         
        <!--FAQ -->
        <CategoryButton verticalAlignment="center"  margin="5" row="0" col="1" src="~/assets/images/noise.icon.png" :icon="''"
        :title="titles[3]" :action="toFaq" class="homepage-blue HomeButton" textWrap="true"/>
        
        <!--Ticket -->
        <CategoryButton verticalAlignment="center"  margin="5" row="2" col="0" src="~/assets/images/hoursicon.png" 
        :icon="'fa-map-marker' | fonticon" :title="titles[4]" :action="toQRScanner" class="fa homepage-blue HomeButton" textWrap="true"/>
       
        <!--Find a Location -->
        <CategoryButton verticalAlignment="center" margin="5" row="1" col="1" src="~/assets/images/locationicon.png" :icon="''"
        :title="titles[5]" :action="toLocationList" class="homepage-blue HomeButton" textWrap="true"/>
      
      </GridLayout>

    </StackLayout>
    
  </Page>
  
</template>

<script>
import CategoryButton from "@/components/buttons/CategoryButton.vue"
import Faq from "./Faq.vue"
import Location from "./Location.vue"
import QRScanner from "./QRScanner.vue"
import Adoption from "./Adoption.vue"
import ServiceRequest from "./ServiceRequest.vue"
import { mapState } from "vuex"

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
      location: Location,
      qrScanner: QRScanner,
      adoption: Adoption,
      serviceRequest: ServiceRequest,

    };
  },

  computed: mapState(['approvedTicket']),

  methods: {
    toLocationList() {
      this.$navigateTo(this.location, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    },
    toFaq() {
      this.$navigateTo(this.faq, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    },
    toQRScanner () {
      if (typeof this.approvedTicket === 'object') {
        alert({
          title: "Access Denied",
          message: "You cannot submit another ticket.",
          okButtonText: "OK"
        })
      } else {
        this.$navigateTo(this.qrScanner, {
          animated: true,
          transition: {
            name: "slide",
            duration: 380,
            curve: "easeIn"
          }
        });
      }
    },
    toAdoption () {
      this.$navigateTo(this.adoption, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    },
    toServiceRequest () {
      this.$navigateTo(this.serviceRequest, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
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


.cover {
    background: linear-gradient(45deg, plum, #009fca)
}

.homepage-blue {
  color: $homepage-blue;
}

.Action_Text {
  margin-right: 0;
}

.HomeButton {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25;
  font-size: 14%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.layout {
  background-color: #eeeeee;
}

</style>

