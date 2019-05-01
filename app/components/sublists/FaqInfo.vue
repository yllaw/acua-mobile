<template>
  <StackLayout orientation="vertical">
    <Label class="homepage-blue text-primary list-group-item-text font-weight-bold" textWrap="true">
    <FormattedString>
        <Span :text="item.query"/>
      </FormattedString>
    </Label>
    
    <Label class=".faq_answer .list-group-item-content" textWrap="true">
      <FormattedString>
        <Span text.decode="&#9;"/>
        <Span :text="item.answer"/>
      </FormattedString>
    </Label>
 
  </StackLayout>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style scoped lang="scss">
@import "@/AnimalCenter";

.faq_question {
  font-weight: bold;
  font-size: 20;
  color: black;
}
.faq_answer {
  color: #454545;
}

.list-group-item-text {
  margin: 2 3;
}
.list-group-item-content {
  padding: 8 15 4 15;
  background-color: $background-light;
}

.homepage-blue {
  color: $homepage-blue;
}
</style>
