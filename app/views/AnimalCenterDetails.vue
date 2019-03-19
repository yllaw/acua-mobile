<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <NavigationButton @tap="$navigateBack()" android.systemIcon="ic_menu_back" />
            <Label class="action-bar-title" :text="AnimalCenter.name" horizontalAlignment="center" />
            <!-- <ActionItem @tap="onEditButtonTap" ios.position="right" android.position="right"> -->
                <!-- <Label text="Edit" verticalAlignment="center" class="action-item" /> -->
            <!-- </ActionItem> -->
        </ActionBar>

        <ScrollView>
            <StackLayout>
                <Image :src="AnimalCenter.imageURL" stretch="aspectFit" height="200" class="m-b-15" />

                <Label row="1" class="hr-light m-t-15 m-b-15 stack"/>

                <GridLayout row="2" rows="*, *, *, auto" columns="auto,*">
                <Image class="p-l-15 p-b-10 m-r-20" src="~/assets/images/achouse.png" stretch="aspectFit" height="40" width="40" loadMode="async"/>

                    <Label textWrap="true" margin="5" col="1" class="text p-b-10 font-weight-bold title stack">
                        <FormattedString>
                            <Span :text="AnimalCenter.name + ' Animal Care Center'" />
                        </FormattedString>
                    </Label>



                    <Image class="p-l-15 p-b-10 m-r-20" row="1" src="~/assets/images/locationicon.png" stretch="aspectFit" height="40" width="40" loadMode="async"/>

                <StackLayout row="1" col="1">
                <Label margin="5" @tap="onAddressTap" textWrap="true" class="p-b-10">
                        <FormattedString>
                            <Span  class="fa text-primary" :text="AnimalCenter.address" />
                        </FormattedString>
                    </Label>
                </StackLayout>
                    

                    <Image class="p-l-15 p-b-10 m-r-20" row="2" src="~/assets/images/phoneicon.png" stretch="aspectFit" height="40" width="40" oadMode="async"/>
                    <Label @tap="onPhoneTap" :text="AnimalCenter.phone" row="2" col="1" class="text-primary p-b-10 stack" />

                    <Image class="p-l-15 p-b-10 m-r-20" row="3" src="~/assets/images/hoursicon.png" stretch="aspectFit" height="40" width="40" loadMode="async"/>
                    <GridLayout margin="5" class="stack-hours" row="3" col="1" columns="*, *" rows="auto, auto">
                        <Label class="hours" :text="AnimalCenter.availability.weekday" row="0" col="0"/>
                        <Label class="hours" :text="AnimalCenter.availability.weekdayhours" row="0" col="1" textWrap="true"/>
                        <Label class="hours" :text="AnimalCenter.availability.weekend" row="1" col="0"/>
                        <Label class="hours" :text="AnimalCenter.availability.weekendhours" row="1" col="1" textWrap="true"/>
                    </GridLayout>

                </GridLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
// ---plugins---
// phone
var phone = require("nativescript-phone");

// directions
var Directions = require("nativescript-directions").Directions;
let directions = new Directions();
//-------

export default {
  props: ["AnimalCenter"],

  computed: {
    animalCenterData() {
      console.log("animalCenterData(), returning data: " + this.AnimalCenter);
      return this.AnimalCenter || {};
    }
  },

  methods: {
    onAddressTap() {
      console.log(
        "onAddressTap(), get directions to " + this.AnimalCenter.address
      );

      // must pass in string as variable otherwise it directions.navigate() won't work
      const address = this.AnimalCenter.address;

      directions.available().then(function(avail) {
        //console.log(avail ? "Yes" : "No");
        if (avail) {
          directions
            .navigate({
              to: {
                // either pass in a single object or an Array
                address: address
              }
            })
            .then(
              function() {
                console.log("Maps app launched.");
              },
              function(error) {
                console.log(error);
              }
            );
        }
      });
    },

    onPhoneTap() {
      console.log("onPhoneTap(), call " + this.AnimalCenter.phone);
      phone.dial(this.AnimalCenter.phone, true);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../AnimalCenter";

.title {
  font-size: 18em;
  color: $midnight-dark;

}

.stack {
  padding-top: 14;
}

.stack-hours {
  padding-top: 6;
}

.hours {
  color: $blue-dark;

}

ActionBar {
  background-color: #009fca;
  color: #ffffff;
}
</style>
