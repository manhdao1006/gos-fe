<template>
    <div class="administration-page" id="all-page">
        <div class="hero-section text-white py-3 w-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 text-center">
                        <div
                            class="d-flex flex-column flex-md-row align-items-center justify-content-center"
                        >
                            <img
                                src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505200/logo-team_zzr4nj.jpg"
                                alt="Lịch sử tuyển GOS"
                                class="logo-admin img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-admin"
                                >Lịch sử tuyển GOS</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Header />

        <div class="container-fluid mt-4">
            <div class="row">
                <!-- Nội dung chính bên trái -->
                <div
                    class="col-12 col-md-3 border border-3 mb-3"
                    style="font-size: 14px; line-height: 30px"
                >
                    <h5 class="mt-3">Mục lục</h5>
                    <ul class="list-unstyled text-start m-3">
                        <li v-for="(item, index) in contentList" :key="'toc-' + index">
                            <a
                                class="text-black"
                                href="#"
                                @click.prevent="scrollToSection(index)"
                                >{{ item.title }}</a
                            >
                            <ul class="list-unstyled ms-3">
                                <li
                                    v-for="(sub, subIndex) in item.subSections"
                                    :key="'subtoc-' + subIndex"
                                >
                                    <a
                                        class="text-black"
                                        href="#"
                                        @click.prevent="scrollToSubSection(index, subIndex)"
                                        >{{ sub.title }}</a
                                    >
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <!-- Mục lục bên phải -->
                <div class="col-12 col-md-8 pe-md-5 ms-2 me-2">
                    <section
                        v-for="(item, index) in contentList"
                        :key="index"
                        :id="'section-' + index"
                        class="mb-3"
                    >
                        <h3>{{ item.title }}</h3>
                        <p class="text-start">{{ item.firstContent }}</p>
                        <img
                            v-if="item.firstImg"
                            class="img-history"
                            :src="item.firstImg"
                            :alt="item.firstNoteImg"
                        />
                        <p class="text-center fst-italic">{{ item.firstNoteImg }}</p>

                        <p class="text-start">{{ item.secondContent }}</p>
                        <p class="text-start">{{ item.thirdContent }}</p>

                        <p class="text-start">{{ item.fourthContent }}</p>
                        <img
                            v-if="item.fourthImg"
                            class="img-history"
                            :src="item.fourthImg"
                            :alt="item.fourthNoteImg"
                        />
                        <p class="text-center fst-italic">{{ item.fourthNoteImg }}</p>

                        <!-- Nội dung con -->
                        <div
                            v-for="(sub, subIndex) in item.subSections"
                            :key="subIndex"
                            :id="'section-' + index + '-' + subIndex"
                            class="mb-3"
                        >
                            <h5 class="text-start">{{ sub.title }}</h5>
                            <p class="text-start">{{ sub.firstContent }}</p>
                            <img
                                v-if="sub.firstImg"
                                class="img-history"
                                :src="sub.firstImg"
                                :alt="sub.firstNoteImg"
                            />
                            <p class="text-center fst-italic">{{ sub.firstNoteImg }}</p>

                            <p class="text-start">{{ sub.secondContent }}</p>
                            <img
                                v-if="sub.secondImg"
                                class="img-history"
                                :src="sub.secondImg"
                                :alt="sub.secondNoteImg"
                            />
                            <p class="text-center fst-italic">{{ sub.secondNoteImg }}</p>

                            <img
                                v-if="sub.thirdImg"
                                class="img-history"
                                :src="sub.thirdImg"
                                :alt="sub.thirdNoteImg"
                            />
                            <p class="text-center fst-italic">{{ sub.thirdNoteImg }}</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <Footer />

        <!-- nút scroll top -->
        <button
            v-show="showScrollTop"
            @click="scrollToTop"
            class="btn btn-danger rounded-circle shadow"
            style="position: fixed; bottom: 30px; right: 30px; z-index: 9999"
        >
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import Footer from '../../components/Footer.vue'
    import Header from '../../components/Header.vue'

    const showScrollTop = ref(true) // 👈 hiện mặc định từ đầu

    const scrollToTop = () => {
        const el = document.getElementById('all-page') // 👈 hoặc id của phần đầu trang
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' }) // fallback
        }
    }

    const contentList = ref([
        {
            title: 'I. LỊCH SỬ',
            firstContent:
                'Ngày 16/02/2023 được sự thống nhất từ Hội đồng quản trị GOS, đội tuyển GOS chính thức được thành lập. Biệt danh của tuyển GOS là “Phượng Hoàng đỏ”.',
            firstImg:
                'https://res.cloudinary.com/springboot-cloud/image/upload/v1755777904/first-history_oc4e6t.jpg',
            firstNoteImg: '(Các thành viên đầu tiên của tuyển GOS)',
            secondContent:
                'Đội tuyển GOS còn khá non trẻ và thiếu nhiều kinh nghiệm, từ lúc thành lập đến nay tuyển GOS chỉ mới tham dự duy nhất một giải đấu chính thức duy nhất.',
            thirdContent:
                'Ngày 17/05/2023 đội tuyển GOS chính thức ngưng hoạt động.Các thành viên nằm trong tuyển bắt đầu ra đi và đầu quân cho các đội nhóm khác.',
            fourthContent:
                'Ngày 28/06/2025 đội tuyển GOS chính thức tái lập lại, được sự kêu gọi từ GOS, nhiều thành viên từng nằm trong đội tuyển đang đầu quân cho nhóm khác đã quay về khoác ác tuyển GOS một lần nữa.',
            fourthImg:
                'https://res.cloudinary.com/springboot-cloud/image/upload/v1755777904/second-history_ccaacn.jpg',
            fourthNoteImg: '(Tuyển GOS sau khi tái thành lập)'
        },
        {
            title: 'II. QUÁ TRÌNH THAM GIA CÁC GIẢI ĐẤU',
            subSections: [
                {
                    title: '1. GIẢI LIÊN GROUP SS4 (CHỦ NHÀ DPC)',
                    firstContent:
                        'Ngày 16/02/2023 tuyển GOS nhận lời mời tham dự giải Liên group SS4 với chủ nhà là DPC, đây là giải đấu chính thức đầu tiên mà tuyển GOS tham dự. Ở giải đấu này tuyển GOS nằm cùng bảng vs ST, DSW và chủ DPC.',
                    firstImg:
                        'https://res.cloudinary.com/springboot-cloud/image/upload/v1755777904/first-1_emmif0.jpg',
                    firstNoteImg: '(Đội hình tham dự)',
                    secondContent:
                        'Đây là giải đấu chính thức đầu tiên mà tuyển GOS tham dự. Tại giải này GOS dừng bước tại vòng tứ kết trước nhóm PT và được giải khuyến khích từ BTC.',
                    secondImg:
                        'https://res.cloudinary.com/springboot-cloud/image/upload/v1755777904/first-2_s943u5.jpg',
                    secondNoteImg: '(Kết quả vòng bảng)',
                    thirdImg:
                        'https://res.cloudinary.com/springboot-cloud/image/upload/v1755698822/first-achievement_zt2q0m.jpg',
                    thirdNoteImg: '(BTC trao thưởng)'
                },
                {
                    title: '2. GIẢI VFC 5 (CHỦ NHÀ SAMURAI)',
                    firstContent:
                        'Ngày 15/03/2023, GOS tham dự giải VFC 5 do chủ nhà SAMURAI tổ chức, tại giải đấu này GOS không vượt qua vòng bảng là bị loại.',
                    firstImg:
                        'https://res.cloudinary.com/springboot-cloud/image/upload/v1755777902/second-1_estygt.jpg',
                    secondImg:
                        'https://res.cloudinary.com/springboot-cloud/image/upload/v1755777902/second-2_ayat62.jpg',
                    secondNoteImg: '(GOS tham dự VFC 5)'
                },
                {
                    title: '3. GIẢI LIÊN ĐOÀN GKW VÀ PDH SS2 (CHỦ NHÀ GKW VÀ PDH)',
                    firstContent:
                        'Ngày 17/05/2023, GOS tham dự giải Liên đoàn GKW và PDH mùa 2,  do chủ nhà GKW và PDH cùng tổ chức, tại giải đấu này GOS không vượt qua vòng bảng là bị loại.',
                    firstImg:
                        'https://res.cloudinary.com/springboot-cloud/image/upload/v1755777902/third-1_sxoccb.jpg',
                    secondImg:
                        'https://res.cloudinary.com/springboot-cloud/image/upload/v1755777901/third-2_ks1dfr.jpg',
                    thirdImg:
                        'https://res.cloudinary.com/springboot-cloud/image/upload/v1755777895/third-3_v4nfe0.jpg',
                    thirdNoteImg: '(GOS tham dự giải Liên đoàn GKW và PDH mùa 2)'
                },
                {
                    title: '4. GIẢI DLS VNM CUP 2025',
                    firstContent:
                        'Ngày 12/07/2025, GOS trở lại tham dự sau dời gian tái lập, tham dự giải Liên đoàn GKW và PDH mùa 2,  do chủ nhà GKW và PDH cùng tổ chức, tại giải đấu này GOS không vượt qua vòng bảng là bị loại.',
                    firstImg:
                        'https://res.cloudinary.com/springboot-cloud/image/upload/v1755777884/fourth-1_yxzjtz.jpg',
                    secondImg:
                        'https://res.cloudinary.com/springboot-cloud/image/upload/v1755777884/fourth-2_ynnbhh.jpg',
                    secondNoteImg: '(GOS tham dự giải DLS VNM CUP 2025)'
                }
            ]
        }
    ])

    const scrollToSection = (index: number) => {
        const el = document.getElementById('section-' + index)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const scrollToSubSection = (index: number, subIndex: number) => {
        const el = document.getElementById('section-' + index + '-' + subIndex)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
</script>

<style scoped>
    /* Responsive: mobile hiển thị mục lục trên top */
    @media (max-width: 767px) {
        .col-md-2 {
            margin-bottom: 20px;
        }
    }

    .hero-section {
        background-image: url('https://res.cloudinary.com/springboot-cloud/image/upload/v1753513401/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_llaqju.png');
    }

    .container-fluid img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
    }
    .img-history {
        width: 100% !important;
        height: 300px !important;
        object-fit: contain !important;
        border-radius: 0 !important;
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
