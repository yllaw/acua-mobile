<template>
	<page actionBarHidden="false" backgroundSpanUnderStatusBar="true">
		<!-- @loaded="onLoaded" -->
        <ActionBar class="navTab">
            <Label text="Animals for Adoption"></Label>
        </ActionBar>

		<GridLayout rows="auto,auto,*" columns="auto">

<!--nav tab-->

			<GridLayout  row="1" ref="navTab" class="navTab" verticalAlignment="top" height="50"
					width="100%"  rows="auto" columns="auto,auto">
														<!--active class tab navigation****-->
					<GridLayout class="tabview" :class="selectedTabview==0?'active':''"
							@tap="popular" rows="*,auto" cols="auto" col="0" row="0"
							width="50%">
							<Label v-show="selectedTabview==0" row="0" class="fa navIcon"
									:text="selectedTabview==0?'fa-shopping-basket':'' | fonticon"/>
							<Label :class="selectedTabview==0?'active':''" row="1"
									text="Animals" class="tabviewText"></Label>
					</GridLayout>
					<GridLayout class="tabview" :class="selectedTabview==1?'active':''"
							@tap="showCategory" rows="*,auto" cols="auto" col="1" row="0"
							width="50%">
							<Label v-show="selectedTabview==1" row="0" class="fa navIcon"
									:text="selectedTabview==1?'fa-filter':'' | fonticon"/>
							<Label :class="selectedTabview==1?'active':''" row="1"
									text="Filter" class="tabviewText"></Label>							
					</GridLayout>
					<!-- end nav-->
			</GridLayout>

<!--selected tab view animal -->
<!--item -->
			<GridLayout v-show="selectedTabview == 0" row="2" width="100%" backgroundColor="white">
				<ListView ref="listview" separatorColor="transparent" for="item in items" :key="index">
					<v-template>
						<item :item="item" @clicked="showItem(item)" />
					</v-template>
				</ListView>
			</GridLayout>

<!--selected tab view filter -->
			<GridLayout v-show="selectedTabview == 1" row="2" width="100%" backgroundColor="white">		
				<ListView ref="listview" separatorColor="transparent" for="item in itemsCategory" :key="index">
					<v-template>
						<Category :item="item"> </Category>
					</v-template>
				</ListView>
			</GridLayout>

			<GridLayout v-show="selectedTabview == 2" row="2" width="100%" backgroundColor="white">		
			</GridLayout>
<!-- bottom nav -->

			<!-- <navBottom row="3" /> -->

		</GridLayout>
