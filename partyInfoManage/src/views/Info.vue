<template>
  <div>
      <div class='card' v-for='(infoItem,infoIndex) in infoArr' :key='infoIndex'>
      <div class="row" v-for='(item,index) in infoItem' :key='index'>
        <span class="label">{{item[0] | toChinese(that)}} </span>
        <span class="content">{{item[1]}}</span>
    </div>
    </div>
      <div class="buttom">
        <button class="checkButton" @click='changeRouter(-1)'>返回列表页</button>
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
    this.getFilterInfo(this.$route.params.IDCard)
  },
  methods: {
    // 获取的对象拆分成数组
    OTA: function (arr) {
      arr.pop()
      this.infoArr.push(arr.slice(1, 5), arr.slice(5, 7), arr.slice(7, 15), arr.slice(15, 17))
    },
    changeRouter: function (e) {
      this.$router.go(-1)
    },
    // 根据搜索条件获得信息。
    getFilterInfo: function (IDCard) {
      this.$axios.post('/api/manager/getInfoDetail', { IDCard: IDCard }).then(e => {
        this.info = e.data
        this.OTA(Object.entries(this.info))
      }
      ).catch(e => { console.log('获取信息失败') })
    }
  },
  filters: {
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

.card {
  width: 80%;
  margin: 4% auto;
  background-color: white;
  padding: 0 2%;
  font-size: 1.3rem;
}
.card :last-child{
  border:none
}
  .row{
    padding: 4%;
    vertical-align: middle;
    border-bottom: solid 0.5px gray;
  }
  .label {
    width: 25%;
    display: inline-block;
    word-break: break-all;
    vertical-align: top;
  }
  .content{
    width: 75%;
    display: inline-block;
    word-break: break-all;
  }
  .buttom{
    width: 100%;
    background-color: white;
  }
  .checkButton{
    padding: 1rem;
    border-radius: 3px;
    margin:  5%;
    width: 90%;
    border:none;
    background-color: RGB(237,70,70);
    color: white;
}
  </style>
