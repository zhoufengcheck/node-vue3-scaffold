<template>
  <div class="box-container" @scroll="setPool" ref="container">
    <div class="box-container-scroll"></div>
    <div class="recycle-scroller-wrapper">
      <div
        class="recycle-scroller-item"
        v-for="poolItem in pool"
        :key="poolItem.item[keyField]"
        >
        <p>{{poolItem}}</p>
      </div>
    </div>
  </div>
</template>
<script>
 export default {
  props: {
    //数据的数组
    items: {
      type: Array,
      default: () => [],
    },
    //每一条数据的高度
    itemSize: {
      type: Number,
      default: 0,
    },
    keyField: {
      //给我的items数组中，每个对象哪个属性代表唯一且稳定的编号
      type: String,
      default: "id",
    },
  },
  data() {
    return {
      pool: [], // 渲染池，保存当前需要渲染的数据
    };
  }, mounted() {
    this.setPool();
  },
  computed: {
    totalSize() {
      return this.items.length * this.itemSize+500; // 总高度，每一个元素的高度 * 数量
    },
  },
  methods: {
    // 拿到需要被渲染的数据添加到 pool数组中
    setPool() {
      let scrollTop = this.$refs.container.scrollTop;
      let height = this.$refs.container.clientHeight;

      let startIndex = Math.floor(scrollTop / this.itemSize); // 获取到要截取数据的起点
      let endIndex = Math.ceil((scrollTop + height) / this.itemSize); // 获取到要截取数据的终点
      let scrollPos = startIndex * this.itemSize;
      this.pool = this.items.slice(startIndex, endIndex).map((it, i) => ({
        item: it,
        position: scrollPos + i * this.itemSize,
      }));
      
    },
  },
};
</script>
<style>
.box-container {
  overflow: auto;
  width: 500px;
  height: 500px;
  position: relative;
}
.box-container-scroll {
    position: absolute;
		left: 0;
		top: 0;
		right: 0;
		z-index: 10;
		height: 10000px;
}
.recycle-scroller-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
.recycle-scroller-item {
  text-align: left;
  word-break: break-all;
  border-bottom: 1px solid red;
  /* position: absolute;
  width: 100%;
  left: 0;
  top: 0; */
}
</style>
