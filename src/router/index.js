import Vue from 'vue'
import Router from 'vue-router'
import Pub from '@/components/Pub';
import Verfine from '@/components/Verfine';
import TeamWork from '@/components/TeamWork'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
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
    },{
      path: '/team-work',
      name: 'TeamWork',
      component: TeamWork
    }
  ]
})
