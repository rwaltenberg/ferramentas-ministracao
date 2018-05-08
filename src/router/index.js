import Vue from 'vue'
import Router from 'vue-router'
import RegularLayout from '../layouts/Regular'
import Frequency from '../pages/Frequency'
import Companionships from '../pages/Companionships'
import Directory from '../pages/Directory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: RegularLayout,
      children: [
        {
          path: '',
          name: 'Frequencia',
          component: Frequency
        },
        {
          path: 'duplas',
          name: 'Duplas',
          component: Companionships
        },
        {
          path: 'membros',
          name: 'Diretorio',
          component: Directory
        }
      ]
    }
  ]
})
