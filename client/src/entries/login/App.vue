<template>
  <div>
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component"  v-if="!$route.meta.keepAlive" />
    </router-view>
  </div>
</template>

<script>



export default {
  name: 'App',
  async created(){
    
  },
  methods: {
 
  }
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
</style>
