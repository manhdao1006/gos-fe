<template>
    <div class="tournaments-page">
        <div class="hero-section bg-warning text-dark py-5 w-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1><i class="bi bi-trophy"></i> Hệ thống giải đấu</h1>
                        <p class="lead">
                            Khám phá các giải đấu đa dạng từ cấp độ nghiệp dư đến chuyên nghiệp
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid py-5">
            <!-- Giải đấu hàng tuần -->
            <section class="mb-5">
                <h2 class="text-center mb-4">
                    <i class="bi bi-calendar-week text-primary"></i> Giải đấu hàng tuần
                </h2>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <div class="card-body text-center">
                                <i class="bi bi-trophy text-warning display-4 mb-3"></i>
                                <h5 class="card-title">Giải đấu thường niên</h5>
                                <p class="card-text">
                                    Giải đấu diễn ra hàng tuần với phần thưởng hấp dẫn cho top 3.
                                </p>
                                <ul class="list-unstyled">
                                    <li>
                                        <i class="bi bi-check text-success"></i> Thời gian: Mỗi Chủ
                                        nhật
                                    </li>
                                    <li><i class="bi bi-check text-success"></i> Số đội: 16 đội</li>
                                    <li>
                                        <i class="bi bi-check text-success"></i> Phần thưởng:
                                        1000-500-200 coins
                                    </li>
                                </ul>
                                <button class="btn btn-primary">Đăng ký tham gia</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <div class="card-body text-center">
                                <i class="bi bi-star text-warning display-4 mb-3"></i>
                                <h5 class="card-title">Giải đấu VIP</h5>
                                <p class="card-text">
                                    Giải đấu dành cho những người chơi có ranking cao.
                                </p>
                                <ul class="list-unstyled">
                                    <li>
                                        <i class="bi bi-check text-success"></i> Thời gian: Mỗi thứ
                                        7
                                    </li>
                                    <li><i class="bi bi-check text-success"></i> Số đội: 8 đội</li>
                                    <li>
                                        <i class="bi bi-check text-success"></i> Phần thưởng:
                                        2000-1000-500 coins
                                    </li>
                                </ul>
                                <button class="btn btn-warning">Đăng ký tham gia</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <div class="card-body text-center">
                                <i class="bi bi-lightning text-warning display-4 mb-3"></i>
                                <h5 class="card-title">Giải đấu nhanh</h5>
                                <p class="card-text">
                                    Giải đấu tốc độ dành cho những người chơi bận rộn.
                                </p>
                                <ul class="list-unstyled">
                                    <li>
                                        <i class="bi bi-check text-success"></i> Thời gian: Hàng
                                        ngày
                                    </li>
                                    <li><i class="bi bi-check text-success"></i> Số đội: 4 đội</li>
                                    <li>
                                        <i class="bi bi-check text-success"></i> Phần thưởng:
                                        500-200-100 coins
                                    </li>
                                </ul>
                                <button class="btn btn-success">Đăng ký tham gia</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Cúp mùa giải -->
            <section class="mb-5">
                <h2 class="text-center mb-4">
                    <i class="bi bi-cup-hot text-danger"></i> Cúp mùa giải
                </h2>
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-md-6">
                                        <h4>Giải đấu lớn nhất năm</h4>
                                        <p>
                                            Tham gia cúp mùa giải để có cơ hội trở thành nhà vô địch
                                            và nhận phần thưởng khủng.
                                        </p>
                                        <ul>
                                            <li>Thời gian: 3 tháng/mùa</li>
                                            <li>Số đội: 32 đội</li>
                                            <li>Phần thưởng: 10000-5000-2000 coins</li>
                                            <li>Danh hiệu đặc biệt</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6 text-center">
                                        <i class="bi bi-trophy-fill text-warning display-1"></i>
                                        <div class="mt-3">
                                            <button class="btn btn-danger btn-lg">
                                                Đăng ký ngay
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Giải đấu quốc tế -->
            <section class="mb-5">
                <h2 class="text-center mb-4">
                    <i class="bi bi-globe text-info"></i> Giải đấu quốc tế
                </h2>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="mb-0"><i class="bi bi-flag"></i> Champions League</h5>
                            </div>
                            <div class="card-body">
                                <p>Giải đấu cấp châu lục dành cho các đội mạnh nhất.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="badge bg-primary">Đang diễn ra</span>
                                    <button class="btn btn-outline-primary">Xem chi tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-success text-white">
                                <h5 class="mb-0"><i class="bi bi-flag"></i> World Cup</h5>
                            </div>
                            <div class="card-body">
                                <p>Giải đấu thế giới được tổ chức mỗi 4 năm một lần.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="badge bg-secondary">Sắp diễn ra</span>
                                    <button class="btn btn-outline-success">Xem chi tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Bảng xếp hạng -->
            <section>
                <h2 class="text-center mb-4">
                    <i class="bi bi-list-ol text-success"></i> Bảng xếp hạng hiện tại
                </h2>
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead class="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Đội bóng</th>
                                <th>Điểm</th>
                                <th>Trận thắng</th>
                                <th>Hòa</th>
                                <th>Thua</th>
                                <th>Hiệu số</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="badge bg-warning">1</span></td>
                                <td><strong>Champion FC</strong></td>
                                <td>45</td>
                                <td>14</td>
                                <td>3</td>
                                <td>1</td>
                                <td class="text-success">+25</td>
                            </tr>
                            <tr>
                                <td><span class="badge bg-secondary">2</span></td>
                                <td><strong>Elite United</strong></td>
                                <td>42</td>
                                <td>13</td>
                                <td>3</td>
                                <td>2</td>
                                <td class="text-success">+18</td>
                            </tr>
                            <tr>
                                <td><span class="badge bg-bronze">3</span></td>
                                <td><strong>Pro Stars</strong></td>
                                <td>38</td>
                                <td>11</td>
                                <td>5</td>
                                <td>2</td>
                                <td class="text-success">+12</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><strong>Rising FC</strong></td>
                                <td>35</td>
                                <td>10</td>
                                <td>5</td>
                                <td>3</td>
                                <td class="text-success">+8</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><strong>Veterans</strong></td>
                                <td>32</td>
                                <td>9</td>
                                <td>5</td>
                                <td>4</td>
                                <td class="text-success">+5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
    // Component logic here
</script>

<style scoped>
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

    .table th {
        font-weight: 600;
    }

    .table td {
        vertical-align: middle;
    }
</style>
