import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Detail from '@/pages/Detail'
import Statistics from '@/pages/detail/Statistics'
import Predict from '@/pages/detail/Predict'
import Analysis from '@/pages/detail/Analysis'
import Ad from '@/pages/detail/Ad'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/detail',
      component: Detail,
      redirect: '/detail/statistics',
      children: [
        {
          path: '/detail/statistics',
          component: Statistics
        },
        {
          path: '/detail/predict',
          component: Predict
        },
        {
          path: '/detail/analysis',
          component: Analysis
        },
        {
          path: '/detail/ad',
          component: Ad
        }
      ]
    }
  ]
})

