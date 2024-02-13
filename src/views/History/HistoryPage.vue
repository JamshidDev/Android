<template>
  <div class="notefication-page-container">
    <PageHeader :page_title="'Karta olindi'" :back_btn="true" :btn_type="'delete'" ></PageHeader>
    <div style="display: flex; flex-direction: column; background: white; padding: 20px 10px" >
      <div style="overflow: hidden; width:90px; height: 90px; border-radius: 50%; margin:0 auto; border: 4px solid #6236ff">
        <img style="width: 100%; height: 100%;" src="@/assets/images/avatar/avatar2.jpg" alt="">
      </div>
      <div style="text-align: center; font-size: 14px; margin-top: 10px">
        Jamshid Raximov
      </div>
      <div>
        <span style="display: inline-block; width: 1100%; font-size: 12px; color: #6236ff">Sabab</span>
        <div style=" width: 100%; font-size: 14px">  Ishga kerakli asboblar va formalarsiz kelganligi hamda
          ish vaqtida mehnat havsizligi qoidalariga amal qilmaganligi uchun sariq kartasi olindi.</div>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 40px">
        <span  style="font-size: 12px">Amal sanasi</span>
        <span style="font-size: 12px">2 Yanvar 2023 12:34</span>
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
