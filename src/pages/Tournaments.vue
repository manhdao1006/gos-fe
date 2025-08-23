<template>
    <div class="tournaments-page">
        <div class="hero-section text-white py-3 w-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 text-center">
                        <div
                            class="d-flex flex-column flex-md-row align-items-center justify-content-center"
                        >
                            <img
                                src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753509756/logo-cup_a0op4f.jpg"
                                :alt="$t('TOUR.HEADER')"
                                :title="$t('TOUR.HEADER')"
                                class="logo-tournaments img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-tournaments">{{
                                $t('TOUR.HEADER')
                            }}</span>
                        </div>
                        <p class="lead description-tournaments">
                            {{ $t('TOUR.SUB_HEADER') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <Header />

        <div class="container-fluid py-5">
            <section class="mb-5">
                <h2 class="text-center mb-4">
                    <img
                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505199/logo-group_jz2ezw.jpg"
                        :alt="$t('TOUR.LEAGUE.TITLE')"
                        :title="$t('TOUR.LEAGUE.TITLE')"
                        class="logo-tournaments img-fluid"
                    />
                    <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-tournaments">
                        {{ $t('TOUR.LEAGUE.TITLE') }}</span
                    >
                </h2>
                <div class="row">
                    <div class="text-start fs-5">
                        {{ $t('TOUR.LEAGUE.FIRST_CONTENT') }}
                    </div>
                    <div class="gallery-grid">
                        <div
                            class="grid-item d-flex align-items-center justify-content-center bg-white border border-1 text-white fw-bold"
                            v-for="(img, index) in images"
                            :key="index"
                            data-bs-toggle="modal"
                            data-bs-target="#imageModal"
                        >
                            <img :src="img.url" :alt="img.name" :title="img.name" />
                        </div>
                    </div>
                    <div class="text-start fs-5">
                        {{ $t('TOUR.LEAGUE.SECOND_CONTENT') }}
                    </div>
                </div>
            </section>

            <section class="mb-1">
                <h2 class="text-center mb-4">
                    <img
                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753509756/logo-cup_a0op4f.jpg"
                        :alt="$t('TOUR.CUP.TITLE')"
                        :title="$t('TOUR.CUP.TITLE')"
                        class="logo-tournaments img-fluid"
                    />
                    <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-tournaments">
                        {{ $t('TOUR.CUP.TITLE') }}</span
                    >
                </h2>
                <div class="row">
                    <div class="text-start fs-5">
                        {{ $t('TOUR.CUP.FIRST_CONTENT') }}
                    </div>
                    <div
                        class="row bg-white mb-3"
                        v-for="(img, index) in imagesCup"
                        :key="index"
                        data-bs-toggle="modal"
                        data-bs-target="#imageModal"
                    >
                        <div class="col-4">
                            <img :src="img.url" :alt="img.name" :title="img.name" />
                        </div>

                        <div class="col-8 align-items-center p-3">
                            <div>
                                <h5 class="fw-bold">{{ img.name }}</h5>
                                <p class="fs-6 text-start">{{ img.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <Footer />
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    import Footer from '../components/Footer.vue'
    import Header from '../components/Header.vue'

    const { t } = useI18n()

    const images = computed(() => [
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753505184/logo-la_s4higy.jpg',
            name: 'GOS League A'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753505174/logo-lb_l0sjbr.jpg',
            name: 'GOS League B'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753505171/logo-lc_vd87pg.jpg',
            name: 'GOS League C'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753505171/logo-ld_arjajw.jpg',
            name: 'GOS League D'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753505171/logo-le_wyveky.jpg',
            name: 'GOS League E'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753505170/logo-lf_lka3nr.jpg',
            name: 'GOS League F'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753505170/logo-lg_d5rbzm.jpg',
            name: 'GOS League G'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753505170/logo-lh_sexqrq.jpg',
            name: 'GOS League H'
        }
    ])

    const imagesCup = computed(() => [
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755841173/c1_snlxqy.jpg',
            name: 'GOS Champions League 1',
            description: t('TOUR.CUP.C1_DESCRIPTION')
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755841173/c2_mvz3gc.jpg',
            name: 'GOS Champions League 2',
            description: t('TOUR.CUP.C2_DESCRIPTION')
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755841502/sieu-cup_xqr24u.jpg',
            name: t('TOUR.CUP.SUPER_CUP_NAME'),
            description: t('TOUR.CUP.SUPER_CUP_DESCRIPTION')
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753509756/logo-cup_a0op4f.jpg',
            name: t('TOUR.CUP.LEAGUE_CUP_NAME'),
            description: t('TOUR.CUP.LEAGUE_CUP_DESCRIPTION')
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755841911/cup-lien-group_zcylef.jpg',
            name: t('TOUR.CUP.GROUP_CUP_NAME'),
            description: t('TOUR.CUP.GROUP_CUP_DESCRIPTION')
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

    .tournaments-page {
        background: #f8f9fa;
    }

    .card {
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .badge.bg-bronze {
        background-color: #cd7f32 !important;
    }

    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, 1fr);
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
        overflow: hidden;
    }

    .grid-item img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        border-radius: 0 !important;
    }

    @media (max-width: 768px) {
        .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }

        .logo-tournaments {
            width: 60px;
        }

        .title-tournaments {
            font-size: 1.5rem;
        }

        .description-tournaments {
            font-size: 0.9rem;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }

        .logo-tournaments {
            width: 80px;
        }

        .title-tournaments {
            font-size: 2rem;
        }

        .description-tournaments {
            font-size: 1rem;
        }
    }

    @media (min-width: 1025px) {
        .logo-tournaments {
            width: 100px;
        }

        .title-tournaments {
            font-size: 2.5rem;
        }

        .description-tournaments {
            font-size: 1.1rem;
        }
    }
</style>
