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
                                :alt="$t('TEAM.PLAYER.TITLE')"
                                :title="$t('TEAM.PLAYER.TITLE')"
                                class="logo-admin img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-admin">{{
                                $t('TEAM.PLAYER.TITLE')
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
                    class="grid-item d-flex align-items-center justify-content-center bg-success text-white fw-bold"
                    v-for="(img, index) in images"
                    :key="index"
                    @click="!img.soldOut && !img.liquidated && !img.loan && openModal(index)"
                    :data-bs-toggle="!img.soldOut && !img.liquidated && !img.loan ? 'modal' : null"
                    :data-bs-target="
                        !img.soldOut && !img.liquidated && !img.loan ? '#imageModal' : null
                    "
                    :class="{
                        'sold-out': img.soldOut || img.liquidated,
                        loan: img.loan
                    }"
                >
                    <span class="item-name">{{ img.name }}</span>
                    <div v-if="img.soldOut" class="sold-out-overlay">
                        <span>{{ $t('TEAM.PLAYER.SOLD') }}</span>
                    </div>
                    <div v-else-if="img.liquidated" class="sold-out-overlay">
                        <span>{{ $t('TEAM.PLAYER.LIQUID') }}</span>
                    </div>
                    <div v-else-if="img.loan" class="loan-overlay">
                        <span>{{ $t('TEAM.PLAYER.LOAN') }}</span>
                    </div>
                    <div v-else class="overlay">
                        {{ $t('TEAM.PLAYER.VIEW_CONTRACT') }}
                    </div>
                </div>
            </div>

            <div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog custom-modal">
                    <div class="modal-content bg-transparent border-0 shadow-none text-center">
                        <button
                            type="button"
                            class="btn-close btn-danger position-absolute top-0 end-0 m-3"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>

                        <button
                            type="button"
                            class="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
                            style="opacity: 0.7"
                            @click="prevImage"
                        >
                            ‹
                        </button>

                        <img
                            :src="images[currentIndex].url"
                            :alt="images[currentIndex].name"
                            class="d-block mx-auto w-100 h-100 rounded-0"
                            style="object-fit: contain"
                        />
                        <p class="text-white mt-2">{{ images[currentIndex].name }}</p>

                        <button
                            type="button"
                            class="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
                            style="opacity: 0.7"
                            @click="nextImage"
                        >
                            ›
                        </button>
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

    const images = ref<
        { url: string; name: string; soldOut?: boolean; liquidated?: boolean; loan?: boolean }[]
    >([
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341818/ly-thanh-hien_tffpi9.jpg',
            name: '1 Lý Thanh Hiền (VC)',
            soldOut: true
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341819/nguyen-viet-cuong_mf0dtu.jpg',
            name: '25 Nguyễn Viết Cường',
            liquidated: true
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341818/nguyen-sy-hoang_tbgx8d.jpg',
            name: '3 Nguyễn Sỹ Hoàng',
            loan: true
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341817/doan-vu-phi-long_f1guop.jpg',
            name: '4 Đoàn Vũ Phi Long'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341818/vu-duong-dao_agtadg.jpg',
            name: '5 Vũ Dương Đạo'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341818/chim-phu-qui_gxe2tn.jpg',
            name: '6 Chim Phú Quí'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341817/nguyen-van-hoang_deevyp.jpg',
            name: '7 Nguyễn Văn Hoàng'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341818/le-cong-minh_pswiw4.jpg',
            name: '10 Lê Công Minh'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341817/hoang-van-chung_ns95ot.jpg',
            name: '89 Hoàng Văn Chung (C)'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341818/luong-xuan-viet_cwmzzs.jpg',
            name: '8 Lương Xuân Việt'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341817/hoang-dac-hai_lvttce.jpg',
            name: '11 Hoàng Đắc Hải'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1761965987/nguyen-van-chien_flxmum.jpg',
            name: '19 Nguyễn Văn Chiến'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341819/trinh-thanh-dung-em_ywwyti.jpg',
            name: '13 Trịnh Thành Dũng Em'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1756869445/tran-hoai-vu_j6tc9w.jpg',
            name: '14 Trần Hoài Vũ'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341817/pham-kha-dat_k1azwr.jpg',
            name: '22 Phạm Khả Đạt'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1755341818/tran-hai-phong_y2wgdt.jpg',
            name: '16 Trần Hải Phong'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1757560710/dao-huu-hung_fwszjo.jpg',
            name: '17 Đào Hữu Hưng'
        }
    ])

    const currentIndex = ref(0)

    const openModal = (index: number) => {
        currentIndex.value = index
    }

    const nextImage = () => {
        currentIndex.value = (currentIndex.value + 1) % images.value.length
    }

    const prevImage = () => {
        currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
    }
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
        grid-template-rows: repeat(6, 1fr);
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

    .item-name {
        z-index: 1;
    }

    .overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        font-weight: bold;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .grid-item:hover .overlay {
        opacity: 1;
    }

    .grid-item:hover .item-name {
        opacity: 0;
    }

    .grid-item.sold-out {
        border: 2px solid red;
        position: relative;
        overflow: hidden;
    }

    .sold-out-overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(255, 0, 0, 0.246);
        pointer-events: none;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sold-out-overlay span {
        position: absolute;
        top: 20px;
        left: -40px;
        width: 150px;
        text-align: center;
        transform: rotate(-45deg);
        color: red;
        font-weight: bold;
        font-size: 14px;
        border: 2px solid red;
        background: transparent;
        padding: 6px 0;
        pointer-events: none;
        text-transform: uppercase;
        font-family: Arial, sans-serif;
        z-index: 3;
    }

    .grid-item.sold-out:hover .item-name {
        opacity: 1 !important;
    }

    .grid-item.sold-out:hover .overlay {
        opacity: 0 !important;
    }

    .grid-item.loan {
        border: 2px solid yellow;
        position: relative;
        overflow: hidden;
    }

    .loan-overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(251, 255, 0, 0.246);
        pointer-events: none;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loan-overlay span {
        position: absolute;
        top: 20px;
        left: -40px;
        width: 150px;
        text-align: center;
        transform: rotate(-45deg);
        color: yellow;
        font-weight: bold;
        font-size: 14px;
        border: 2px solid yellow;
        background: transparent;
        padding: 6px 0;
        pointer-events: none;
        text-transform: uppercase;
        font-family: Arial, sans-serif;
        z-index: 3;
    }

    .grid-item.loan:hover .item-name {
        opacity: 1 !important;
    }

    .grid-item.loan:hover .overlay {
        opacity: 0 !important;
    }

    @media (max-width: 768px) {
        .custom-modal {
            max-width: 100vw;
            height: 100vh;
            margin: 0;
        }
        .modal-content {
            border-radius: 0;
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
        .custom-modal {
            max-width: 90vw;
            height: 85vh;
            margin: auto;
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
        .custom-modal {
            max-width: 70vw;
            height: 80vh;
            margin: auto;
        }

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
