<template>
    <div class="page_container" style="padding-top:10px;">
<!--        <div class="back-section">-->
<!--            <i class='bx bx-chevron-left' @click="$router.go(-1)"></i>-->
<!--        </div>-->
        <div style="width: 100%; display: flex; justify-content: center">
          <img style="width: 80px" src="@/assets/images/nfs.webp" alt="">
        </div>
        <span class="page-title" style="margin-top:20px; margin-bottom:20px; text-align: center">TIZIMGA KIRISH</span>
        <!-- <i class="fas fa-users"></i> -->
        <span class="element-col">
            <JR_TextField :label_name="'Login'" :defaul_val="users.full_name" @valueEvent="($event)=> users.full_name = $event"></JR_TextField>
        </span>
        <span class="element-col">
            <JR_Passwor :label_name="'Parolni '" :defaul_val="users.password" @valueEvent="($event)=> users.password = $event"></JR_Passwor>
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

const store = useStore()
const router = useRouter()
const route = useRoute()
const users = ref({
    full_name:'',
    password:'',
    confirm_password:''

});


function submit_data() {
    console.log(users.value);
    store.dispatch('set_modal_status', true)
    setTimeout(() => {
        store.dispatch('set_modal_status', false)
        router.push({
            name: 'scaner',
        })
    }, 3000)
}
</script>

<style lang="scss" scoped>

</style>