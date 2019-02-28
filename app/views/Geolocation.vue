<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Animal Care Centers"></Label>
        </ActionBar>


        <StackLayout>
            <Button text="Get Current Location" textWrap="true" @tap="buttonGetLocationTap"/>

            <RadListView row="2" for="location in centerLocations" class="list-group">
                <ListViewLinearLayout v-tkListViewLayout scrollDirection="Vertical"/>

                    <v-template>

                    <GridLayout rows="*, *, *" columns="*, *" class="list-group-item-content">


                    <Label :text="location.name" class="text-primary list-group-item-text font-weight-bold"/>
                    <Label col="1" horizontalAlignment="right" class="list-group-item-text m-r-5">
                        <FormattedString>
                            <!-- <Span text.decode="&euro;"/> -->
                            <!-- distance -->
                            <Span :text="'~'+ location.distance"/> 
                            <!-- distance -->
                        </FormattedString>
                    </Label>


                    <Label row="1" class="hr-light m-t-5 m-b-5" colSpan="2"/>

                    <Image row="2" :src="location.imageURL" stretch="aspectFit" height="120" class="m-r-20" loadMode="async"/>

                    <StackLayout row="2" col="1" verticalAlignment="center" class="list-group-item-text">
                        <Label textWrap="true" class="p-b-10">
                            <FormattedString ios.fontFamily="system">
                                 <Span :text="location.address"  class="fa text-primary"></Span>
                            </FormattedString>
                        </Label>
                        <Label class="p-b-10">
                            <FormattedString ios.fontFamily="system">
                                <!-- <Span :text="transmsion"/> -->
                                <Span text=""/>
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
    import * as geolocation from "nativescript-geolocation";
    import { Accuracy } from "tns-core-modules/ui/enums";

    export default {
        data() {
            return {
                //TODO: Store hardcoded centerlocations
                centerLocations: [
                    {
                        name: "Agoura",
                        address: "29525 Agoura Road, Agoura, CA 91301",
                        latitude: 34.146015,
                        longitude: -118.769421,
                        distance: 'Mi',
                        imageURL: "~/assets/images/achouse.png"
                    },
                    {
                        name: "Baldwin Park",
                        address: "4275 North Elton Street, Baldwin Park, CA 91706",
                        latitude: 34.091362,
                        longitude: -117.951105,
                        distance: 'Mi',
                        imageURL: "~/assets/images/achouse.png"
                    },
                    {
                        name: "Carson/Gardena",
                        address: "216 W. Victoria Street, Gardena CA 90248",
                        latitude: 33.864355,
                        longitude: -118.277414,
                        distance: 'mi',
                        imageURL: "~/assets/images/achouse.png"
                    },
                    {
                        name: "Castaic",
                        address: "31044 North Charlie Canyon Road, Castaic, CA 91384",
                        latitude: 34.482899,
                        longitude: -118.608386,
                        distance: 'mi',
                        imageURL: "~/assets/images/achouse.png"
                    },

                    {
                        name: "Downey",
                        address: "11258 South Garfield Avenue, Downey, CA 90242",
                        latitude: 33.936560,
                        longitude: -118.133870,
                        distance: 'mi',
                        imageURL: "~/assets/images/achouse.png"
                    },

                    {
                        name: "Lancaster",
                        address: "5210 West Avenue I, Lancaster, CA 93536",
                        latitude: 34.703239,
                        longitude: -118.222650,
                        distance: '~mi',
                        imageURL: "~/assets/images/achouse.png"
                    },
                    {
                        name: "Palmdale",
                        address: "38550 Sierra Highway, Palmdale, CA 93550",
                        latitude: 34.5826,
                        longitude: -118.1171,
                        distance: '~mi',
                        imageURL: "~/assets/images/achouse.png"
                    }  
                ],

                dist: [],
                currentLoc: {}, // current location obj
                distance: '' 
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
            buttonGetLocationTap: function() {
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
                        centerLoc.distance += "mi"                     
                        
                        }


                                 
                    }

                }, function (e) {
                    console.log("Error: " + (e.message || e));
                });
                
            },
    
        }
    };
</script>

<style scoped lang="scss">
    @import '../AnimalCenter';

    .list-group {
        .list-group-item-content {
            padding: 8 15 4 15;
            background-color: $background-light;
        }

        .list-group-item-text {
            margin: 2 3;
        }

        .fa {
            color: $accent-dark;
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
