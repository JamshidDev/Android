<template>
    <div class="page_container" style="padding-top:10px;">
        <div class="back-section">
            <i class='bx bx-chevron-left' @click="$router.go(-1)"></i>
        </div>
        <span class="page-title" style="margin-top:0px; margin-bottom:40px;">Xush kelibsiz!</span>
        <!-- <i class="fas fa-users"></i> -->
        <span class="element-col">
            <JR_TextField :label_name="'F.I.SH ni kiriting'" :defaul_val="users.full_name" @valueEvent="($event)=> users.full_name = $event"></JR_TextField>
        </span>
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
            name: 'news',
        })
    }, 3000)
}
</script>

<style lang="scss" scoped>

</style>