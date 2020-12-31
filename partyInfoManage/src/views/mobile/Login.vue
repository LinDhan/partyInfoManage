<template>
    <div >
      <div class="tips r-v-center">
        <img src="../../assets/headerImg.png" alt="">
      <h2>党员信息表</h2>
      <p>请相关人员认真填写</p>
      </div>

      <button @click='gotoDetail'>开始填写</button>
    </div>
    </template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  components: {},
  mounted () {},
  methods: {
    gotoDetail: function () {
      this.$router.push('/mobile/fillInfo')
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
