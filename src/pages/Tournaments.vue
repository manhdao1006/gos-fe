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
                                alt="Hệ thống giải đấu"
                                class="logo-tournaments img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-tournaments"
                                >Hệ thống giải đấu</span
                            >
                        </div>
                        <p class="lead description-tournaments">
                            Khám phá các giải đấu đa dạng cấp độ từ GOS - DLS
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
                        alt="Giải GOS League"
                        title="Giải GOS League"
                        class="logo-tournaments img-fluid"
                    />
                    <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-tournaments">
                        Giải GOS League</span
                    >
                </h2>
                <div class="row">
                    <div class="text-start fs-5">
                        GOS League là giải đấu thuộc GOS với hệ thống 8 giải đấu, được đá theo thể
                        thức tính điểm xếp hạng, mỗi League sẽ có 10 đội, các đội đá với nhau theo
                        thể thức vòng tròn tính điểm xếp hạng (có lượt đi và lượt về).
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
                        Kết thúc mùa giải, đội đứng đầu sẽ là đội vô địch, 3 đội đứng đầu sẽ được
                        thăng hạng lên hạng đấu cao hơn, 3 đội đứng cuối sẽ rớt hạng xuống hạng đấu
                        thấp hơn, từ top 1- top 4 sẽ được đá giải C1 (GOS Champions League 1), top
                        5-6 sẽ đá giải C2 (GOS Champions League 2) thuộc GOS Cup. Mỗi League sẽ có
                        một Admin quản lý.
                    </div>
                </div>
            </section>

            <section class="mb-1">
                <h2 class="text-center mb-4">
                    <img
                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753509756/logo-cup_a0op4f.jpg"
                        alt="Giải GOS Cup"
                        class="logo-tournaments img-fluid"
                    />
                    <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-tournaments">
                        Giải GOS Cup</span
                    >
                </h2>
                <div class="row">
                    <div class="text-start fs-5">
                        GOS Cup là tên gọi chung các giải đấu cúp của GOS, giải gồm C1, C2, siêu
                        cúp, cúp liên đoàn và cúp liên group.
                    </div>
                    <div
                        class="row bg-white mb-3"
                        v-for="(img, index) in imagesCup"
                        :key="index"
                        data-bs-toggle="modal"
                        data-bs-target="#imageModal"
                    >
                        <!-- Ảnh (40%) -->
                        <div class="col-4">
                            <img :src="img.url" :alt="img.name" />
                        </div>

                        <!-- Content (60%) -->
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
    import { ref } from 'vue'
    import Footer from '../components/Footer.vue'
    import Header from '../components/Header.vue'

    const images = ref<{ url: string; name: string }[]>([
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

    const imagesCup = ref<{ url: string; name: string; description: string }[]>([
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755841173/c1_snlxqy.jpg',
            name: 'GOS Champions League 1',
            description:
                'Giải C1 sẽ lấy top 4 mỗi League, chia bảng đá vòng bảng và các vòng sau sẽ đá theo thể thức loại trực tiếp loại trực tiếp.'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755841173/c2_mvz3gc.jpg',
            name: 'GOS Champions League 2',
            description: 'Giải C2 sẽ lấy top 5 và top 6 mỗi bảng chia cặp ra đá loại trực tiếp.'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755841502/sieu-cup_xqr24u.jpg',
            name: 'Siêu Cup',
            description: 'Siêu cúp sẽ là trận đấu giữa nhà vô địch C1 và nhà vô địch C2.'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753509756/logo-cup_a0op4f.jpg',
            name: 'Cup Liên Đoàn',
            description:
                'Cúp liên đoàn sẽ được đá vào cuối mùa giải, giải sẽ đá theo mô hình giải đấu các đội tuyển quốc gia hoặc CLB.'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755841911/cup-lien-group_zcylef.jpg',
            name: 'Cup Liên Group',
            description:
                'Cúp liên group sẽ cử nhà vô địch siêu cúp của GOS đi đá với nhà vô địch của các nhóm khác.'
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
        grid-template-columns: repeat(4, 1fr); /* 3 cột */
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
    }

    .grid-item img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover; /* desktop/tablet: ảnh che đầy */
        border-radius: 0 !important;
    }

    @media (max-width: 768px) {
        .gallery-grid {
            grid-template-columns: repeat(2, 1fr); /* tablet: 2 cột */
            grid-template-rows: repeat(2, 1fr); /* 5 hàng */
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

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1024px) {
        .gallery-grid {
            grid-template-columns: repeat(2, 1fr); /* tablet: 2 cột */
            grid-template-rows: repeat(2, 1fr); /* 5 hàng */
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

    /* Desktop */
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
