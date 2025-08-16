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
                                src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505185/logo-admin_fh2b4q.jpg"
                                alt="Ban quản trị"
                                class="logo-admin img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-admin"
                                >Ban quản trị</span
                            >
                        </div>
                        <p class="lead description-admin">
                            Gặp gỡ đội ngũ quản trị tận tâm của GOS -DLS
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <Header />

        <div class="container-fluid py-5">
            <!-- Ban quản trị chính -->
            <section class="mb-3">
                <h2 class="text-center mb-4">Quản lý giải đấu</h2>
                <div class="row">
                    <div class="col-lg-4 mb-4 border border-1">
                        <div class="card admin-card h-100">
                            <div class="card-body text-center p-0">
                                <div class="admin-avatar">
                                    <img
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505185/logo-admin_fh2b4q.jpg"
                                        alt="Ban quản trị"
                                        class="logo-member-admin border border-3 border-success rounded-circle"
                                    />
                                </div>
                                <h4 class="mt-3">Lý Bình Nguyên</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-success">Trưởng Admin</span>
                                </h4>
                                <p class="text-muted fw-bolder">Admin League B</p>
                                <div class="admin-info text-start">
                                    <p>
                                        <strong>Nhiệm vụ:</strong> Quản lý nội dung, giải quyết xung
                                        đột, hỗ trợ thành viên
                                    </p>
                                    <p><strong>Ngày sinh:</strong> 02/01/2001</p>
                                    <p><strong>Tỉnh/Thành phố:</strong> Cần Thơ</p>
                                    <p><strong>CLB yêu thích:</strong> Manchester City</p>
                                    <p><strong>Slogan:</strong> "Cùng học hỏi, cùng phát triển"</p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/binh.nguyen.292454"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i> Liên hệ
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-4 border border-1">
                        <div class="card admin-card h-100">
                            <div class="card-body text-center p-0">
                                <div class="admin-avatar">
                                    <img
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505185/logo-admin_fh2b4q.jpg"
                                        alt="Ban quản trị"
                                        class="logo-member-admin border border-3 border-danger rounded-circle"
                                    />
                                </div>
                                <h4>Nguyễn Văn Thắng</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-danger">CEO</span>
                                </h4>
                                <p class="text-muted fw-bolder">Admin League A</p>
                                <div class="admin-info text-start">
                                    <p>
                                        <strong>Nhiệm vụ:</strong> Điều hành, quản lý và chịu trách
                                        nhiệm cho toàn bộ hoạt động nhóm
                                    </p>
                                    <p><strong>Ngày sinh:</strong> 02/09/1993</p>
                                    <p><strong>Tỉnh/Thành phố:</strong> Cần Thơ</p>
                                    <p><strong>CLB yêu thích:</strong> Real Madrid</p>
                                    <p>
                                        <strong>Slogan:</strong> "Giao lưu- chia sẻ - học hỏi - cùng
                                        phát triển"
                                    </p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/thang.nguyenvan.77985741"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i> Liên hệ
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-4 border border-1">
                        <div class="card admin-card h-100">
                            <div class="card-body text-center p-0">
                                <div class="admin-avatar">
                                    <img
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505185/logo-admin_fh2b4q.jpg"
                                        alt="Ban quản trị"
                                        class="logo-member-admin border border-3 border-warning rounded-circle"
                                    />
                                </div>
                                <h4>Phạm Đăng Thắng</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-warning">Tổ chức</span>
                                </h4>
                                <p class="text-muted fw-bolder">Admin League C</p>
                                <div class="admin-info text-start">
                                    <p>
                                        <strong>Nhiệm vụ:</strong> Tổ chức các sự kiện, giải đấu và
                                        hoạt động của Group
                                    </p>
                                    <p><strong>Ngày sinh:</strong> 07/09/2008</p>
                                    <p><strong>Tỉnh/Thành phố:</strong> Hà Nội</p>
                                    <p><strong>CLB yêu thích:</strong> Manchester United</p>
                                    <p><strong>Slogan:</strong> "Misanthrope"</p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/pdthg.48"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i> Liên hệ
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2 mb-4"></div>

                    <div class="col-lg-4 mb-4 border border-1">
                        <div class="card admin-card h-100">
                            <div class="card-body text-center p-0">
                                <div class="admin-avatar">
                                    <img
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505185/logo-admin_fh2b4q.jpg"
                                        alt="Ban quản trị"
                                        class="logo-member-admin border border-3 border-primary rounded-circle"
                                    />
                                </div>
                                <h4>Lý Thanh Hiền</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-primary">Ngoại giao</span>
                                </h4>
                                <p class="text-muted fw-bolder">Admin League D</p>
                                <div class="admin-info text-start">
                                    <p>
                                        <strong>Nhiệm vụ:</strong> Giao lưu, kết nối các thành viên
                                        trong Group và giữa các liên Group
                                    </p>
                                    <p><strong>Ngày sinh:</strong> 01/11/2004</p>
                                    <p><strong>Tỉnh/Thành phố:</strong> Cần Thơ</p>
                                    <p><strong>CLB yêu thích:</strong> Liverpool</p>
                                    <p><strong>Slogan:</strong> "Chỉ mình là đúng"</p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/thanh.hien.155432"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i> Liên hệ
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-4 border border-1">
                        <div class="card admin-card h-100">
                            <div class="card-body text-center p-0">
                                <div class="admin-avatar">
                                    <img
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505185/logo-admin_fh2b4q.jpg"
                                        alt="Ban quản trị"
                                        class="logo-member-admin border border-3 border-black rounded-circle"
                                    />
                                </div>
                                <h4>Đào Đức Mạnh</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-black">Kỹ thuật</span>
                                </h4>
                                <p class="text-muted fw-bolder">Admin</p>
                                <div class="admin-info text-start">
                                    <p><strong>Nhiệm vụ:</strong> Làm những gì có thể làm :)</p>
                                    <p><strong>Ngày sinh:</strong> 10/06/2003</p>
                                    <p><strong>Tỉnh/Thành phố:</strong> Quảng Trị</p>
                                    <p><strong>CLB yêu thích:</strong> Chelsea</p>
                                    <p><strong>Slogan:</strong> "50:50"</p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/maindao.302601"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i> Liên hệ
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 mb-4"></div>
                </div>
            </section>

            <!-- Nhà tài trợ -->
            <section class="mb-3">
                <h2 class="text-center mb-4">Nhà tài trợ</h2>
                <div class="row">
                    <div class="col-lg-1 mb-4"></div>
                    <div class="col-lg-4 mb-4 border border-1">
                        <div class="card admin-card h-100">
                            <div class="card-body text-center p-0">
                                <div class="admin-avatar">
                                    <img
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505185/logo-admin_fh2b4q.jpg"
                                        alt="Ban quản trị"
                                        class="logo-member-admin border border-3 border-warning rounded-circle"
                                    />
                                </div>
                                <h4>Nguyễn Văn Hoàng</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-warning">Thần tài</span>
                                </h4>
                                <div class="admin-info text-start">
                                    <p><strong>Ngày sinh:</strong> 15/06/1999</p>
                                    <p><strong>Tỉnh/Thành phố:</strong> Đà Nẵng</p>
                                    <p><strong>CLB yêu thích:</strong> Real Madrid</p>
                                    <p><strong>Slogan:</strong> "..."</p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/vanhoang2507"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i> Liên hệ
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-1 mb-4"></div>
                    <div class="col-lg-1 mb-4"></div>

                    <div class="col-lg-4 mb-4 border border-1">
                        <div class="card admin-card h-100">
                            <div class="card-body text-center p-0">
                                <div class="admin-avatar">
                                    <img
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505185/logo-admin_fh2b4q.jpg"
                                        alt="Ban quản trị"
                                        class="logo-member-admin border border-3 border-warning rounded-circle"
                                    />
                                </div>
                                <h4>Đoàn Long</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-warning">Thần tài</span>
                                </h4>
                                <div class="admin-info text-start">
                                    <p><strong>Ngày sinh:</strong> 20/06/2000</p>
                                    <p><strong>Tỉnh/Thành phố:</strong> Hồ Chí Minh</p>
                                    <p><strong>CLB yêu thích:</strong> Fan A7 - Pepe</p>
                                    <p><strong>Slogan:</strong> "Long Lạc Quan"</p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/oannlongg"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i> Liên hệ
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1 mb-4"></div>
                </div>
            </section>

            <!-- Đội ngũ hỗ trợ -->
            <section class="mb-3">
                <h2 class="text-center mb-4"><i class="bi bi-headset"></i> Đội ngũ hỗ trợ</h2>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-black text-white text-capitalize">
                                <h5 class="mb-0">
                                    <i class="bi bi-shield-check"></i> Team bảo mật
                                </h5>
                            </div>
                            <div class="card-body">
                                <div>
                                    <p class="text-muted mb-2 text-start">
                                        Đảm bảo an toàn cho Group và Website, phát hiện và xử lý vi
                                        phạm
                                    </p>
                                    <div class="skills text-center">
                                        <p class="badge bg-danger">Lý Bình Nguyên</p>
                                        <p class="badge bg-danger">Phạm Đăng Thắng</p>
                                        <p class="badge bg-danger">Đào Đức Mạnh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-black text-white text-capitalize">
                                <h5 class="mb-0"><i class="bi bi-chat-dots"></i> Team cộng đồng</h5>
                            </div>
                            <div class="card-body">
                                <div>
                                    <p class="text-muted mb-2 text-start">
                                        Hỗ trợ thành viên mới, trả lời câu hỏi, hướng dẫn và ngoại
                                        giao
                                    </p>
                                    <div class="skills text-center">
                                        <p class="badge bg-danger">Nguyễn Văn Thắng</p>
                                        <p class="badge bg-danger">Lý Bình Nguyên</p>
                                        <p class="badge bg-danger">Lý Thanh Hiền</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-black text-white text-capitalize">
                                <h5 class="mb-0"><i class="bi bi-chat-dots"></i> Team nội dung</h5>
                            </div>
                            <div class="card-body">
                                <div>
                                    <p class="text-muted mb-2 text-start">
                                        Tạo nội dung, hướng dẫn và video cho Group
                                    </p>
                                    <div class="skills text-center">
                                        <p class="badge bg-danger">Nguyễn Văn Thắng</p>
                                        <p class="badge bg-danger">Lý Bình Nguyên</p>
                                        <p class="badge bg-danger">Phạm Đăng Thắng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-black text-white text-capitalize">
                                <h5 class="mb-0">
                                    <i class="bi bi-person-circle"></i> Team nhân sự
                                </h5>
                            </div>
                            <div class="card-body">
                                <div>
                                    <p class="text-muted mb-2 text-start">
                                        Đăng tuyển, quản lý và phân chia nhân sự, thành viên tham
                                        gia giải đấu
                                    </p>
                                    <div class="skills text-center">
                                        <p class="badge bg-danger">Nguyễn Văn Thắng</p>
                                        <p class="badge bg-danger">Lý Bình Nguyên</p>
                                        <p class="badge bg-danger">Phạm Đăng Thắng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Quy trình làm việc -->
            <section class="mb-3">
                <h2 class="text-center mb-4"><i class="bi bi-diagram-3"></i> Quy trình làm việc</h2>
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="workflow">
                            <div class="workflow-step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h5>Tiếp nhận yêu cầu</h5>
                                    <p>Thành viên gửi yêu cầu hỗ trợ hoặc báo cáo vấn đề</p>
                                </div>
                            </div>
                            <div class="workflow-step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h5>Phân loại và phân công</h5>
                                    <p>
                                        Admin phân loại yêu cầu và phân công cho thành viên phù hợp
                                    </p>
                                </div>
                            </div>
                            <div class="workflow-step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h5>Xử lý và giải quyết</h5>
                                    <p>Đội ngũ hỗ trợ xử lý và giải quyết vấn đề</p>
                                </div>
                            </div>
                            <div class="workflow-step">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <h5>Phản hồi và theo dõi</h5>
                                    <p>
                                        Phản hồi kết quả và theo dõi để đảm bảo vấn đề được giải
                                        quyết
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Thống kê hoạt động -->
            <section>
                <h2 class="text-center mb-4"><i class="bi bi-graph-up"></i> Thống kê hoạt động</h2>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-clock text-warning display-4"></i>
                                <h3 class="mt-3">2h</h3>
                                <p class="text-muted">Thời gian phản hồi trung bình</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-check-circle text-success display-4"></i>
                                <h3 class="mt-3">98%</h3>
                                <p class="text-muted">Tỷ lệ giải quyết thành công</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-emoji-smile text-info display-4"></i>
                                <h3 class="mt-3">95%</h3>
                                <p class="text-muted">Độ hài lòng của thành viên</p>
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
    // Component logic here
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

    .skills .badge {
        margin-right: 5px;
        margin-bottom: 5px;
    }

    .workflow {
        position: relative;
    }

    .workflow::before {
        content: '';
        position: absolute;
        left: 30px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: #dee2e6;
    }

    .workflow-step {
        position: relative;
        display: flex;
        align-items: flex-start;
        margin-bottom: 30px;
        padding-left: 60px;
    }

    .step-number {
        position: absolute;
        left: 20px;
        top: 0;
        width: 20px;
        height: 20px;
        background: #007bff;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.8rem;
    }

    .step-content {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        flex: 1;
    }

    .step-content h5 {
        color: #007bff;
        margin-bottom: 10px;
    }

    .step-content p {
        margin: 0;
        color: #6c757d;
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
