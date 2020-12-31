<template>
    <div class="container">
        <div class="check v-space-around r-center">
            <div class="rect rotate90">
            </div>
            <div class="selection v-space-around r-center">
                <button class="backButton  rotate90" @click="changeRouter(-1)">取消</button>
                <button class="checkButton  rotate90" @click="changeRouter(1)">确认</button>
            </div>
        </div>
        <div class="signature r-v-center">
            <h3 class="rotate90">签字区域</h3>
        </div>
    </div>
  </template>

<script>
export default {
  name: 'signature',
  data () {
    return {

    }
  },
  components: {},
  mounted () {},
  methods: {
    changeRouter: function (e) {
      switch (e) {
        case -1:
          this.$router.go(-1)
          break
        case 1:
          this.$router.push({
            name: 'Review',
            params: { info: this.$route.params.info }
          })
      }
    }
  }
}
</script>

  <style lang='scss' scoped>
      .container{
          display: flex;
          flex-direction: row;
          flex:1;
          margin: 0;padding: 0;
          width: 100%;
      }
      .check{
          width: 30%;
          background-color: RGB(247,247,247);
      }
      .signature{
          width:70%;
      }

      .rotate90{
          transform: rotate(90deg);
      }
      .rect{
          width:100%;
          height: 10%;
          background-color: white;
      }
      .selection{
          height: 30%;
      }
      button{display: block; width: 60%;}
  </style>
