<template>
    <Page class="page">
        <ActionBar class="action-bar">
           <NavigationButton @tap="$navigateBack()" android.systemIcon="ic_menu_back" />
            <Label text="Service Request"></Label>
        </ActionBar>

        <StackLayout class="home-panel">
            <WebView height="8192px" src="http://animalcare.lacounty.gov/service-request/" />
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

ActionBar {
  background-color: #009fca;
  color: #ffffff;
}
</style>