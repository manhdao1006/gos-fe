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
                                :alt="$t('TEAM.ACHIEVEMENT.TITLE')"
                                :title="$t('TEAM.ACHIEVEMENT.TITLE')"
                                class="logo-admin img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-admin">{{
                                $t('TEAM.ACHIEVEMENT.TITLE')
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
                    <div class="img-wrap">
                        <img :src="img.url" :alt="img.content" />
                    </div>
                    <div class="grid-caption">{{ img.content }}</div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    import Footer from '../../components/Footer.vue'
    import Header from '../../components/Header.vue'

    const { t } = useI18n()

    const images = computed(() => [
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755698822/first-achievement_zt2q0m.jpg',
            content: t('TEAM.ACHIEVEMENT.CONTENT.FIRST_ACHIEVEMENT')
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1763259652/nhucac_w3ygea.jpg',
            content: t('TEAM.ACHIEVEMENT.CONTENT.SECOND_ACHIEVEMENT')
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
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);
        height: 100vh;
        width: 100% !important;
        gap: 8px;
        padding: 8px;
    }

    .grid-item {
        cursor: pointer;
        font-size: 1.2rem;
        text-align: center;
        padding: 12px;
        background: #212529;
        color: #fff;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        flex-direction: column;
    }

    .grid-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .img-wrap {
        width: 100% !important;
        aspect-ratio: 16/9;
        overflow: hidden;
        height: 100%;
    }

    .img-wrap img {
        width: 100% !important;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease;
        inset: 0;
        border-radius: 0 !important;
    }

    .grid-caption {
        padding: 8px;
        font-size: 1rem;
        font-weight: 500;
        color: #000;
        text-align: center;
        background: #f8f9fa;
        width: 100%;
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
