<template>
    <StackLayout class="main">

        <StackLayout class="content">

            <Image stretch="aspectFit" class="card-img" @tap="onClickButton()"
                :src="item.cover" />
            <GridLayout width="100%" columns="auto,*" rows="auto,auto" class=""
                verticalAlignment="center" @tap="onClickButton()">
                
                <!-- Gender -->
                <Label :text="categoryIcon | fonticon" row="0" col="0"
                    rowSpan="2" :backgroundColor="item.categoryTag" class="fa category-icon" />
                    
                    <!--Name, age -->      
                    <Label row="0" col="1" class="fa item-name" textwrap="true" verticalAlignment= "center" horizontalAlignment="left" :text="item.name + ', ' + item.age"  />


                <GridLayout row="1" col="1" rows="auto" columns="auto,auto,auto">
                    <Label row="0" col="0" class="item-category" textwrap="true"
                        verticalAlignment="bottom" horizontalAlignment="left"
                        :text="item.category" />


                </GridLayout>
            </GridLayout>
            <StackLayout width="100%" marginTop="5" class="line" />

            <!-- BUG: problem with scroll transistion on ios emulator -->
            <!-- <ItemLike :item="item"></ItemLike> -->

            <GridLayout class="" marginTop="5" width="100%" row="3"
                    columns="*, auto, auto" rows="auto">
                    <GridLayout col="0" rows="auto" columns="auto,auto" @tap="onClickButton()">
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
        </StackLayout>

        <StackLayout width="100%" class="lineBreak" />

    </StackLayout>
</template>

<script>
// import ItemLike from "./itemLike";
import { isIOS, isAndroid } from "tns-core-modules/platform";
export default {
  props: ["item"],
  components: {
    // ItemLike
  },
  computed: {
    categoryIcon() {
      switch (this.item.gender) {
        case "M":
          this.item.categoryTag = "#0099ff"
          return "fa-mars";
          break;
        case "F":
          this.item.categoryTag = "#ffccff"
          return "fa-venus";
          break;
        default:
          return "fa-fire";
          break;
      }
    }
  },
  created() {
    // this.isLike =  this.item.isLike
    // this.isHeart =  this.item.isFavorite
  },
  mounted() {},
  methods: {
    animateFavorite() {
      if (isIOS) {
        return;
      }
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
      this.animateFavorite();
      this.item.isFavorite = !this.item.isFavorite;
    },
    onClickButton() {
      this.$emit("clicked", this.item);
    }
  },
  data() {
    return {
      isLike: false,
      isHeart: false
    };
  }
};
</script>
<style scoped>
.item-category {
  font-size: 14;
  color: #828282;
}

.gender-icon {
  padding-top: 3;
  padding-right: 3;
  font-size: 16;
  margin-right: 10;
}

.info-icon {
  padding-top: 3;
  padding-left: 3;
  color: gray;
  font-size: 14;
  margin-left: 10;
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
  padding-bottom: 2;
}

.item-category {
  font-size: 14;
  color: #828282;
}

.category-icon {
  text-align: center;
  padding-top: 5;
  border-color: white;
  vertical-align: center;
  font-size: 25;
  border-width: 1;
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
  margin-top: 16;
}

.card-img {
  width: 100%;
  height: 150;
  margin-bottom: 5;
}

.line {
  height: 0.5;
  border: none;
  color: #e0e0e0;
  background-color: #e0e0e0;
}

.lineBreak {
  height: 7;
  border: none;
  color: #e0e0e0;
  background-color: #e0e0e0;
}
</style>