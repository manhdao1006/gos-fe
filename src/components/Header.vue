<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger-subtle w-100">
        <div class="container-fluid">
            <router-link class="navbar-brand fw-bold text-black" to="/">
                <img
                    src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505199/logo-group_jz2ezw.jpg"
                    alt="GOS"
                />
                <span class="ms-3">GOS - Dream League Soccer</span>
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
    .container-fluid img {
        width: 100px; /* tùy chỉnh kích thước */
        height: 100px; /* đảm bảo hình vuông */
        object-fit: cover; /* giữ tỷ lệ ảnh */
        border-radius: 50%; /* bo tròn */
    }

    .nav-link {
        font-weight: 500;
        color: #000000;
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: red !important;
    }
</style>
