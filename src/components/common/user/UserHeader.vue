<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger w-100 p-0 hero-section">
        <div class="container-fluid row fw-bolder" style="font-size: 12px">
            <div class="col-6 row">
                <div class="col-6">
                    <router-link class="navbar-brand fw-bold d-flex align-items-center" to="/">
                        <img
                            src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505199/logo-group_jz2ezw.jpg"
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

    <nav class="navbar navbar-expand-lg navbar-dark bg-danger-subtle w-100">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav text-capitalize">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" @click.prevent="checkLogin('/')">
                            <!-- {{
                            $t('header.navigation.homePage')
                        }} -->
                            Sự kiện
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { useToast } from 'vue-toastification'
    import LanguageSwitcher from '../../../views/LanguageSwitcher.vue'

    export default {
        name: 'UserHeader',
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
                        to: '/quan-tri/su-kien',
                        // label: this.$t('header.navigation.mapBus'),
                        label: 'Quản lý sự kiện',
                        icon: 'far fa-calendar-alt'
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

            logout() {
                this.user = null
                localStorage.removeItem('user')
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .hero-section {
        background-image: url('https://res.cloudinary.com/springboot-cloud/image/upload/v1753513401/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_llaqju.png');
        background-size: cover;
        background-position: center;
        height: 60px;
    }

    .logo-navbar {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
    }

    .nav-link {
        font-weight: 500;
        color: #000;
        transition: color 0.3s ease;
        padding: 0 20px !important;
        font-size: 16px;
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

    @media (max-width: 992px) {
        .hero-section {
            height: 55px;
        }
        .logo-navbar {
            width: 45px;
            height: 45px;
        }
        .nav-link {
            font-size: 14px;
            padding: 0 10px !important;
        }
    }

    @media (max-width: 768px) {
        .hero-section {
            height: 50px;
        }
        .logo-navbar {
            width: 40px;
            height: 40px;
        }
        .nav-link {
            font-size: 13px;
            padding: 0 8px !important;
        }
        .navbar .container-fluid > .row {
            flex-wrap: wrap;
        }
        .navbar .col-6 {
            width: 100%;
            margin-bottom: 5px;
            text-align: center;
        }
        .navbar .col-6.text-end {
            text-align: center !important;
        }
        .logout-btn {
            margin-top: 5px;
        }
    }
</style>
