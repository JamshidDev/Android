<template>
  <div class="jr-password">
    <span class="jr-label">{{ label_name}}</span>

    <input v-if="mask" v-mask="mask" class="jr-input-password" :type="type" v-model="text_val" :placeholder="placeholder" @keyup.enter="eventEnter" :id="id" maxlength="17">
    <input v-else class="jr-input-password" :type="type" v-model="text_val" :placeholder="placeholder" @keyup.enter="eventEnter" :id="id">
  </div>
</template>

<script>
export default {
  props: {
    defaul_val: {
      type: String,
      default: '',
    },
    label_name: {
      type: String,
      default: 'Label name',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: 'xs',
    },
    mask: {
      type: String,
      default: null,
    }


  },
  data() {
    return {
      text_val: null,
    }
  },
  watch: {
    text_val(new_val) {
      this.change_val(new_val)
    }
  },
  methods: {
    change_val(value) {
      this.$emit('valueEvent', value)
    },

    eventEnter() {
      this.$emit("eventEnter")
    }
  },
  mounted() {
    this.text_val = this.defaul_val;
  }


}
</script>

<style lang="scss" scoped>

</style>