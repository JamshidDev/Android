<template>
    <div class="page_container" style="padding-top:10px;">
        <div class="back-section">
            <i class='bx bx-chevron-left' @click="$router.go(-1)"></i>
        </div>
        <span class="page-title" style="margin-top:0px; margin-bottom:40px;">Tasdiqlash!</span>
        <!-- <i class="fas fa-users"></i> -->
        <!-- <span>Biz sizning telefon raqamingizga (*****04) sms kod jo'natdik. </span> -->
        <span class="element-col">
            <JR_Passwor :label_name="'Parolingizni kiriting'" :defaul_val="password" @valueEvent="($event ) => password = $event"></JR_Passwor>
        </span>
        <span class="primary_label">Paroni unutdingizmi?</span>
        <div class="btn-overal">
            <button class="jr-btn jr-btn-primary" @click="submit_code()">
                Tasdiqlash
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
const password = ref('');


function submit_code() {
    console.log(password.value);
    store.dispatch('set_modal_status', true)
    setTimeout(() => {
        store.dispatch('set_modal_status', false)
        router.push({
            name: 'register-user',
        })
    }, 3000)
}
</script>

<style lang="scss" scoped></style>