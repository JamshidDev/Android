

<template>
  <div class="page_container" style="padding-top: 20px">
    <div class="back-section" >
      <i class='bx bx-chevron-left' @click="$router.go(-1)"></i>
    </div>
    <span class="element-col">
            <JR_TextField
                :mask="'####-####-####-##'"
                :id="`user-code-number`"
                @eventEnter="searchCode"
                @keyup="searchCode"
                :placeholder="`____-____-____-__`"
                type="text"
                :label_name="'Xodimning jshshir yozib izlang...'"
                :defaul_val="code"
                @valueEvent="($event)=> code = $event"></JR_TextField>
    </span>
    <UserInfo v-if="isHaveData" :worker="worker" :pin="code" ></UserInfo>
  </div>
</template>


<script setup>
import UserInfo from "@/components/UserInfo.vue";
import {
  onMounted,
  ref,
} from 'vue';
import vueDebounce, {debounce} from 'vue-debounce'
import auth from '../../service/services/auth.js'
import { useStore } from 'vuex';
import {showNotify} from "vant";
const store = useStore()
const code = ref('')
const worker = ref(null)
const isHaveData = ref(false);
function searchCode(){
  if(code.value.length ===17){
    let element = document.getElementById('user-code-number');
    element.blur();
    searchWorkerByCode()

  }




}
const searchWorkerByCode = debounce(val =>{
  store.dispatch('set_modal_status', true)
  let params = {
    pin:code.value.split('-').join('')
  }
  auth._searchWorker({params}).then((res)=>{
    if(res.data.worker){
      worker.value = res.data.worker
      isHaveData.value = true
      showNotify({
        type: 'success',
        message: res.data.worker?.first_name +" "+res.data.worker?.last_name,
        duration: 1000,
      });
    }else{
      isHaveData.value = false
      showNotify({
        type: 'danger',
        message: "Worker === null",
        duration: 1000,
      });
    }

  }).catch((err)=>{
    isHaveData.value = false
    if(err.response.status === 404){
      showNotify({
        type: 'danger',
        message: "Xodim topilmadi",
        duration: 1000,
      });
    }else{
      showNotify({
        type: 'danger',
        message: "Kutilmagan xatolik yuz berdi",
        duration: 1000,
      });
    }

  }).finally(()=>{
    store.dispatch('set_modal_status', false)
  })
}, '400ms')

onMounted(()=>{
  setTimeout(()=>{
    let element = document.getElementById('user-code-number');
    element.focus();
  },200)

})


</script>

<style scoped lang="scss">

</style>