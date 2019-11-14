<template>
    <div id="ticket">
        
        <div class="ticket-tip">
             <span class="ticket-span">小票设置</span>
        </div>
        <div class="ticket-tip-item">
            <div class="storename">
                <span class="storename-span ticket-span">店铺名称</span>
                <input type="text" class="storename-input">
            </div>
            <div class="ticket-last">
                <span class="ticket-last ticket-span">票尾1</span>
                <textarea  class="ticket-last-textarea" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="ticket-last">
                <span class="ticket-last ticket-span ">票尾2</span>
                <textarea  class="ticket-last-textarea ticket-two" name="" id="" cols="30" rows="10" ></textarea>
            </div>

            <div class="ticket-count"><span class="ticket-span">票尾空行数</span>
                <!-- <div class="ticket-count-group">
                    <input type="text"  class="ticket-count-input" value="0">
                    <button class="ticket-count-btn ticket-count-top">^</button>
                    <button class="ticket-count-btn ticket-count-bottom">v</button>
                 </div> -->
                  <el-input-number class="input-num" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
                
            </div>

        </div>
    </div>
    
</template>

<script>
export default {
     data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
}
</script>

<style>
    #ticket{
        margin-left:30px;
       
    }
    
    .ticket-span{
         line-height: 50px !important; 
         display:inline-block !important;
    }
    
    
    .ticket-tip-item{
         margin-left:30px;
    }
    .ticket-tip-item span{
        display: block;
        width: 90px;
        text-align:right;
      
       
    }

    
    .storename-input{
        height: 30px;
        width: 228px;
        outline: none;
        border-radius: 5px;
        border:1px solid #999;

    }
    .ticket-last-textarea:focus,
    .storename-input:focus{
        border:1px solid #59f;
    }
    
    .ticket-last-textarea{
         vertical-align: text-top;
          border-radius: 5px;
           outline: none;
    }
    .ticket-two{
        resize:none;
    }


     .ticket-count-input{
        height: 23px;
        outline: none;
        width: 50px;
        padding:3px;
        border-radius: 5px;
         border:1px solid #999;

    }
    .ticket-count-input:focus{
        border:1px solid #59f;
        padding:3px;
        /* box-sizing: border-box; */
    }
    
    .ticket-count-btn{
        position: absolute;
        right: 1px;
        height: 50%;
    }
    .ticket-count-top{
        top:0;
        
    }
    .ticket-count-bottom{
      
        bottom: 0;
       
    }
    .ticket-count-group{
        display: inline-block;
        width:58px;
        height: 31px;
        /* border:1px solid red; */
        position:relative
    }
    /* .el-input-number__increase,
    .el-input-number__decreas,
    .is-disabled{
        line-height: 0px !important;
    } */
    .el-input-number__decrease,
    .el-input-number__increase{
        width:30px !important;
        text-align:center !important;
    }
    
</style>