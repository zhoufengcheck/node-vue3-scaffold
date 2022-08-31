<template>
  <div class="red">
    Home
    {{name}}
    <InputBox v-model="name"></InputBox>
  </div>
</template>
<script>
import HelloWorld from '../../components/HelloWorld.vue';
import InputBox from '../../components/InputBox.vue'
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
    HelloWorld,
    InputBox
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
