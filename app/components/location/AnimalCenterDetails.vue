<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <NavigationButton @tap="$navigateBack()" android.systemIcon="ic_menu_back" />
            <Label class="action-bar-title" :text="AnimalCenter.name" horizontalAlignment="center" />>
        </ActionBar>

        <ScrollView>
            <StackLayout>
                <!-- Animal Center cover pic -->
                <Image :src="AnimalCenter.imageURL" stretch="aspectFit" height="200" class="anim-cover m-b-15" />

                <Label row="1" class="hr-light m-t-15 m-b-15"/>

                <GridLayout rows="*, *, *, auto" columns="auto,*">

                    <!-- name -->
                    <Image row="0" col="0" class="anim-content1 p-l-15 p-b-10 m-r-20" src="~/assets/images/achouse.png" stretch="aspectFit" height="40" width="40" loadMode="async" margin="3"/>
                    <Label row="0" col="1"  class="anim-content1 text p-b-10 font-weight-bold title stack" margin="5" textWrap="true">
                        <FormattedString>
                            <Span :text="AnimalCenter.name + ' Animal Care Center'" />
                        </FormattedString>
                    </Label>


                    <!-- address -->
                    <Image row="1" col="0" class="anim-content2 p-l-15 p-b-10 m-r-20"  src="~/assets/images/locationicon.png" stretch="aspectFit" height="40" width="40" loadMode="async" margin="3"/>

                    <Label row="1" col="1" class="anim-content2 p-b-10 stack" margin="5" @tap="onAddressTap" textWrap="true" >
                        <FormattedString>
                            <Span  class="fa text-primary" :text="AnimalCenter.address" />
                        </FormattedString>
                    </Label>
                    
                    <!-- phone -->
                    <Image row="2" col="0" class="anim-content3 p-l-15 p-b-10 m-r-20"  src="~/assets/images/phoneicon.png" stretch="aspectFit" height="40" width="40" loadMode="async" margin="3"/>
                    <Label row="2" col="1" class="anim-content3 fa text-primary p-b-10 stack" :text="AnimalCenter.phone" @tap="onPhoneTap" margin="5"  />
                    
                    <!-- hours -->
                    <Image row="3" col="0" class="anim-content4 p-l-15 p-b-10 m-r-20" src="~/assets/images/hoursicon.png" stretch="aspectFit" height="40" width="40" loadMode="async" margin="3"/>
                    <GridLayout row="3" col="1" columns="*, *" rows="auto, auto" class="anim-content4 stack-hours"  margin="5">
                        <Label row="0" col="0" class="hours" :text="AnimalCenter.availability.weekday" />
                        <Label row="0" col="1" class="hours" :text="AnimalCenter.availability.weekdayhours"  textWrap="true"/>
                        <Label row="1" col="0" class="hours" :text="AnimalCenter.availability.weekend" />
                        <Label row="1" col="1" class="hours" :text="AnimalCenter.availability.weekendhours"  textWrap="true"/>
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
    },
    
  }
};
</script>

<style scoped lang="scss">
@import "@/AnimalCenter";

//--- <animation> ---

// cover image
.anim-cover {
  opacity: 0;
  animation-name: key-cover;
  animation-duration: 1;
  animation-delay: 0.5;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

@keyframes key-cover {
  0% {
    opacity: 0;
    transform: translate(0, 100) scale(0, 0);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  30% {
    opacity: 0.5;
    transform: scale(0.6, 0.6);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1, 1);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}

// icons & content
.anim-content1 {
  opacity: 0;
  animation-name: key-content;
  animation-duration: 1;
  animation-delay: 0.75;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

.anim-content2 {
  opacity: 0;
  animation-name: key-content;
  animation-duration: 1;
  animation-delay: 1.0;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

.anim-content3 {
  opacity: 0;
  animation-name: key-content;
  animation-duration: 1;
  animation-delay: 1.25;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

.anim-content4 {
  opacity: 0;
  animation-name: key-content;
  animation-duration: 1;
  animation-delay: 1.5;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}


@keyframes key-content {
  0% {
    opacity: 0;
    transform: translate(50, 50);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}
//--- </animation> ---


//--- css ---

.title {
  font-size: 18em;
  color: $midnight-dark;

}

.stack {
  padding-top: 14;
  border-bottom-width: 1;
  border-bottom-color: rgb(212, 212, 212);
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
