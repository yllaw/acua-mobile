<template>
	<page actionBarHidden="false" backgroundSpanUnderStatusBar="true">
		<!-- @loaded="onLoaded" -->
        <ActionBar class="actionbar navTab">
           <NavigationButton @tap="$navigateBack()" android.systemIcon="ic_menu_back" />
            <Label fontSize="18" text="Animals for Adoption"></Label>
        </ActionBar>

		<GridLayout rows="auto,auto,*" columns="auto">

<!--nav tab-->

			<GridLayout  row="1" ref="navTab" class="navTab" verticalAlignment="top" height="50"
					width="100%"  rows="auto" columns="auto,auto">
														<!--active class tab navigation****-->
					<GridLayout class="tabview" :class="selectedTabview==0?'active':''"
							@tap="adoptionList" rows="*,auto" cols="auto" col="0" row="0"
							width="50%">

							<Label v-show="selectedTabview==0" row="0" class="fa navIcon"
									:text="selectedTabview==0?'fa-paw':'' | fonticon"/>

							<Label horizontalAlignment="center" :class="selectedTabview==0?'active':''" row="1"
									text="Animals" class="tabviewText"></Label>

					</GridLayout>

					<GridLayout class="tabview" :class="selectedTabview==1?'active':''"
							@tap="showCategory" rows="*,auto" cols="auto" col="1" row="0"
							width="50%">

							<Label v-show="selectedTabview==1" row="0" class="fa navIcon"
									:text="selectedTabview==1?'fa-filter':'' | fonticon"/>

							<Label :class="selectedTabview==1?'active':''" row="1"
									text="Filter" horizontalAlignment="center" class="tabviewText"></Label>						

					</GridLayout>
					<!-- end nav-->
			</GridLayout>

<!--selected tab set to view animal -->
<!--item -->
			<GridLayout v-show="selectedTabview == 0" row="2" width="100%" backgroundColor="white">
<!--TODO: CHANGE :KEY TO DIFFERENT VALUE -->
<!-- VUE WARNING: Duplicate keys detected: '[object Object]'. This may cause an update error. found in <AdoptionAnimalDetails> -->
				<ListView ref="listview" separatorColor="transparent" for="item in items" :key="index">

					<v-template>
						<item :item="item" @clicked="showItem(item)" />
					</v-template>

				</ListView>
			</GridLayout>

<!--selected tab view filter -->
			<GridLayout v-show="selectedTabview == 1" row="2" width="100%" backgroundColor="white">		

				<RadListView ref="listview" separatorColor="transparent" for="item in itemsCategory" :key="index">

					<v-template>
						<Category :item="item"> </Category>
					</v-template>
          
				</RadListView>
			</GridLayout>

		</GridLayout>
</page>
</template>
<script>
// import { SwissArmyKnife } from "nativescript-swiss-army-knife";
import { isIOS, isAndroid } from "tns-core-modules/platform";
// import navBottom from "./custom/navBottom";
import Item from "@/components/adoption/AnimalCard";
import Category from "@/components/adoption/category";
import ItemDetails from "@/components/adoption/AdoptionAnimalDetails";

const gestures = require("ui/gestures");
const app = require("application");

