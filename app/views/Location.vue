<template>
    <Page class="page">
        <ActionBar class="action-bar">
          <NavigationButton @tap="$navigateBack()" android.systemIcon="ic_menu_back" />
          <Label text="Animal Care Centers" fontSize="20" verticalAlignment="center"></Label>
        </ActionBar>


        <StackLayout>
            <!--get distance btn -->
            <IconButton class="fa gps-button" :icon="'fa-sort-amount-asc' | fonticon" title="Get Closest Animal Center" :action="buttonGetDistanceToCareCentersTap"/>

            <RadListView row="2" for="location in centerLocations" @itemTap="onItemTap" class="list-group">

                    <v-template>
                      
                    <!-- card containter -->
                    <GridLayout rows="*, *, *, *" columns="*, *" class="list-group-item-content">

                    <!-- name -->
                    <Label :text="location.name" class="homepage-blue text-primary list-group-item-text font-weight-bold"/>

                    <!-- distance -->
                    <Label col="1" horizontalAlignment="right" class="list-group-item-text m-r-5 text-secondary">
                        <FormattedString>
                            <Span :text="'~'+ location.distance + 'mi'"/> 
                        </FormattedString>
                    </Label>


                    <Label row="1" class="hr-light m-t-5 m-b-5" colSpan="2"/>

                    <Image row="2" :src="location.imageURL" stretch="aspectFit" height="120" class="m-r-20" loadMode="async"/>

                    <StackLayout row="2" col="1" verticalAlignment="center" class="list-group-item-text">
                      <GridLayout rows="*, *" columns="*, 4*"> 
                        <!--address -->
                        <Label row="0" col="0" textWrap="true" class="p-b-10">
                            <FormattedString ios.fontFamily="system">
                                 <Span :text="'fa-map-marker' | fonticon" class="fa"></Span>
                            </FormattedString>
                        </Label>
                        <Label row="0" col="1" textWrap="true" class="p-b-10">
                            <FormattedString ios.fontFamily="system">
                                 <Span :text="location.address"  class="text-primary"></Span>
                            </FormattedString>
                        </Label>
                        <!-- -->

                        <!-- phone number-->                      
                        <Label row="1" col="0" textWrap="true" class="p-b-10">
                            <FormattedString ios.fontFamily="system">
                                <Span :text="'fa-phone' | fonticon" class="fa icon"></Span>
                            </FormattedString>
                        </Label>
                        <Label row="1" col="1" textWrap="true" class="p-b-10">
                            <FormattedString ios.fontFamily="system">
                                <Span :text="location.phone" class=""/>
                            </FormattedString>
                        </Label>
                        <Label class="p-b-10">
                            <FormattedString ios.fontFamily="system">
                                <Span text=""/>
                            </FormattedString>
                        </Label>
                        <!-- -->

                      </GridLayout>
                    </StackLayout>

                    </GridLayout>
                </v-template>

            </RadListView>
</StackLayout>
    </Page>
</template>

<script>
// ---plugins---
// geolocation
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";

// toast
const Toast = require("nativescript-toasts");
//-------

// components
import IconButton from "@/components/buttons/IconButton.vue"

import AnimalCenterDetails from "@/components/location/AnimalCenterDetails";

