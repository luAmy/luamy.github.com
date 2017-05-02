<template>
  <div class="detail-content">
    <div class="content-top">
      <h1 class="title">
        数据预测
      </h1>
      <div class="detail-blue">
        未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。
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
        <p>
          2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒…… 以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。 大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。 作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。 关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。
        </p>
      </div>
    </div>
    <my-dialog :is-show="isShowBankDialog" @close="close('isShowBankDialog')">
      <table class="paylist">
        <tr>
          <th>购买数量</th>
          <th>有效时间</th>
          <th>产品版本</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{num}}</td>
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
          },
          {
            label: '专家版',
            value: 3,
            price: 340
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
