<template>
  <div class="aa">
    <div>header</div>
    <el-button @click="toHome">home</el-button>
    <el-button @click="toDetail">detail</el-button>
    <el-button @click="toList">list</el-button>
    <input type="file" @change="onChange">
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
  data(){
    return {
      file:''
    }
  },
  async created(){
    
     
  },
  methods: {
    onChange(event){
      let formData = new FormData()
      console.log(event.target.files[0])
      formData.append('file',event.target.files[0])
      formData.append('data',100)
      fetch('/api/user',{
        method:'post',
        body:formData,
        referrer:'http://aa.com',
        headers: {
          "Content-Type": "mutipart/form-data"
        }
      });
    },
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

<style lang="scss">
@import '../../assets/_theme.scss';

.aa {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
