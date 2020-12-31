<template>
  <main>
    <h3>党员信息采集表</h3>
    <div class="selectArea">
      <el-select v-model="branch" placeholder="接受支部">
        <el-option
          v-for="item in branchItems"
          :key="item.id"
          :value="item.name"
        >
        </el-option>
      </el-select>
      <el-input
        type="text"
        v-model="targetName"
        placeholder="姓名"
        aria-required=""
      ></el-input>
      <el-button type="danger" @click="getAllInfo">搜索</el-button>
      <el-button @click="clearAll">清空</el-button>
    </div>
    <!--表格-->
    <el-table :data="partyMembersShow" @cell-mouse-enter='changeURL' style="width: 100%">
      <!--姓名列-->
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <!--党支部列-->
      <el-table-column prop="branch" label="接受支部"> </el-table-column>
      <!--提交时间列-->
      <el-table-column prop="birthday" label="提交时间"> </el-table-column>
      <!--操作列-->
      <el-table-column label="操作" >
        <template>
          <el-popover  placement="bottom"  trigger="click">
            <div @click='gotoDetail'>
              <vue-qr :text="downloadData.url"
            :margin="0" colorDark="#f67b29"
             colorLight="#fff"
             :logoScale="0.3"
             ></vue-qr><br>
            </div>

            <el-button slot="reference" type="text" size="small">
              查看二维码
            </el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <!--分页列-->
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="1"
      :total="totalPage"
      @current-change="paginationClick"
      :current-page.sync="currentPage"
    >
    </el-pagination>
   </main>
</template>

<script>
import vueQr from 'vue-qr'
export default {
  name: 'Home',
  data () {
    return {
      // 搜索框的支部值
      branch: '',
      // 搜索框的目标名
      targetName: '',
      // 支部选项
      branchItems: [
        {
          name: '南方网第一党支部',
          id: 0
        },
        {
          name: '南方网第二党支部',
          id: 1
        },
        {
          name: '南方日报集团第一党支部',
          id: 2
        },
        {
          name: '南方日报集团第二党支部',
          id: 3
        },
        {
          name: '南方杂志党支部',
          id: 4
        }
      ],
      // 所有党员信息
      partyMembersInfo: [],
      // 展示页的党员信息
      partyMembersShow: [],
      // 总页数
      totalPage: 0,
      // 当前页码
      currentPage: 1,
      // 目标对象的身份证号，作为标识
      currentIDCard: '',
      downloadData: {
        url: '扫码访问的链接地址'
      }

    }
  },
  components: {
    vueQr
  },
  methods: {
    // 清除输入框
    clearAll: function () {
      this.targetName = ''
      this.branch = ''
    },
    // 分页栏点击按钮
    paginationClick: function (val) {
      this.currentPage = val
    },
    // 从数据库获取所有党员信息
    getAllInfo: function () {
      this.$axios.post('/api/manager/getAllInfo', { name: this.targetName, branch: this.branch }).then(e => {
        this.partyMembersInfo = e.data
      }).catch(e => { console.log('获取所有信息失败') })
    },
    // 获得当前页面的党员信息,每次只显示5条
    getPageInfo: function () {
      this.partyMembersShow = this.partyMembersInfo.slice((this.currentPage - 1) * 5, (this.currentPage * 5))
    },
    // 单元格进入事件
    changeURL: function (row, column, cell, event) {
      this.currentIDCard = row.IDCard
    },
    // 跳转到详情页
    gotoDetail: function () {
      this.$router.push({
        name: 'Info',
        params: {
          info: this.partyMembersInfo.filter(e => e.IDCard === this.currentIDCard),
          IDCard: this.currentIDCard
        }
      })
    }
  },
  watch: {
    // 当切换分页栏时，改变展示页的数据
    currentPage: function () {
      this.getPageInfo()
    },
    // 更新从数据库获取到的数据时改变总页数
    partyMembersInfo: function () {
      this.totalPage = Math.ceil(this.partyMembersInfo.length / 5)
      this.currentPage = 1
      this.getPageInfo()
    }
  },
  created () {
    this.getAllInfo()
  },
  mounted () {

  }

}
</script>
<style lang="scss" scoped>
main {
  margin: 1% auto 3%;
  padding: 1%;
  width: 80%;
  background-color: white;
}

.selectArea {
  display: flex;
  flex-direction: row;
}

.el-input {
  width: auto;
  margin: 0 1%;
}

.el-pagination {
  display: flex;
  justify-content: flex-end;
}

.el-pagination,
.el-table {
  margin: 1% 0;
}
</style>
