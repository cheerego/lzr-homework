import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pub from '@/components/Pub';
import Verfine from '@/components/Verfine';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pub',
      component: Pub
    },
    {
      path: '/pub',
      name: 'Pub',
      component: Pub
    },
    {
      path: '/verfine',
      name: 'Verfine',
      component: Verfine
    }
  ]
})
