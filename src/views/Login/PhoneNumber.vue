<template>
    <div class="phone_register_page">
        <div class="support-box">
            <Icon color="#0284c7" width="20" height="20" :icon="supportIcon" /> <span>Qo’llab-quvvatlash xizmati </span>
        </div>

        <div class="number-box">
            <div class="page-title">
                Raqamingizni kiriting
            </div>
            <label class="element-label" for="">Telefon raqam</label>
            <div class="phone-number-element">
                <img src="../../assets/images/uz.png" alt="">
                <span>+998</span>
                <input class="number-input" id="user-phone-number" type="tel" v-model="phone_number" autocomplete="off"
                    placeholder="(00) 000 00 00" v-mask="'(##)-###-##-##'" :maxlength="14" />
            </div>
            <span class="error-msg" v-if="invalid_format">{{ error_msg }}</span>



        </div>
<!--      <span class="element-col">-->
<!--            <JR_Passwor :label_name="'Parolni kiriting'" :defaul_val="users.password" @valueEvent="($event)=> users.password = $event"></JR_Passwor>-->
<!--        </span>-->
        <div class="btn-overal">
            <button class="jr-btn jr-btn-primary" id="submit-btn" @click="sumbim_phoneNumber()">
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

import { App as CapacitorApp } from '@capacitor/app';
import supportIcon from '@iconify-icons/bx/support';
import { Icon } from '@iconify/vue';

const invalid_format = ref(false)
const error_msg = ref("Noto'g'ri telefon raqam")
const phone_number = ref('')
const store = useStore()
const router = useRouter()
const route = useRoute()


function sumbim_phoneNumber() {
    if (phone_number.value.length == 14) {
        invalid_format.value = false;
        store.dispatch('set_modal_status', true)
        setTimeout(() => {
            store.dispatch('set_modal_status', false)
            router.push({
                name: 'sms-code',
            })

        }, 3000)
    } else {
        let element = document.getElementById('user-phone-number');
        element.focus();
        // invalid_format.value=true;
    }


}




onMounted(() => {
    // let element = document.getElementById('user-phone')
    // let btn = document.getElementById("submit-btn")
    // element.addEventListener('focus', (event) => {
    //     btn.style.marginTop = '18vh';
    // })
    // element.addEventListener('focusout', (event) => {
    //     btn.style.marginTop = '50vh';
    // })
    // btn.addEventListener('click', () => {

    //     if (phone_number.value && phone_number.value.length == 14) {

    //     } else {
    //         element.focus()
    //     }
    // })

    // CapacitorApp.addListener('backButton', ({ canGoBack }) => {
    //     setTimeout(() => {
    //         btn.style.marginTop = '50vh';
    //     }, 500)

    //     alert("working...");
    // })


})

</script>
