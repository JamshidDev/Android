

<template>
  <div class="page_container" style="padding-top: 20px">
    <div class="back-section" >
      <i class='bx bx-chevron-left' @click="$router.go(-1)"></i>
    </div>
    <span class="element-col">
            <JR_TextField :id="`user-code-number`" @eventEnter="searchCode" :placeholder="`Karta kodni kiriting`" type="number" :label_name="'Xodimning karta kodini yozib izlang...'" :defaul_val="code" @valueEvent="($event)=> code = $event"></JR_TextField>
    </span>
    <UserInfo v-if="isHaveData" :worker="worker" ></UserInfo>
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
import auth from '../../service/services/auth.js'
import { useStore } from 'vuex';
const store = useStore()
const code = ref('')
const worker = ref(null)
const isHaveData = ref(false);
function searchCode(){
  let element = document.getElementById('user-code-number');
  element.blur();
  store.dispatch('set_modal_status', true)
  let params = {
    pin:code.value
  }

  auth._searchWorker({params}).then((res)=>{
    if(res.data.worker){
      worker.value = res.data.worker
      isHaveData.value = true
    }else{
      isHaveData.value = false
      $Toast.warning("Xodim topilmadi...")
    }

  }).catch((err)=>{
    console.log(err)
  }).finally(()=>{
    store.dispatch('set_modal_status', false)
  })

}
onMounted(()=>{
  setTimeout(()=>{
    let element = document.getElementById('user-code-number');
    element.focus();
  },200)

})


</script>

<style scoped lang="scss">

</style>