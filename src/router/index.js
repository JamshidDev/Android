import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Home from '@/Layout/Layout.vue';
import Layout from '@/Layout/Layout.vue';
import Login from '@/views/Login/Login.vue';
import PhoneNumber from '@/views/Login/PhoneNumber.vue';
import MePage from '@/views/Me/MePage.vue';
import New_Password from '@/views/NewPassword/New_Password.vue';
import NewsPage from '@/views/News/NewsPage.vue';
import NoteficationList from '@/views/Notefication/NoteficationList.vue';
import PasswordConfirm from '@/views/Password/PasswordConfirm.vue';
import Password_Sms from '@/views/Password_SMS/Password_Sms.vue';
import Register from '@/views/Resigter/Register.vue';
import Sms_code from '@/views/SMS/Sms_code.vue';
import SwipeInfo from '@/views/SwipeInfo/SwipeInfo.vue';
import ScanerPage from "@/views/Scaner/ScanerPage.vue";
import SearchResult from "@/views/SearchResult/SearchResult.vue";
import HistoryPage from "@/views/History/HistoryPage.vue";


const beforeLogin = (to, from, next) => {
    const token = localStorage.getItem("access_token")
    if (token && to.name == "register-phone") {
        next();
    } else if (token) {
        console.log('2')
        next()
    } else {
        localStorage.removeItem("access_token");
        next();
        console.log('3')
    }
};

const routes = [
    {
        name: "layout",
        path: '/layout',
        component: Layout,
        beforeEnter: beforeLogin,
        meta: {
            title: "Asosiy sahifa",
        },
        children: [
            {
            name: "news",
            path: '/layout/news',
            component: NewsPage,
            meta: {
                title: "Yangiliklar sahifa",
            }
        },
        {
                name: "history",
                path: '/layout/news/history',
                component: HistoryPage,
                meta: {
                    title: "Amallar",
                }
            },
        {
            name: "me",
            path: '/layout/me',
            component: MePage,
            meta: {
                title: "Shaxsiy ma'lumotlarim",
            }
        },
            {
                name: "scaner",
                path: '/layout/scaner',
                component: ScanerPage,
                meta: {
                    title: "Shaxsiy ma'lumotlarim",
                }
            },
        {
            name: "notefication",
            path: '/layout/notefication',
            component: NoteficationList,
            meta: {
                title: "Bildirishnoma",
            }
        },
    ]
    },
    {
        name: "search-result",
        path: '/search-result',
        component: SearchResult,

        meta: {
            title: "Qidiruv",
        }
    },
    {
        name: "home",
        path: '/',
        redirect:'/register-phone',
        component: Home,
        beforeEnter: beforeLogin,
        meta: {
            title: "Telefon raqam",
        }
    },
    {
        name: "swipe",
        path: '/swipe-login',
        component: SwipeInfo,
        meta: {
            title: "Dastur ma'lumotlar",
        }
    },
    // {
    //     name: "login",
    //     path: '/login',
    //     component: Register,
    //     meta: {
    //         title: "Kirish sahifa",
    //     }
    // },
    {
        name: "register-phone",
        path: '/register-phone',
        component: Register,
        beforeEnter: beforeLogin,
        meta: {
            title: "Telefon raqam",
        }
    },
    // {
    //     name: "register-user",
    //     path: '/register-user',
    //     component: Register,
    //     meta: {
    //         title: "Registiratsiya",
    //     }
    // },
    {
        name: "sms-code",
        path: '/sms-code',
        component: Sms_code,
        meta: {
            title: "SMS kodi tasdiqlash",
        }
    },
    {
        name: "password-confirm",
        path: '/password-confirm',
        component: PasswordConfirm,
        meta: {
            title: "Parolni tasdiqlash",
        }
    },
    {
        name: "password-sms",
        path: '/password-sms',
        component: Password_Sms,
        meta: {
            title: "Parolni tiklash",
        }
    },
    {
        name: "new-password",
        path: '/new-password',
        component: New_Password,
        meta: {
            title: "Yangi parol",
        }
    },

];



const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.afterEach((to, from) => {

    window.scrollTo(0, 0);
  });



export default router;