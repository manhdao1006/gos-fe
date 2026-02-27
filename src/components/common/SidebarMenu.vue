<template>
    <div :class="['sidebar', { collapsed }]">
        <div class="toggle-btn" @click="toggleSidebar">
            <i class="fa-solid fa-bars"></i>
            <!-- <span v-if="!collapsed">{{ $t('header.navigation.system') }}</span> -->
            <span class="ms-2" v-if="!collapsed">Quản lý</span>
        </div>

        <ul class="navbar-nav mt-3 fw-medium text-start" v-if="!collapsed">
            <li class="nav-item" v-for="item in menuItems" :key="item.to">
                <a href="#" class="nav-link" @click.prevent="checkLogin(item.to)">
                    {{ $t(item.label) }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { useToast } from 'vue-toastification'

    export default {
        name: 'SidebarMenu',
        props: {
            user: Object
        },
        data() {
            return {
                collapsed: false,
                menuItems: [
                    { to: '/quan-tri/nguoi-dung', label: 'Quản lý người dùng' },
                    { to: '/quan-tri/su-kien', label: 'Quản lý sự kiện' },
                    { to: '/quan-tri/giai-dau', label: 'Quản lý giải đấu' },
                    { to: '/quan-tri/bang-dau', label: 'Quản lý bảng đấu' },
                    { to: '/', label: 'Quản lý trận đấu' }
                    // { to: '/', label: 'header.navigation.homePage' },
                    // { to: '/map-bus', label: 'header.navigation.mapBus' },
                    // { to: '/du-lieu', label: 'header.navigation.data' },
                    // { to: '/quan-ly-nguoi-dung', label: 'header.navigation.account' }
                ],
                toast: useToast()
            }
        },
        methods: {
            toggleSidebar() {
                this.collapsed = !this.collapsed
                this.$emit('updateCollapsed', this.collapsed)
            },
            checkLogin(path) {
                const protectedRoutes = ['/quan-tri/nguoi-dung', '/quan-tri/su-kien']
                if (!this.user && protectedRoutes.includes(path)) {
                    this.toast.error(this.$t('notification.checkLogin'))
                    return
                }
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        background-color: #116096;
        padding: 5px;
        min-height: 50vh;
        transition: 0.3s;
    }

    .sidebar.collapsed {
        width: 60px;
    }

    .toggle-btn {
        background: transparent;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
    }

    .nav-link {
        color: #fff;
        padding: 10px;
        display: block;
        font-size: 14px;
        border-radius: 6px;
    }

    .nav-link:hover,
    .nav-link.router-link-active {
        background: rgba(255, 255, 255, 0.2);
    }
</style>
