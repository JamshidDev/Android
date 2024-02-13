<template>
    <div class="layout-wrapper">
        <div class="main-layout">
            <router-view v-slot="{ Component }">
                    <transition name="slide-right" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            <!-- <router-view></router-view> -->
        </div>
        <div class="bottom-navigation">
            <div class="nav-col" @click="change_tab('news')" :class="active_tab =='news' && 'active-col'">
                <i class='bx bx-home-alt nav-icon'></i>
                <span class="nav-label">Amallar</span>
            </div>
<!--            <div class="nav-col" @click="change_tab('me')" :class="active_tab ==2 && 'active-col'">-->
<!--                <i class='bx bx-message-alt-detail nav-icon'></i>-->
<!--                <span class="nav-label">Arizalar</span>-->
<!--            </div>-->

            <div class="nav-col" @click="change_tab('scaner')" :class="active_tab =='scaner' && 'active-col'">
                <i class='bx bx-qr-scan nav-icon'></i>
                <span class="nav-label">Skaner</span>
            </div>
            
<!--            <div class="nav-col" @click="change_tab('me')" :class="active_tab ==5 && 'active-col'">-->
<!--                <i class='bx bx-conversation nav-icon'></i>-->
<!--                <span class="nav-label">Chat</span>-->
<!--            </div>-->
            <div class="nav-col" @click="change_tab('me')" :class="active_tab =='me' && 'active-col'">
                <i class='bx bx-user-pin nav-icon'></i>
                <span class="nav-label">Men</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active_tab:'scaner',
        }
    },
    watch:{
        $route(to, from) {
            this.active_tab = to.name;
        }
    },
    methods: {
     
       
        change_tab(route_name) {
            this.$router.push({name:route_name})
        }
    },
    mounted(){
        this.active_tab = this.$route.name;
    }


}
</script>
<style lang="scss">
.slide-right-enter-active {
    transition: all 0.3s ease-in;
}

.slide-right-leave-active {
    transition: all 0.2s ease;
}

.slide-right-enter-from {
    transform: translateY(-20px);
    opacity: 0;
}

.slide-right-enter-to {
    transform: translateY(0px);
    opacity: 1;
}

.slide-right-leave-from {
    transform: scale(1);
}
</style>
