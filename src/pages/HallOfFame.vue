<template>
    <div class="hall-of-fame-page">
        <div class="hero-section text-white py-3 w-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 text-center">
                        <div
                            class="d-flex flex-column flex-md-row align-items-center justify-content-center"
                        >
                            <img
                                src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753510398/logo-bang-vang_ydkkb7.png"
                                alt="Bảng vàng danh vọng"
                                class="logo-hall img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-hall"
                                >Bảng vàng danh vọng</span
                            >
                        </div>
                        <p class="lead description-hall">
                            Tôn vinh những thành viên xuất sắc nhất của cộng đồng GOS - DLS
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <Header />

        <div class="container-fluid py-5">
            <!-- Hall of Fame chính -->
            <section class="mb-5">
                <h2
                    class="text-center mb-4 d-flex flex-column flex-md-row align-items-center justify-content-center"
                >
                    <img
                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753509756/logo-cup_a0op4f.jpg"
                        alt="GOS League"
                        class="logo-gos img-fluid"
                    />
                    <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 fs-3 fs-md-1 text-nowrap"
                        >Thành tích GOS League</span
                    >
                </h2>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="table-responsive">
                                <table
                                    class="table table-bordered table-hover text-center align-middle w-100 shadow-sm rounded"
                                >
                                    <thead class="table-dark">
                                        <tr>
                                            <th scope="col">Mùa</th>
                                            <th
                                                v-for="col in columnsGosLeague"
                                                :key="col"
                                                scope="col"
                                            >
                                                League {{ col }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="season in seasons" :key="season">
                                            <td style="background-color: #88ff55">
                                                <strong>{{ season }}</strong>
                                            </td>
                                            <td
                                                v-for="col in columnsGosLeague"
                                                :key="col"
                                                style="background-color: #88ff55"
                                            >
                                                {{ dataGosLeague[season]?.[col] || '-' }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-5">
                <h2
                    class="text-center mb-4 d-flex flex-column flex-md-row align-items-center justify-content-center"
                >
                    <img
                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753509756/logo-cup_a0op4f.jpg"
                        alt="GOS League"
                        class="logo-gos img-fluid"
                    />
                    <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 fs-3 fs-md-1 text-nowrap"
                        >Thành tích GOS Cup</span
                    >
                </h2>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="table-responsive">
                                <table
                                    class="table table-bordered table-hover text-center align-middle w-100 shadow-sm rounded"
                                >
                                    <thead class="table-dark">
                                        <tr>
                                            <th scope="col">Mùa</th>
                                            <th v-for="col in columnsGosCup" :key="col" scope="col">
                                                League {{ col }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="season in seasons" :key="season">
                                            <td style="background-color: #ffb202">
                                                <strong>{{ season }}</strong>
                                            </td>
                                            <td
                                                v-for="col in columnsGosCup"
                                                :key="col"
                                                style="background-color: #ffb202"
                                            >
                                                {{ dataGosCup[season]?.[col] || '-' }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="card hall-of-fame-card">
                            <div class="card-body text-center">
                                <div class="member-avatar">
                                    <i class="bi bi-person-circle display-1 text-warning"></i>
                                </div>
                                <h4 class="mt-3">Champion_2024</h4>
                                <p class="text-muted">Vô địch mùa giải 2023</p>
                                <div class="achievements">
                                    <span class="badge bg-warning">Vô địch</span>
                                    <span class="badge bg-primary">MVP</span>
                                    <span class="badge bg-success">Top Scorer</span>
                                </div>
                                <div class="stats mt-3">
                                    <div class="row text-center">
                                        <div class="col-4">
                                            <h5 class="text-primary">142</h5>
                                            <small>Trận thắng</small>
                                        </div>
                                        <div class="col-4">
                                            <h5 class="text-success">2850</h5>
                                            <small>Điểm</small>
                                        </div>
                                        <div class="col-4">
                                            <h5 class="text-warning">15</h5>
                                            <small>Danh hiệu</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-4">
                        <div class="card hall-of-fame-card">
                            <div class="card-body text-center">
                                <div class="member-avatar">
                                    <i class="bi bi-person-circle display-1 text-secondary"></i>
                                </div>
                                <h4 class="mt-3">Pro_Player</h4>
                                <p class="text-muted">Á quân mùa giải 2023</p>
                                <div class="achievements">
                                    <span class="badge bg-secondary">Á quân</span>
                                    <span class="badge bg-primary">Best Defender</span>
                                    <span class="badge bg-info">Team Captain</span>
                                </div>
                                <div class="stats mt-3">
                                    <div class="row text-center">
                                        <div class="col-4">
                                            <h5 class="text-primary">135</h5>
                                            <small>Trận thắng</small>
                                        </div>
                                        <div class="col-4">
                                            <h5 class="text-success">2720</h5>
                                            <small>Điểm</small>
                                        </div>
                                        <div class="col-4">
                                            <h5 class="text-warning">12</h5>
                                            <small>Danh hiệu</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-4">
                        <div class="card hall-of-fame-card">
                            <div class="card-body text-center">
                                <div class="member-avatar">
                                    <i class="bi bi-person-circle display-1 text-bronze"></i>
                                </div>
                                <h4 class="mt-3">Rising_Star</h4>
                                <p class="text-muted">Hạng 3 mùa giải 2023</p>
                                <div class="achievements">
                                    <span class="badge bg-bronze">Hạng 3</span>
                                    <span class="badge bg-success">Rookie of the Year</span>
                                    <span class="badge bg-info">Most Improved</span>
                                </div>
                                <div class="stats mt-3">
                                    <div class="row text-center">
                                        <div class="col-4">
                                            <h5 class="text-primary">128</h5>
                                            <small>Trận thắng</small>
                                        </div>
                                        <div class="col-4">
                                            <h5 class="text-success">2580</h5>
                                            <small>Điểm</small>
                                        </div>
                                        <div class="col-4">
                                            <h5 class="text-warning">8</h5>
                                            <small>Danh hiệu</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </section>

            <section class="mb-5">
                <h2 class="text-center mb-4"><i class="bi bi-award"></i> Danh hiệu đặc biệt</h2>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="mb-0">
                                    <i class="bi bi-heart"></i> Thành viên tích cực nhất
                                </h5>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <i
                                        class="bi bi-person-circle text-primary me-3"
                                        style="font-size: 3rem"
                                    ></i>
                                    <div>
                                        <h6>Community_Helper</h6>
                                        <p class="text-muted mb-2">
                                            Luôn sẵn sàng giúp đỡ thành viên mới và đóng góp tích
                                            cực cho cộng đồng
                                        </p>
                                        <div class="achievements">
                                            <span class="badge bg-primary">1000+ bài viết</span>
                                            <span class="badge bg-success">500+ lượt giúp đỡ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-success text-white">
                                <h5 class="mb-0"><i class="bi bi-lightbulb"></i> Sáng tạo nhất</h5>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <i
                                        class="bi bi-person-circle text-success me-3"
                                        style="font-size: 3rem"
                                    ></i>
                                    <div>
                                        <h6>Creative_Mind</h6>
                                        <p class="text-muted mb-2">
                                            Tạo ra nhiều ý tưởng mới và đóng góp cho sự phát triển
                                            của cộng đồng
                                        </p>
                                        <div class="achievements">
                                            <span class="badge bg-success">50+ ý tưởng</span>
                                            <span class="badge bg-warning">20+ dự án</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-warning text-dark">
                                <h5 class="mb-0"><i class="bi bi-clock"></i> Thành viên lâu năm</h5>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <i
                                        class="bi bi-person-circle text-warning me-3"
                                        style="font-size: 3rem"
                                    ></i>
                                    <div>
                                        <h6>Veteran_Player</h6>
                                        <p class="text-muted mb-2">
                                            Thành viên từ những ngày đầu thành lập, chứng kiến sự
                                            phát triển của cộng đồng
                                        </p>
                                        <div class="achievements">
                                            <span class="badge bg-warning">4 năm</span>
                                            <span class="badge bg-info">Founding Member</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-danger text-white">
                                <h5 class="mb-0"><i class="bi bi-star"></i> Ngôi sao mới</h5>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <i
                                        class="bi bi-person-circle text-danger me-3"
                                        style="font-size: 3rem"
                                    ></i>
                                    <div>
                                        <h6>New_Star</h6>
                                        <p class="text-muted mb-2">
                                            Thành viên mới nhưng đã có những đóng góp đáng kể cho
                                            cộng đồng
                                        </p>
                                        <div class="achievements">
                                            <span class="badge bg-danger">Rookie</span>
                                            <span class="badge bg-primary">Fast Learner</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 class="text-center mb-4"><i class="bi bi-award"></i> Thống kê nổi bật</h2>
                <div class="row">
                    <div class="col-md-3 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-controller text-danger display-4"></i>
                                <h3 class="mt-3">~20K</h3>
                                <p class="text-muted">Trận đấu</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-cash-coin text-warning display-4"></i>
                                <h3 class="mt-3">~3.000.000 VNĐ</h3>
                                <p class="text-muted">Tiền thưởng</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-people text-success display-4"></i>
                                <h3 class="mt-3">50+</h3>
                                <p class="text-muted">Thành viên xuất sắc</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-calendar text-primary display-4"></i>
                                <h3 class="mt-3">60+</h3>
                                <p class="text-muted">Sự kiện đã tổ chức</p>
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
    import Footer from '../components/Footer.vue'
    import Header from '../components/Header.vue'

    import { onMounted, reactive } from 'vue'

    const columnsGosLeague = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const columnsGosCup = ['C1', 'C2', 'Siêu Cúp', 'Liên Group', 'Gos Cup']
    const seasons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    const dataGosLeague = reactive<Record<number, Record<string, string>>>({})
    const dataGosCup = reactive<Record<number, Record<string, string>>>({})

    const datasGosLeague: Record<number, Record<string, string>> = {
        1: {
            A: 'Phùng Văn Đạt',
            B: 'Nhật Tuệ',
            C: 'Huy Bùi',
            D: 'Khả Đạt',
            E: '(KTC)',
            F: '(KTC)',
            G: '(KTC)',
            H: '(KTC)'
        },
        2: {
            A: 'Huy Bùi',
            B: 'Lương Hoàn',
            C: '(Hủy)',
            D: 'Tuấn ManUtd',
            E: '(KTC)',
            F: '(KTC)',
            G: '(KTC)',
            H: '(KTC)'
        },
        3: {
            A: 'Hữu Hưng',
            B: 'Phát Võ',
            C: 'Bình Nguyên',
            D: 'Quang Huy',
            E: 'Tên Tớ Là Sơn',
            F: '(KTC)',
            G: '(KTC)',
            H: '(KTC)'
        },
        4: {
            A: 'Hữu Hưng',
            B: 'Minh Ozil',
            C: 'Minh Trí Nguyễn',
            D: 'Hậu Nguyễn',
            E: 'Ngọc Thịnh',
            F: 'Minh Nhật',
            G: 'Minh Đức',
            H: '(KTC)'
        },
        5: {
            A: 'Trương Đặng',
            B: 'Nhật Tuệ',
            C: 'Hậu Nguyễn',
            D: 'Khả Đạt',
            E: 'Nhật Huỳnh',
            F: 'Hoàng Sang',
            G: 'Đức Duy',
            H: 'Minh Anh'
        },
        6: {
            A: 'Hữu Hưng',
            B: 'Hậu Nguyễn',
            C: 'Phan Điền',
            D: 'Nhật Huỳnh',
            E: 'Hoàng Sang',
            F: 'Nguyễn Luân',
            G: 'Phi Nang',
            H: 'Hiệp Thành'
        },
        7: {
            A: 'Hữu Hưng',
            B: 'Tuấn Hoàng',
            C: '(Hủy)',
            D: 'Liên Hương',
            E: 'Nguyễn Luân',
            F: 'Bảo Quang',
            G: 'Đức Khang',
            H: '(KTC)'
        },
        8: {
            A: 'Hậu Nguyễn',
            B: 'Phát Võ',
            C: 'Nguyễn Hoàng',
            D: 'Lê Quý',
            E: 'Nam Bao',
            F: 'Duy Phúc',
            G: '(KTC)',
            H: '(KTC)'
        },
        9: {
            A: 'Phát Võ',
            B: 'Nguyễn Hoàng',
            C: 'Văn Thuận',
            D: 'Bảo Quang',
            E: 'Minh Anh',
            F: 'Tấn Quang',
            G: '(KTC)',
            H: '(KTC)'
        },
        10: {
            A: 'Phát Võ',
            B: 'Lanh Cao',
            C: 'Trà Louis',
            D: 'Toàn Thắngg',
            E: 'Kiệt Nguyễn',
            F: 'Huy Lương',
            G: '(KTC)',
            H: '(KTC)'
        },
        11: {
            A: 'Phát Võ',
            B: 'Nguyễn Ngọc Sáng',
            C: 'Gia Huy',
            D: 'Trường Nam',
            E: '(KTC)',
            F: '(KTC)',
            G: '(KTC)',
            H: '(KTC)'
        }
    }

    const datasGosCup: Record<number, Record<string, string>> = {
        1: {
            C1: 'Khả Đạt (D)',
            C2: 'Nguyễn Quân (A)',
            'Siêu Cúp': 'Nguyễn Quân (A)',
            'Liên Group': 'Nghiêm Quỳnh Như',
            'Gos Cup': 'Hoàng Chung (Inter Miami) - S11'
        },
        2: {
            C1: 'Thành Mạnh (B)',
            C2: 'Minh Ozil (B)',
            'Siêu Cúp': 'Thành Mạnh (B)',
            'Liên Group': 'Thành Mạnh',
            'Gos Cup': 'Hữu Hưng (Phần Lan)'
        },
        3: {
            C1: 'Hữu Hưng (A)',
            C2: 'Tuấn Hoàng (D)',
            'Siêu Cúp': 'Tuấn Hoàng (D)',
            'Liên Group': '—',
            'Gos Cup': 'Nguyễn Văn Đạt (Girona)'
        },
        4: {
            C1: 'Thành Mạnh (A)',
            C2: 'Đường Tam (A)',
            'Siêu Cúp': 'Đường Tam (A)',
            'Liên Group': '—',
            'Gos Cup': 'Vũ Quang (Mỹ)'
        },
        5: {
            C1: 'Trương Đặng (A)',
            C2: 'Châu Quốc Toàn (D)',
            'Siêu Cúp': 'Trương Đặng (A)',
            'Liên Group': 'Trương Đặng',
            'Gos Cup': 'Mẫn Tên Tôi (Iran)'
        },
        6: {
            C1: 'Trương Đặng (A)',
            C2: 'Chí Vậy Thôi (E)',
            'Siêu Cúp': 'Trương Đặng (A)',
            'Liên Group': 'Trương Đặng',
            'Gos Cup': 'Nhân Võ (Iran)'
        },
        7: {
            C1: 'Hoàng Tử Si Tình (F)',
            C2: 'Nhật Tuệ (A)',
            'Siêu Cúp': 'Hoàng Tử Si Tình (F)',
            'Liên Group': '—',
            'Gos Cup': 'Hoàng Tử Si Tình (Argentina)'
        },
        8: {
            C1: 'Lanh Cao (B)',
            C2: 'Tuấn Khoa (E)',
            'Siêu Cúp': 'Lanh Cao (B)',
            'Liên Group': '—',
            'Gos Cup': 'Khiêm Định (Ireland)'
        },
        9: {
            C1: 'Lanh Cao (B)',
            C2: 'Phú Quí (A)',
            'Siêu Cúp': 'Lanh Cao (B)',
            'Liên Group': '—',
            'Gos Cup': 'Gia Bách'
        },
        10: {
            C1: 'Phát Võ (A)',
            C2: 'Việt Ba Tuổi (E)',
            'Siêu Cúp': 'Việt Ba Tuổi (E)',
            'Liên Group': '—',
            'Gos Cup': 'Đoàn Thanh Long'
        },
        11: {
            C1: 'Phát Võ (A)',
            C2: 'Tú Nguyên (A)',
            'Siêu Cúp': 'Phát Võ (A)',
            'Liên Group': '—',
            'Gos Cup': 'Gia Huy (C)'
        }
    }

    onMounted(() => {
        for (const season of seasons) {
            dataGosLeague[season] = {}
            for (const col of columnsGosLeague) {
                dataGosLeague[season][col] = datasGosLeague[season]?.[col] || ''
            }
        }

        for (const season of seasons) {
            dataGosCup[season] = {}
            for (const col of columnsGosCup) {
                dataGosCup[season][col] = datasGosCup[season]?.[col] || ''
            }
        }
    })
</script>

<style scoped>
    table input {
        min-width: 120px;
    }

    .hero-section {
        background-image: url('https://res.cloudinary.com/springboot-cloud/image/upload/v1753513401/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_llaqju.png');
    }

    .container-fluid img {
        width: 100px; /* tùy chỉnh kích thước */
        height: 100px; /* đảm bảo hình vuông */
        object-fit: cover; /* giữ tỷ lệ ảnh */
        border-radius: 50%; /* bo tròn */
    }

    .hall-of-fame-page {
        background: #f8f9fa;
    }

    .hall-of-fame-card {
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        border: 2px solid transparent;
    }

    .hall-of-fame-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        border-color: #ffc107;
    }

    .member-avatar {
        margin-bottom: 20px;
    }

    .achievements .badge {
        margin-right: 5px;
        margin-bottom: 5px;
    }

    .badge.bg-bronze {
        background-color: #cd7f32 !important;
    }

    .stats h5 {
        margin-bottom: 5px;
    }

    .stats small {
        color: #6c757d;
        font-size: 0.8rem;
    }

    .table th {
        font-weight: 600;
    }

    .table td {
        vertical-align: middle;
    }

    .logo-gos {
        width: 60px;
        height: auto;
    }

    .logo-hall {
        width: 60px;
        height: auto;
    }

    .title-hall {
        font-size: 1.5rem;
    }

    .description-hall {
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        .logo-hall {
            width: 60px;
        }

        .title-hall {
            font-size: 1.5rem;
        }

        .description-hall {
            font-size: 0.9rem;
        }

        table {
            font-size: 0.75rem;
        }

        th,
        td {
            padding: 0.25rem !important;
        }

        .table th,
        .table td {
            white-space: nowrap;
        }

        .logo-gos {
            width: 60px;
        }
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1024px) {
        .logo-hall {
            width: 80px;
        }

        .title-hall {
            font-size: 2rem;
        }

        .description-hall {
            font-size: 1rem;
        }

        table {
            font-size: 0.9rem;
        }

        th,
        td {
            padding: 0.5rem !important;
        }

        .logo-gos {
            width: 80px;
        }
    }

    /* Desktop */
    @media (min-width: 1025px) {
        .logo-hall {
            width: 100px;
        }

        .title-hall {
            font-size: 2.5rem;
        }

        .description-hall {
            font-size: 1.1rem;
        }

        table {
            font-size: 1rem;
        }

        th,
        td {
            padding: 0.75rem !important;
        }

        .logo-gos {
            width: 100px;
        }
    }
</style>
