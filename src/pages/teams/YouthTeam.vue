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
                                src="https://res.cloudinary.com/springboot-cloud/image/upload/v1756869052/logo-academy_c7wz7t.jpg"
                                :alt="$t('TEAM.YOUTH_TEAM.TITLE')"
                                :title="$t('TEAM.YOUTH_TEAM.TITLE')"
                                class="logo-admin img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-admin">{{
                                $t('TEAM.YOUTH_TEAM.TITLE')
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
                    @click="openModal(index)"
                    data-bs-toggle="modal"
                    data-bs-target="#imageModal"
                >
                    <span class="item-name">{{ img.name }}</span>
                    <div class="overlay">{{ $t('TEAM.PLAYER.VIEW_CONTRACT') }}</div>
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

    const images = ref<{ url: string; name: string }[]>([
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1756868932/nguyen-trung-thanh_nq0ish.jpg',
            name: '98 Nguyễn Trung Thành '
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1756868933/dao-minh-duc_ncudkp.jpg',
            name: '95 Đào Minh Đức'
        },
        {
            url: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1757075944/nguyen-van-dung_nhxswq.jpg',
            name: '96 Nguyễn Văn Dũng'
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
