<template>
    <div class="me-page-container">
        <PageHeader :page_title="'Shaxsiy ma\'lumotlar'" :back_btn="true" :btn_type="'bill'"
            @billEvent="() => $router.push({ name: 'notefication' })"></PageHeader>

        <div class="user-avatar-col">
            <div class="avatar-box">
              <img v-if="profile" :src="profile.avatar" alt="">
              <img  v-else src="../../../public/avatar.jpg" alt="">
            </div>
        </div>

        <div class="user-idintification-alert">
            <i class='bx bx-user-circle alert-icons'></i>
            <span class="alert-msg" style="text-align: center">{{profile?.name}}</span>
<!--            <i class='bx bx-chevron-right arrow-icons'></i>-->
        </div>


        <div class="list-container" v-for="list in menu_list" :key="list.label">
            <span class="list-label">{{ list.label }}</span>
            <ul class="list-view-box">
                <li
                    class="list-item"
                    v-for="item in list.list" :key="item.title"
                    @click="handlerEvent(item.icon)"
                >
                    <div class="item-icon">
                        <i :class="item.icon"></i>
                    </div>
                    <span class="item-content">
                        {{ item.title }}
                    </span>
                    <i class='bx bx-chevron-right arrow-icon'></i>
                </li>

            </ul>
        </div>




    </div>
</template>

<script setup>
import auth from "../../service/services/auth.js";
import { useStore } from 'vuex';
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
const store = useStore()
const router = useRouter()
const menu_list =  [
  {
    label: "Monitoring",
    list: [
      {
        title: "Lavozim ma'lumoti",
        icon: "bx bx-purchase-tag-alt",
        is_permission: true,
      },
      {
        title: "Tibbiy ko'rik",
        icon: "bx bx-plus-medical",
        is_permission: true,
      },
      {
        title: "Ta'til ma'lumoti",
        icon: "bx bx-file",
        is_permission: true,
      },
      {
        title: "Mukofatlar",
        icon: "bx bx-award",
        is_permission: true,
      },
      {
        title: "Intizomiy jazolar",
        icon: "bx bx-award",
        is_permission: true,
      },
    ]
  },
  {
    label: "Qo'shimcha",
    list: [
      {
        title: "Chiqish",
        icon: "bx bx-log-out",
        is_permission: true,
      },

    ]
  }
]

const profile = ref(null)

const handlerEvent = (v)=>{
  if(v==='bx bx-log-out'){
    store.dispatch('set_modal_status', true)
    auth._logOut().then(()=>{
      localStorage.removeItem('access_token')
      router.push({
        name: 'register-phone',
      })
    }).finally(()=>{
      store.dispatch('set_modal_status', false)
    })
  }
}

const getMe = ()=>{
  store.dispatch('set_modal_status', true)
  auth._getMe().then((res)=>{
    profile.value = res.data.user
  }).finally(()=>{
    store.dispatch('set_modal_status', false)
  })
}

onMounted(()=>{
  getMe()
})
</script>

<style lang="scss" scoped></style>