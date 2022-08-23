<template>
  <div>
    detail
    {{name}}
  </div>
</template>

<script>
import $ from 'jquery';
console.log($);
export default {
  name: 'DetailCom',
  data(){
    return {
      name:1000
    }
  },
  mounted(){
    setTimeout(()=>{
      this.name = 1
    },2000)
  }
}
</script>

