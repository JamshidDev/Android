<template>
    <div>
        <swiper :pagination="true" :modules="modules" :slides-per-view="1" :space-between="0" @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide>
                <div class="swipe-info">
                    <h1>1</h1>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swipe-info">
                    <h1>2</h1>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swipe-info">
                    <h1>3</h1>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swipe-info">
                    <h1>4</h1>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
// Import Swiper Vue.js components
import {
  Swiper,
  SwiperSlide,
} from 'swiper/vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {

        }
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination],
        };
    },

}
</script>

<style lang="scss" scoped>
.swipe-info {
    width: 100%;
    height: 100vh;
    background-color: #334534;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
}
</style>