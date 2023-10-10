<template>
    <div class="jr-password">
        <span class="jr-label">{{ label_name}}</span>
        <input class="jr-input-password" type="text" v-model="text_val">
    </div>
</template>

<script>
export default {
    props:{
        defaul_val:{
            type:String,
            default:'',
        },
        label_name:{
            type:String,
            default:'Labe name',
        },

    },
    data(){
        return{
            text_val:null,
        }
    },
    watch:{
        text_val(new_val){
            this.change_val(new_val)
        }
    },
    methods:{
        change_val(value){
            this.$emit('valueEvent', value)
        }
    },
    mounted(){
        this.text_val = this.defaul_val;
    }

        
    }
</script>

<style lang="scss" scoped>

</style>