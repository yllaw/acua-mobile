<template>
  <StackLayout orientation="vertical">
    <Label :text="item.question" />
    <Label :text="item.answer" />
  </StackLayout>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style scoped>

</style>
