<template>
  <div class="notefication-page-container">
    <PageHeader :page_title="'Oxirgi amallar tarixi'" :back_btn="true" :btn_type="'no'" ></PageHeader>
    <div class="notefication-list">
      <div class="list-item"
           v-for="(card, index) in userTalons" :key="index"
           @click="showDetails(card)"
      >
        <div class="item-icon" :class="`${card.type.key}_card`">
          <i class='bx bx-down-arrow-alt message-logo' style="font-size: 28px"></i>

        </div>
        <div class="text-content">
          <div class="title">{{card.worker_id.full_name}} talon

          </div>
          <div class="message-short">
            <van-text-ellipsis
                :content="card.comment"
                expand-text=" ko'proq"
                collapse-text=" kamroq"
            />
          </div>
          <div class="message-date">
            {{dayjs(card.from_date).format('D')}}
            - {{dayjs(card.from_date).format('MMM')}}
            {{dayjs(card.from_date).format('YYYY')}}
          </div>
        </div>
        <div class="arrow-icon">
          <i class='bx bx-info-circle arrow-icon'></i>
<!--          <i class='bx bxs-circle unread-msg'></i>-->
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import dayjs from 'dayjs';
import auth from "../../service/services/auth.js";
import {useStore} from "vuex";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const store = useStore()
const userTalons = ref([])

const getUserTalons = ()=>{
  store.dispatch('set_modal_status', true)
  auth._getUserTalons().then((res)=>{
    userTalons.value = res.data.talons.data
  }).finally(()=>{
    store.dispatch('set_modal_status', false)
  })
}

const showDetails = (v)=>{
  // localStorage.setItem('card', JSON.stringify(v))
  // router.push({name:'history'})
}

onMounted(()=>{
  getUserTalons()
})



</script>