export default {
  data() {
    return {
      //TODO: Store hardcoded centerlocations
      centerLocations: [
        {
          name: "Agoura",
          address: "29525 Agoura Road, Agoura, CA 91301",
          phone: "(818) 991-0071",
          availability: {
            weekday: "Monday-Thursday",
            weekend: "Friday-Sunday",
            weekdayhours: "12:00 p.m. - 7:00 p.m",
            weekendhours: "10:00 a.m. - 5:00 p.m"
          },
          latitude: 34.146015,
          longitude: -118.769421,
          distance: "",
          imageURL: "~/assets/images/achouse.png"
        },
        {
          name: "Baldwin Park",
          address: "4275 North Elton Street, Baldwin Park, CA 91706",
          phone: "(626) 962-3577",
          availability: {
            weekday: "Monday-Thursday",
            weekend: "Friday-Sunday",
            weekdayhours: "12:00 p.m. - 7:00 p.m",
            weekendhours: "10:00 a.m. - 5:00 p.m"
          },
          latitude: 34.091362,
          longitude: -117.951105,
          distance: "",
          imageURL: "~/assets/images/achouse.png"
        },
        {
          name: "Carson/Gardena",
          address: "216 W. Victoria Street, Gardena CA 90248",
          phone: "(310) 523-9566",
          availability: {
            weekday: "Monday-Thursday",
            weekend: "Friday-Sunday",
            weekdayhours: "12:00 p.m. - 7:00 p.m",
            weekendhours: "10:00 a.m. - 5:00 p.m"
          },
          latitude: 33.864355,
          longitude: -118.277414,
          distance: "",
          imageURL: "~/assets/images/achouse.png"
        },
        {
          name: "Castaic",
          address: "31044 North Charlie Canyon Road, Castaic, CA 91384",
          phone: "(661) 257-3191",
          availability: {
            weekday: "Monday-Thursday",
            weekend: "Friday-Sunday",
            weekdayhours: "12:00 p.m. - 7:00 p.m",
            weekendhours: "10:00 a.m. - 5:00 p.m"
          },
          latitude: 34.482899,
          longitude: -118.608386,
          distance: "",
          imageURL: "~/assets/images/achouse.png"
        },

        {
          name: "Downey",
          address: "11258 South Garfield Avenue, Downey, CA 90242",
          phone: "(562) 940-6898",
          availability: {
            weekday: "Monday-Thursday",
            weekend: "Friday-Sunday",
            weekdayhours: "12:00 p.m. - 7:00 p.m",
            weekendhours: "10:00 a.m. - 5:00 p.m"
          },
          latitude: 33.93656,
          longitude: -118.13387,
          distance: "",
          imageURL: "~/assets/images/achouse.png"
        },

        {
          name: "Lancaster",
          address: "5210 West Avenue I, Lancaster, CA 93536",
          phone: "(661) 940-4191",
          availability: {
            weekday: "Monday-Thursday",
            weekend: "Friday-Sunday",
            weekdayhours: "12:00 p.m. - 7:00 p.m",
            weekendhours: "10:00 a.m. - 5:00 p.m"
          },
          latitude: 34.703239,
          longitude: -118.22265,
          distance: "",
          imageURL: "~/assets/images/achouse.png"
        },
        {
          name: "Palmdale",
          address: "38550 Sierra Highway, Palmdale, CA 93550",
          phone: "(661) 575-2888",
          availability: {
            weekday: "Monday-Thursday",
            weekend: "Friday-Sunday",
            weekdayhours: "12:00 p.m. - 7:00 p.m",
            weekendhours: "10:00 a.m. - 5:00 p.m"
          },
          latitude: 34.5826,
          longitude: -118.1171,
          distance: "",
          imageURL: "~/assets/images/achouse.png"
        }
      ],
      currentLoc: {} // current location obj
    };
  },
  components: {
    IconButton
  },
  computed: {
    centerList() {
      return this.buttonGetLocationTap;
    }
  },

  methods: {
    enableLocationTap: function() {
      geolocation.isEnabled().then(
        function(isEnabled) {
          if (!isEnabled) {
            geolocation.enableLocationRequest().then(
              function() {},
              function(e) {
                console.log("Error: " + (e.message || e));
              }
            );
          }
        },
        function(e) {
          console.log("Error: " + (e.message || e));
        }
      );
    },
    // TODO: optimize; this should be already computed before clicking button
    buttonGetDistanceToCareCentersTap: function() {
      console.log(
        "buttonGetDistanceToCareCentersTap(), getting list of animal care centers; sorted by distance"
      );
      let that = this;

      const metersToMilesConversionRate = 1609.344;

      geolocation
        .getCurrentLocation({
          desiredAccuracy: Accuracy.any,
          maximumAge: 5000,
          timeout: 10000
        })
        .then(
          function(loc) {
            if (loc) {
              //get current location
              that.currentLoc.latitude = parseFloat(loc.latitude);
              that.currentLoc.longitude = parseFloat(loc.longitude);

              for (let i = 0; i < that.centerLocations.length; i++) {
                const centerLoc = that.centerLocations[i];

                // calc distance foreach animal shelter
                centerLoc.distance =
                  geolocation.distance(
                    {
                      latitude: that.currentLoc.latitude,
                      longitude: that.currentLoc.longitude
                    },
                    {
                      latitude: centerLoc.latitude,
                      longitude: centerLoc.longitude
                    }
                  ) / metersToMilesConversionRate; // divide by conversion rate

                // round distance
                centerLoc.distance = Number(
                  Math.round(centerLoc.distance + "e2") + "e-2"
                );
              }
              // sort list by distance
              that.centerLocations.sort(
                (loc1, loc2) =>
                  loc1.distance > loc2.distance
                    ? 1
                    : loc2.distance > loc1.distance ? -1 : 0
              );

            }
          },
          function(e) {
            console.log("Error: " + (e.message || e));
          }
        );
    },
    onItemTap(e) {
      // Navigate to AnimalCenterDetails
      console.log("onItemTap(e), navigateTo " + JSON.stringify(e.item));
      this.$emit("select", e.item); // you NEED to use e.item (e.location is undefined)
      this.$navigateTo(AnimalCenterDetails, {
        props: { AnimalCenter: e.item },
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    },
    showToast() {
              // toast to notify list was sorted by distance
              // TODO: bugfix when spamming button there can be a finite amount of Toasts that constantly appear
              let options = {
                text: "Sorted by Distance",
                duration: Toast.DURATION.SHORT,
                position: Toast.POSITION.CENTER //optional
              };
              Toast.show(options);
    },
  }
};
</script>

<style scoped lang="scss">
@import "../AnimalCenter";

ActionBar {
  background-color: #009fca;
  color: #ffffff;
}

.icon{
  margin-right: 5
}

.gps-button{
  background: linear-gradient(0deg, lightgray, white);
  color: $homepage-blue;
  border-width: 1;
  border-color: gray;
  border-radius: 25%;
  margin: 10;
}

.list-group {
  .list-group-item-content {
    padding: 8 15 4 15;
    background-color: $background-light;
  }

  .list-group-item-text {
    margin: 2 3;
  }

  .homepage-blue {
    color: $homepage-blue;
  }
}

</style>
