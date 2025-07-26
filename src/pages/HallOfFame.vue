<template>
    <div class="hall-of-fame-page">
        <div class="hero-section bg-warning text-dark py-5 w-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1><i class="bi bi-star-fill"></i> Bảng vàng</h1>
                        <p class="lead">
                            Tôn vinh những thành viên xuất sắc nhất của cộng đồng DLS
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid py-5">
            <!-- Hall of Fame chính -->
            <section class="mb-5">
                <h2 class="text-center mb-4"><i class="bi bi-trophy"></i> Hall of Fame</h2>
                <div class="row">
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
                </div>
            </section>

            <!-- Danh hiệu đặc biệt -->
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

            <!-- Bảng xếp hạng tất cả thời gian -->
            <section class="mb-5">
                <h2 class="text-center mb-4">
                    <i class="bi bi-list-ol"></i> Bảng xếp hạng tất cả thời gian
                </h2>
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead class="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Thành viên</th>
                                <th>Điểm tổng</th>
                                <th>Trận thắng</th>
                                <th>Danh hiệu</th>
                                <th>Thời gian tham gia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="badge bg-warning">1</span></td>
                                <td><strong>Champion_2024</strong></td>
                                <td>2850</td>
                                <td>142</td>
                                <td>15</td>
                                <td>2 năm</td>
                            </tr>
                            <tr>
                                <td><span class="badge bg-secondary">2</span></td>
                                <td><strong>Pro_Player</strong></td>
                                <td>2720</td>
                                <td>135</td>
                                <td>12</td>
                                <td>3 năm</td>
                            </tr>
                            <tr>
                                <td><span class="badge bg-bronze">3</span></td>
                                <td><strong>Rising_Star</strong></td>
                                <td>2580</td>
                                <td>128</td>
                                <td>8</td>
                                <td>1 năm</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><strong>Veteran_Player</strong></td>
                                <td>2450</td>
                                <td>120</td>
                                <td>10</td>
                                <td>4 năm</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><strong>Elite_Player</strong></td>
                                <td>2320</td>
                                <td>115</td>
                                <td>9</td>
                                <td>2 năm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- Thống kê danh hiệu -->
            <section>
                <h2 class="text-center mb-4"><i class="bi bi-pie-chart"></i> Thống kê danh hiệu</h2>
                <div class="row">
                    <div class="col-md-3 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-trophy-fill text-warning display-4"></i>
                                <h3 class="mt-3">25</h3>
                                <p class="text-muted">Vô địch</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-award-fill text-secondary display-4"></i>
                                <h3 class="mt-3">50</h3>
                                <p class="text-muted">Danh hiệu đặc biệt</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-star-fill text-warning display-4"></i>
                                <h3 class="mt-3">100+</h3>
                                <p class="text-muted">Thành viên xuất sắc</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-calendar-event-fill text-success display-4"></i>
                                <h3 class="mt-3">75</h3>
                                <p class="text-muted">Sự kiện đã tổ chức</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
    // Component logic here
</script>

<style scoped>
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
</style>
