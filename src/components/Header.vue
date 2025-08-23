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
                        <router-link class="nav-link" to="/">{{
                            $t('HEADER.HOMEPAGE')
                        }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/lich-su">{{
                            $t('HEADER.HISTORY')
                        }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/bang-vang">{{
                            $t('HEADER.GOLD_BOARD')
                        }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/giai-dau">{{
                            $t('HEADER.TOURNAMENT')
                        }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/quan-tri">{{
                            $t('HEADER.ADMINISTRATION')
                        }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/doi-tuyen">{{
                            $t('HEADER.TEAM')
                        }}</router-link>
                    </li>
                    <li class="nav-item mx-auto">
                        <LanguageSwitcher />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    import LanguageSwitcher from '../views/LanguageSwitcher.vue'
</script>

<style scoped>
    .logo-navbar {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
    }

    .brand-title {
        font-size: 1.2rem;
    }

    .nav-link {
        font-weight: 500;
        color: #000000;
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: red !important;
    }

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
