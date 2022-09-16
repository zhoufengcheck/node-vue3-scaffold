<script setup>  
  let a = require('./utils.js')
  import {num} from'./utils2.js';
  num = 10
  setTimeout(()=>{
    console.log(num)
  },1000)





  import {reactive, ref,computed,watchEffect} from 'vue';
  import usePage from './usePage.js'
  let name = ref('zhoufeng');
  function queryList(){
    console.log(111)
  }
  let {currentPage,pageSize,total,pageSizeChange,currentPageChange} = usePage(queryList)
  pageSizeChange(2)
 

</script>
<template>
  <div class="detail">
    detail page
    {{currentPage}},{{pageSize}}
    {{name}}
  </div>
</template>
<style lang="scss" scoped>
  .detail {
    text-align: left;
    margin-top: 20px;
    border: 1px solid red;
  }
</style>



