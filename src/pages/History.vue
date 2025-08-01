<template>
    <div class="history-page">
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
            <div class="timeline-container">
                <div class="timeline">
                    <div v-for="(item, index) in timelineData" :key="item.id" class="timeline-item">
                        <div :class="`timeline-marker ${item.markerClass}`">
                            <i :class="item.icon"></i>
                        </div>
                        <div class="timeline-content">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">{{ item.title }}</h4>
                                    <h6 class="text-muted">{{ item.subtitle }}</h6>
                                    <p>{{ item.description }}</p>
                                    <div class="achievements">
                                        <span
                                            v-for="achievement in item.achievements"
                                            :key="index"
                                            :class="`badge ${achievement.class}`"
                                        >
                                            {{ achievement.text }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

            <!-- Những cột mốc quan trọng -->
            <section class="mt-5">
                <h2 class="text-center mb-4">
                    <i class="bi bi-flag"></i> Những cột mốc quan trọng
                </h2>
                <div class="row">
                    <div v-for="milestone in milestones" :key="milestone.id" class="col-md-6 mb-4">
                        <div class="card">
                            <div :class="`card-header bg-${milestone.headerClass} text-white`">
                                <h5 class="mb-0">
                                    <i :class="milestone.icon"></i> {{ milestone.title }}
                                </h5>
                            </div>
                            <div class="card-body">
                                <p><strong>Ngày:</strong> {{ milestone.date }}</p>
                                <p><strong>Sự kiện:</strong> {{ milestone.event }}</p>
                                <p><strong>Kết quả:</strong> {{ milestone.result }}</p>
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
    import { onMounted, ref } from 'vue'
    import Footer from '../components/Footer.vue'
    import Header from '../components/Header.vue'

    interface TimelineItem {
        id: number
        title: string
        subtitle: string
        description: string
        markerClass: string
        icon: string
        achievements: Array<{
            text: string
            class: string
        }>
    }

    interface Statistic {
        id: number
        icon: string
        color: string
        value: string
        label: string
    }

    interface Milestone {
        id: number
        title: string
        icon: string
        headerClass: string
        date: string
        event: string
        result: string
    }

    const timelineData = ref<TimelineItem[]>([])
    const statistics = ref<Statistic[]>([])
    const milestones = ref<Milestone[]>([])

    // Mock data function
    const fetchMockData = async () => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Timeline data
        timelineData.value = [
            {
                id: 1,
                title: '06/2022 - Khởi đầu',
                subtitle: 'Thành lập nhóm',
                description:
                    'Nhóm được thành lập bởi một nhóm nhỏ những người yêu thích game Dream League Soccer. Ban đầu chỉ có 3 thành viên và hoạt động chủ yếu trên Facebook.',
                markerClass: 'bg-primary',
                icon: 'bi bi-calendar-event',
                achievements: [
                    { text: '3 thành viên', class: 'bg-primary' },
                    { text: 'Nhóm Facebook', class: 'bg-success' }
                ]
            },
            {
                id: 2,
                title: '2021 - Phát triển cộng đồng',
                subtitle: 'Mở rộng thành viên',
                description:
                    'Cộng đồng bắt đầu phát triển mạnh mẽ với việc tổ chức các giải đấu đầu tiên và thu hút thêm nhiều người chơi. Số lượng thành viên tăng lên 100 người.',
                markerClass: 'bg-success',
                icon: 'bi bi-people',
                achievements: [
                    { text: '100 thành viên', class: 'bg-primary' },
                    { text: 'Giải đấu đầu tiên', class: 'bg-warning' },
                    { text: 'Discord server', class: 'bg-info' }
                ]
            },
            {
                id: 3,
                title: '2022 - Mở rộng hoạt động',
                subtitle: 'Hệ thống giải đấu',
                description:
                    'Xây dựng hệ thống giải đấu chuyên nghiệp với nhiều loại giải đấu khác nhau. Bắt đầu tổ chức các sự kiện lớn và hợp tác với các nhóm khác.',
                markerClass: 'bg-warning',
                icon: 'bi bi-trophy',
                achievements: [
                    { text: '500 thành viên', class: 'bg-primary' },
                    { text: '10 giải đấu', class: 'bg-warning' },
                    { text: 'Website', class: 'bg-success' }
                ]
            },
            {
                id: 4,
                title: '2023 - Trở thành cộng đồng hàng đầu',
                subtitle: 'Thành công vượt bậc',
                description:
                    'DLS Group trở thành một trong những cộng đồng Dream League Soccer lớn nhất Việt Nam với hệ thống quản lý chuyên nghiệp và hoạt động đa dạng.',
                markerClass: 'bg-danger',
                icon: 'bi bi-star',
                achievements: [
                    { text: '1000+ thành viên', class: 'bg-primary' },
                    { text: '50+ giải đấu', class: 'bg-warning' },
                    { text: 'Đối tác chính thức', class: 'bg-success' }
                ]
            },
            {
                id: 5,
                title: '2024 - Tương lai',
                subtitle: 'Tiếp tục phát triển',
                description:
                    'Kế hoạch mở rộng cộng đồng với việc phát triển ứng dụng mobile, tổ chức các giải đấu quốc tế và trở thành cộng đồng DLS lớn nhất Đông Nam Á.',
                markerClass: 'bg-info',
                icon: 'bi bi-rocket',
                achievements: [
                    { text: '2000+ thành viên', class: 'bg-primary' },
                    { text: '100+ giải đấu', class: 'bg-warning' },
                    { text: 'Mobile App', class: 'bg-success' }
                ]
            }
        ]

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

        // Milestones data
        milestones.value = [
            {
                id: 1,
                title: 'Sự kiện đầu tiên',
                icon: 'bi bi-calendar-check',
                headerClass: 'primary',
                date: '15/03/2021',
                event: 'Giải đấu đầu tiên với 16 đội tham gia',
                result: 'Thành công vượt mong đợi, tạo tiền đề cho các giải đấu sau'
            },
            {
                id: 2,
                title: 'Mở rộng quốc tế',
                icon: 'bi bi-globe',
                headerClass: 'success',
                date: '20/06/2023',
                event: 'Giải đấu quốc tế đầu tiên với các đội từ 5 quốc gia',
                result: 'Đánh dấu bước ngoặt trong việc mở rộng cộng đồng'
            }
        ]
    }

    onMounted(() => {
        fetchMockData()
    })
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
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); /* đổ bóng nhẹ */
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
