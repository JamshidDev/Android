<template>
  <van-overlay :show="modal_visible" style="z-index: 9999; display: flex; justify-content: center; align-items: center;">
    <div class="loading__overall">
      <van-loading type="spinner" size="40" />
    </div>

  </van-overlay>
</template>


<script setup>
import { computed } from 'vue';

import { useStore } from 'vuex';

const store = useStore()
const modal_visible = computed(()=> store.state.app.loading_modal)
</script>

<style lang="scss" scoped>
.loading__overall{
  padding: 20px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>