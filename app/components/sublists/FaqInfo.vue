<template>
  <StackLayout orientation="vertical">
    <Label :text="item.question" class="faq_question" textWrap="true"/>
    <Label :text="item.answer" class="faq_answer" textWrap="true"/>
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

.faq_question{
    font-weight: bold;
    font-size: 20;
    color: black;
  }
  .faq_answer{
    color: #454545;
  }
  
</style>
