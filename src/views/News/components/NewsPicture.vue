<template>
    <div class="news-image-box-container">
        <swiper :slides-per-view="1" :space-between="0" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="(image, index) in image_list" :key="image">
                <div class="swipe-image-box">
                    <div v-show="image_list.length>1" class="image-count">{{ index+1}} /4</div>
                    <img class="picture-content"
                        v-lazy="{ src: image.image_url, loading: '', error: no_picture_url }">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import {
  Swiper,
  SwiperSlide,
} from 'swiper/vue';

export default {
    props:{
        image_list:{
            type:Array,
            default:[
               {
                image_url:""
               }
            ]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        
        return {
            no_picture_url: "https://st2.depositphotos.com/3904951/8925/v/450/depositphotos_89250312-stock-illustration-photo-picture-web-icon-in.jpg"
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
        };
    },

}
</script>

<style lang="scss" scoped>
.news-image-box-container {
    width: 100%;

    .swipe-image-box {
        position: relative;

        .image-count {
            top: 10px;
            right: 20px;
            position: absolute;
            border-radius: 16px;
            width: 40px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(17, 22, 22, 0.614);
            color: #ffff;
            font-size: 11px;
            font-weight: 700;
        }

        .picture-content {
            width: 100%;
            height: 100%;
            height: 300px;

        }
    }

}
</style>