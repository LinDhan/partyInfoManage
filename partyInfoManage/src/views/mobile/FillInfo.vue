<template>
  <div>
    <div class="card">
    <div class="row">
      <span class="label">姓名</span>
      <span class="content">
        <input v-model="Info.name" type="text" placeholder="姓名" />
      </span>
    </div>

    <div class="row">
      <span class="label">性别</span>
      <span class="content">
        <el-radio-group v-model="Info.sex" size="medium"  fill="red">
          <el-radio-button  label="男"></el-radio-button>
          <el-radio-button label="女"></el-radio-button>
        </el-radio-group>
      </span>
    </div>

    <div class="row">
      <span class="label">民族</span>
      <span class="content">
        <van-cell is-link @click="popupShow.nation=!popupShow.nation">{{
          Info.nation || "民族"
        }}</van-cell>
        <van-popup
          v-model="popupShow.nation"
          closeable
          position="bottom"
          :style="{ height: '30%', overflow: 'hidden' }"
        >
          <van-picker
            title="标题"
            show-toolbar
            :columns="nations"
            @cancel="onCancel"
            @change="onChange('nation')"
            ref="nationRef"
          />
        </van-popup>
      </span>
    </div>

    <div class="row">
      <span class="label">身份证号</span>
      <span class="content">
        <input v-model="Info.IDCard" type="text " placeholder="身份证号" />
      </span>
    </div>

    <div class="row">
      <span class="label">出生日期</span>
      <span class="content">
        <van-cell is-link @click="popupShow.birthday = !popupShow.birthday">{{
          Info.birthday || "出生日期"
        }}</van-cell>
        <van-popup
          v-model="popupShow.birthday"
          closeable
          position="bottom"
          :style="{ height: '30%', overflow: 'hidden' }"
        >
          <van-datetime-picker

            type="date"
            title="选择年月日"
            @change="onChange('birthday')"
            ref="birthdayRef"
          />
        </van-popup>
      </span>
    </div>
    </div>
    <div class="card">
    <div class="row">
      <span class="label">毕业院校</span>
      <span class="content">
        <input v-model="Info.school" type="text " placeholder="学校全称" />
      </span>
    </div>

    <div class="row">
      <span class="label">学历</span>
            <span class="content">
        <van-cell is-link @click="popupShow.education=!popupShow.education">{{
          Info.education || "最高学历"
        }}</van-cell>
        <van-popup
          v-model="popupShow.education"
          closeable
          position="bottom"
          :style="{ height: '30%', overflow: 'hidden' }"
        >
          <van-picker
            title="标题"
            show-toolbar
            :columns="education"
            @cancel="onCancel"
            @change="onChange('education')"
            ref="educationRef"
          />
        </van-popup>
      </span>
    </div>
    </div>
    <div class="card">
    <div class="row">
      <span class="label">人员类别</span>
      <span class="content">
        <el-radio-group v-model="Info.class"  size="medium"  fill="red">
          <el-radio-button label="正式党员"></el-radio-button>
          <el-radio-button label="预备党员"></el-radio-button>
        </el-radio-group>
      </span>
    </div>

    <div class="row">
      <span class="label">转入支部</span>
            <span class="content">
        <van-cell is-link @click="popupShow.branch=!popupShow.branch">{{
          Info.branch || "组织全称"
        }}</van-cell>
        <van-popup
          v-model="popupShow.branch"
          closeable
          position="bottom"
          :style="{ height: '30%', overflow: 'hidden' }"
        >
          <van-picker
            title="标题"
            show-toolbar
            :columns="branch"
            @cancel="onCancel"
            @change="onChange('branch')"
            ref="branchRef"
          />
        </van-popup>
      </span>
    </div>

    <div class="row">
      <span class="label">入党日期</span>
      <span class="content">
        <van-cell is-link @click="popupShow.joinDate = !popupShow.joinDate">{{
          Info.joinDate || "入党日期"
        }}</van-cell>
        <van-popup
          v-model="popupShow.joinDate"
          closeable
          position="bottom"
          :style="{ height: '30%', overflow: 'hidden' }"
        >
          <van-datetime-picker
            type="date"
            title="选择年月日"
            @change="onChange('joinDate')"
            ref="joinDateRef"
          />
        </van-popup>
      </span>
    </div>

    <div class="row">
      <span class="label">转正日期</span>
      <span class="content">
        <van-cell is-link @click="popupShow.conversionDate = !popupShow.conversionDate">{{
          Info.conversionDate || "转正日期"
        }}</van-cell>
        <van-popup
          v-model="popupShow.conversionDate"
          closeable
          position="bottom"
          :style="{ height: '30%', overflow: 'hidden' }"
        >
          <van-datetime-picker

            type="date"
            title="选择年月日"
            @change="onChange('conversionDate')"
            ref="conversionDateRef"
          />
        </van-popup>
      </span>
    </div>

    <div class="row">
      <span class="label">介绍人1</span>
      <span class="content">
        <input
          v-model="Info.introducer1"
          type="text"
          placeholder="介绍人姓名（选填）"
        />
      </span>
    </div>

    <div class="row">
      <span class="label">介绍人2</span>
      <span class="content">
        <input
          v-model="Info.introducer2"
          type="text "
          placeholder="介绍人姓名（选填）"
        />
      </span>
    </div>

    <div class="row">
      <span class="label">党籍正常</span>
      <span class="content">
        <el-radio-group v-model="Info.normal"   size="medium"  fill="red">
          <el-radio-button label="是"></el-radio-button>
          <el-radio-button label="否"></el-radio-button>
        </el-radio-group>
      </span>
    </div>

    <div class="row">
      <span class="label">档案地</span>
      <span class="content">
        <input
          v-model="Info.fileAddress"
          type="text "
          placeholder="地址精准到门牌号（选填）"
        />
      </span>
    </div>
      </div>
    <div class="card">
    <div class="row">
      <span class="label">手机号码</span>
      <span class="content">
        <input v-model="Info.phoneNumber" type="text " placeholder="手机号码" />
      </span>
    </div>
    <div class="row">
      <span class="label">家庭住址</span>
      <span class="content">
        <input
          v-model="Info.address"
          type="text "
          placeholder="地址精准到门牌号"
        />
      </span>
    </div>
  </div>
    <button class="checkButton" :disabled="buttonActive()" @click="goToSignature">
      确认并签名
    </button>
  </div>

  </template>

