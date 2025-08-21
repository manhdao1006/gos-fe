<template>
    <div class="history-page" id="all-page">
        <div class="hero-section text-white py-3 w-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 text-center">
                        <div
                            class="d-flex flex-column flex-md-row align-items-center justify-content-center"
                        >
                            <img
                                src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505170/bieu-tuong_n7zetw.jpg"
                                alt="Lịch sử ra đời và phát triển"
                                class="logo-history img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-history">
                                Lịch sử ra đời và phát triển</span
                            >
                        </div>
                        <p class="lead description-history">
                            Khám phá hành trình phát triển của GOS từ những ngày đầu thành lập
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <Header />

        <div class="container-fluid py-5">
            <!-- Timeline chính -->
            <div class="row">
                <div class="col-12 pe-md-5 ms-2 me-2">
                    <section
                        v-for="(item, index) in contentList"
                        :key="index"
                        :id="'section-' + index"
                        class="mb-3"
                    >
                        <p class="text-uppercase fw-bolder fs-3">
                            SƠ LƯỢC VỀ QUÁ TRÌNH THÀNH LẬP NHÓM GOS
                        </p>
                        <p class="text-start">{{ item.firstContent }}</p>

                        <p class="text-start">{{ item.secondContent }}</p>
                        <img
                            v-if="item.secondImg"
                            class="img-history"
                            :src="item.secondImg"
                            :alt="item.secondNoteImg"
                        />
                        <p class="text-center fst-italic">{{ item.secondNoteImg }}</p>

                        <p class="text-start">{{ item.thirdContent }}</p>
                        <img
                            v-if="item.thirdImg"
                            class="img-history"
                            :src="item.thirdImg"
                            :alt="item.thirdNoteImg"
                        />
                        <p class="text-center fst-italic">{{ item.thirdNoteImg }}</p>

                        <p class="text-start">{{ item.fourthContent }}</p>
                        <p class="text-start">{{ item.fifthContent }}</p>

                        <p class="text-start">{{ item.sixthContent }}</p>
                        <img
                            v-if="item.sixthImg"
                            class="img-history"
                            :src="item.sixthImg"
                            :alt="item.sixthNoteImg"
                        />
                        <p class="text-center fst-italic">{{ item.sixthNoteImg }}</p>

                        <img
                            v-if="item.seventhImg"
                            class="img-history"
                            :src="item.seventhImg"
                            :alt="item.seventhNoteImg"
                        />
                        <p class="text-center fst-italic">{{ item.seventhNoteImg }}</p>

                        <p class="text-start">{{ item.eighthContent }}</p>
                        <img
                            v-if="item.eighthImg"
                            class="img-history"
                            :src="item.eighthImg"
                            :alt="item.eighthNoteImg"
                        />
                        <p class="text-center fst-italic">{{ item.eighthNoteImg }}</p>
                    </section>
                </div>
            </div>

            <!-- Thống kê -->
            <section class="mt-5">
                <h2 class="text-center mb-4"><i class="bi bi-graph-up"></i> Thống kê phát triển</h2>
                <div class="row">
                    <div v-for="stat in statistics" :key="stat.id" class="col-md-4 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i :class="`${stat.icon} text-${stat.color} display-4`"></i>
                                <h3 class="mt-3">{{ stat.value }}</h3>
                                <p class="text-muted">{{ stat.label }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <Footer />
    </div>

    <!-- nút scroll top -->
    <button
        v-show="showScrollTop"
        @click="scrollToTop"
        class="btn btn-danger rounded-circle shadow"
        style="position: fixed; bottom: 30px; right: 30px; z-index: 9999"
    >
        <i class="fa-solid fa-arrow-up"></i>
    </button>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import Footer from '../components/Footer.vue'
    import Header from '../components/Header.vue'

    interface Statistic {
        id: number
        icon: string
        color: string
        value: string
        label: string
    }

    const statistics = ref<Statistic[]>([])

    // Mock data function
    const fetchMockData = async () => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Statistics data
        statistics.value = [
            {
                id: 1,
                icon: 'bi bi-people-fill',
                color: 'primary',
                value: '~9K',
                label: 'Thành viên'
            },
            {
                id: 2,
                icon: 'bi bi-trophy-fill',
                color: 'warning',
                value: '12',
                label: 'Mùa'
            },
            {
                id: 3,
                icon: 'bi bi-calendar-event-fill',
                color: 'success',
                value: '3',
                label: 'Năm hoạt động'
            }
        ]
    }

    onMounted(() => {
        fetchMockData()
    })

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
            firstContent:
                'Trong năm 2022, sau khi tham gia nhiều giải đấu với vai trò là người chơi và có được nhiều kinh nghiệm thì Nguyễn Thắng đã bắt đầu tạo giải với ý tưởng xây dựng từ mô hình các giải đấu như Ngoại hạng Anh, Euro, Seagame, C1,…',
            secondContent:
                'Cũng trong năm 2022 thì Bình Nguyên cùng Phạm Đăng Thắng đang hoạt động độc lập với giải đấu riêng, giải mang tên “Giải vô địch DLS” đã hoạt động đá được 3 mùa giải. Thể thức giải và logo gần giống như giải Gos League hiện tại, sau này được Phạm Đăng Thắng phát triển thêm thể thức lên và xuống hạng. Đây cũng được cho là giải đấu tiền thân của Gos League ngày nay.',
            secondImg:
                'https://res.cloudinary.com/springboot-cloud/image/upload/v1755782603/secondImg_dvwggn.jpg',
            secondNoteImg: '(Logo giải vô địch dls22 của Bình Nguyên và Phạm Đăng Thắng)',
            thirdContent:
                'Ngày 13/06/2022, Nguyễn Thắng chính thức tạo ra nhóm GROUP ONLINE SPORTS (viết tắt và GOS).',
            thirdImg:
                'https://res.cloudinary.com/springboot-cloud/image/upload/v1753505199/logo-group_jz2ezw.jpg',
            thirdNoteImg: '(Logo liên đoàn GOS từ lúc thành lập đến nay)',
            fourthContent:
                'Nhận thấy nhóm cần có một giải đấu mang tính đặc trưng riêng nên Nguyễn Thắng đã mời Bình Nguyên về quản lý giải, sau này Phạm Đăng Thắng được Bình Nguyên mời về cùng quản lý.',
            fifthContent:
                'Sau khi được Bình Nguyên và Phạm Đăng Thắng đưa ra ý tưởng về một giải đấu mang tính đặc trưng riêng (giải Gos League) thì được Nguyễn Thắng chấp nhận và hệ thống giải Gos League đã chính thức ra đời.',
            sixthContent:
                'Tất cả các giải đấu thuộc GOS đều được Bình Nguyên thiết kế bộ nhận diện thương hiệu riêng.',
            sixthImg:
                'https://res.cloudinary.com/springboot-cloud/image/upload/v1755782603/fourthImg_i1libc.jpg',
            sixthNoteImg: '(8 giải League của GOS)',
            seventhImg:
                'https://res.cloudinary.com/springboot-cloud/image/upload/v1755782603/fifthImg_vlgfai.jpg',
            seventhNoteImg: '(5 giải cúp của GOS)',
            eighthContent:
                'Dựa trên tập hợp về các lỗi vi phạm trên game DLS, bộ luật GOS cũng đã được cho ra đời.',
            eighthImg:
                'https://res.cloudinary.com/springboot-cloud/image/upload/v1755782604/sixthImg_jtf2tl.jpg',
            eighthNoteImg: '(Luật GOS đầu tiên được áp dụng)'
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

    .img-history {
        width: 100% !important;
        height: 300px !important;
        object-fit: contain !important;
        border-radius: 0 !important;
    }

    .nav-link {
        font-weight: 500;
        color: #000000;
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: red !important;
    }

    .history-page {
        background: #f8f9fa;
    }

    .timeline-container {
        position: relative;
        padding: 40px 0;
    }

    .timeline {
        position: relative;
    }

    .timeline::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 4px;
        background: #dee2e6;
        transform: translateX(-50%);
    }

    .timeline-item {
        position: relative;
        margin-bottom: 60px;
    }

    .timeline-item:nth-child(odd) .timeline-content {
        margin-left: 0;
        margin-right: 50%;
        padding-right: 40px;
        text-align: right;
    }

    .timeline-item:nth-child(even) .timeline-content {
        margin-left: 50%;
        margin-right: 0;
        padding-left: 40px;
        text-align: left;
    }

    .timeline-marker {
        position: absolute;
        left: 50%;
        top: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
        transform: translateX(-50%);
        z-index: 10;
    }

    .timeline-content {
        position: relative;
    }

    .achievements {
        margin-top: 15px;
    }

    .achievements .badge {
        margin-right: 5px;
        margin-bottom: 5px;
    }

    .logo-history {
        width: 60px;
        height: auto;
    }

    .title-history {
        font-size: 1.5rem;
    }

    .description-history {
        font-size: 1rem;
    }

    /* Desktop */
    @media (min-width: 1025px) {
        .logo-history {
            width: 100px;
        }

        .title-history {
            font-size: 2.5rem;
        }

        .description-history {
            font-size: 1.1rem;
        }
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1024px) {
        .logo-history {
            width: 80px;
        }

        .title-history {
            font-size: 2rem;
        }

        .description-history {
            font-size: 1rem;
        }
    }

    @media (max-width: 768px) {
        .logo-history {
            width: 60px;
        }

        .title-history {
            font-size: 1.5rem;
        }

        .description-history {
            font-size: 0.9rem;
        }

        .timeline::before {
            left: 30px;
        }

        .timeline-item .timeline-content {
            margin-left: 80px !important;
            margin-right: 0 !important;
            padding-left: 20px !important;
            padding-right: 0 !important;
            text-align: left !important;
        }

        .timeline-marker {
            left: 30px;
            transform: none;
        }
    }
</style>
