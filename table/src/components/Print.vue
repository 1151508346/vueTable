<template>
    <div id="print">
        <div class="print-tip"><span class="print-span">打印设置</span></div>
        <div class="print-tip-item">
            <div class="print-start"><span class="print-span">是否开启打印</span>
             <el-switch
                v-model="value1"
                @change = "changeSwitch"
                >
                </el-switch>
                
                </div>
            <div class="print-count"><span class="print-span">小票打印份数</span>
           
               

                <div class="print-count-group">
                    <!-- <input type="text"  class="print-count-input" value="0">
                    <button class="print-count-btn print-count-top">^</button>
                    <button class="print-count-btn print-count-bottom">v</button> -->

                     <el-input-number class="input-num" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
                 </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
   
    data:function(){
        return {
             value1: false,
              num: 1
        }
    },
    methods: {
        changeSwitch(){
            console.log(this.value1)
        },
        handleChange(value) {
            // console.log(value);
        }
    },
        
}
</script>

<style>
    #print{
        margin-left:30px;
       
    }
    .print-span{
        line-height: 50px; 
         display:inline-block;
    }
    
    .print-tip-item{
         margin-left:30px;
    }
    .print-count-input{
        height: 23px;
        outline: none;
        width: 50px;
        padding:2px;
    }
    .print-count-input:focus{
        border:1px solid #59f;
        padding:3px;
        /* box-sizing: border-box; */
    }
    
    .print-count-btn{
        position: absolute;
        right: 1px;
        height: 50%;
    }
    .print-count-top{
        top:0;
        
    }
    .print-count-bottom{
      
        bottom: 0;
       
    }
    .print-count-group{
        display: inline-block;
        width:58px;
        height: 31px;
        /* border:1px solid red; */
        position:relative
    }
</style>