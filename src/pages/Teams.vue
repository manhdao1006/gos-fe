<template>
    <div
        class="home-container"
        style="background: linear-gradient(135deg, #000000 0%, #ff0000 100%)"
    >
        <!-- Popup hiển thị khi mở trang -->
        <div
            v-if="showPopup"
            class="popup-overlay d-flex align-items-center justify-content-center"
        >
            <div class="popup-content bg-white rounded shadow p-4 text-center position-relative">
                <button
                    class="btn-close position-absolute top-0 end-0 m-2"
                    @click="closePopup"
                ></button>
                <img
                    src="https://res.cloudinary.com/springboot-cloud/image/upload/v1755693189/meaning-logo_onfw9x.jpg"
                    alt="Ý nghĩa logo"
                    class="img-fluid"
                />
            </div>
        </div>

        <div
            class="container-fluid text-white min-vh-100 d-flex align-items-center justify-content-center py-5 bg-team"
        >
            <!-- Nút Back -->
            <button
                class="btn bg-white rounded-circle shadow position-absolute top-0 start-0 m-3 d-flex align-items-center justify-content-center"
                style="width: 40px; height: 40px"
                @click="goBack"
            >
                <i class="bi bi-arrow-left text-dark"></i>
            </button>

            <div class="row w-100 align-items-center">
                <!-- Logo + Tên đội -->
                <div class="col-12 col-md-4 text-center mb-4 mb-md-0 order-1 order-md-1">
                    <img
                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1755693657/11zon_cropped-removebg-preview_1_cuywly.png"
                        alt="Phượng Hoàng Đỏ"
                        class="img-fluid mb-3 hover-scale"
                        role="button"
                        style="max-width: 220px"
                        @click="openPopup"
                    />
                    <h4 class="fst-italic">"PHƯỢNG HOÀNG ĐỎ"</h4>
                    <h3 class="fw-bold bg-warning text-dark px-3 py-2 rounded mt-2 d-inline-block">
                        ĐỘI TUYỂN GOS
                    </h3>
                </div>

                <!-- Menu chức năng -->
                <div class="col-12 col-md-8 order-2 order-md-2">
                    <div class="row justify-content-center">
                        <div v-for="item in menuItems" :key="item.label" class="col-6 mb-3">
                            <div
                                class="bg-warning text-dark rounded d-flex flex-column align-items-center justify-content-center p-4 shadow hover-scale h-100 menu-card"
                                role="button"
                                @click="goTo(item.route)"
                                :title="item.label"
                            >
                                <i :class="item.icon + ' display-5 mb-3'"></i>
                                <h5 class="fw-bold text-uppercase">{{ item.label }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router'

    interface MenuItem {
        label: string
        icon: string // bootstrap icon class
        route: string
    }

    const router = useRouter()

    const menuItems: MenuItem[] = [
        { label: 'Lịch sử', icon: 'bi bi-clock-history', route: '/doi-tuyen/lich-su' },
        { label: 'Thành tích', icon: 'bi bi-trophy-fill', route: '/doi-tuyen/thanh-tich' },
        {
            label: 'Ban huấn luyện',
            icon: 'bi bi-person-workspace',
            route: '/doi-tuyen/ban-huan-luyen'
        },
        { label: 'Tuyển thủ', icon: 'bi bi-people-fill', route: '/doi-tuyen/tuyen-thu' }
    ]

    function goTo(route: string) {
        router.push(route)
    }

    function goBack() {
        router.push('/')
    }

    // popup state
    const showPopup = ref(true)
    function openPopup() {
        showPopup.value = true
    }

    function closePopup() {
        showPopup.value = false
    }

    // auto show popup khi load trang
    onMounted(() => {
        showPopup.value = true
    })
</script>

<style scoped>
    .home-container {
        min-height: 100vh;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    .bg-team {
        position: relative;
        background-image: url('https://res.cloudinary.com/springboot-cloud/image/upload/v1753513401/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_llaqju.png');
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        color: white;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .hover-scale {
        transition: transform 0.2s ease-in-out;
    }
    .hover-scale:hover {
        transform: scale(1.05);
    }

    /* Popup */
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 2000;
    }
    .popup-content {
        max-width: 600px;
        animation: fadeIn 0.3s ease-in-out;
    }
    .popup-content img {
        max-width: 550px;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* Desktop (>=1025px) */
    @media (min-width: 1025px) {
        .bg-team {
            background-size: cover; /* full màn hình */
        }
        .menu-card {
            width: 350px; /* card to hơn */
        }

        .popup-content {
            max-width: 600px;
        }
        .popup-content img {
            max-width: 550px;
        }
    }

    /* Tablet (768–1024px) */
    @media (min-width: 768px) and (max-width: 1024px) {
        .bg-team {
            background-size: contain;
        }
        .menu-card {
            width: 250px;
            margin: auto;
        }
        .team-img > img {
            max-width: 180px !important;
        }

        .popup-content {
            max-width: 550px;
        }
        .popup-content > img {
            max-width: 500px;
        }
    }

    /* Mobile (<=768px) */
    @media (max-width: 768px) {
        .bg-team {
            background-size: cover;
            background-position: top;
        }
        .menu-card {
            width: 170px; /* full width */
            margin: auto;
        }
        .team-img img {
            max-width: 140px !important;
        }
        h3 {
            font-size: 1.2rem;
        }
        h5 {
            font-size: 0.9rem;
        }

        .popup-content {
            max-width: 350px; /* gần full màn hình */
            padding: 1rem;
        }
        .popup-content img {
            max-width: 300px;
            height: auto;
        }
    }
</style>
