<template>
	<div>
		 <header class="header">
		 	<!--[myGroups,currGroups]-->
	        <nuxt-link to="/myGroups"  :class="isA ? 'myGroups currGroups':'myGroups'">我的拼团</nuxt-link>
	        <nuxt-link  to="/myOffered"  :class="isB ? 'myGroups currGroups':'myGroups'">我的参团</nuxt-link>
        </header>
	</div>
</template>

<script>
	export default {
		  name: 'groups',
		  props:["isA",'isB'],
		  data () {
		      return {
		      }
		  },
		    methods:{


		    }
    }
</script>

<style>
@import "../../assets/css/base.css";
@import "../../static/css/myGroups.css";
</style>
