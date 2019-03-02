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

                <Label row="1" class="hr-light m-t-15 m-b-15"/>

                <GridLayout row="2" rows="*, *, *" columns="auto,*">
                 <Label text="Name" class="p-l-15 p-b-10 m-r-20 text-secondary"/>
                    <Label col="1" class="text p-b-10">
                        <FormattedString>
                            <!-- <Span text.decode="&euro;" /> -->
                            <Span :text="AnimalCenter.name + ' Animal Care Center'" />
                        </FormattedString>
                    </Label>



                    <Label text="Address" row="1" class="p-l-15 p-b-10 m-r-20 text-secondary" />
                <StackLayout row="1" col="1">
                <Label textWrap="true" class="p-b-10">
                        <FormattedString>
                            <Span class="fa text-primary" :text="AnimalCenter.address" />
                        </FormattedString>
                    </Label>
                </StackLayout>
                    

                    <Label text="Phone" row="2" class="p-l-15 p-b-10 m-r-20 text-secondary" />
                    <Label :text="AnimalCenter.phone" row="2" col="1" class="text p-b-10" />

                    <!-- <Label text="Seats" row="3" class="p-l-15 p-b-10 m-r-20 text-secondary" /> -->
                    <!-- <Label :text="adfg" row="3" col="1" class="text p-b-10" /> -->

                    <!-- <Label text="Transmission" row="4" class="p-l-15 p-b-10 m-r-20 text-secondary" /> -->
                    <!-- <Label :text="adfg" row="4" col="1" class="text p-b-10" /> -->

                    <!-- <Label text="Luggage" row="5" class="p-l-15 p-b-10 m-r-20 text-secondary" /> -->
                    <!-- <Label :text="adfg" row="5" col="1" class="text p-b-10" /> -->
                </GridLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    export default {
        props: ["AnimalCenter"],

        computed: {
            animalCenterData() {
                console.log("=================AnimalCenterDetails====================")
                console.log(this.AnimalCenter.name)
                return this.AnimalCenter || {};
            }
        },

        methods: {

        }
    };
</script>
