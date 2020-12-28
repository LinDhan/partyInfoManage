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
      <el-button type="danger" @click="getFilterInfo()">搜索</el-button>
      <el-button @click="clearAll">清空</el-button>
    </div>
    <!--表格-->
    <el-table :data="partyMembersShow" style="width: 100%">
      <!--姓名列-->
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <!--党支部列-->
      <el-table-column prop="branch" label="接受支部"> </el-table-column>
      <!--提交时间列-->
      <el-table-column prop="time" label="提交时间"> </el-table-column>
      <!--操作列-->
      <el-table-column label="操作">
        <template>
          <el-popover placement="bottom" width="80" trigger="click">
            <img src="../assets/logo.png" width="100%" />
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

export default {
  name: 'Home',
  data () {
    return {
      // 支部
      branch: '',
      // 目标名
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
      // 测试数据，要改成从服务器获取
      // 所有党员信息
      partyMembersInfo: [
      ],
      // 展示页的党员信息
      partyMembersShow: [],
      totalPage: 0,
      currentPage: 1
    }
  },
  components: {},
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
    // 从本地json获取所有党员信息和总页数
    getAllInfo: function () {
      this.$axios.get('./testData.json').then(
        e => {
          this.partyMembersInfo = e.data
          this.getPageInfo()
          this.totalPage = Math.ceil(e.data.length / 5)
        }).catch(
        e => {
          console.log('本地JSON数据获取失败')
        }
      )
    },
    // 获得当前页面的党员信息,每次只显示5条
    getPageInfo: function () {
      this.partyMembersShow = this.partyMembersInfo.slice((this.currentPage - 1) * 5, (this.currentPage * 5))
    },
    // 获得总页数

    // 根据搜索条件获得信息。
    // 这个区域待大改。移除从服务器获取。改成从初始化时得到的数据进行筛选。否则代码太难看
    getFilterInfo: function () {
      if (this.targetName || this.branch) {
        // 若存在两个搜索条件
        if (this.targetName && this.branch) {
          this.$axios.get('./testData.json').then(e => {
            this.partyMembersInfo = e.data.filter(e => e.targetName === this.targetName && e.branch === this.branch)
            this.totalPage = Math.ceil(this.partyMembersInfo.length / 5)
            this.currentPage = 1
          }).catch(e => {
            console.log('获取不到信息')
          })
        } else if (this.targetName) {
          this.$axios.get('./testData.json').then(e => {
            this.partyMembersInfo = e.data.filter(e => e.targetName === this.targetName)
            this.totalPage = Math.ceil(this.partyMembersInfo.length / 5)
            this.currentPage = 1
          }).catch(e => {
            console.log('获取不到信息')
          })
        } else {
          this.$axios.get('./testData.json').then(e => {
            this.partyMembersInfo = e.data.filter(e => e.branch === this.branch)
            this.totalPage = Math.ceil(this.partyMembersInfo.length / 5)
            this.currentPage = 1
          }).catch(e => {
            console.log('获取不到信息')
          })
        }
      } else {
        alert('请至少输入一条搜索信息')
      }
    }
  },
  watch: {
    // 当切换分页栏时，改变展示页的数据
    currentPage: function () {
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
