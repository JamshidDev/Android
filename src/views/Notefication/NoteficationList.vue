<template>
    <div class="notefication-page-container">
        <PageHeader :page_title="'Bildirishnoma'" :back_btn="true" :btn_type="'notbill'" ></PageHeader>
        <div class="notefication-list">
            <div class="list-item" v-for="msg in 10" :key="msg">
                <div class="item-icon">
                    <i class='bx bx-down-arrow-alt message-logo'></i>
                   
                </div>
                <div class="text-content">
                    <div class="title">Bayram tabrigi!
                       
                    </div>
                    <div class="message-short">
                        Xurmatli xizmatdosh sizni kirib kelayotgan bayram bilan chin ko'ngildan qutlaymiz
                    </div>
                    <div class="message-date">
                        3 Yanvar 2023 12:34
                    </div>
                </div>
                <div class="arrow-icon">
                    <i class='bx bx-chevron-right arrow-icon'></i>
                    <i class='bx bxs-circle unread-msg'></i>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
        
    }
</script>

<style lang="scss" scoped>

</style>