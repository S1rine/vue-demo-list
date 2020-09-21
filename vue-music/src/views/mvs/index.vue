<template>
  <div id="mvs">
    <div class="tags">
      <div class="tag_item">
        <div class="title">地区</div>
        <ul class="area_tag">
          <li
            v-for="(item, index) in area"
            :key="index"
            class="item"
            :class="{active: item === areaActive}"
            @click="areaClick(item)"
          ><span>{{item}}</span></li>
        </ul>
      </div>
      <div class="tag_item">
        <div class="title">类型</div>
        <ul class="type_tag">
          <li
            v-for="(item, index) in type"
            :key="index"
            class="item"
            :class="{active: item === typeActive}"
            @click="typeClick(item)"
          ><span>{{item}}</span></li>
        </ul>
      </div>
      <div class="tag_item">
        <div class="title">排序</div>
        <ul class="order_tag">
          <li
            v-for="(item, index) in order"
            :key="index"
            class="item"
            :class="{active: item === orderActive}"
            @click="orderClick(item)"
          ><span>{{item}}</span></li>
        </ul>
      </div>
    </div>
    <div class="mv_list">
      <mvList
        :list="mvList"
        :isMvs="true"
      />
    </div>
    <div class="footer">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :current-page.sync="page"
        :page-size="limit"
        @current-change="handleChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import mvList from '@/components/mvList.vue'
import { getAllMv } from '@/api/mvs.js'
export default {
  name: 'mvs',
  data () {
    return {
      mvList: [],
      area: ['全部', '内地', '港台', '欧美', '日本', '韩国'],
      type: ['全部', '官方版', '原生', '现场版', '网易出品'],
      order: ['上升最快', '最热', '最新'],
      areaActive: '全部',
      typeActive: '全部',
      orderActive: '上升最快',
      limit: 12,
      page: 1,
      total: 0
    }
  },
  created () {
    this.getMvList()
  },
  methods: {
    async getMvList () {
      const area = this.areaActive
      const type = this.typeActive
      const order = this.orderActive
      const limit = this.limit
      const offset = (this.page - 1) * limit
      let params = {
        area,
        type,
        order,
        limit,
        offset
      }
      const { code, data, count } = await getAllMv(params)
      if (code === this.CONFIG.CODE_SUCCESS) {
        this.mvList = [...data]
        if (count) this.total = count
      }
    },
    areaClick (_item) {
      if (_item === this.areaActive) return
      this.areaActive = _item
      this.getMvList()
    },
    typeClick (_item) {
      if (_item === this.typeActive) return
      this.typeActive = _item
      this.getMvList()
    },
    orderClick (_item) {
      if (_item === this.orderActive) return
      this.orderActive = _item
      this.getMvList()
    },
    handleChange () {
      this.getMvList()
    }
  },
  components: {
    mvList
  }
}
</script>

<style lang="scss" scoped>
#mvs {
  height: 100%;
  .tags {
    margin-top: 20px;
    .tag_item {
      font-size: 14px;
      display: flex;
      margin-bottom: 30px;
      .title {
        margin-right: 20px;
      }
      & > ul {
        display: flex;
        .item {
          border-right: 1px solid #eee;
          cursor: pointer;
          span {
            padding: 5px 20px;
            margin: 0 20px;
          }
          &.active span {
            color: #dd6d60;
            background-color: #fcf6f5;
            border-radius: 20px;
          }
          &:last-child {
            border-right: none;
          }
        }
      }
    }
  }
  .footer {
    margin-top: 30px;
    text-align: center;
    ::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: #dd6d60;
    }
    ::v-deep .el-pagination.is-background .el-pager li:not(.disabled):hover {
      color: #dd6d60;
    }
  }
}
</style>
