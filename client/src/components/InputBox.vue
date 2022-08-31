<template>
    <div>
        <input type="text" v-model="name">
    </div>
</template>
<script>
export default {
    name: 'InputBox',
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    props: {
        modelValue: String
    },
    data(){
        return {
            name:''
        }
    },
    mounted() {
        this.name = this.modelValue;
    },
    watch: {
        name: function(newVal, oldVal){
            this.$emit('change', newVal)
        },
        modelValue:function(newVal,oldVal){
            this.name = newVal;
        }
    }
}
</script>