export default {
  components: {
    // navBottom,
    Item,
    Category
  },
  computed: {
    itemsCategory() {
      return this.category.slice().reverse();
    }
  },

  mounted() {
    // SwissArmyKnife.setAndroidStatusBarColor("#b51213");
  },
  data() {
    return {
      lastDelY: 0,
      headerCollapsed: false,
      selectedTab: 0,
      selectedTabview: 0,
      items: [
        {
          name: "Twinkie",
          cover: "~/assets/images/dog-button.jpg",
          images: [
            { src: "~/assets/images/bee.png" },
            { src: "~/assets/images/peacock.png" },
            { src: "~/assets/images/rattlesnake.png" },
            { src: "~/assets/images/coyote.png" },
            { src: "~/assets/images/mountainlion.png" },
            { src: "~/assets/images/opossum.png" }
          ],
          category: "Dog",
          categoryTag: "#2D9CDB",
          breed_group: "Toy",
          primary_breed: "Chihuahua",
          age: "4 months",
          gender: "F",
          animal_size: "Small",
          primary_color: "Tan",
          location: "Downey",
          isAvailable: true,
          isFavorite: false,
        },
        {
          name: "Boogie",
          cover: "~/assets/images/cat-roaming-icon.png",
          images: [
            { src: "~/assets/images/bee.png" },
            { src: "~/assets/images/peacock.png" },
            { src: "~/assets/images/rattlesnake.png" },
            { src: "~/assets/images/coyote.png" },
            { src: "~/assets/images/mountainlion.png" },
            { src: "~/assets/images/opossum.png" }
          ],
          category: "Cat",
          categoryTag: "#6127ae",
          breed_group: "Shorthair",
          primary_breed: "Tabby",
          age: "6",
          gender: "M",
          animal_size: "Small",
          primary_color: "Tan",
          location: "Downey",
          isAvailable: true,
          isFavorite: true,
        },
        {
          name: "Snoopy",
          cover: "~/assets/images/snoopy.jpg",
          images: [
            { src: "~/assets/images/bee.png" },
            { src: "~/assets/images/peacock.png" },
            { src: "~/assets/images/rattlesnake.png" },
            { src: "~/assets/images/coyote.png" },
            { src: "~/assets/images/mountainlion.png" },
            { src: "~/assets/images/opossum.png" }
          ],
          category: "Dog",
          categoryTag: "#27AE60",
          breed_group: "Hound",
          primary_breed: "Beagle",
          age: "10",
          gender: "M",
          animal_size: "Small",
          primary_color: "Tan",
          location: "Downey",
          isAvailable: false,
          isFavorite: true,
        },
        {
          name: "Ariana",
          cover: "~/assets/images/cat-button.jpg",
          images: [
            { src: "~/assets/images/bee.png" },
            { src: "~/assets/images/peacock.png" },
            { src: "~/assets/images/rattlesnake.png" },
            { src: "~/assets/images/coyote.png" },
            { src: "~/assets/images/mountainlion.png" },
            { src: "~/assets/images/opossum.png" }
          ],
          category: "Cat",
          categoryTag: "#e4ce0d",
          breed_group: "Longhair",
          primary_breed: "Domestic",
          gender: "F",
          animal_size: "Small",
          primary_color: "Gray",
          location: "Downey",
          isAvailable: true,
          isFavorite: true,
          age: "10 months",
          isFavorite: false,
        }
        // {
        //   name: "Muffin",
        //   cover: "~/assets/images/doggo.png",
        //   images: [
        //     { src: "~/assets/images/bee.png" },
        //     { src: "~/assets/images/peacock.png" },
        //     { src: "~/assets/images/rattlesnake.png" },
        //     { src: "~/assets/images/coyote.png" },
        //     { src: "~/assets/images/mountainlion.png" },
        //     { src: "~/assets/images/opossum.png" }
        //   ],
        //   category: "Dog",
        //   categoryTag: "#27AE60",
        //   breed: "300.00",
        //   likes: 730,
        //   isLike: true,
        //   isFavorite: true,
        //   comments: 11,
        //   rating: "4.0",
        //   description: "a"
        // }
      ],
      category: [
        {
          cover: "~/assets/images/food/burger640.jpg",
          category: "Cat",
          count: "13"
        },
        {
          cover: "~/assets/images/food/pancake640.jpg",
          category: "Dog",
          count: "5"
        },
        {
          cover: "~/assets/images/food/cake640.jpg",
          category: "Livestock",
          count: "9"
        },
        {
          cover: "~/assets/images/food/beer640.jpg",
          category: "Other",
          count: "7"
        }
      ]
    };
  },
  methods: {
    search() {
      console.log("search");
    },
    bell() {
      console.log("bell");
    },
    showItem(payload) {
      this.$navigateTo(ItemDetails, {
        props: {
          item: payload
        },
        animated: true,
        transition: {
          name: "slideTop",
          duration: 380,
          curve: "easeIn"
        }
      });
    },

    adoptionList() {
      this.selectedTabview = 0;
    },

    // TODO: show filter
    showCategory() {
      this.selectedTabview = 1;
    },
    toggleHeart() {
    if (isIOS) {
        return;
      }
      this.animateFavorite();
      this.item.isFavorite = !this.item.isFavorite;
    }
  }
};
</script>

<style>
.tabview.active {
  border-bottom-color: white;
  border-bottom-width: 3;
  margin: 0;
  height: 50;
}
.tabviewText {
  margin-top: 15;
  margin-bottom: 5;
  font-size: 13;
  color: #d8d2d2;
}
.tabviewText.active {
  margin-top: 0;
  margin-bottom: 5;
  font-weight: bold;
  color: white;
  vertical-align: center;
}

.navIcon {
  text-align: center;
  margin-top: 3;
}

.navTab {
  background-color: #009fca;
  color: #ffffff;
}
.navTabview {
  background-color: blue;
}

</style>