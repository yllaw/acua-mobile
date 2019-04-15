<template>
<StackLayout>
  <Image verticalAlignment="center" :src="src" stretch="aspectFit" height="110" ios:height="120" class="image" @tap="action" />
  <Button verticalAlignment="bottom" class="button" :text="`${icon} ${title}`" @tap="action" />
</StackLayout>
</template>

<script>
  export default {
    props: {
      icon: String,
      title: String,
      action: Function,
      src: String
    }
  }
</script>

<style scoped>

/* button on android is styled with default setting when border radius is omitted*/
.button{
  border-radius: 25%;
}
</style>
