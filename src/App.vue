

<template>
  <!-- <h3>Template app</h3>
  <p>{{ count}}</p>
 <button @click="increment()">2+</button>
 <button @click="decremeent()">2-</button>
 <pre>{{ 
 filter(2)
 }}</pre>
 <Icon color="red" :icon="rssIcon" /> -->
 
 <router-view></router-view>
 <LoadingV></LoadingV>
</template>

<script setup>
import './assets/Icons/css/all.min.css';

import {
  computed,
  onMounted,
  ref,
} from 'vue';

import { useStore } from 'vuex';

import {
  StatusBar,
  Style,
} from '@capacitor/status-bar';

const store = useStore()


const count = computed(()=> store.state.app.count)



onMounted(()=>{
  StatusBar.setBackgroundColor({ color: '#FFFFFF' });
  // StatusBar.StatusBarInfo({ color: '#f6f6f7' });
  StatusBar.setStyle({ style: Style.Light });
})

</script>