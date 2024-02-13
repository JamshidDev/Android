
<template>
<div style="display: flex; flex-direction: column; background: white; " >
  <div style="padding-bottom:60px;"></div>
  <div style="overflow: hidden; width:120px; height: 160px; border-radius: 12px; margin:0 auto;">
    <img style="width: 100%; height: 100%;" src="@/assets/images/avatar/avatar2.jpg" alt="">
  </div>
  <div style="padding: 6px 12px; margin-top: 40px" >
    <span style="font-size: 12px; width: 100%; display: inline-block; color: #6236ff">F.I.SH</span>
    <span style="font-size: 15px; width: 100%; display: inline-block">Jamshid Raximov Shuxrat o'g'li</span>
  </div>
  <div style="padding: 6px 12px;" >
    <span style="font-size: 12px; width: 100%; display: inline-block; color: #6236ff">Tug'ilgan yili</span>
    <span style="font-size: 15px; width: 100%; display: inline-block">2 - iuyl 2000 yil </span>
  </div>
  <div style="padding: 6px 12px;" >
    <span style="font-size: 12px; width: 100%; display: inline-block; color: #6236ff">Lavozim</span>
    <span style="font-size: 15px; width: 100%; display: flex">Amaliy dasturlash va IT-texnologiyalarini amalga oshirish guruhining raqamlashtirish
      loyihalarini joriy qilish va ularni amalga oshirilishiga ko`maklashish bo`limi mutaxassisi</span>
  </div>
  <div style="padding: 6px 12px;" >
    <span style="font-size: 12px; width: 100%; display: inline-block; color: #6236ff">Xodimdagi mavjud kartalar</span>
  </div>
  <div class="cadry_card red_card" @dblclick="show_dialog()">
  </div>
  <div class="cadry_card yellow_card" @dblclick="show_dialog()">
  </div>
  <div class="cadry_card green_card" @dblclick="show_dialog()" style="margin-bottom: 40px">
  </div>
  <div style="padding: 6px 12px;" >
    <span style="font-size: 12px; width: 100%; display: inline-block; color: #a9a9a9">Xodimdan kartalarni olish uchun karta ustiga ikki marta bosing!</span>
  </div>
</div>

  <div class="bottom_dialog" v-show="show" @click.self="close_dialog()">

    <div class="dialog_content"  :class="content_show && 'content_show'">
      <h3 style="text-align: center; ">Siz haqiqattan ham xodim kartasini olmoqchimisiz?</h3>
      <div style="display: flex; flex-direction: column; gap:20px; margin-top: 40px">
        <button class="jr-btn jr-btn-primary"  @click="close_dialog()">
          Xa
        </button> <button class="jr-btn "  @click="close_dialog()">
        Yo'q
      </button>

      </div>

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

const show = ref(false);
const content_show = ref(false);

function show_dialog(){
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

</style>