<template>
    <div id="package">
        
        <div class="package-tip">
             <span>客显钱箱</span>
        </div>
        <div class="package-tip-item" v-if="packageData!=null">
            <div class="package-port"  >
                <span class="package-port-span">客显端口</span>
                <select name="" id="" class="package-port-select">
                    <option 
                    name="1" 
                    value="" 
                    v-for="(value,index) in packageData.guessPort"
                    :key="index"
                    >{{value}}</option>
                   
                </select>
            </div>
             <div class="package-port">
                <span class="package-port-span">客显波特率</span>
                <select name="" id="" class="package-port-select">
                    <option value="" 
                    v-for="(value,index) in packageData.frequency"
                    :key="index">{{value}}</option>
                    
                </select>
            </div>
             <div class="package-port">
                <span class="package-port-span">钱箱端口</span>
                <select name="" id="" class="package-port-select">
                    <option value=""
                     v-for="(value,index) in packageData.moneyPort"
                    :key="index">{{value}}
                </option>
                   
                </select>
            </div>

            <div class="package-port">
                <span class="package-port-span">钱箱指令</span>
                 <input type="text" class="package-port-input">
            </div>
        </div>
        
        
    </div>
</template>

<script>
import ijsonp from "../jsonpDemo" 
export default {
    data:function(){
        return {
            packageData:null
        }
    },
   
    mounted() {
        var url = "http://localhost:3000/api/package"
        ijsonp(url,{},{
        param:"callback"
      }).then(data=>{
        // console.log(data)
        // this.$store.commit("getPackage",data)
        this.packageData = data;
      }).catch(err=>{
        console.log(err)
      })
       
    },
}
</script>

<style>
    #package{
        margin-left:30px;
       
    }
    
    #package span{
        line-height: 50px; 
        display:inline-block;
        width: 80px;
        text-align:center;
    }
    .package-tip-item{
         margin-left:30px;
    }
    
   .package-port-input:focus,
    .package-port-select:focus{
        border:1px solid #59f;
    }
     
    .package-port-select{
        height: 30px;
        width: 100px;
        outline: none;
        border-radius: 5px;
        border:1px solid #999;

    }
   .package-port-select:focus{
        border:1px solid #59f;
    }
     .package-port-input{
        height: 30px;
        width: 228px;
        outline: none;
        border-radius: 5px;
        border:1px solid #999;

    }
    
    
</style>