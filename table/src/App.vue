<template>
  <div id="app">
      <div class="wrapper">
        <Nav></Nav>
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav"

// console.log(ijsonp)
export default {
  name: 'App',
  components:{
    Nav
  },
  created(){
      
  }
}
</script>

<style>
  #app{
   
   margin-top:50px;
    
  }
    .content-wrapper{
        /* border:1px solid red;
        height: 300px;
        width: 100px; */
        width: 500px;
        margin-top:20px;
        
        float:left;
    }

</style>
