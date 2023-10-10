<template>
    <div class="page_container" style="padding-top:10px;">
        <div class="back-section">
            <i class='bx bx-chevron-left' @click="$router.go(-1)"></i>
        </div>
        <span class="page-title" style="margin-top:0px; margin-bottom:40px;">Tasdiqlash!</span>
        <!-- <i class="fas fa-users"></i> -->
        <span>Biz sizning telefon raqamingizga (*****04) sms kod jo'natdik. </span>
        <span class="element-col">
            <JR_NumberInput :label_name="'Kodni kiriting'" :defaul_val="sms_code" @valueEvent="($event) => sms_code = $event">
            </JR_NumberInput>
        </span>

        <span>Qayta kod olish 2:59</span>

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
const sms_code = ref('');


function submit_code() {
    console.log(sms_code.value);
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