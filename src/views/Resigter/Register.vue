<template>
    <div class="page_container" style="padding-top:10px;">
<!--        <div class="back-section">-->
<!--            <i class='bx bx-chevron-left' @click="$router.go(-1)"></i>-->
<!--        </div>-->
        <div style="width: 100%; display: flex; justify-content: center">
          <img style="width: 80px" src="../../../public/logo.webp" alt="">
        </div>
        <span class="page-title" style="margin-top:20px; margin-bottom:20px; text-align: center">TIZIMGA KIRISH</span>
        <!-- <i class="fas fa-users"></i> -->
        <span class="element-col">
            <JR_TextField :label_name="'Login'" :defaul_val="users.username" @valueEvent="($event)=> users.username = $event"></JR_TextField>
        </span>
        <span class="element-col">
            <JR_Passwor :label_name="'Parol'" :defaul_val="users.password" @valueEvent="($event)=> users.password = $event"></JR_Passwor>
        </span>
        <div class="btn-overal">
            <button class="jr-btn jr-btn-primary" @click="submit_data()" >
                Tizimga kirish
            </button>

        </div>

    </div>
</template>

<script setup>
import {
  computed,
  onMounted,
  ref,
  watch,
} from 'vue';

import {
  useRoute,
  useRouter,
} from 'vue-router';
import { useStore } from 'vuex';
import auth from "../../service/services/auth.js";

const store = useStore()
const router = useRouter()
const route = useRoute()
const users = ref({
    username:'',
    password:'',
    confirm_password:''
});


function submit_data() {
    store.dispatch('set_modal_status', true)
    let data = {
      username:users.value.username,
      password:users.value.password
    }

    auth._login({data}).then((res)=>{
      localStorage.setItem('access_token',res.data.access_token)
      router.push({name: 'scaner'})
    }).catch((err)=>{
      console.log(err)
      $Toast.error(err.message,{
        position:'top-right'
      })
    }).finally(()=>{
      store.dispatch('set_modal_status', false)
    })
}
</script>

<style lang="scss" scoped>

</style>