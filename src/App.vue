

<template>
  <h3>Template app</h3>
  <p>{{ count}}</p>
 <button @click="increment()">2+</button>
 <button @click="decremeent()">2-</button>
 <pre>{{ 
 filter(2)
 }}</pre>
 
 <router-view></router-view>
</template>

<script setup>
import {
  computed,
  ref,
} from 'vue';

import { useStore } from 'vuex';

const store = useStore()
const name = ref("Jamshid")


const count = computed(()=> store.state.app.count)

function increment(){
  store.dispatch('set_count', 2)
}
function decremeent(){
  store.dispatch('set_deccount', 2)
}

function filter(id){
return store.getters.filter_list(id)
}

</script>