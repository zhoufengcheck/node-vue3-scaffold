<template>
  <div>
    <input type="text" v-model="name">
    <input type="password" v-model="password">
    <input type="button" value="提交" @click="submit">
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data(){
    return {
        name:'',
        password:''
    }
  },
  methods: {
    async submit(){
        console.log(1)
        let result = await this.$axios.post('/login',{
            name: this.name,
            password: this.password
        })
        console.log(result)
    }
  }
}
</script>

