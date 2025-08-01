<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger-subtle w-100">
        <div class="container-fluid">
            <router-link class="navbar-brand fw-bold text-black d-flex align-items-center" to="/">
                <img
                    src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505199/logo-group_jz2ezw.jpg"
                    alt="GOS"
                    class="logo-navbar"
                />
                <span class="ms-3 brand-title">GOS - Dream League Soccer</span>
            </router-link>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Trang chủ</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/lich-su">Lịch sử</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/bang-vang">Bảng vàng</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/gia-dau">Giải đấu</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/quan-tri">Quản trị</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/doi-tuyen">Đội tuyển</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    // Component logic here
</script>

<style scoped>
    .logo-navbar {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
    }

    /* Tên thương hiệu */
    .brand-title {
        font-size: 1.2rem;
    }

    /* Link trong nav */
    .nav-link {
        font-weight: 500;
        color: #000000;
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: red !important;
    }

    /* Mobile: ≤768px */
    @media (max-width: 768px) {
        .logo-navbar {
            width: 50px;
            height: 50px;
        }

        .brand-title {
            font-size: 1rem;
        }

        .nav-link {
            font-size: 0.9rem;
        }
    }

    /* Tablet: 769px–1024px */
    @media (min-width: 769px) and (max-width: 1024px) {
        .logo-navbar {
            width: 70px;
            height: 70px;
        }

        .brand-title {
            font-size: 1.3rem;
        }

        .nav-link {
            font-size: 1rem;
        }
    }

    /* Desktop: ≥1025px */
    @media (min-width: 1025px) {
        .logo-navbar {
            width: 100px;
            height: 100px;
        }

        .brand-title {
            font-size: 1.5rem;
        }

        .nav-link {
            font-size: 1.05rem;
        }
    }
</style>
