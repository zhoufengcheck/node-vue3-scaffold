<template>
  <div>
    Home
    <hello-world ref="hello">
      <template v-slot:header="scope">
        <h1>
          {{scope}}
          Here might be a page title
        </h1>
      </template>
    </hello-world>
    <div class="outer">
      <div class="inner">123123123</div>
      <div class="inner">123123123</div>
    </div>
  </div>
</template>
<script>
import HelloWorld from '../../components/HelloWorld.vue'
import { computed } from 'vue'
export default {
  name: 'HomeCom',
  data(){
    return {
      name: '1',
      todos: []
    }
  },
  components: {
    HelloWorld
  },
  provide() {
    return {
      todoLength: computed(() => this.todos.length)
    }
  },
  beforeCreate(){
  },
  methods: {
    fun(){

    }
  },

}
</script>

<style>
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
