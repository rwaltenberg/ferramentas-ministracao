import Vue from 'vue'
import Router from 'vue-router'
import RegularLayout from '../layouts/Regular'
import HelloWorld from '../components/HelloWorld'

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
          component: HelloWorld
        },
        {
          path: 'duplas',
          name: 'Duplas',
          component: HelloWorld
        },
        {
          path: 'membros',
          name: 'Diretorio',
          component: HelloWorld
        }
      ]
    }
  ]
})
