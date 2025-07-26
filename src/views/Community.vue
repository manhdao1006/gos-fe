<template>
    <div class="community-page">
        <div class="hero-section bg-success text-white py-5 w-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1><i class="bi bi-people"></i> Cộng đồng DLS</h1>
                        <p class="lead">
                            Kết nối với những người chơi khác, chia sẻ kinh nghiệm và tham gia thảo
                            luận
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid py-5">
            <div class="row">
                <div class="col-lg-8">
                    <div class="community-content">
                        <div class="card mb-4">
                            <div class="card-header">
                                <h5><i class="bi bi-chat-dots"></i> Thảo luận mới nhất</h5>
                            </div>
                            <div class="card-body">
                                <div class="discussion-item mb-3 p-3 border rounded">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h6 class="mb-1">Chiến thuật 4-3-3 hiệu quả</h6>
                                            <p class="text-muted mb-2">
                                                Chia sẻ kinh nghiệm sử dụng formation 4-3-3 trong
                                                các trận đấu quan trọng...
                                            </p>
                                            <small class="text-muted"
                                                >Bởi: Admin • 2 giờ trước</small
                                            >
                                        </div>
                                        <span class="badge bg-primary">Hot</span>
                                    </div>
                                </div>

                                <div class="discussion-item mb-3 p-3 border rounded">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h6 class="mb-1">Cách phát triển cầu thủ trẻ</h6>
                                            <p class="text-muted mb-2">
                                                Hướng dẫn chi tiết cách training và phát triển cầu
                                                thủ trẻ có tiềm năng...
                                            </p>
                                            <small class="text-muted"
                                                >Bởi: Moderator • 5 giờ trước</small
                                            >
                                        </div>
                                        <span class="badge bg-success">New</span>
                                    </div>
                                </div>

                                <div class="discussion-item mb-3 p-3 border rounded">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h6 class="mb-1">Giải đấu tuần này</h6>
                                            <p class="text-muted mb-2">
                                                Thông báo về giải đấu mới và cách đăng ký tham
                                                gia...
                                            </p>
                                            <small class="text-muted"
                                                >Bởi: Event Manager • 1 ngày trước</small
                                            >
                                        </div>
                                        <span class="badge bg-warning">Event</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h5><i class="bi bi-trophy"></i> Bảng xếp hạng cộng đồng</h5>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Người chơi</th>
                                                <th>Điểm</th>
                                                <th>Trận thắng</th>
                                                <th>Danh hiệu</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span class="badge bg-warning">1</span></td>
                                                <td>Champion_2024</td>
                                                <td>2850</td>
                                                <td>142</td>
                                                <td>
                                                    <i class="bi bi-trophy text-warning"></i> Vô
                                                    địch
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span class="badge bg-secondary">2</span></td>
                                                <td>Pro_Player</td>
                                                <td>2720</td>
                                                <td>135</td>
                                                <td>
                                                    <i class="bi bi-award text-secondary"></i> Á
                                                    quân
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span class="badge bg-bronze">3</span></td>
                                                <td>Rising_Star</td>
                                                <td>2580</td>
                                                <td>128</td>
                                                <td>
                                                    <i class="bi bi-star text-warning"></i> Hạng 3
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="card mb-4">
                            <div class="card-header">
                                <h5><i class="bi bi-person-plus"></i> Tham gia cộng đồng</h5>
                            </div>
                            <div class="card-body">
                                <p>
                                    Đăng ký để tham gia thảo luận và nhận thông báo về các sự kiện
                                    mới.
                                </p>
                                <button class="btn btn-success w-100 mb-2">
                                    <i class="bi bi-person-plus"></i> Đăng ký
                                </button>
                                <button class="btn btn-outline-primary w-100">
                                    <i class="bi bi-box-arrow-in-right"></i> Đăng nhập
                                </button>
                            </div>
                        </div>

                        <div class="card mb-4">
                            <div class="card-header">
                                <h5><i class="bi bi-calendar-event"></i> Sự kiện sắp tới</h5>
                            </div>
                            <div class="card-body">
                                <div class="event-item mb-3">
                                    <div class="d-flex align-items-center">
                                        <div class="event-date me-3 text-center">
                                            <div class="day">15</div>
                                            <div class="month">Th12</div>
                                        </div>
                                        <div>
                                            <h6 class="mb-1">Giải đấu cuối năm</h6>
                                            <small class="text-muted"
                                                >Giải đấu đặc biệt với phần thưởng lớn</small
                                            >
                                        </div>
                                    </div>
                                </div>

                                <div class="event-item mb-3">
                                    <div class="d-flex align-items-center">
                                        <div class="event-date me-3 text-center">
                                            <div class="day">20</div>
                                            <div class="month">Th12</div>
                                        </div>
                                        <div>
                                            <h6 class="mb-1">Workshop chiến thuật</h6>
                                            <small class="text-muted"
                                                >Học hỏi từ các chuyên gia</small
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h5><i class="bi bi-people-fill"></i> Thành viên online</h5>
                            </div>
                            <div class="card-body">
                                <div class="online-users">
                                    <div class="user-item d-flex align-items-center mb-2">
                                        <div class="user-avatar me-2">
                                            <i class="bi bi-person-circle text-primary"></i>
                                        </div>
                                        <div class="user-info">
                                            <small class="fw-bold">Admin</small>
                                            <div class="online-indicator"></div>
                                        </div>
                                    </div>
                                    <div class="user-item d-flex align-items-center mb-2">
                                        <div class="user-avatar me-2">
                                            <i class="bi bi-person-circle text-success"></i>
                                        </div>
                                        <div class="user-info">
                                            <small class="fw-bold">Moderator</small>
                                            <div class="online-indicator"></div>
                                        </div>
                                    </div>
                                    <div class="user-item d-flex align-items-center">
                                        <div class="user-avatar me-2">
                                            <i class="bi bi-person-circle text-info"></i>
                                        </div>
                                        <div class="user-info">
                                            <small class="fw-bold">Event Manager</small>
                                            <div class="online-indicator"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    // Component logic here
</script>

<style scoped>
    .discussion-item:hover {
        background-color: #f8f9fa;
        cursor: pointer;
    }

    .event-date {
        background: #007bff;
        color: white;
        border-radius: 8px;
        padding: 8px;
        min-width: 50px;
    }

    .event-date .day {
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1;
    }

    .event-date .month {
        font-size: 0.8rem;
        opacity: 0.9;
    }

    .user-avatar i {
        font-size: 1.5rem;
    }

    .online-indicator {
        width: 8px;
        height: 8px;
        background: #28a745;
        border-radius: 50%;
        margin-top: 2px;
    }

    .sidebar .card-header {
        background-color: #f8f9fa;
        border-bottom: 1px solid #dee2e6;
    }

    .sidebar .card-header h5 {
        margin: 0;
        color: #495057;
    }

    .sidebar .card-header h5 i {
        margin-right: 8px;
    }
</style>