</page>
</template>
<script>
	// import { SwissArmyKnife } from "nativescript-swiss-army-knife";
	import { isIOS, isAndroid } from 'tns-core-modules/platform'
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
		itemsCategory(){
			return this.category.slice().reverse();
		}
	},

	mounted () {
		// SwissArmyKnife.setAndroidStatusBarColor("#b51213");
	},
	data() {
		return {
			lastDelY: 0,
			headerCollapsed: false,
			selectedTab: 0,
			selectedTabview: 0,
			items: [{
				name: "Twinkie",
				cover: "~/assets/images/dog-button.jpg",
				images: [
						{src: "~/assets/images/food/burger/burger1.jpg"},
						{src: "~/assets/images/food/burger/burger2.jpg"},
						{src: "~/assets/images/food/burger/burger3.jpg"},
						{src: "~/assets/images/food/burger/burger4.jpg"},
						{src: "~/assets/images/food/burger/burger5.jpg"},
						{src: "~/assets/images/food/burger/burger6.jpg"}
					],
				category: "Dog",
				categoryTag: "#2D9CDB",
				price: "300.00",
				likes: 987,
				isLike: false,
				isFavorite: true,
				comments: 13,
				rating: "4.5",
				description: "a"
			},
			{
				name: "Boogie",
				cover: "~/assets/images/cat-roaming-icon.png",
				images: [
					{src: "~/assets/images/food/pancake/pancake1.jpg"},
					{src: "~/assets/images/food/pancake/pancake2.jpg"},
					{src: "~/assets/images/food/pancake/pancake3.jpg"},
					{src: "~/assets/images/food/pancake/pancake4.jpg"},
					{src: "~/assets/images/food/pancake/pancake5.jpg"},
					{src: "~/assets/images/food/pancake/pancake6.jpg"}
				],
				category: "Cat",
				categoryTag: "#e4ce0d",
				price: "230.00",
				likes: 891,
				isLike: true,
				isFavorite: true,
				comments: 7,
				rating: "4.0",
				description: "a"
			},
			{
				name: "Snoopy",
				cover: "~/assets/images/cat-button.jpg",
				images: [
					{src: "~/assets/images/food/cake/cake1.jpg"},
					{src: "~/assets/images/food/cake/cake2.jpg"},
					{src: "~/assets/images/food/cake/cake3.jpg"},
					{src: "~/assets/images/food/cake/cake4.jpg"}
				],
				category: "Dog",
				categoryTag: "#27AE60",
				price: "300.00",
				likes: 730,
				isLike: true,
				isFavorite: true,
				comments: 11,
				rating: "4.0",
				description: "a"
            },
            {
				name: "Ariana",
				cover: "~/assets/images/cat-button.jpg",
				images: [
					{src: "~/assets/images/food/cake/cake1.jpg"},
					{src: "~/assets/images/food/cake/cake2.jpg"},
					{src: "~/assets/images/food/cake/cake3.jpg"},
					{src: "~/assets/images/food/cake/cake4.jpg"}
				],
				category: "Dog",
				categoryTag: "#27AE60",
				price: "300.00",
				likes: 730,
				isLike: true,
				isFavorite: true,
				comments: 11,
				rating: "4.0",
				description: "a"
			},
			],
			category: [
			{
				cover: "~/assets/images/food/burger640.jpg",
				category: "Cat",
				count: "13",
			},
			{
				cover: "~/assets/images/food/pancake640.jpg",
				category: "Dog",
				count: "5",
			},
			{
				cover: "~/assets/images/food/cake640.jpg",
				category: "Livestock",
				count: "9",
			},
			{
				cover: "~/assets/images/food/beer640.jpg",
				category: "Other",
				count: "7",
			},
		
			]
		};
	},
	methods: {
		search(){
			console.log('search')
		},
		bell(){
			console.log('bell')
		},
		showItem(payload) {
			this.$navigateTo(ItemDetails,{
				props: {
					item: payload
				},
				animated: true,
				transition: {
					name: "slideTop",
					duration: 380,
					curve: "easeIn"
				}
			})
		},
		
		popular() {
			this.selectedTabview = 0;
		},
		showCategory() {
			this.selectedTabview = 1;
		},
		showPromos() {
			this.selectedTabview = 2;
		},
		home() {
			this.selectedTab = 0;
		},
		cart() {
			this.selectedTab = 1;
		},
		history() {
			this.selectedTab = 2;
		},
		about() {
			this.selectedTab = 3;
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
	horizontal-align: center;
}
.tabviewText.active {
	margin-top: 0;
	margin-bottom: 5;
	font-weight: bold;
	color: white;
	vertical-align: center;
}

.navIcon {
    text-align: center
}

.navTab {
  background-color: #009fca;
  color: #ffffff;
}
.navTabview {
	background-color: blue;
}
.status-img {
	margin-top: 4;
	margin-right: 20;
	width: 30;
	height: 30;
}
.status-profile {
	border-width: 1;
	border-color: #ffffff;
	background-color: #f1ebeb;
	border-radius: 50%;
	margin-top: 4;
	margin-right: 15;
	width: 30;
	height: 30;
}
.status-title {
	color: white;
	font-size: 18;
	margin-left: 15;
	margin-top: 8;
	horizontal-align: left;
	vertical-align: center;
}
</style>