<template>
<StackLayout>
  <Image :src="src" stretch="aspectFit" height="100" class="image" @tap="action" />
  <Button class="button" :text="title" @tap="action" />
</StackLayout>
</template>

<script>
  export default {
    props: {
      title: String,
      action: Function,
      src: String
    }
  }
</script>

<style scoped>

.image {
  padding-bottom: 10em;
}

.button{
  padding-top: 10em;
  border-radius: 25%;
}
</style>
