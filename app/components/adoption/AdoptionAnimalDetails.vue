<template>
    <Page actionBarHidden="true" class="anim-page"
        backgroundSpanUnderStatusBar="true">
        <StackLayout class="main" verticalAlignment="top">

                <!-- Animal Cover image -->
            <GridLayout class="anim-cover" rows="auto" columns="*">
                <Image row="0" col="0" marginTop="-40" height="180" stretch="aspectFill"
                    class="card-img" :src="item.cover" />
                <Label row="0" col="0" verticalAlignment="top"
                    horizontalAlignment="left" @tap="close" :text="'fa-arrow-left' | fonticon"
                    class="fa close" fontSize="24" />
            </GridLayout>

                <!-- Animal gallery images -->
            <ScrollView class="anim-images" orientation="horizontal">
                <StackLayout orientation="horizontal" class="">
                    <GridLayout v-bind:key="image" v-for="image in item.images" rows="auto" columns="*">
                        <Image class="card-img-thumb" row="0" col="0" :src="image.src"
                            stretch="aspectFit" />
                    </GridLayout>
                </StackLayout>
            </ScrollView>

            <!-- Animal details -->
            <GridLayout rows="auto,auto,auto,auto" columns="auto" class="content">

                <GridLayout class="anim-itemInfo" marginTop="15" row="1"
                    width="100%" columns="auto,*" rows="auto,auto,auto,auto"
                    verticalAlignment="center">
                    <Label :text="genderIcon | fonticon" row="0" col="0"
                        rowSpan="2" :backgroundColor="item.categoryTag" class="fa category-icon" />
                    <Label row="0" col="1" class="item-name" textwrap="true"
                        verticalAlignment="bottom" horizontalAlignment="left"
                        :text="item.name" />

                    <Label row="1" col="1" class="item-category" textwrap="true"
                        verticalAlignment="top" horizontalAlignment="left"
                        :text="item.category" />

                </GridLayout>

              <!-- social bar -->
                <StackLayout class="line anim-likes" row="2" width="100%"
                    marginTop="10" />

                <GridLayout class="anim-likes" marginTop="5" width="100%" row="3"
                    columns="*,auto,auto" rows="auto">
                    <GridLayout col="0" rows="auto" columns="auto,auto">
                        <Label col="0" row="0" ref="info" class="like-icon fa"
                            :text="'fa-info-circle' | fonticon" />
                        <Label col="1" row="0" class="layout" :text="item.breed_group + ' - ' + item.primary_breed"></Label>
                    </GridLayout>

                    <GridLayout col="1" rows="auto" columns="auto,auto" @tap="toggleHeart"
                        marginRight="15">
                        <Label col="0" row="0" ref="favorite" class="like-icon  fa"
                            :class="[item.isFavorite ? 'heart-active' : 'default']" :text="item.isFavorite ? 'fa-heart':'fa-heart-o' | fonticon" />
                        <Label col="1" row="0" class="layout" text="Favorite"></Label>
                    </GridLayout>

                    <StackLayout col="2" orientation="horizontal">
                        <Label ref="" class="like-icon layout fa" :text="'fa-share-square-o' | fonticon" />
                        <Label class="layout" text="Share"></Label>
                    </StackLayout>
                </GridLayout>
            </GridLayout>


            <!-- Animal Description Label (w/ icon) -->
            <StackLayout width="100%" class="lineBreak anim-likes" />

            <Gridlayout rows="auto,*" class="content anim-content" marginTop="15">

                <GridLayout row="0" rows="auto" marginBottom="5" columns="auto, auto">
                    <Label col="0" :text="'fa-tags' | fonticon" class="fa description-icon"
                        textWrap="true" />
                    <Label col="1" class="description-text" text="Description"
                        textWrap="true" />
                </GridLayout>


                <!-- Animal Description -->
                <StackLayout row="1">
                    <ScrollView>
                        <GridLayout rows="*, *, *, *, *, *, *, *" columns="auto, *" verticalAlignment="top"
                            horizontalAlignment="center">
                          
                        <Label row="0" col="0" class="description-value" text="Availability:" />

                        <Label row="0" col="1"  class="fa description-value" :class="item.isAvailable==true? 'isAvailable':'isNotAvailable'">
                        <FormattedString>
                            <Span :text="item.isAvailable==true? 'Available':'Not Available'" />
                            <Span :text="item.isAvailable==true? 'fa-check':'fa-times' | fonticon" />
                        </FormattedString>
                        </Label>


                        <Label row="1" col="0" class="description-value" text="Location:" />    
                        <Label row="1" col="1" class="description-value" :text="item.location" /> 

                        <Label row="2" col="0" class="description-value" text="Age:" /> 
                        <Label row="2" col="1" class="description-value" :text="item.age" />

                        <Label row="3" col="0" class="description-value" text="Gender: " /> 
                        <Label row="3" col="1" class="description-value" :text="item.gender" />     

                        <Label row="4" col="0" class="description-value" text="Breed Group:" /> 
                        <Label row="4" col="1" class="description-value" :text="item.breed_group" />                   
                        
                        <Label row="5" col="0" class="description-value" text="Primary Breed:" /> 
                        <Label row="5" col="1" class="description-value" :text="item.primary_breed" />    

                        <Label row="6" col="0" class="description-value" text="Animal Size:" />  
                        <Label row="6" col="1" class="description-value" :text="item.animal_size" />    
                          
                        <Label row="7" col="0" class="description-value" text="Primary Color:" /> 
                        <Label row="7" col="1" class="description-value" :text="item.primary_color" />    

                        </GridLayout>
                    </ScrollView>
                </StackLayout>


            </Gridlayout>

        </StackLayout>
    </Page>
</template>

