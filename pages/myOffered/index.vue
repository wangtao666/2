<template>
	<div>
		<groups :isA='isA' :isB='isB' />
		<section class="groups">
      <div class="everyGroups borderBox" v-for="(item,$index) in groupsData">
        <a class="borderBox" :class="{groupsCur: $index==indexGroup}"   @click="toggleTab(item.group, $index)" href="javascript:;">{{item.name}}</a>
      </div>
		</section>
		<div class="content">

			<underWay :is="currentTab"  keep-alive></underWay>

		</div>
	</div>
</template>

<script>
	import groups from '../../components/myGroups/groups'
	import underWay from '../../components/myGroups/underWay'
	import offeredSuccess from '../../components/myGroups/offeredSuccess'
	import collageFailure from '../../components/myGroups/collageFailure'
	export default {
		name: 'fightGroups',
		components: {
			'groups': groups,
			'underWay': underWay,
			'offeredSuccess': offeredSuccess,
			'collageFailure': collageFailure,

		},
		data() {
			return {
				isA: false,
				isB: true,
				currentTab: 'underWay',
        groupsData:[
          {"name":"参团进行中","group":"underWay"},
          {"name":"参团成功","group":"offeredSuccess"},
          {"name":"参团失败","group":"collageFailure"}
        ],
        "indexGroup":"0"

			}
		},
		methods: {
			toggleTab(tab, $index) {
        this.currentTab = tab;
        this.indexGroup = $index;
			}
		}

	}
</script>

<style>

</style>
