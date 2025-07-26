<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary w-100">
        <div class="container-fluid">
            <router-link class="navbar-brand fw-bold" to="/">
                <i class="bi bi-controller me-2"></i>
                DLS Blog
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
                        <router-link class="nav-link" to="/guides">Hướng dẫn</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/community">Cộng đồng</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/resources">Tài nguyên</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Liên hệ</router-link>
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
    .navbar-brand {
        font-size: 1.5rem;
    }

    .nav-link {
        font-weight: 500;
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: #ffc107 !important;
    }
</style>
