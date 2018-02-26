<template>
	<div id="wrap">
		<groups :isA='isA' :isB='isB' />
		<section class="groups">
      <div class="everyGroups borderBox" v-for="(item,$index) in groupsData">
        <a class="borderBox" :class="{groupsCur: $index==indexGroup}"   @click="toggleTab(item.group, $index)" href="javascript:;">{{item.name}}</a>
      </div>
      </section>
		<div class="content">
			<!--子组件，显示不同的 tab   is 特性动态绑定子组件    keep-alive 将切换出去的组件保留在内存中-->
			<!--拼团进行中-->
			<underWay :is="currentTab" :hide='hide' :hideBtn='hideBtn'></underWay>
			<!--拼团成功-->
			<!--<fightSuccess/>-->
		</div>
	</div>
</template>

<script>
	import groups from '../../components/myGroups/groups'
	import underWay from '../../components/myGroups/underWay'
	import fightSuccess from '../../components/myGroups/fightSuccess'
	import collageFailure from '../../components/myGroups/collageFailure'
	import collageFull from '../../components/myGroups/collageFull'
	export default {
		name: 'box',
		components: {
			'groups': groups,
			'underWay': underWay,
			'fightSuccess': fightSuccess,
			'collageFailure': collageFailure,
			'collageFull': collageFull
		},
		data() {
			return {
				currentTab: 'underWay',
				isA: true,
				isB: false,
				hide:true,
				hideBtn:true,
        groupsData:[
          {"name":"拼团进行中","group":"underWay"},
          {"name":"拼团成功","group":"fightSuccess"},
          {"name":"拼团失败","group":"collageFailure"},
          {"name":"拼团完成","group":"collageFull"}],
        "indexGroup":"0"
			}
		},
		async asyncData() {

		},
		methods: {
			toggleTab(tab, $index) {
				this.currentTab = tab; // tab 为当前触发标签页的组件名
        this.indexGroup = $index;

			}
		}

	}
</script>

<style scoped>
	@import "../../assets/css/base.css";
	@import "../../static/css/myGroups.css";
</style>