<script>

export default {
  name: '',
  data () {
    return {
      Info: {
        name: '',
        sex: '',
        nation: '',
        IDCard: '',
        birthday: '',
        school: '',
        education: '',
        class: '',
        branch: '',
        joinDate: '',
        conversionDate: '',
        introducer1: '',
        introducer2: '',
        normal: '',
        fileAddress: '',
        phoneNumber: '',
        address: ''
      },

      nations: [
        '汉族',
        '壮族',
        '满族',
        '回族',
        '珞巴族',
        '赫哲族',
        '塔塔尔族',
        '独龙族',
        '鄂伦春族',
        '门巴族',
        '乌孜别克族',
        '裕固族',
        '俄罗斯族',
        '保安族',
        '德昂族',
        '基诺族',
        '京族',
        '怒族',
        '鄂温克族',
        '普米族',
        '阿昌族',
        '塔吉克族',
        '布朗族',
        '撒拉族',
        '毛南族',
        '景颇族',
        '达斡尔族',
        '柯尔克孜族',
        '锡伯族',
        '仫佬族',
        '土族',
        '羌族',
        '纳西族',
        '佤族',
        '水族',
        '拉祜族',
        '高山族',
        '东乡族',
        '仡佬族',
        '傈僳族',
        '畲族',
        '傣族',
        '黎族',
        '哈萨克族',
        '哈尼族',
        '白族',
        '朝鲜族',
        '瑶族',
        '侗族',
        '布依族',
        '藏族',
        '蒙古族',
        '彝族',
        '土家族',
        '维吾尔族',
        '苗族'
      ],
      education: ['博士', '硕士', '本科', '大专', '高中', '中专', '初中', '小学', '其他'],
      branch: ['南方网第一党支部', '南方网第二党支部', '南方日报集团第一党支部', '南方日报集团第二党支部', '南方杂志党支部'],
      popupShow: {
        nation: false,
        birthday: false,
        education: false,
        branch: false,
        joinDate: false,
        conversionDate: false
      }
    }
  },
  components: {
  },
  mounted () {},
  methods: {
    // 监听信息对象，如果有信息没填则按钮不可选中
    buttonActive: function () {
      for (var i in this.Info) {
        if (!i.includes('introducer') && this.Info[i] === '') {
          return true
        }
      }
      return false
    },
    // 跳转到签字页面
    goToSignature: function () {
      this.$axios.post('/api/user/check', { IDCard: this.Info.IDCard }).then(e => {
        console.log(e.data.description)
        if (e.data.description === 'ok') {
          this.$router.push({
            name: 'Signature',
            params: { info: this.Info }
          })
        } else {
          alert('该用户已存在')
        }
      }).catch(e => console.log(e))
    },
    // 获得选择器的值
    onChange (e) {
      switch (e) {
        case 'nation':
          this.Info.nation = this.$refs.nationRef.getColumnValue(0)
          break
        case 'birthday':
          this.Info.birthday = this.$refs.birthdayRef
            .getPicker()
            .getValues()
            .join('-')
          break
        case 'education':
          this.Info.education = this.$refs.educationRef.getColumnValue(0)
          break
        case 'branch':
          this.Info.branch = this.$refs.branchRef.getColumnValue(0)
          break
        case 'joinDate':
          this.Info.joinDate = this.$refs.joinDateRef
            .getPicker()
            .getValues()
            .join('-')
          break
        case 'conversionDate':
          this.Info.conversionDate = this.$refs.conversionDateRef
            .getPicker()
            .getValues()
            .join('-')
          break
      }
    },
    onCancel () {
      console.log('取消')
    }
  }
}
</script>

  <style lang='scss' scoped>
    .checkButton{
        width: 90%;
    }
    button[disabled=disabled]{
      background-color:RGB(240,160,160)
    }
  </style>
