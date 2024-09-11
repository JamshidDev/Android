
<template>
  <template v-if="worker">
    <div style="display: flex; flex-direction: column; background: white; " >
      <div style="padding-bottom:60px;"></div>
      <div style="overflow: hidden; width:120px; height: 160px; border-radius: 12px; margin:0 auto;">
        <img style="width: 100%; height: 100%;" :src="worker?.photo" alt="">
      </div>
      <div style="padding: 6px 12px; margin-top: 40px" >
        <span style="font-size: 12px; width: 100%; display: inline-block; color: #6236ff">F.I.SH</span>
        <span style="font-size: 15px; width: 100%; display: inline-block">{{worker.first_name +' '+worker.last_name+' '+worker.middle_name}}</span>
      </div>
      <div style="padding: 6px 12px;" >
        <span style="font-size: 12px; width: 100%; display: inline-block; color: #6236ff">Tug'ilgan yili</span>
        <span style="font-size: 15px; width: 100%; display: inline-block">{{worker.birth_date}} </span>
      </div>
      <div style="padding: 6px 12px;" >
        <span style="font-size: 12px; width: 100%; display: inline-block; color: #6236ff">Lavozim</span>
        <span style="font-size: 15px; width: 100%; display: flex">{{worker.position}}</span>
      </div>
      <div style="padding: 6px 12px;" >
        <span style="font-size: 12px; width: 100%; display: inline-block; color: #6236ff">Xodimdagi mavjud kartalar</span>
      </div>
      <div class="cadry_card red_card" @dblclick="show_dialog('red')">
      </div>
      <div class="cadry_card yellow_card" @dblclick="show_dialog('yellow')">
      </div>
      <div class="cadry_card green_card" @dblclick="show_dialog('green')" style="margin-bottom: 40px">
      </div>
      <div style="padding: 6px 12px;" >
        <span style="font-size: 12px; width: 100%; display: inline-block; color: #a9a9a9">Xodimdan kartalarni olish uchun karta ustiga ikki marta bosing!</span>
      </div>
    </div>
    <div class="bottom_dialog" v-show="show" @click.self="close_dialog()">

      <div class="dialog_content"  :class="content_show && 'content_show'">
        <h3 style="text-align: center; ">Siz haqiqattan ham xodim kartasini olmoqchimisiz?</h3>
        <div style="display: flex; flex-direction: column; gap:20px; margin-top: 40px">
          <textarea
              class="reason__textarea"
              placeholder="Talon olish sababi..."
              v-model="reason"
          />
          <button class="jr-btn jr-btn-primary"  @click="saveCard()">
            Xa
          </button> <button class="jr-btn "  @click="close_dialog()">
          Yo'q
        </button>

        </div>

      </div>

    </div>
  </template>


</template>
<script setup>
import auth from "../service/services/auth.js";
import {
  onMounted,
  ref,
} from 'vue';
import dayjs from "dayjs";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
const store = useStore()
const router = useRouter()
const show = ref(false);
const reason = ref('')
const cardType = ref(null)
const content_show = ref(false);

const props = defineProps({
  worker:Object,
  pin:String,
})

function show_dialog(type){
  cardType.value = type
  show.value = true;
  setTimeout(()=>{
    content_show.value = true;
  },60)

}

function close_dialog(){

  content_show.value = false;
  setTimeout(()=>{
    show.value = false;
  }, 200)
}

const saveCard = ()=>{
  store.dispatch('set_modal_status', true)
  let data = {
    pin:props.pin,
    type:cardType.value,
    from_date:dayjs(new Date()).format('YYYY-MM-DD'),
    comment:reason.value,
  }
  auth._violator({data}).then((res)=>{
    $Toast.success("Talon olindi...", {position:"top-right"})
    router.push({name:'scaner'})

  }).finally(()=>{
    store.dispatch('set_modal_status', false)
  })
  console.log(data)
  close_dialog()
}

onMounted(()=>{
})
</script>



<style scoped lang="scss">

.bottom_dialog{
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100vh;
  background-color: #1a181846;
  display: flex;
  align-items: end;
  overflow: hidden;
  transition: all 0.2s linear;

  .dialog_content{
    padding: 20px;
    width: 100%;
    height: 0;
    background: white;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    overflow: hidden;
    transition: all 0.225s ease;
    opacity: 0.3;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
  .content_show{
    height: 50vh;
    opacity: 1;
  }
}
.reason__textarea{
  width: 100%;
  height: 100px;
  border: 1px solid #32325D3F;
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 16px;
}

</style>