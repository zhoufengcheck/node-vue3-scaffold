<template>
  <div>header</div>
  <el-button @click="toHome">home</el-button>
  <el-button @click="toDetail">detail</el-button>
  <el-button @click="toList">list</el-button>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>



export default {
  name: 'App',
  async created(){
    this.$axios.post('/api/user')
    
    fetch('/api/user',{method:'post'})
    .then(response => {
      console.log(response)
      response.json()
    })
    .then(data => console.log(data));
  
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
