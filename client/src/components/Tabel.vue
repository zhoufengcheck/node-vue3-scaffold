<template>
  <div class="list-container">
    <table>
        <thead>
            <th v-for="item in thead" :key="item.key">
                {{item.name}}
            </th>
        </thead>
        <tbody>
            <tr v-for="item in tData" :key="item.id">
                <td v-for="head in thead" :key="head.key">  
                    <slot :name="head.key" v-bind="item" v-if="head.key!=='oper'">
                        {{item[head.key]}}
                    </slot>
                    <slot :name="head.key" v-bind="item" v-else>
                    </slot>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name:'ListItem',
    props: {
        thead:Array,
        tData:Array
    },
    data() {
        return {};
    },
    created(){
        console.log(this.tData)
    }
};
</script>
<style lang="scss" scoped>

</style>