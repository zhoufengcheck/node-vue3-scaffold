<template>
  <div class="list">
     <Tabel :thead="thead" :tData="tData">
       <template v-slot:age="data">
        {{data.age-0+1}}
       </template>
       <template v-slot:oper="data">
          <a href="">编辑</a>
          {{data}}
       </template>
     </Tabel>
     <img src="../../assets/logo.png" alt="">
  </div>
</template>

<script>
import Tabel from '../../components/Tabel.vue'
export default {
    name:'ListTabl',
    components:{
      Tabel
    },
    data() {
      return {
        thead:[
          {name:'名字',key:'user_name'},
          {name:'年龄',key:'age'},
          {name:'身高',key:'tall'},
          {name:'操作',key:'oper'}
        ],
        tData:[
          {user_name:'nice1',age:'12',tall:'148',id:1},
          {user_name:'nice2',age:'11',tall:'158',id:2},
          {user_name:'nice3',age:'17',tall:'160',id:3},
          {user_name:'nice4',age:'14',tall:'138',id:4},
          {user_name:'nice5',age:'13',tall:'128',id:5},
        ]
      };
    },
    async created(){
      let size = await this.$axios.get('/api/user/size')
      size = size.data
      const downloadRange = (start, end)=>{
        return this.$axios.post('/api/user',{},{
          responseType: 'blob',
          headers: { 
            'range':`bytes=${start}-${end}`,
            'Content-Type': 'application/octet-stream'
          },
        }).then((data)=>{
          return {
            data,
            range:`${start}-${end}`
          }
        })
      }
      let chunkSize = 1024*500
      let len = parseInt(size/chunkSize);
      let arr = [];
      for(let i=0; i<len; i++){
        let start = i*chunkSize;
        let end = i==len-1 ? size: (i+1)*chunkSize-1;
        arr.push(downloadRange(start,end))
      }
     Promise.all(arr).then(data=>{
        data = data.map(item=>item.data)
        let blob = new Blob(data,{type: 'text/xml'})
        let fileName = 'cc.zip';

        //下载
        let URL = window.URL || window.webkitURL
        let objectUrl = URL.createObjectURL(blob);
        let a = document.createElement('a')
        a.href = objectUrl
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        a.remove();
        
      })
      
    }
};
</script>

<style>
.list {
  width: 100%;
  margin: 0 auto;

}

</style>