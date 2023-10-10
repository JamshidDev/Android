<template>
     <div class="page_header-app">
            
            <span>
                <i v-show="back_btn" @click="$router.go(-1)" class='bx bx-chevron-left back-btn'></i>
            </span>
            <span class="app-title">{{page_title}}</span>
            <span class="notefication-btn"  @click="bill_event()" v-if="btn_type == 'bill'">
                <i class='bx bx-bell'></i>
                <span class="bell-badge"> 3</span>
            </span>
            <span class="btn-box" v-else-if="btn_type == 'add'">
                <i class='bx bx-plus-circle'></i>
            </span>
            <span class="btn-box" v-else-if="btn_type == 'delete'">
                <i class='bx bx-trash-alt'></i>
            </span>
            <span class="btn-box" v-else-if="btn_type == 'notbill'">
                <i class='bx bx-bell-off'></i>
            </span>
            <span v-else> 
            </span>
        </div>
</template>

<script>
export default {
    props:{
        page_title:{
            type:String,
            default:''
        },
        back_btn:{
            type:Boolean,
            default:false,
        },
        btn_type:{
            type:String,
            default:'none'
        }

    },
    methods:{
        bill_event(){
            this.$emit('billEvent')
        }
    }
        
    }
</script>

<style lang="scss" scoped>

</style>