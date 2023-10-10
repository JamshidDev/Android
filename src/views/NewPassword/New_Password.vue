<template>
    <div class="page_container" style="padding-top:10px;">
        <div class="back-section">
            <i class='bx bx-chevron-left' @click="$router.go(-1)"></i>
        </div>
        <span class="page-title" style="margin-top:0px; margin-bottom:40px;">Yangi Parol!</span>
        <!-- <i class="fas fa-users"></i> -->
        <span class="element-col">
            <JR_Passwor :label_name="'Parolni kiriting'" :defaul_val="users.password" @valueEvent="($event)=> users.password = $event"></JR_Passwor>
        </span>
        <span class="element-col">
            <JR_Passwor :label_name="'Parolni qayta kiriting'" :defaul_val="users.confirm_password" @valueEvent="($event ) => users.confirm_password = $event"></JR_Passwor>
        </span>
        <div class="btn-overal">
            <button class="jr-btn jr-btn-primary" @click="submit_data()" >
                Keyingi
            </button>

        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            users:{
                password:'',
                confirm_password:'',
                full_name:''
            }
        }
    },
    methods:{
        submit_data(){
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>