import Vue from 'vue'
import Router from 'vue-router'
import Pub from '@/components/Pub';
import Verfine from '@/components/Verfine';
import Cooperation from '@/components/Cooperation'
import Introduce from '../components/Introduce.vue';
import Us from '../components/Us.vue';


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
      path: '/cooperation',
      name: 'Cooperation',
      component: Cooperation
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/us',
      name: 'Us',
      component: Us
    }
  ]
})
