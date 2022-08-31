<template>
  <div>
    <div>header</div>
    <el-button @click="toHome">home</el-button>
    <el-button @click="toDetail">detail</el-button>
    <el-button @click="toList">list</el-button>
    <router-link to="/home">xxx</router-link>
    <router-view v-slot="{ Component }">
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
    let data = await this.$axios.post('/api/user');
    console.log(data) 
  },
  methods: {
    toHome(){
      this.$router.push('/home')
    },
    toDetail(){
      this.$router.push('/detail')
    },
    toList(){
      this.$router.push('/list')
    }
  },
  errorCaptured(err,vm,info){
    console.log(err,vm,info)
    // return false
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