<script>
export default {
  props: ["item"],
  components: {},
  computed: {
    genderIcon() {
      switch (this.item.gender) {
        case "M":
          this.item.categoryTag = "#0099ff";
          return "fa-mars";
          break;
        case "F":
          this.item.categoryTag = "#ffccff";
          return "fa-venus";
          break;
        default:
          return "fa-fire";
          break;
      }
    }
  },
  created() {
    this.images = [
      {
        src: "~/assets/images/food/pancake640.jpg"
      },
      {
        src: "~/assets/images/food/pancake640.jpg"
      },
      {
        src: "~/assets/images/food/pancake640.jpg"
      },
      {
        src: "~/assets/images/food/pancake640.jpg"
      }
    ];
    // this.isLike = this.item.isLike;
    // this.isHeart = this.item.isFavorite;
  },
  mounted() {},
  methods: {
    // navigateBack
    close() {
      this.$navigateBack();
    },
    // Animate 'Favorite' icon
    animateFavorite() {
      let imgLogo = this.$refs.favorite.nativeView;
      imgLogo
        .animate({
          scale: {
            x: 0.6,
            y: 0.6
          },
          duration: 50,
          delay: 0
        })
        .then(function() {
          return imgLogo.animate({
            scale: {
              x: 1.2,
              y: 1.2,
              duration: 50
            }
          });
        })
        .then(function() {
          return imgLogo.animate({
            scale: {
              x: 1,
              y: 1,
              duration: 100
            }
          });
        })
        .then(function() {});
    },
    toggleHeart() {
      // toggle isFavorite
      this.animateFavorite();
      this.item.isFavorite = !this.item.isFavorite;
    }
  },
  data() {
    return {
      images: null,
      isHeart: false
    };
  }
};
</script>
<style scoped>
/* CSS */
.close {
  font-size: 20;
  color: rgb(226, 229, 229);
  margin: 15 0 0 15;
}

TextView {
  border-width: 1;
  border-color: #ffffff;
}

.description-text {
  font-size: 14;
  font-weight: bold;
  color: black;
}

.description-icon {
  font-size: 16;
  font-weight: bold;
  color: #3e9edb;
  margin-right: 8;
  vertical-align: center;
}

.description-value {
  font-size: 14;
  color: black;
  margin: 8;
}

.description-value.isAvailable {
  color: green;
  font-weight: bold
}

.description-value.isNotAvailable {
  color: red;
  font-weight: bold
}

.rate {
  padding-top: 3;
  margin: 0;
  color: #ffe900;
  font-size: 18;
}

.rating-value {
  margin-left: 5;
}

.liked-active {
  color: #4080ff;
}

.heart-active {
  color: #b51213;
}

.default {
  color: #828282;
}

.layout {
  vertical-align: bottom;
  color: #828282;
  font-size: 14;
  height: 30;
  padding: 5 0 5 0;
}

.like-icon {
  vertical-align: bottom;
  height: 30;
  font-size: 16;
  margin-right: 2;
  padding: 5 5 5 5;
}

.item-name {
  font-size: 14;
  font-weight: bold;
}

.item-category {
  font-size: 14;
  color: #828282;
}

.category-icon {
  text-align: center;
  padding-top: 5;
  color: white;
  vertical-align: center;
  font-size: 25;
  border-width: 1;
  border-color: #ffffff;
  border-radius: 50%;
  margin-top: 4;
  margin-right: 15;
  width: 40;
  height: 40;
}

.content {
  margin-left: 16;
  margin-right: 16;
  margin-bottom: 3;
  /* margin-top: 16; */
}

.card-img {
  width: 100%;
  height: 250;
  margin-bottom: 5;
}

.card-img-thumb {
  background-color: rgb(230, 230, 230);
  vertical-align: center;
  border-radius: 5;
  width: 130;
  height: 70;
  margin-left: 5;
}

.line {
  height: 0.5;
  border: none;
  color: #e0e0e0;
  background-color: #e0e0e0;
}

.lineBreak {
  height: 0.5;
  border: none;
  color: #e0e0e0;
  background-color: #e0e0e0;
}


/* Animations */
.anim-page {
  background-color: #d4d6d8;
  animation-name: key-page;
  animation-duration: 2;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

@keyframes key-page {
  0% {
    background-color: #dadada;
  }

  20% {
    background-color: #dbd2d5;
  }

  100% {
    background-color: white;
  }
}

.anim-cover {
  opacity: 0;
  animation-name: key-cover;
  animation-duration: 1;
  animation-delay: 0.5;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

@keyframes key-cover {
  0% {
    opacity: 0;
    transform: translate(0, 550) scale(0, 0);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  30% {
    opacity: 0.5;
    transform: scale(0.6, 0.6);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1, 1);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}

.anim-images {
  opacity: 0;
  animation-name: key-images;
  animation-duration: 1;
  animation-delay: 0.7;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

@keyframes key-images {
  0% {
    opacity: 0;
    transform: translate(0, 550) scale(0, 0);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  30% {
    opacity: 0.5;
    transform: scale(0.6, 0.6);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1, 1);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}

.anim-itemInfo {
  opacity: 0;
  animation-name: key-itemInfo;
  animation-duration: 1;
  animation-delay: 1.2;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

@keyframes key-itemInfo {
  0% {
    opacity: 0;
    transform: translate(50, 50);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}

.anim-likes {
  opacity: 0;
  animation-name: key-likes;
  animation-duration: 1;
  animation-delay: 1.5;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

@keyframes key-likes {
  0% {
    opacity: 0;
    transform: translate(50, 50);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}

.anim-content {
  opacity: 0;
  animation-name: key-content;
  animation-duration: 1;
  animation-delay: 1.8;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

@keyframes key-content {
  0% {
    opacity: 0;
    transform: translate(50, 50);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}
</style>