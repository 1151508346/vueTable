import Vue from 'vue'
import Router from 'vue-router'
import Print from '@/components/Print'
import Ticket from '@/components/Ticket';
import Package from '@/components/Package';
import Quickkey from "@/components/Quickkey"
Vue.use(Router);
const router = new Router({
  routes: [
    {
        path:"/",
        redirect:()=>"/print"
    },
    {
      path: '/print',
      name: 'print',
      component: Print
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: Ticket
    },
    {
      path: '/package',
      name: 'package',
      component: Package
    },{
      path:"/quickkey",
      name:"quickkey",
      component:Quickkey
    }


  ]
})
// router.beforeEach((to,from,next)=>{
//   // console.log(to,from)
//   // console.log(from.name)
  
//   next();
// })


export default router;
