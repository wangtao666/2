<template>
<div id="participate">
  <div class="el_choose">选择团长，参团吧</div>
  <div class="el_content">
    <div class="el_goods" v-for="(item, index) in goodss" :key="index">
      <div class="el_img">
        <img :src="item.spellImg" alt="">
      </div>
      <div class="el_bewrite">
        <ul>
          <li>{{ item.spellName }}</li>
          <li>
            团长:
            <span>{{ item.headName }}</span>
          </li>
          <li>
            <span>{{ item.joinSpellNum }}人参团</span>
            <span class="el_btn" @click="goct">去参团</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="el_dailog" v-show="data1">
    <div class="el_window" ref="dailog">
      <div class="el_cloose" @click="cloose">x</div>
      <div class="el_explain">
        <p>恭喜您！参团成功！</p>
        <p>快“去看看”，拼团抢福利吧！</p>
      </div>
      <div class="el_definite">
        <div @click="gosee">去看看</div>
      </div>
    </div>
  </div>
  <Load v-show="isShow"></Load>
</div>
</template>
<script>
  import axios from 'axios'
  import Load from '../../components/load'
  import filter from '../../assets/js/filter'
  export default {
    data () {
      return {
        goodss: {},
        data1: false,
        isShow: true
      }
    },
    async asyncData () {
      return axios.get('http://127.0.0.1:3222/api/getGroupList')
        .then((res) => {
          return {
            goodss: res.data.data
          }
        })
    },
    methods: {
      goct: function () {
        if (!this.data1) {
          this.data1 = true
        }
      },
      cloose: function () {
        this.data1 = false
      },
      gosee: function () {
        location.href = 'boon'
      }
    },
    mounted () {
      let elWidth = (window.innerWidth - 605) / 2
      let elHeight = (window.innerHeight - 358) / 2
      let self = this
      this.$refs.dailog.style.left = elWidth + 'px'
      this.$refs.dailog.style.top = elHeight + 'px'
      //加载动画
      setTimeout(function () {
        self.isShow = false
        filter.flter('participate')
      }, Math.random() * 1000)
    },
    head () {
      return {
        title: '拼团抢福利'
      }
    },
    components: { Load }
}
</script>
<style>
    @import "~assets/css/participate.css"
</style>
