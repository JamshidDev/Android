<template>
    <div class="me-page-container">
        <!-- <div class="page_header-app">
            <i class='bx bx-chevron-left back-btn'></i>
            <span class="app-title">Shaxsiy ma'lumotlar</span>
            <span class="notefication-btn">
                <i class='bx bx-bell'></i>
                <span class="bell-badge"> 3</span>

            </span>
        </div> -->
        <PageHeader :page_title="'Shaxsiy ma\'lumotlar'" :back_btn="true" :btn_type="'bill'"
            @billEvent="() => $router.push({ name: 'notefication' })"></PageHeader>

        <div class="user-avatar-col">
            <div class="avatar-box">
                <img src="../../assets/images/avatar/avatar2.jpg" alt="">
            </div>
        </div>

        <div class="user-idintification-alert">
            <i class='bx bx-message-alt-error alert-icons'></i>
            <span class="alert-msg">Tasdiqlanmagan foydalanuvchi</span>
            <i class='bx bx-chevron-right arrow-icons'></i>
        </div>


        <div class="list-container" v-for="list in menu_list" :key="list.label">
            <span class="list-label">{{ list.label }}</span>
            <ul class="list-view-box">
                <li class="list-item" v-for="item in list.list" :key="item.title">
                    <div class="item-icon">
                        <i :class="item.icon"></i>
                    </div>
                    <span class="item-content">
                        {{ item.title }}
                    </span>
                    <i class='bx bx-chevron-right arrow-icon'></i>
                </li>

            </ul>
        </div>




    </div>
</template>

<script>
export default {
    data() {
        return {
            menu_list: [
                {
                    label: "Monitoring",
                    list: [
                        {
                            title: "Lavozim ma'lumoti",
                            icon: "bx bx-purchase-tag-alt",
                            is_permission: true,
                        },
                        {
                            title: "Tibbiy ko'rik",
                            icon: "bx bx-plus-medical",
                            is_permission: true,
                        },
                        {
                            title: "Ta'til ma'lumoti",
                            icon: "bx bx-file",
                            is_permission: true,
                        },
                        {
                            title: "Mukofatlar",
                            icon: "bx bx-award",
                            is_permission: true,
                        },
                        {
                            title: "Intizomiy jazolar",
                            icon: "bx bx-award",
                            is_permission: true,
                        },
                    ]
                },
                {
                    label: "Qo'shimcha",
                    list: [
                        {
                            title: "Oylik ma'lumoti",
                            icon: "bx bx-dollar-circle",
                            is_permission: true,
                            
                        },
                        {
                            title: "Mehnat faoliyati",
                            icon: "bx bxl-slack",
                            is_permission: true,
                        },
                        {
                            title: "Mening arizalarim",
                            icon: "bx bx-file",
                            is_permission: true,
                        },
                        
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>