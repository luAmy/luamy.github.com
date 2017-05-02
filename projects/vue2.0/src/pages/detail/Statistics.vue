<template>
  <div class="detail-content">
    <div class="content-top">
      <h1 class="title">
        数据统计
      </h1>
      <div class="detail-blue">
        历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。
      </div>
      <div class="spec">
        <div>
          <div class="spec-left">
            购买数量：
          </div>
          <div class="spec-right">
            <v-counter @on-change="calc"></v-counter>
          </div>
        </div>
        <div>
          <div class="spec-left">
            产品类型：
          </div>
          <div class="spec-right">
            <v-select :selections="productTypes" @on-change="calc"></v-select>
          </div>
        </div>
        <div>
          <div class="spec-left">
            有效时间：
          </div>
          <div class="spec-right">
            <v-chooser :selections="expTime" @on-change="calc"></v-chooser>
          </div>
        </div>
        <div>
          <div class="spec-left">
            产品版本：
          </div>
          <div class="spec-right">
            <v-multi-chooser :selections="versions" @on-change="calc"></v-multi-chooser>
          </div>
        </div>
        <div>
          <div class="spec-left">
            总价：
          </div>
          <div class="spec-right">
            {{ amount }}
          </div>
        </div>
        <div>
          <div class="spec-left">
          </div>
          <div class="spec-right">
            <a class="buy-now" @click="buyNow">立即购买</a>
          </div>
        </div>
      </div>
    </div>
    <div class="content-bottom">
      <h1 class="title">
        产品说明
      </h1>
      <div class="body">
        <p class="main-desc">
          历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。
        </p>
        <table class="sales-board-table">
          <tbody>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>安全安保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>办公文教</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>彩票</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>车辆物流</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>成人用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>出版传媒</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>电脑硬件</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>电子电工</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>房地产建筑装修</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>分类平台</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>服装鞋帽</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>箱包饰品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>化工原料制品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>机械设备</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>家庭日用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>家用电器</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>教育培训</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>节能环保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>金融服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>礼品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>旅游住宿</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>美容化妆</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>母婴护理</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>农林牧渔</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>软件</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>商务服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>生活服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>食品保健品</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>手机数码</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>通讯服务设备</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>网络服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>医疗服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>游戏</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>运动休闲娱乐</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>招商加盟</label>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
      </div>
    </div>
    <my-dialog :is-show="isShowBankDialog" @close="close('isShowBankDialog')">
      <table class="paylist">
        <tr>
          <th>购买数量</th>
          <th>产品类型</th>
          <th>有效时间</th>
          <th>产品版本</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{num}}</td>
          <td>{{productTypes[productIndex].label}}</td>
          <td>{{expTime[timeIndex].label}}</td>
          <td>{{verPrice.label.join(',')}}</td>
          <td>{{amount}}</td>
        </tr>
      </table>
      <div class="bank-head">请选择银行</div>
      <bank class="bank"></bank>
      <a class="confirm btn" @click="confirmBuy">确认购买</a>
    </my-dialog>
    <my-dialog :is-show="isShowAskDialog" @close="close('isShowAskDialog')">
      <p class="ask">请检查你的支付状态
        <a class="btn success" @click="ask(true)">支付成功</a>
        <a class="btn failed" @click="ask(false)">支付失败</a>
      </p>
    </my-dialog>
    <my-dialog :is-show="isShowFinDialog" @close="close('isShowFinDialog')">
      <p class="success">
        购买成功！
      </p>
    </my-dialog>
  </div>
</template>

<script>
  import vCounter from '@/components/base/counter'
  import vSelect from '@/components/base/select'
  import vChooser from '@/components/base/chooser'
  import vMultiChooser from '@/components/base/multiChooser'
  import myDialog from '@/components/base/Dialog'
  import bank from '@/components/bank'

  export default {
    components: {
      vCounter,
      vSelect,
      vChooser,
      vMultiChooser,
      myDialog,
      bank
    },
    data () {
      return {
        num: 1,
        productIndex: 0,
        timeIndex: 0,
        verIndex: [0],
        isShowBankDialog: false,
        isShowAskDialog: false,
        isShowFinDialog: false,
        productTypes: [
          {
            label: '入门版',
            value: 0,
            price: 0
          },
          {
            label: '中级版',
            value: 1,
            price: 120
          },
          {
            label: '高级版',
            value: 2,
            price: 240
          }
        ],
        expTime: [
          {
            label: '半年',
            value: 0,
            price: 0
          },
          {
            label: '一年',
            value: 1,
            price: 100
          },
          {
            label: '三年',
            value: 2,
            price: 200
          }
        ],
        versions: [
          {
            label: '客户版',
            value: 0,
            price: 100
          },
          {
            label: '代理商版',
            value: 1,
            price: 230
          },
          {
            label: '专家版',
            value: 2,
            price: 400
          }
        ]
      }
    },
    computed: {
      productPrice () {
        return this.productTypes[this.productIndex].price
      },
      timePrice () {
        return this.expTime[this.timeIndex].price
      },
      verPrice () {
        let price = 0
        let label = []
        for (let i = 0; i < this.verIndex.length; i++) {
          let id = this.verIndex[i]
          price += this.versions[id].price
          label.push(this.versions[id].label)
        }
        return {
          price,
          label
        }
      },
      amount () {
        return this.num * (this.productPrice + this.timePrice + this.verPrice.price)
      }
    },
    methods: {
      calc (param) {
        let type = param[0]
        let number = param[1]

        if (type === 'counter') {
          this.num = number
        } else if (type === 'select') {
          this.productIndex = number
        } else if (type === 'chooser') {
          this.timeIndex = number
        } else if (type === 'multiChooser') {
          this.verIndex = number
        }
      },
      buyNow () {
        this.isShowBankDialog = true
      },
      close (attr) {
        this[attr] = false
      },
      confirmBuy () {
        this.isShowBankDialog = false
        this.isShowAskDialog = true
      },
      ask (flag) {
        if (flag) {
          this.isShowFinDialog = true
        }
        this.isShowAskDialog = false
      }
    }
  }
</script>

<style scoped>

</style>
