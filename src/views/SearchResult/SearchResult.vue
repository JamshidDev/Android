

<template>
  <div class="page_container" style="padding-top: 20px">
    <div class="back-section" >
      <i class='bx bx-chevron-left' @click="$router.go(-1)"></i>
    </div>
    <span class="element-col">
            <JR_TextField :id="`user-code-number`" @eventEnter="searchCode" :placeholder="`Karta kodni kiriting`" type="number" :label_name="'Xodimning karta kodini yozib izlang...'" :defaul_val="code" @valueEvent="($event)=> code = $event"></JR_TextField>
    </span>
    <UserInfo v-if="isHaveData"></UserInfo>
  </div>
</template>


<script setup>
import UserInfo from "@/components/UserInfo.vue";
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
function searchCode(){
  let element = document.getElementById('user-code-number');
  element.blur();
  store.dispatch('set_modal_status', true)
  setTimeout(() => {
    store.dispatch('set_modal_status', false)
    isHaveData.value = true;
  }, 3000)
}
onMounted(()=>{
  setTimeout(()=>{
    let element = document.getElementById('user-code-number');
    element.focus();
  },200)

})

const code = ref('')
const isHaveData = ref(false);
</script>

<style scoped lang="scss">

</style>