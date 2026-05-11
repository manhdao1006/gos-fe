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

        <div class="container py-4">
            <div class="row g-4">
                <div class="col-12 col-sm-6 col-lg-3" v-for="(img, index) in images" :key="index">
                    <div class="member-card" data-bs-toggle="modal" data-bs-target="#imageModal">
                        <div class="image-wrapper">
                            <img :src="img.url" :alt="img.name" />
                        </div>

                        <div class="member-info"></div>
                    </div>
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
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1778470536/idcard-nvt_dghqvo.jpg',
            name: 'Nguyễn Văn Thắng'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1778470509/idcard-lbn_uvmee8.jpg',
            name: 'Lý Bình Nguyên'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1778470478/idcard-pdt_bqsb9b.jpg',
            name: 'Phạm Đăng Thắng'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1778470478/idcard-lth_u7gkd2.jpg',
            name: 'Lý Thanh Hiền'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1778470440/idcard-lcm_m0yviy.jpg',
            name: 'Lê Công Minh'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1778470441/idcard-ddm_qbkr3p.jpg',
            name: 'Đào Đức Mạnh'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1778470486/idcard-nvh_sxvw3l.jpg',
            name: 'Nguyễn Văn Hoàng'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1778470509/idcard-dvpl_x5u56z.jpg',
            name: 'Đoàn Vũ Phi Long'
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

    .member-card {
        background: white;
        border-radius: 20px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        height: 100%;
    }

    .member-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    }

    .image-wrapper {
        width: 100%;
        height: 320px;
        overflow: hidden;
    }

    .image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }

    .member-card:hover img {
        transform: scale(1.05);
    }

    .member-info {
        padding: 18px;
        text-align: center;
    }

    .member-info h5 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 6px;
        color: #212529;
    }

    .member-info p {
        margin: 0;
        color: #6c757d;
        font-size: 0.9rem;
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
