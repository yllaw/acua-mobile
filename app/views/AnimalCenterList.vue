<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label text="Animal Care Centers"></Label>
        </ActionBar>


        <StackLayout>
            <Button text="Get Closest Animal Center" textWrap="true"  @tap="buttonGetDistanceToCareCentersTap"/>

            <RadListView row="2" for="location in centerLocations" @itemTap="onItemTap" class="list-group">
                <ListViewLinearLayout v-tkListViewLayout scrollDirection="Vertical"/>

                    <v-template>

                    <GridLayout rows="*, *, *" columns="*, *" class="list-group-item-content">


                    <Label :text="location.name" class="fa text-primary list-group-item-text font-weight-bold"/>
                    <Label col="1" horizontalAlignment="right" class="list-group-item-text m-r-5 text-secondary">
                        <FormattedString>
                            <!-- <Span text.decode="&euro;"/> -->
                            <!-- distance -->
                            <Span :text="'~'+ location.distance + 'mi'"/> 
                            <!-- distance -->
                        </FormattedString>
                    </Label>


                    <Label row="1" class="hr-light m-t-5 m-b-5" colSpan="2"/>

                    <Image row="2" :src="location.imageURL" stretch="aspectFit" height="120" class="m-r-20" loadMode="async"/>

                    <StackLayout row="2" col="1" verticalAlignment="center" class="list-group-item-text">
                        <Label textWrap="true" class="p-b-10">
                            <FormattedString ios.fontFamily="system">
                                 <Span :text="location.address"  class="text-primary"></Span>
                            </FormattedString>
                        </Label>
                        <Label class="p-b-10">
                            <FormattedString ios.fontFamily="system">
                                <!-- <Span :text="transmsion"/> -->
                                <Span :text="location.phone" class=""/>
                            </FormattedString>
                        </Label>
                        <Label class="p-b-10">
                            <FormattedString ios.fontFamily="system">
                                <Span text=""/>
                            </FormattedString>
                        </Label>
                    </StackLayout>

                    <!-- <Label :text="',lat: ' + location.latitude + ', long: ' + location.longitude" textWrap = "true"/> -->

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

    import AnimalCenterDetails from "./AnimalCenterDetails"

    export default {
        data() {
            return {
                //TODO: Store hardcoded centerlocations
                centerLocations: [
                    {
                        name: "Agoura",
                        address: "29525 Agoura Road, Agoura, CA 91301",
                        phone: "(818) 991-0071",
                        latitude: 34.146015,
                        longitude: -118.769421,
                        distance: '',
                        imageURL: "~/assets/images/achouse.png"
                    },
                    {
                        name: "Baldwin Park",
                        address: "4275 North Elton Street, Baldwin Park, CA 91706",
                        phone: "(626) 962-3577",
                        latitude: 34.091362,
                        longitude: -117.951105,
                        distance: '',
                        imageURL: "~/assets/images/achouse.png"
                    },
                    {
                        name: "Carson/Gardena",
                        address: "216 W. Victoria Street, Gardena CA 90248",
                        phone: "(310) 523-9566",
                        latitude: 33.864355,
                        longitude: -118.277414,
                        distance: '',
                        imageURL: "~/assets/images/achouse.png"
                    },
                    {
                        name: "Castaic",
                        address: "31044 North Charlie Canyon Road, Castaic, CA 91384",
                        phone: "(661) 257-3191",
                        latitude: 34.482899,
                        longitude: -118.608386,
                        distance: '',
                        imageURL: "~/assets/images/achouse.png"
                    },

                    {
                        name: "Downey",
                        address: "11258 South Garfield Avenue, Downey, CA 90242",
                        phone: "(562) 940-6898",
                        latitude: 33.936560,
                        longitude: -118.133870,
                        distance: '',
                        imageURL: "~/assets/images/achouse.png"
                    },

                    {
                        name: "Lancaster",
                        address: "5210 West Avenue I, Lancaster, CA 93536",
                        phone: "(661) 940-4191",
                        latitude: 34.703239,
                        longitude: -118.222650,
                        distance: '',
                        imageURL: "~/assets/images/achouse.png"
                    },
                    {
                        name: "Palmdale",
                        address: "38550 Sierra Highway, Palmdale, CA 93550",
                        phone: "(661) 575-2888",
                        latitude: 34.5826,
                        longitude: -118.1171,
                        distance: '',
                        imageURL: "~/assets/images/achouse.png"
                    }  
                ],
                currentLoc: {}, // current location obj
            }
        },
        computed: {
            centerList() {

                return this.buttonGetLocationTap
            }
        },

        methods: {
            enableLocationTap: function() {
                geolocation.isEnabled().then(function (isEnabled) {
                    if (!isEnabled) {
                        geolocation.enableLocationRequest().then(function () { }, function (e) {
                            console.log("Error: " + (e.message || e));
                        });
                    }
                }, function (e) {
                    console.log("Error: " + (e.message || e));
                });
            },
            buttonGetDistanceToCareCentersTap: function() {
                console.log("buttonGetDistanceToCareCentersTap(), getting closest animal care center")
                let that = this;

                const metersToMilesConversionRate = 1609.344


                geolocation.getCurrentLocation({
                    desiredAccuracy: Accuracy.any,
                    maximumAge: 5000,
                    timeout: 10000
                }).then(function (loc) {

                    if (loc) {
                        //get current location
                        that.currentLoc.latitude = parseFloat(loc.latitude)
                        that.currentLoc.longitude = parseFloat(loc.longitude)


                    for (let i = 0; i < that.centerLocations.length; i++){
                        const centerLoc = that.centerLocations[i]

                        // calc distance foreach animal shelter
                        centerLoc.distance = geolocation.distance({
                        latitude: that.currentLoc.latitude,
                        longitude: that.currentLoc.longitude
                        }, 
                        {
                        latitude: centerLoc.latitude,
                        longitude: centerLoc.longitude,
                        }) / metersToMilesConversionRate // divide by conversion rate
                        
                        // round distance
                        centerLoc.distance = Number(Math.round(centerLoc.distance + 'e2') + 'e-2')
                        
                        }
                        // sort list by distance
                        that.centerLocations.sort((loc1,loc2) => (loc1.distance > loc2.distance) ? 1 : ((loc2.distance > loc1.distance) ? -1 : 0))

                        // toast to notify list was sorted by distance
                        // TODO: bugfix when spamming button there can be a finite amount of Toasts that constantly appear
                        let options = {
                            text: "Sorted by Distance",
                            duration : Toast.DURATION.SHORT,
                            position : Toast.POSITION.CENTER //optional
                        }                        
                        Toast.show(options);

                                 
                    }

                }, function (e) {
                    console.log("Error: " + (e.message || e));
                });


                
                
            },


            onItemTap(e) {
                // Navigate to AnimalCenterDetails
                console.log("onItemTap(e), navigateTo " + JSON.stringify(e.item))
                this.$emit("select", e.item); // you NEED to use e.item (e.location is undefined)
                this.$navigateTo(AnimalCenterDetails, { props: { AnimalCenter: e.item } });
            },

           
            
    
        }
    };
</script>

<style scoped lang="scss">
    @import '../AnimalCenter';

    ActionBar {
    background-color: #009fca;
    color: #ffffff;
    }

    .list-group {
        .list-group-item-content {
            padding: 8 15 4 15;
            background-color: $background-light;
        }

        .list-group-item-text {
            margin: 2 3;
        }

        .fa {
            color: $homepage-blue;
        }
   }

    // Start custom common variables
    // End custom common variables

    // Custom styles
    // .fa {
    //     color: $accent-dark;
    // }

    // .info {
    //     font-size: 20;
    // }
</style>
