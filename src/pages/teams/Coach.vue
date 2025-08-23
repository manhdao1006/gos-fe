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
                                :alt="$t('TEAM.COACH.TITLE')"
                                :title="$t('TEAM.COACH.TITLE')"
                                class="logo-admin img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-admin">{{
                                $t('TEAM.COACH.TITLE')
                            }}</span>
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
                    <img :src="img.url" :alt="img.name" />
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

    const images = ref<{ url: string; name: string }[]>([
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755698754/ad-nguyen-thang_adllh7.jpg',
            name: 'Nguyễn Thắng'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755698754/ad-binh-nguyen_suyfit.jpg',
            name: 'Bình Nguyên'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755698752/ad-pham-dang-thang_o6aiua.jpg',
            name: 'Phạm Đăng Thắng'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755698753/ad-ly-thanh-hien_edc0tv.jpg',
            name: 'Lý Thanh Hiền'
        }
    ])
</script>

<style scoped>
    .hero-section {
        background-image: url('https://res.cloudinary.com/springboot-cloud/image/upload/v1753513401/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_llaqju.png');
    }

    .container-fluid img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
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
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, 1fr);
        height: 100vh;
        gap: 8px;
        padding: 8px;
    }

    .grid-item {
        cursor: pointer;
        font-size: 1.2rem;
        text-align: center;
        padding: 12px;
        position: relative;
        background: #212529;
        color: #fff;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .grid-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    @media (max-width: 768px) {
        .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }

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

    @media (min-width: 768px) and (max-width: 1024px) {
        .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }

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
