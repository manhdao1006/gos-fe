<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-banner w-100 p-0 hero-section">
        <div class="container-fluid row fw-bolder" style="font-size: 12px">
            <div class="col-6 row">
                <div class="col-6">
                    <router-link
                        class="navbar-brand fw-bold text-black d-flex align-items-center"
                        to="/"
                    >
                        <img
                            src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505185/logo-admin_fh2b4q.jpg"
                            alt="GOS"
                            class="logo-navbar"
                        />
                        <span class="ms-3 brand-title text-white">GOS - Dream League Soccer</span>
                    </router-link>
                </div>
                <div class="col-6"></div>
            </div>

            <div class="col-6 row text-end align-items-center">
                <template v-if="!user">
                    <div
                        class="col-4 text-white d-flex justify-content-end align-items-center"
                    ></div>
                    <div class="col-4 text-white d-flex justify-content-end align-items-center">
                        <a
                            href="/dang-nhap"
                            class="navbar-brand text-white d-flex align-items-center fs-6"
                            ><i class="fas fa-sign-in-alt"></i>
                            <!-- <span class="ms-2">{{ $t('header.navigation.login') }}</span> -->
                            <span class="ms-2">Đăng nhập</span>
                        </a>
                    </div>
                    <div class="col-4 text-white d-flex justify-content-end align-items-center">
                        <LanguageSwitcher class="position-absolute top-5 end-0 mt-1 me-2" />
                    </div>
                </template>

                <template v-else>
                    <div class="col-4 text-white d-flex justify-content-end align-items-center">
                        <i class="fas fa-user"></i> <span class="ms-2">{{ user.tenFace }}</span>
                    </div>
                    <div class="col-4 logout-btn" @click="logout">
                        <i class="fas fa-sign-out-alt"></i>
                        <!-- <span class="ms-2">{{ $t('header.navigation.logout') }}</span> -->
                        <span class="ms-2">Đăng xuất</span>
                    </div>
                    <div class="col-4 text-white d-flex justify-content-end align-items-center">
                        <LanguageSwitcher class="position-absolute top-5 end-0 mt-1 me-2" />
                    </div>
                </template>
            </div>
        </div>
    </nav>

    <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark-subtle w-100"
        style="padding-top: 5px; padding-bottom: 5px"
    >
        <div class="container">
            <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="item in activeNavItems" :key="item.to">
                        <router-link
                            class="nav-link d-flex align-items-center text-uppercase fw-bolder"
                            style="font-size: 14px; color: #183153"
                            :to="item.to"
                        >
                            <i :class="[item.icon, 'me-2']"></i>
                            <span class="me-2">/</span>
                            {{ item.label }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { useToast } from 'vue-toastification'
    import LanguageSwitcher from '../../views/LanguageSwitcher.vue'

    export default {
        name: 'BaseHeader',
        components: {
            LanguageSwitcher
        },
        data() {
            return {
                user: null,
                clientId:
                    '954414108201-06v6lu48msd5hu6jkfgc77sit28i3gvl.apps.googleusercontent.com',
                toast: null,
                navItems: []
            }
        },
        mounted() {
            const savedUser = localStorage.getItem('user')
            this.user = JSON.parse(savedUser)

            this.toast = useToast()
            this.setNavItems()
        },
        computed: {
            activeNavItems() {
                const current = this.$route.path
                return this.navItems.filter((item) => {
                    if (
                        (current === '/' || current === '/trang-chu') &&
                        (item.to === '/' || item.to === '/trang-chu')
                    ) {
                        return true
                    }
                    return current === item.to
                })
            }
        },
        watch: {
            '$i18n.locale'() {
                this.setNavItems()
            }
        },
        methods: {
            setNavItems() {
                this.navItems = [
                    {
                        to: '/quan-tri/trang-chu',
                        // label: this.$t('header.navigation.homePage'),
                        label: 'Trang chủ Admin',
                        icon: 'fas fa-home'
                    },
                    {
                        to: '/quan-tri/nguoi-dung',
                        // label: this.$t('header.navigation.mapBus'),
                        label: 'Quản lý người dùng',
                        icon: 'fas fa-users-cog'
                    },
                    {
                        to: '/du-lieu',
                        label: this.$t('header.navigation.data'),
                        icon: 'fas fa-database'
                    },
                    {
                        to: '/quan-ly-nguoi-dung',
                        label: this.$t('header.navigation.account'),
                        icon: 'fas fa-users-cog'
                    }
                ]
            },
            checkLogin(path) {
                const protectedRoutes = ['/map-bus', '/quan-ly-nguoi-dung']
                if (!this.user && protectedRoutes.includes(path)) {
                    this.toast.error(this.$t('notification.checkLogin'))
                    return
                }

                this.$router.push(path)
            },

            logout() {
                this.user = null
                localStorage.removeItem('user')
                window.location.reload()
            }
        }
    }
</script>

<style scoped>
    .hero-section {
        background-image: url('https://res.cloudinary.com/springboot-cloud/image/upload/v1753513401/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_llaqju.png');
    }

    .logo-navbar {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
    }

    .bg-banner {
        background-color: #3782f5;
    }
    .nav-link {
        font-weight: 500;
        color: #ffffff;
        transition: color 0.3s ease;
        padding: 0px 40px !important;
        font-size: 17px;
    }
    .nav-link:hover {
        color: red !important;
    }
    .avatar {
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
    .logout-btn {
        color: white;
        cursor: pointer;
        transition: color 0.2s ease;
    }
    .logout-btn:hover {
        color: red;
    }
</style>
