<template>
  <div>
      <div class="tips r-v-center">
        <img src="../../assets/result.png" alt="">
      <h2>成功提交</h2>
      <p>感谢您的支持及参与</p>
      </div>
      <button @click='backHome'>返回首页</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  components: {},
  mounted () {},
  methods: {
    backHome: function () {
      this.$router.push('/mobile')
    }
  }
}
</script>

<style lang='scss' scoped>
.tips{
        text-align: center;
        height: 50vh;
      }
      button{
        padding: 1rem;
        background-color: RGB(237,70,70);
        border-radius: 3px;
        margin: 0 5%;
        width: 90%;
        border:none;
        color: white;
      }
</style>
