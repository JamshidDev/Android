<template>
    <div class="jr-number-input">
        <label class="jr-label" for="">{{ label_name}}</label>
        <input class="number-input" v-mask="'####'" v-model="input_val" type="tel" :maxlength="4" />
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
            input_val:null,
        }
    },
    watch:{
        input_val(new_val){
            this.change_val(new_val)
        }
    },
    methods:{
        change_val(value){
            this.$emit('valueEvent', value)
        }
    },
    mounted(){
        this.input_val = this.defaul_val;
    }

        
    }
</script>

<style lang="scss" scoped></style>