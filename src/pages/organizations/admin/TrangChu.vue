<template>
    <div>
        <AdminHeader />
        <div class="container-fluid px-0">
            <div class="d-flex h-100">
                <div :style="{ width: collapsed ? '60px' : '220px', transition: 'width 0.3s' }">
                    <SidebarMenu
                        :user="user"
                        style="height: 100%"
                        @updateCollapsed="collapsed = $event"
                    />
                </div>
                <div class="flex-grow-1 ms-3 mt-3 me-3" style="width: 100%; height: 100%">
                    <p v-if="user" class="fw-bold text-success fs-5">
                        <!-- {{ $t('homePage.welcome') }}, {{ user.tenFace }} 👋 -->
                        Xin chào, {{ user.tenFace }} 👋
                    </p>
                    <!-- <p v-else class="text-muted">{{ $t('homePage.valid') }}</p> -->
                    <p v-else class="text-muted">Vui lòng đăng nhập để tiếp tục.</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import AdminHeader from '../../../components/common/admin/AdminHeader.vue'
    import SidebarMenu from '../../../components/common/SidebarMenu.vue'
    import Footer from '../../../components/Footer.vue'
    import { eventBus } from '../../../eventBus'

    export default {
        name: 'TrangChu',
        components: {
            AdminHeader,
            SidebarMenu,
            Footer
        },
        data() {
            return {
                user: JSON.parse(localStorage.getItem('user') || 'null'),
                collapsed: false
            }
        },
        mounted() {
            const savedUser = localStorage.getItem('user')
            if (savedUser) this.user = JSON.parse(savedUser)

            this.userLoggedInHandler = (user) => {
                this.user = user
            }
            eventBus.on('userLoggedIn', this.userLoggedInHandler)
        },
        beforeUnmount() {
            if (this.userLoggedInHandler) {
                eventBus.off('userLoggedIn', this.userLoggedInHandler)
            }
        }
    }
</script>
