<template>
  <div class="notefication-page-container">
    <PageHeader :page_title="history? `${history.type.value} talon` : ''"  :back_btn="true" :btn_type="'delete'" ></PageHeader>
    <div v-if="history" style="display: flex; flex-direction: column; background: white; padding: 20px 10px" >
      <div style="overflow: hidden; width:90px; height: 90px; border-radius: 50%; margin:0 auto; border: 4px solid #6236ff">
        <img style="width: 100%; height: 100%;" :src="history?.worker_id?.photo" alt="">
      </div>
      <div style="text-align: center; font-size: 14px; margin-top: 10px">
        {{history?.worker_id?.full_name}}
      </div>
      <div>
        <span style="display: inline-block; width: 1100%; font-size: 12px; color: #6236ff">Sabab</span>
        <div style=" width: 100%; font-size: 14px"> {{history?.comment}}</div>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 40px">
        <span  style="font-size: 12px">Amal sanasi</span>
        <span style="font-size: 12px">
           {{dayjs(history.from_date).format('D')}}
            - {{dayjs(history.from_date).format('MMM')}}
            {{dayjs(history.from_date).format('YYYY')}}
        </span>
      </div>

    </div>

  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import dayjs from "dayjs";

const history = ref(null)

const getHistory = ()=>{
  history.value = localStorage.getItem('card')? JSON.parse(localStorage.getItem('card')) : null
}

onMounted(()=>{
  getHistory()
})

</script>
