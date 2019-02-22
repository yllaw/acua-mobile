<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Geolocation Vue Demo"></Label>
        </ActionBar>

        <GridLayout rows="auto, auto, *, auto">
            <GridLayout row="0" columns="*, *, *, *" >
                <Button text="Enable Location" col="0" textWrap="true" @tap="enableLocationTap"/>
                <Button text="Get Current Location" col="1" textWrap="true" @tap="buttonGetLocationTap"/>
                <Button text="Get Distance" col="2" textWrap="true" @tap="buttonDistanceTap"/>
                <Button text="Stop Monitoring" col="3" textWrap="true" @tap="buttonStopTap"/>
            </GridLayout>
            <ListView row="2" for="item in locations">
                <v-template>
                    <Label :text="'lat: ' + item.latitude + ', long: ' + item.longitude 
                    + ', alt: ' + item.altitude 
                    + ', dist:' + distance" textWrap = "true"/>
                </v-template>
            </ListView>
            <Button text="Clear" row="3" @tap="buttonClearTap"/>
        </GridLayout>
    </Page>
</template>

<script>
    import * as geolocation from "nativescript-geolocation";
    import { Accuracy } from "tns-core-modules/ui/enums";

    export default {
        data() {
            return {
                watchIds: [],
                locations: [],
                currentLoc: {}, // current location obj
                distance: '' 
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
                geolocation.getCurrentLocation({
                    desiredAccuracy: Accuracy.any,
                    maximumAge: 5000,
                    timeout: 10000
                }).then(function (loc) {
                    if (loc) {
                        //get current lat long
                        that.locations.push(loc);
                        that.currentLoc.latitude = parseFloat(loc.latitude)
                        that.currentLoc.longitude = parseFloat(loc.longitude)


                        // calc distance
                        that.distance = geolocation.distance({
                        latitude: that.currentLoc.latitude,
                        longitude: that.currentLoc.longitude
                    }, {
                        latitude: 33.922436 ,
                        longitude: -118.111987,
                    })/1609.344 //TODO: 1609.344 conversion meters to miles (store in var)
                        that.distance += "mi"
                        //console.log(that.distance/1609.344 + "mi or " + that.distance + "m")



                    }
                }, function (e) {
                    console.log("Error: " + (e.message || e));
                });
            },
            buttonDistanceTap: function() {
                let that = this;
 

                console.log(that.currentLoc.latitude)
                console.log(that.currentLoc.longitude)


                that.distance = geolocation.distance({
                    latitude: that.currentLoc.latitude,
                    longitude: that.currentLoc.longitude
                }, {
                    latitude: 33.922436 ,
                    longitude: -118.111987,
                }) //TODO: 1609.344 conversion meters to miles (store in var)
                console.log(that.distance/1609.344 + "mi or " + that.distance + "m")

            },
            buttonStopTap: function() {
                let watchId = this.watchIds.pop();
                while (watchId != null) {
                    geolocation.clearWatch(watchId);
                    watchId = this.watchIds.pop();
                }
            },
            buttonClearTap: function() {
                this.locations.splice(0, this.locations.length);
            }
        }
    };
</script>

<style scoped lang="scss">
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
