<template>
    <div class="jr-password">
        <span class="jr-label">{{ label_name}}</span>
        <input class="jr-input-password" :type="input_type" v-model="password_val">
        <i @click="change_view()" v-if="input_type=='password'" class="fa fa-eye password-icons" aria-hidden="true"></i>
        <i @click="change_view()" v-else class="fa fa-eye-slash password-icons" aria-hidden="true"></i>
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
            input_type:'password',
            password_val:null,
        }
    },
    watch:{
        password_val(new_val){
            this.change_val(new_val)
        }
    },
    methods:{
        change_view(){
            if(this.input_type == 'password'){
                this.input_type = 'text'
            }else{
                this.input_type = 'password'

            }
        },
        change_val(value){
            this.$emit('valueEvent', value)
        }
    },
    mounted(){
        this.password_val = this.defaul_val;
    }

        
    }
</script>

<style lang="scss" scoped>

</style>