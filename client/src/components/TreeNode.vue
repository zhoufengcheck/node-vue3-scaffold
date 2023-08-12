<template>
  <div :class="['tree-node',`level-${level}`]">
    <p>
      <el-checkbox 
      v-model="treeData.checked" 
      @change="changeFun(treeData)"
      :indeterminate="treeData.isIndeterminate"/>
      {{treeData.name}}
    </p>
    <template v-if="treeData.children && treeData.children.length">
      <TreeNode 
        v-for="(tree) in treeData.children" 
        :key="tree.name" 
        :level="`${level-0+1}`"
        :treeNode="tree">
      </TreeNode>
    </template>
  </div>
</template>


<script>
import Bus from './bus'
export default {
  name: 'TreeNode',
  props: {
    treeNode: Object,
    level: {
      type:String,
      default:'1'
    },
  },
  data(){
    return {
      treeData:{}
    }
  },
  mounted() {
    this.treeData = this.treeNode;
    
  },
  methods: {
    changeFun(data){
      // 处理子级别
      function fun(arr){
        arr.forEach(element => {
          element.checked = data.checked;
          if (element.children) {
            fun(element.children)
          }
        });
      }
      fun(data.children||[])
      // 处理父级别
      if(data.checked == true) {
        data.isIndeterminate = false
      }
      Bus.$emit('changeParent',data.parentId, data.checked)
      
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .level-1 {
    text-align: left;
    border-bottom: 1px solid #eee;
  }
   .tree-node{
      .tree-node {
        padding-left: 10px;
      }
    }
</style>
