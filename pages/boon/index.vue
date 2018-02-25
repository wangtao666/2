<template>
  <div class="el_box">
    <div class="el_banner">
    </div>
    <div class="el_personnel">
      <span class="el_avatar"></span>
      <span class="el_jion">XX正在组团抢优惠，快来加入吧！</span>
    </div>
    <div class="btg_time_line clean width750" id="fbb">
      <section class="_right timeall">
        <div class="timeTxt">距结束</div>
        <ul class="btg-time">
          <li class="el_timeDay">{{ $store.state.day }}天</li>
          <li class="el_timeH">{{ $store.state.hour }}</li>
          <li class="el_timeM">{{ $store.state.minute }}</li>
          <li class="el_timeS">{{ $store.state.second }}</li>
        </ul>
      </section>
    </div>
    <div class="el_nav">
      <div class="el_navs">
        <ul class="clear" ref="mybox">
          <li :class="{active: active == index}" @click="check(index, item.id)" v-for="(item, index) in clas" :key="index">{{ item.categoryName }}</li>
        </ul>
      </div>
    </div>
    <div class="el_content">
      <div class="el_goods" v-for="(item, index) in goodss" :key="index" @click="goDetail">
        <div class="el_img">
          <img :src="item.goodsPic" alt=""/>
        </div>
        <div class="el_bewrite">
          <ul>
            <li>{{ item.bewrite }}</li>
            <li>团长价:
              <span>￥</span>
              <span>{{ item.salesPrice }}</span>
            </li>
            <li>
              拼团价：
              <span>￥</span>
              <span>{{ item.spellPrice }}</span>
              <span>
                  市场价:
                  <span>￥{{ item.marketPrice }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        active: 0,
        clas: [],
        goodss: [],
        alldata:[]
      }
    },
    head () {
      return {
        title: '拼团抢福利'
      }
    },
    methods: {
      check: function (e, attr) {
        this.active = e
        this.goodss = this.alldata[attr]
      },
      goDetail: function () {
        location.href = '/groupDetails'
      },
      start: function () {// 倒计时
        this.$store.commit('increment')
      }
    },
    mounted () {
      let self = this
      let elWidth = 0
      let lis = self.$refs.mybox.children
      for (var i = 0; i < lis.length; i++) {
        elWidth += lis[i].clientWidth
      }
      self.$refs.mybox.style.width = elWidth + 30 + 'px'
      //开始倒计时
      this.start()
    },
    async asyncData () {
      return axios.all([
        axios.get('http://127.0.0.1:3222/api/gettitle'),
        axios.get('http://127.0.0.1:3222/api/getclass')
      ])
        .then(axios.spread(function (reposResp, getclass) {
          console.log(reposResp.data.choose)
          let names = [];
          // 获得所有对象的名称
          for(let name in getclass.data) {
            names.push(name)
          }
          // 上面请求都完成后，才执行这个回调方法
          return {
            // 头部导航内容
            clas: reposResp.data.choose,
            // 取索引为1的对象默认展示
            goodss: getclass.data[names[0]],
            // 分类数据记录一下
            alldata: getclass.data
          }
        }))
    }
  }
</script>
<style>
    @import "~assets/css/boon.css"
</style>
