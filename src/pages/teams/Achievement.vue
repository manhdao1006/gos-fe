<template>
    <div class="administration-page">
        <div class="hero-section text-white py-3 w-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 text-center">
                        <div
                            class="d-flex flex-column flex-md-row align-items-center justify-content-center"
                        >
                            <img
                                src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505200/logo-team_zzr4nj.jpg"
                                alt="Thành tích tuyển GOS"
                                class="logo-admin img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-admin"
                                >Thành tích tuyển GOS</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Header />

        <div class="container-fluid p-0">
            <div class="gallery-grid">
                <div
                    class="grid-item d-flex align-items-center justify-content-center bg-white border border-1 text-white fw-bold"
                    v-for="(img, index) in images"
                    :key="index"
                    data-bs-toggle="modal"
                    data-bs-target="#imageModal"
                >
                    <img :src="img.url" :alt="img.content" />
                    <div class="text-black">{{ img.content }}</div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import Footer from '../../components/Footer.vue'
    import Header from '../../components/Header.vue'

    const images = ref<{ url: string; content: string }[]>([
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755698822/first-achievement_zt2q0m.jpg',
            content: 'Giải khuyến khích cúp Liên Group DPC mùa 4'
        }
    ])
</script>

<style scoped>
    .hero-section {
        background-image: url('https://res.cloudinary.com/springboot-cloud/image/upload/v1753513401/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_llaqju.png');
    }

    .container-fluid img {
        width: 100px; /* tùy chỉnh kích thước */
        height: 100px; /* đảm bảo hình vuông */
        object-fit: cover; /* giữ tỷ lệ ảnh */
        border-radius: 50%; /* bo tròn */
    }

    .logo-member-admin {
        width: 150px !important;
        height: 150px !important;
    }

    .administration-page {
        background: #f8f9fa;
    }

    .title-admin {
        font-size: 1.5rem;
    }

    .description-admin {
        font-size: 1rem;
    }

    .admin-card {
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        border: 2px solid transparent;
    }

    .admin-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        border-color: red;
    }

    .admin-avatar {
        margin-bottom: 20px;
    }

    .admin-info p {
        margin-bottom: 10px;
        font-size: 0.9rem;
    }

    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 cột */
        grid-template-rows: repeat(1, 1fr); /* 5 hàng */
        height: 100vh; /* full màn hình */
        gap: 8px;
        padding: 8px;
    }

    .grid-item {
        cursor: pointer;
        font-size: 1.2rem;
        text-align: center;
        padding: 12px;
        position: relative;
        background: #212529; /* bg-dark */
        color: #fff;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        flex-direction: column; /* sắp xếp theo cột */
    }

    .grid-item img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* để ảnh fill hết nhưng không méo */
        transition: opacity 0.3s ease;
        inset: 0;
        border-radius: 0 !important;
    }

    .grid-item div {
        padding: 8px;
        font-size: 1rem;
        font-weight: 500;
        color: #000;
        text-align: center;
        background: #f8f9fa; /* nền nhạt để tách biệt ảnh */
        width: 100%;
    }

    @media (max-width: 768px) {
        .logo-admin {
            width: 60px;
        }

        .title-admin {
            font-size: 1.5rem;
        }

        .description-admin {
            font-size: 0.9rem;
        }
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1024px) {
        .logo-admin {
            width: 80px;
        }

        .title-admin {
            font-size: 2rem;
        }

        .description-admin {
            font-size: 1rem;
        }
    }

    /* Desktop */
    @media (min-width: 1025px) {
        .logo-admin {
            width: 100px;
        }

        .title-admin {
            font-size: 2.5rem;
        }

        .description-admin {
            font-size: 1.1rem;
        }
    }
</style>
