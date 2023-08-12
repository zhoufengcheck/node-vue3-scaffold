<template>
  <div>
    <div v-for="(tree,index) in treeNodeList" :key="index">
      <TreeNode :treeNode="tree"></TreeNode>
    </div>
  </div>
</template>
<script>
function findParent(arr, parentIdArr) {
  let obj = null;
  while(parentIdArr.length) {
    let id = parentIdArr.shift();
    obj = arr.find(item=>{
      return item.id == id;
    })
    arr = obj.children;
  }
  return obj
}
import Bus from './bus';
import TreeNode from './TreeNode.vue';
export default {
  name: 'TreeList',
  props: {
    treeNodeList: Array
  },
  components: {
    TreeNode
  },
  data(){
    return {
      obj: {
        from:'helloword'
      },
      msg1: ''
    }
  },
  mounted() {
    Bus.$on('changeParent',(parentId,checked)=>{
      if (parentId == '') {
        return
      }
      let parentIdArr = parentId.split('-');
      parentIdArr.pop();
      while(parentIdArr.length) {
        let parent = findParent(this.treeNodeList, parentIdArr.slice(0));
        if (checked == true) {
          // parent.checked = ntrue;
          let flag = true;
          for (let i = 0;i < (parent.children||[]).length; i++) {
            if (parent.children[i].checked==false){
              flag = false;
              break;
            } 
          }
          parent.checked = flag;
          parent.isIndeterminate = !flag
        } else {
          let flag = false;
          for (let i = 0;i < (parent.children||[]).length; i++) {
            if (parent.children[i].checked==true || parent.children[i].isIndeterminate==true){
              flag = true;
              break;
            } 
          }
          parent.checked = false;
          parent.isIndeterminate = flag
        }
        parentIdArr.pop()
      }
    })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
