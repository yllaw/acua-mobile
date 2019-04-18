<template>
<StackLayout>
  <Button verticalAlignment="center" class="button" :text="`${title} ${icon} `" @tap="action" />
</StackLayout>
</template>

<script>
  export default {
    props: {
      icon: String,
      title: String,
      action: Function,
    }
  }
</script>

<style scoped>

/* button on android is styled with default setting when border radius is omitted*/
.button{
  border-radius: 25%;
  text-transform: capitalize;
}

</style>
