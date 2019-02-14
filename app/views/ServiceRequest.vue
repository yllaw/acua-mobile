<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel">
                <!--Add your page content here-->
                <Button text="View Confidentiality Policy" @tap="onButtonTap" />
                <RadDataForm :source="serviceForm" :metadata="md" ref="dataForm" />
                <Button text="Submit Request" @tap="onButtonTap" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadDataForm from "nativescript-ui-dataform/vue";
    Vue.use(RadDataForm);

    export default {
        methods: {
            onButtonTap() {
                console.log("Button was pressed");
            }
        },

        data() {
            return {
                serviceForm: {
                    typeOfService: "Stray Dog - Loose",
                    ownerKnown: false,
                    address: "",
                    nearestCrossStreets: "",
                    detailedDescriptionOfSituation: "",
                    detailedDescriptionOfAnimals: "",
                    yourName: "",
                    yourPhone: "",
                    yourAddress: "",
                    yourEmailAddress: "",
                    reEnterYourEmailAddress: ""
                },
                md: {}
            };
        },
        created() {
            this.md = {
                propertyAnnotations: [{
                        name: "typeOfService",
                        displayName: "Type of Request:",
                        required: true
                    },
                    {
                        name: "ownerKnown",
                        displayName: "Owner Known?",
                        required: true
                    },
                    {
                        name: "address",
                        displayName: "Address:*",
                        required: true
                    },
                    {
                        name: "nearestCrossStreets",
                        displayName: "Nearest Cross Streets:*",
                        required: true
                    },
                    {
                        name: "detailedDescriptionOfSituation",
                        displayName: "Detailed Description of Situation:*",
                        required: true
                    },
                    {
                        name: "detailedDescriptionOfAnimals",
                        displayName: "Detailed Description of Animal(s) Involved:*",
                        required: true
                    },
                    {
                        name: "yourName",
                        displayName: "Your Name:*",
                        required: true
                    },
                    {
                        name: "yourPhone",
                        displayName: "Your Phone*",
                        required: true
                    },
                    {
                        name: "yourAddress",
                        displayName: "Your Address*",
                        required: true
                    },
                    {
                        name: "yourEmailAddress",
                        displayName: "Your Email Address:*",
                        required: true
                    },
                    {
                        name: "reEnterYourEmailAddress",
                        displayName: "Re-enter Your Email Address:*",
                        required: true
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>