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
                                src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505185/logo-admin_fh2b4q.jpg"
                                :alt="$t('ADMIN.HEADER')"
                                :title="$t('ADMIN.HEADER')"
                                class="logo-admin img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-admin">
                                {{ $t('ADMIN.HEADER') }}
                            </span>
                        </div>
                        <p class="lead description-admin">
                            {{ $t('ADMIN.SUB_HEADER') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <Header />

        <div class="container-fluid py-5">
            <section class="mb-3">
                <h2 class="text-center mb-4">
                    <i class="bi bi-hourglass-split"></i> {{ $t('ADMIN.MANAGEMENT.TITLE.ADMIN') }}
                </h2>
                <div class="row">
                    <div class="col-lg-4 mb-4 border border-1">
                        <div class="card admin-card h-100">
                            <div class="card-body text-center p-0">
                                <div class="admin-avatar">
                                    <img
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1755841901/admin-nguyen-thang_ykuocr.jpg"
                                        alt="Nguyễn Văn Thắng"
                                        title="Nguyễn Văn Thắng"
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
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.MISSON') }}:</strong>
                                        {{ $t('ADMIN.MANAGEMENT.MISSON.NGUYEN_THANG') }}
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.DOB') }}:</strong>
                                        02/09/1993
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.ADDRESS') }}:</strong>
                                        Cần Thơ
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.FAVOR') }}:</strong>
                                        Real Madrid
                                    </p>
                                    <p>
                                        <strong>Slogan:</strong> "{{
                                            $t('ADMIN.MANAGEMENT.SLOGAN.NGUYEN_THANG')
                                        }}"
                                    </p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/thang.nguyenvan.77985741"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i>
                                            {{ $t('ADMIN.MANAGEMENT.TITLE.CONTACT') }}
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
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1755846190/admin-binh-nguyen_lvkf3n.jpg"
                                        alt="Lý Bình Nguyên"
                                        title="Lý Bình Nguyên"
                                        class="logo-member-admin border border-3 border-success rounded-circle"
                                    />
                                </div>
                                <h4>Lý Bình Nguyên</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-success">{{
                                        $t('ADMIN.MANAGEMENT.POSITION.ADMIN')
                                    }}</span>
                                </h4>
                                <p class="text-muted fw-bolder">Admin League B</p>
                                <div class="admin-info text-start">
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.MISSON') }}:</strong>
                                        {{ $t('ADMIN.MANAGEMENT.MISSON.BINH_NGUYEN') }}
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.DOB') }}:</strong>
                                        02/01/2001
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.ADDRESS') }}:</strong>
                                        Cần Thơ
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.FAVOR') }}:</strong>
                                        Manchester City
                                    </p>
                                    <p>
                                        <strong>Slogan:</strong> "{{
                                            $t('ADMIN.MANAGEMENT.SLOGAN.BINH_NGUYEN')
                                        }}"
                                    </p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/binh.nguyen.292454"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i>
                                            {{ $t('ADMIN.MANAGEMENT.TITLE.CONTACT') }}
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
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1755843559/admin-pham-dang-thang_n4jvqx.jpg"
                                        alt="Phạm Đăng Thắng"
                                        title="Phạm Đăng Thắng"
                                        class="logo-member-admin border border-3 border-warning rounded-circle"
                                    />
                                </div>
                                <h4>Phạm Đăng Thắng</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-warning">{{
                                        $t('ADMIN.MANAGEMENT.POSITION.ADMIN')
                                    }}</span>
                                </h4>
                                <p class="text-muted fw-bolder">Admin League C</p>
                                <div class="admin-info text-start">
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.MISSON') }}:</strong>
                                        {{ $t('ADMIN.MANAGEMENT.MISSON.PHAM_THANG') }}
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.DOB') }}:</strong>
                                        07/09/2008
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.ADDRESS') }}:</strong>
                                        Hà Nội
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.FAVOR') }}:</strong>
                                        Manchester United
                                    </p>
                                    <p><strong>Slogan:</strong> "Misanthrope"</p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/pdthg.48"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i>
                                            {{ $t('ADMIN.MANAGEMENT.TITLE.CONTACT') }}
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 mb-4 border border-1">
                        <div class="card admin-card h-100">
                            <div class="card-body text-center p-0">
                                <div class="admin-avatar">
                                    <img
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1755841901/admin-thanh-hien_ddj2so.jpg"
                                        alt="Lý Thanh Hiền"
                                        title="Lý Thanh Hiền"
                                        class="logo-member-admin border border-3 border-primary rounded-circle"
                                    />
                                </div>
                                <h4>Lý Thanh Hiền</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-primary">{{
                                        $t('ADMIN.MANAGEMENT.POSITION.ADMIN')
                                    }}</span>
                                </h4>
                                <p class="text-muted fw-bolder">Admin League D</p>
                                <div class="admin-info text-start">
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.MISSON') }}:</strong>
                                        {{ $t('ADMIN.MANAGEMENT.MISSON.THANH_HIEN') }}
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.DOB') }}:</strong>
                                        01/11/2004
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.ADDRESS') }}:</strong>
                                        Cần Thơ
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.FAVOR') }}:</strong>
                                        Liverpool
                                    </p>
                                    <p>
                                        <strong>Slogan:</strong> "{{
                                            $t('ADMIN.MANAGEMENT.SLOGAN.THANH_HIEN')
                                        }}"
                                    </p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/thanh.hien.155432"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i>
                                            {{ $t('ADMIN.MANAGEMENT.TITLE.CONTACT') }}
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
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1762870792/ad-le-quang-minh_wq1x3j.jpg"
                                        alt="Lê Quang Minh"
                                        title="Lê Quang Minh"
                                        class="logo-member-admin border border-3 border-info rounded-circle"
                                    />
                                </div>
                                <h4>Lê Quang Minh</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-info">{{
                                        $t('ADMIN.MANAGEMENT.POSITION.ADMIN')
                                    }}</span>
                                </h4>
                                <p class="text-muted fw-bolder">Admin League D</p>
                                <div class="admin-info text-start">
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.MISSON') }}:</strong>
                                        {{ $t('ADMIN.MANAGEMENT.MISSON.QUANG_MINH') }}
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.DOB') }}:</strong>
                                        13/11/2008
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.ADDRESS') }}:</strong>
                                        Hà Nội
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.FAVOR') }}:</strong>
                                        Arsenal
                                    </p>
                                    <p>
                                        <strong>Slogan:</strong> "{{
                                            $t('ADMIN.MANAGEMENT.SLOGAN.QUANG_MINH')
                                        }}"
                                    </p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/minh.lecong.391082"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i>
                                            {{ $t('ADMIN.MANAGEMENT.TITLE.CONTACT') }}
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
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1755841901/admin-manh-dao_fgew6w.jpg"
                                        alt="Đào Đức Mạnh"
                                        title="Đào Đức Mạnh"
                                        class="logo-member-admin border border-3 border-black rounded-circle"
                                    />
                                </div>
                                <h4>Đào Đức Mạnh</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-black">{{
                                        $t('ADMIN.MANAGEMENT.POSITION.TECH')
                                    }}</span>
                                </h4>
                                <p class="text-muted fw-bolder">Admin</p>
                                <div class="admin-info text-start">
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.MISSON') }}:</strong>
                                        {{ $t('ADMIN.MANAGEMENT.MISSON.MANH_DAO') }}
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.DOB') }}:</strong>
                                        10/06/2003
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.ADDRESS') }}:</strong>
                                        Quảng Trị
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.FAVOR') }}:</strong>
                                        Chelsea
                                    </p>
                                    <p><strong>Slogan:</strong> "50:50"</p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/maindao.302601"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i>
                                            {{ $t('ADMIN.MANAGEMENT.TITLE.CONTACT') }}
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-3">
                <h2 class="text-center mb-4">
                    <i class="bi bi-wallet2"></i> {{ $t('ADMIN.MANAGEMENT.TITLE.SPONSOR') }}
                </h2>
                <div class="row">
                    <div class="col-lg-1 mb-4"></div>
                    <div class="col-lg-4 mb-4 border border-1">
                        <div class="card admin-card h-100">
                            <div class="card-body text-center p-0">
                                <div class="admin-avatar">
                                    <img
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1755841901/admin-nguyen-van-hoang_peaaom.jpg"
                                        alt="Nguyễn Văn Hoàng"
                                        title="Nguyễn Văn Hoàng"
                                        class="logo-member-admin border border-3 border-warning rounded-circle"
                                    />
                                </div>
                                <h4>Nguyễn Văn Hoàng</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-warning">{{
                                        $t('ADMIN.MANAGEMENT.POSITION.FINANCE')
                                    }}</span>
                                </h4>
                                <div class="admin-info text-start">
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.DOB') }}:</strong>
                                        15/06/1999
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.ADDRESS') }}:</strong>
                                        Đà Nẵng
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.FAVOR') }}:</strong>
                                        Real Madrid - Fan A7
                                    </p>
                                    <p>
                                        <strong>Slogan:</strong> "{{
                                            $t('ADMIN.MANAGEMENT.SLOGAN.VAN_HOANG')
                                        }}"
                                    </p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/vanhoang2507"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i>
                                            {{ $t('ADMIN.MANAGEMENT.TITLE.CONTACT') }}
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
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1755841902/admin-doan-long_ciszqw.jpg"
                                        alt="Đoàn Long"
                                        title="Đoàn Long"
                                        class="logo-member-admin border border-3 border-warning rounded-circle"
                                    />
                                </div>
                                <h4>Đoàn Long</h4>
                                <h4 class="mt-3">
                                    <span class="badge bg-warning">{{
                                        $t('ADMIN.MANAGEMENT.POSITION.FINANCE')
                                    }}</span>
                                </h4>
                                <div class="admin-info text-start">
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.DOB') }}:</strong>
                                        20/06/2000
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.ADDRESS') }}:</strong>
                                        Hồ Chí Minh
                                    </p>
                                    <p>
                                        <strong>{{ $t('ADMIN.MANAGEMENT.TITLE.FAVOR') }}:</strong>
                                        Fan A7 - Pepe
                                    </p>
                                    <p>
                                        <strong>Slogan:</strong> "{{
                                            $t('ADMIN.MANAGEMENT.SLOGAN.DOAN_LONG')
                                        }}"
                                    </p>
                                </div>
                                <div class="contact-info mt-3">
                                    <button class="btn btn-danger btn-sm me-2">
                                        <a
                                            href="https://www.facebook.com/oannlongg"
                                            class="text-white"
                                            target="_blank"
                                        >
                                            <i class="bi bi-envelope"></i>
                                            {{ $t('ADMIN.MANAGEMENT.TITLE.CONTACT') }}
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1 mb-4"></div>
                </div>
            </section>

            <section class="mb-3">
                <h2 class="text-center mb-4">
                    <i class="bi bi-headset"></i> {{ $t('ADMIN.SUPPORT.TITLE') }}
                </h2>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-header bg-black text-white text-capitalize">
                                <h5 class="mb-0">
                                    <i class="bi bi-shield-check"></i>
                                    {{ $t('ADMIN.SUPPORT.TEAM.HUMAN.TITLE') }}
                                </h5>
                            </div>
                            <div class="card-body">
                                <div>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.HUMAN.FIRST_CONTENT') }}
                                    </p>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.HUMAN.SECOND_CONTENT') }}
                                    </p>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.HUMAN.THIRD_CONTENT') }}
                                    </p>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.HUMAN.FOURTH_CONTENT') }}
                                    </p>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.HUMAN.FIFTH_CONTENT') }}
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
                        <div class="card h-100">
                            <div class="card-header bg-black text-white text-capitalize">
                                <h5 class="mb-0">
                                    <i class="bi bi-chat-dots"></i>
                                    {{ $t('ADMIN.SUPPORT.TEAM.EXECUTIVE.TITLE') }}
                                </h5>
                            </div>
                            <div class="card-body">
                                <div>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.EXECUTIVE.FIRST_CONTENT') }}
                                    </p>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.EXECUTIVE.SECOND_CONTENT') }}
                                    </p>
                                    <div class="skills text-center">
                                        <p class="badge bg-danger">Nguyễn Văn Thắng</p>
                                        <p class="badge bg-danger">Lý Bình Nguyên</p>
                                        <p class="badge bg-danger">Phạm Đăng Thắng</p>
                                        <p class="badge bg-danger">Lý Thanh Hiền</p>
                                        <p class="badge bg-danger">Lê Quang Minh</p>
                                        <p class="badge bg-danger">Mạnh Đào</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-header bg-black text-white text-capitalize">
                                <h5 class="mb-0">
                                    <i class="bi bi-chat-dots"></i>
                                    {{ $t('ADMIN.SUPPORT.TEAM.MEDIA.TITLE') }}
                                </h5>
                            </div>
                            <div class="card-body">
                                <div>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.MEDIA.FIRST_CONTENT') }}
                                    </p>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.MEDIA.SECOND_CONTENT') }}
                                    </p>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.MEDIA.THIRD_CONTENT') }}
                                    </p>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.MEDIA.FOURTH_CONTENT') }}
                                    </p>
                                    <div class="skills text-center">
                                        <p class="badge bg-danger">Lý Bình Nguyên</p>
                                        <p class="badge bg-danger">Phạm Đăng Thắng</p>
                                        <p class="badge bg-danger">Mạnh Đào</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-header bg-black text-white text-capitalize">
                                <h5 class="mb-0">
                                    <i class="bi bi-person-circle"></i>
                                    {{ $t('ADMIN.SUPPORT.TEAM.FINANCE.TITLE') }}
                                </h5>
                            </div>
                            <div class="card-body">
                                <div>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.FINANCE.FIRST_CONTENT') }}
                                    </p>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.FINANCE.SECOND_CONTENT') }}
                                    </p>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.FINANCE.THIRD_CONTENT') }}
                                    </p>
                                    <div class="skills text-center">
                                        <p class="badge bg-danger">Nguyễn Văn Hoàng</p>
                                        <p class="badge bg-danger">Đoàn Long</p>
                                        <p class="badge bg-danger">Nguyễn Văn Thắng</p>
                                        <p class="badge bg-danger">Lý Bình Nguyên</p>
                                        <p class="badge bg-danger">Phạm Đăng Thắng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-header bg-black text-white text-capitalize">
                                <h5 class="mb-0">
                                    <i class="bi bi-person-circle"></i>
                                    {{ $t('ADMIN.SUPPORT.TEAM.IT.TITLE') }}
                                </h5>
                            </div>
                            <div class="card-body">
                                <div>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.IT.FIRST_CONTENT') }}
                                    </p>
                                    <div class="skills text-center">
                                        <p class="badge bg-danger">Mạnh Đào</p>
                                        <p class="badge bg-danger">Nguyễn Văn Hoàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-header bg-black text-white text-capitalize">
                                <h5 class="mb-0">
                                    <i class="bi bi-person-circle"></i>
                                    {{ $t('ADMIN.SUPPORT.TEAM.LEGAL.TITLE') }}
                                </h5>
                            </div>
                            <div class="card-body">
                                <div>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.LEGAL.FIRST_CONTENT') }}
                                    </p>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.LEGAL.SECOND_CONTENT') }}
                                    </p>
                                    <p class="text-muted mb-2 text-start">
                                        {{ $t('ADMIN.SUPPORT.TEAM.LEGAL.THIRD_CONTENT') }}
                                    </p>
                                    <div class="skills text-center">
                                        <p class="badge bg-danger">Nguyễn Văn Thắng</p>
                                        <p class="badge bg-danger">Lý Bình Nguyên</p>
                                        <p class="badge bg-danger">Phạm Đăng Thắng</p>
                                        <p class="badge bg-danger">Lý Thanh Hiền</p>
                                        <p class="badge bg-danger">Lê Quang Minh</p>
                                        <p class="badge bg-danger">Mạnh Đào</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-3">
                <h2 class="text-center mb-4">
                    <i class="bi bi-diagram-3"></i> {{ $t('ADMIN.WORKING.TITLE') }}
                </h2>
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="workflow">
                            <div class="workflow-step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h5>{{ $t('ADMIN.WORKING.FIRST_STEP.TITLE') }}</h5>
                                    <p>{{ $t('ADMIN.WORKING.FIRST_STEP.CONTENT') }}</p>
                                </div>
                            </div>
                            <div class="workflow-step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h5>{{ $t('ADMIN.WORKING.SECOND_STEP.TITLE') }}</h5>
                                    <p>{{ $t('ADMIN.WORKING.SECOND_STEP.CONTENT') }}</p>
                                </div>
                            </div>
                            <div class="workflow-step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h5>{{ $t('ADMIN.WORKING.THIRD_STEP.TITLE') }}</h5>
                                    <p>{{ $t('ADMIN.WORKING.THIRD_STEP.CONTENT') }}</p>
                                </div>
                            </div>
                            <div class="workflow-step">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <h5>{{ $t('ADMIN.WORKING.FOURTH_STEP.TITLE') }}</h5>
                                    <p>{{ $t('ADMIN.WORKING.FOURTH_STEP.CONTENT') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 class="text-center mb-4">
                    <i class="bi bi-graph-up"></i> {{ $t('ADMIN.STATISTICS.TITLE') }}
                </h2>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-clock text-warning display-4"></i>
                                <h3 class="mt-3">2h</h3>
                                <p class="text-muted">{{ $t('ADMIN.STATISTICS.TIME') }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-check-circle text-success display-4"></i>
                                <h3 class="mt-3">98%</h3>
                                <p class="text-muted">{{ $t('ADMIN.STATISTICS.SUCCESS') }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="bi bi-emoji-smile text-info display-4"></i>
                                <h3 class="mt-3">95%</h3>
                                <p class="text-muted">{{ $t('ADMIN.STATISTICS.SATISFIED') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <Footer />
    </div>

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
    import { ref } from 'vue'
    import Footer from '../components/Footer.vue'
    import Header from '../components/Header.vue'

    const showScrollTop = ref(true)

    const scrollToTop = () => {
        const el = document.getElementById('all-page')
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
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
