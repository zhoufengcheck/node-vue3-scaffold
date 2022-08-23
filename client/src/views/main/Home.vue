<template>
  <div>
    Home
    <hello-world ref="hello">
      <template v-slot:header="scope">
        <h1 v-access="{access: ['super1Admin']}">
          {{name}}{{scope}}
        </h1>
        <h2 v-access="{access: ['11','22']}">jjj</h2>
      </template>
    </hello-world>
    {{count}}
  </div>
</template>
<script>
import HelloWorld from '../../components/HelloWorld.vue'
import { computed } from 'vue';
import {mapState} from 'vuex';
export default {
  name: 'HomeCom',
  data(){
    return {
      name: '1',
      todos: []
    }
  },
  computed: {
    ...mapState('home', ['count'])
  },
  components: {
    HelloWorld
  },
  provide() {
    return {
      todoLength: computed(() => this.todos.length)
    }
  },
  created(){

  },
  mounted(){
    console.log(bbb)
    setTimeout(()=>{
      this.name = 100
    },2000)
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
