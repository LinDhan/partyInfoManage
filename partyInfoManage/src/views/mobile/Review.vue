<template>
  <div >
    <div class='card' v-for='(infoItem,infoIndex) in infoArr' :key='infoIndex'>
      <div class="row" v-for='(item,index) in infoItem' :key='index'>
        <span class="label">{{item[0] | toChinese(that)}} </span>
        <span class="content">{{item[1]}}</span>
    </div>
    </div>
      <div class="buttom">
        <button class="backButton" @click='$router.go(-1)'>修改</button>
        <button class="checkButton"  @click='changeRouter'>提交</button>
      </div>
  </div>
  </template>

<script>
export default {
  name: '',
  data () {
    return {
      that: this,
      info: {},
      infoArr: [],
      // 翻译数组
      ETC: {
        name: '姓名',
        sex: '性别',
        nation: '民族',
        IDCard: '身份证号',
        birthday: '生日',
        school: '毕业学校',
        education: '学历',
        class: '人员类别',
        branch: '转入支部',
        joinDate: '入党日期',
        conversionDate: '转正日期',
        introducer1: '介绍人1',
        introducer2: '介绍人2',
        normal: '党籍正常',
        fileAddress: '档案地',
        phoneNumber: '手机号码',
        address: '家庭住址'
      }
    }
  },
  components: {},
  mounted () {
    this.info = this.$route.params.info
    this.OTA(Object.entries(this.info))
  },
  methods: {
    // 获取的对象拆分成数组
    OTA: function (arr) {
      this.infoArr.push(arr.slice(0, 5), arr.slice(5, 7), arr.slice(7, 15), arr.slice(15, 17))
    },

    // 按钮事件。返回或提交
    changeRouter: function () {
      this.$axios.post('/api/user/addOne', this.info).then(e => {
        this.$router.push({
          name: 'Result'
        })
      }).catch(e => {
        console.log(e)
      })
    }
  },
  filters: {
    // 英译中筛选器。当传入的英文键名在翻译数组内时，返回中文值
    toChinese: function (e, that) {
      var obj = that.ETC
      for (var i in obj) {
        if (i === e) {
          return obj[i]
        }
      }
    }
  }
}
</script>

  <style lang='scss' scoped>

  .buttom{
    width: 100%;
    background-color: white;
  }
  </style>
