<template>
  <Button :text="title" @tap="action" />
</template>

<script>
  export default {
    props: {
      title: String,
      action: Function
    }
  }
</script>

<style scoped>
</style>
