<template>
    <div id="quickkey">
        
        
        <div class="quickkey-tip">
             <span>快捷键:</span>
             <span class="default-key" @click="handleDefault">恢复默认</span>
        </div>
        <div class="quickkey-wrapper">
            <ul>
                <li class="quickkey-item" v-for="(value,index) in items" :key = "index" >
                    <span class="quickkey-item-title" >{{value.title}}</span>
                    <input type="text" 
                    class="quickkey-item-input" 
                    
                    v-model="value.key"
                     >
                    
                </li>
                 
            </ul>
        </div>
       
        <!-- <input type="text" v-model = "msg"> -->
        <!-- {{msg}} -->
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            items:[
                {title:"订单",key:"T"},
                {title:"支付宝",key:"A"},
                {title:"现金",key:"R"},
                {title:"整单打折",key:"P"},
                {title:"单品打折",key:"O"},
                {title:"数量减一",key:"-"},
                {title:"数量加一",key:"+"},
                {title:"挂单",key:"H"}
            ],
            msg:"aaa",
        }
    },
    methods:{
        handleDefault(){
           var items = [
                {title:"订单",key:"T"},
                {title:"支付宝",key:"A"},
                {title:"现金",key:"R"},
                {title:"整单打折",key:"P"},
                {title:"单品打折",key:"O"},
                {title:"数量减一",key:"-"},
                {title:"数量加一",key:"+"},
                {title:"挂单",key:"H"}
            ]
            this.items = items;
        }
    }
}
</script>

<style> 
    #quickkey{
        margin-left:30px;
       
    }
    .default-key{
        float:right;
       
        background: #59f;
        padding: 6px;
        color:#fff;
        border-radius: 5px;
    }
    .quickkey-item{
        float: left;
        width: 50%;
        margin-top:30px;
    }
    .quickkey-wrapper{
        margin-left:30px;
        margin-top:30px;
    }
    .quickkey-item-input{
        width: 50px;
        height: 25px;
        outline: none;
        border:1px solid #999;
        border-radius:5px;
        text-align:center;
    }
    .quickkey-item-input:focus{
         border:1px solid #59f;
    }
    .quickkey-item span{
        width: 80px;
        text-align:right;
        padding-right: 10px;
        display: inline-block;
    }

</style>