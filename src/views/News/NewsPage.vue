<template>
    <div class="news-page-container">

        <!-- <span class="top-banner">

        </span> -->
        <div class="news-toolbar">
            <span class="title">Temir yo'l yangiliklari</span>
            <i class='bx bx-chat header-chat'></i>
        </div>



        <div class="news-message" v-for="news in news_list" :key="news">
            <div class="header">
                <div class="user-profile">
                    <div class="avatar-box">
                        <img :src="news.user.photo" alt="">
                    </div>
                    <span>{{ news.user.username }}</span>
                </div>
                <div class="action-btn">
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
            </div>
            <div class="content">
                <NewsPicture :image_list="news.images"></NewsPicture>
                <!-- <img v-lazy="{ src:news, loading: '../../assets/images/avatar/image_loading.svg', error:no_picture_url }"> -->
            </div>
            <div class="action">
                <div class="message-reaction">
                    <!-- <i class='bx bx-heart'></i>
                     -->
                    <div class="stage" @click="this.toggle('is-active')">
                        <div class="heart" id="heart_icon"></div>
                    </div>
                    <i class='bx bx-message-rounded'></i>
                </div>
                <div class="message-save">
                    <span class="news-date"> 12 Yan 2023</span>
                </div>
            </div>
            <div class="action-info">
                <span class="like-details">{{ news.like }} ta like</span>
                <span class="content-theme">
                    {{ news.title }}
                </span>

            </div>
        </div>






    </div>
</template>

<script>
import NewsPicture from '@/views/News/components/NewsPicture.vue';

export default {
    components: {
        NewsPicture
    },
    data() {
        return {
            news_list: [

                {
                    user: {
                        username: "Jamacoder.db",
                        photo: "https://source.unsplash.com/collection/928423/100x100"

                    },
                    title: " “Temiryo‘lchi yoshlar forumi” Toshkent shahridagi “Lokomotiv” bog‘ida 30 iyun — O‘zbekistonda Yoshlar kuni ...",
                    like: 231,
                    images: [
                        {
                            image_url: "https://source.unsplash.com/featured/300x201"
                        },
                        {
                            image_url: "https://source.unsplash.com/featured/300x202"
                        },
                        {
                            image_url: "https://source.unsplash.com/featured/300x203"
                        },
                        {
                            image_url: "https://source.unsplash.com/featured/300x204"
                        },

                    ]
                },
                {
                    user: {
                        username: "Jamacoder.db",
                        photo: "https://source.unsplash.com/collection/928423/100x100"

                    },
                    title: " “Temiryo‘lchi yoshlar forumi” Toshkent shahridagi “Lokomotiv” bog‘ida 30 iyun — O‘zbekistonda Yoshlar kuni ...",
                    like: 231,
                    images: [
                        {
                            image_url: "https://source.unsplash.com/featured/300x205"
                        },
                        {
                            image_url: "https://source.unsplash.com/featured/300x206"
                        },
                        {
                            image_url: "https://source.unsplash.com/featured/300x207"
                        },
                        {
                            image_url: "https://source.unsplash.com/featured/300x208"
                        },

                    ]
                },
                {
                    user: {
                        username: "Jamacoder.db",
                        photo: "https://source.unsplash.com/collection/928423/100x100"

                    },
                    title: " “Temiryo‘lchi yoshlar forumi” Toshkent shahridagi “Lokomotiv” bog‘ida 30 iyun — O‘zbekistonda Yoshlar kuni ...",
                    like: 231,
                    images: [
                        {
                            image_url: "https://source.unsplash.com/featured/300x209"
                        },
                        {
                            image_url: "https://source.unsplash.com/featured/300x210"
                        },
                        {
                            image_url: "https://source.unsplash.com/featured/300x211"
                        },
                        {
                            image_url: "https://source.unsplash.com/featured/300x212"
                        },

                    ]
                },
                {
                    user: {
                        username: "Jamacoder.db",
                        photo: "https://source.unsplash.com/collection/928423/100x100"

                    },
                    title: " “Temiryo‘lchi yoshlar forumi” Toshkent shahridagi “Lokomotiv” bog‘ida 30 iyun — O‘zbekistonda Yoshlar kuni ...",
                    like: 231,
                    images: [
                        {
                            image_url: "https://source.unsplash.com/featured/300x234"
                        },


                    ]
                },

            ],

            no_picture_url: "https://st2.depositphotos.com/3904951/8925/v/450/depositphotos_89250312-stock-illustration-photo-picture-web-icon-in.jpg"
        }
    },
    methods: {
        click_like(event) {
            console.log(event);
            document.getElementById("heart_icon").classList.toggle("is-active")
        }
    }
}
</script>

<style lang="scss" scoped>
.heart {
    width: 100px;
    height: 100px;
    background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;

    &.is-active {
        transition-duration: 1s;
        background-position: -2800px 0;
        color: #df1b1b;
    }
}

// BASIC
// body {
//     background: linear-gradient(135deg, #121721 0%, #000000 100%) fixed;
//     color: #FFF;
//     font: 300 16px/1.5 "Open Sans", sans-serif;
// }

.stage {
    position: absolute;
    top: -36px;
    left:-40px;
    z-index: 1;
    // transform: translate(-50%, -50%);
    -webkit-tap-highlight-color: transparent;
}
</style>