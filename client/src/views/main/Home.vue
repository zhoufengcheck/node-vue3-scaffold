<template>
  <div class="red">
    Home
    <Tree :treeNodeList="treeList"></Tree>
  </div>
</template>
<script>
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

  },
  mounted(){
  
  },
  methods: {
    fun(){

    }
  },

}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    
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
</style>
