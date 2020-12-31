<template>
  <div id="mobile" class="contain">
    <nav class="space-between">
      <span @click='$router.go(-1)' :style='{visibility:navShow}' >返回</span>
      <h2>党员信息表</h2>
      <span>...</span>
    </nav>
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      navShow: 'hidden'
    }
  },
  components: {},
  mounted () {
  },
  created () {
  },
  methods: {
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        if (val.path !== '/mobile' && val.path !== '/mobile/result') {
          this.navShow = 'visible'
        } else {
          this.navShow = 'hidden'
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
    nav{
    background-color:  RGB(237,70,70);
    padding: 0 5%;
    color: white;
    display: hidden;
  }

  .contain{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
