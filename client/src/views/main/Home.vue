<template>
  <div class="home">
    Home <span id="name">{{name}}</span>
    <input type="text" v-model="name">

    <Tree :treeNodeList="treeList" class="red"></Tree>
    <div class="outer">
      <div class="inner"></div>
    </div>
  </div>
  
</template>
<script>
  import data from'./utils2.js';

  console.log(data)



function dealTreeList(treeList,parentId='') {
  treeList.forEach((item,index) => {
    item.id = index;
    if (parentId !== '') {
      item.parentId = `${parentId}-${index}`;
    } else {
      item.parentId = ''
    }
    if(item.children) {
      dealTreeList(item.children, item.parentId || index)
    }
  });
  return treeList
}

import Tree from '../../components/Tree.vue'
import { computed } from 'vue';
import {mapState} from 'vuex';
export default {
  name: 'HomeCom',
  data(){
    return {
      todos:[1,2,3,4,5,6],
      name: '1',
      checked:false,
      treeList:dealTreeList([
        {
          name:'1',
          checked:false,
          indeterminate:false,
          children:[{
            name:'1-1',
            checked:false,
            indeterminate:false,
            children:[{
              name:'1-1-1',
              checked:false,
              indeterminate:false,
            },{
              name:'1-1-2',
              checked:false,
              indeterminate:false,
            }]
          },
          {
            name:'1-2',
            checked:false,
            indeterminate:false,
            children:[{
              name:'1-2-1',
              checked:false,
              indeterminate:false,
            },{
              name:'1-2-2',
              checked:false,
              indeterminate:false,
            }]
          }]
        },{
          name:'2',
          checked:false,
          indeterminate:false,
          children:[{
            name:'2-1',
            checked:false,
            indeterminate:false,
            children:[{
              name:'2-1-1',
              checked:false,
              indeterminate:false,
            }]
          }]
        }
      ])
    }
  },
  computed: {
    ...mapState('home', ['count'])
  },
  components: {
    Tree
  },
  provide() {
    return {
      todoLength: computed(() => this.todos.length)
    }
  },
  created(){
    this.a = 100
  },
  mounted(){
 
  },
  methods: {
    fun(){

    }
  },
  watch:{
    name:{
      handler(newVal, oldVal) {
        console.log(newVal,oldVal)
        console.log(document.getElementById('name').innerText)
      },
      // immediate:true
    }
  }

}
</script>

<style lang="scss" scoped>
  .home {
    ::v-deep .tree-node {
      color: red;
    }
    .outer {
      height: 400px;
      width: 400px;
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .inner {
      border: 1px solid red;
    }

  }
 
</style>
