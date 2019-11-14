<template>
    <div id="nav">
        <ul>
            <li class="nav-item active">
                <router-link @click.native = "handleDOMActive" to="/print">打印设置</router-link>
                </li>
            <li class="nav-item" >
                <router-link  @click.native = "handleDOMActive" to="/ticket">小票设置</router-link >
                </li>
            <li class="nav-item">
                <router-link @click.native = "handleDOMActive"  to="/package">客显钱箱</router-link >
                </li>
            <li class="nav-item">
                <router-link  @click.native = "handleDOMActive" to="/quickkey">快捷键</router-link >
            </li>
        </ul>
     
    </div>
</template>

<script>
export default {
    methods:{
        handleDOMActive(e){
            var  targetParent = e.target.parentNode;
            var result =  document.getElementsByClassName("nav-item")
            for (let i = 0; i < result.length; i++) {
                result[i].className = "nav-item";
                
            }
            targetParent.className+= " active"


        },
        
    }
}
</script>

<style>
    #nav{
        width: 20%;
        height: 300px;
       
        margin-left:20px;
        margin-top:20px;
        float:left;

    }
    .nav-item{
        width:100%;
        height: 50px;
        line-height: 50px;
        text-align:center;
        /* border:1px solid red; */

    }
    .active {
          border-right:3px solid #59f;
         
    }
   

    .nav-item a{
        text-decoration: none;
        color:#333

    }
    .nav-item a.router-link-active{
       color:#59f
    }
    
    .nav-item a:hover{
        color:#59f
    }
</style>