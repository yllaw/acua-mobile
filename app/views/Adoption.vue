<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <StackLayout class="home-panel">
            <WebView height="8192px" src="http://animalcare.lacounty.gov/view-our-animals/" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
    }

</style>


