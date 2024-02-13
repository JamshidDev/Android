<template>
  <div class="notefication-page-container">
    <PageHeader :page_title="'Oxirgi amallar tarixi'" :back_btn="true" :btn_type="'no'" ></PageHeader>
    <div class="notefication-list">
      <div class="list-item" @click="$router.push({name:'history'})" v-for="(msg, index) in 15" :key="msg">
        <div class="item-icon" :class="list_color[index%3]">
          <i class='bx bx-down-arrow-alt message-logo' style="font-size: 28px"></i>

        </div>
        <div class="text-content">
          <div class="title">Karta olindi!

          </div>
          <div class="message-short">
            Ishga kerakli asboblar va formalarsiz kelganligi uchun
          </div>
          <div class="message-date">
            3 Yanvar 2023 12:34
          </div>
        </div>
        <div class="arrow-icon">
          <i class='bx bx-chevron-right arrow-icon'></i>
<!--          <i class='bx bxs-circle unread-msg'></i>-->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

    data() {
        return {

        list_color:['red_card','yellow_card','green_card']

        }
    },
    methods: {

    }
}
</script>
