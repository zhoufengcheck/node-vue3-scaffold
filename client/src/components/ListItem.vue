<template>
  <div class="list-container">
    <span>id{{item.id}}</span>
    <span>name{{item.count}}</span>
    <span>age{{item.count}}</span>
  </div>
</template>

<script>
export default {
    name:'ListItem',
    props: {
        item:Object,
    },
    data() {
        return {};
    },
};
</script>
<style lang="scss" scoped>
  .list-container{
    margin: 0 auto;
    width: 500px;
    text-align: center;
    padding: 1em;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: repeat(3,1fr);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    word-break: break-all;
  }
</style>