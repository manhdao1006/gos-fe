<template>
    <main
        class="home-container"
        style="background: linear-gradient(135deg, #000000 0%, #ff0000 100%)"
        role="main"
        aria-label="Trang chủ GOS Dream League Soccer"
    >
        <section class="hero-section w-100" aria-labelledby="hero-title">
            <div class="container-fluid">
                <div class="row justify-content-center flex-column flex-xl-row">
                    <div class="col-12 col-md-6 text-center order-1 order-md-1">
                        <LanguageSwitcher class="position-absolute top-0 end-0 m-3" />
                        <router-link
                            class="nav-link position-absolute top-0 start-0 m-3 bg-white text-uppercase text-black p-3 rounded fw-bolder"
                            to="/dang-ky-tai-khoan"
                            >{{ $t('HOME.JOIN_TOUR') }}</router-link
                        >
                        <header class="row mt-5">
                            <div class="col-12">
                                <h1 id="hero-title" class="text-uppercase fs-2 text-white fw-bold">
                                    GOS - DREAM LEAGUE SOCCER
                                </h1>
                                <time
                                    class="text-white fs-4 mt-3 mb-3 fw-bold d-block"
                                    datetime="2022-06-13"
                                    >13/06/2022</time
                                >
                                <p class="text-white fs-4 mt-3 mb-3">
                                    {{ $t('HOME.INTRO') }}
                                </p>
                                <p class="fst-italic text-white fw-bold fs-4">
                                    {{ $t('HOME.SLOGAN_GROUP') }}
                                </p>
                            </div>
                        </header>
                        <div class="row mt-3">
                            <div class="col-12 d-flex justify-content-center gap-4 fs-1">
                                <a
                                    class="text-white"
                                    href="https://www.facebook.com/groups/dls.gos.13062022.mlae"
                                    target="_blank"
                                    title="Facebook"
                                >
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                                <a
                                    class="text-white"
                                    href="https://www.tiktok.com/@grouponlinesport"
                                    target="_blank"
                                    title="Tiktok"
                                >
                                    <i class="fa-brands fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <footer class="text-start text-white py-3 copy-right-mobile">
                                © Copyright 2025 by GOS - Dream League Soccer
                            </footer>
                            <footer class="text-start text-white py-1">
                                Dev:
                                <a
                                    href="https://linktr.ee/manodev_306620"
                                    class="text-black"
                                    target="_blank"
                                    >Mạnh Đào</a
                                >
                            </footer>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 text-center order-2 order-md-2">
                        <div class="logo-container">
                            <div class="main-logo">
                                <a
                                    href="/"
                                    rel="noopener noreferrer"
                                    title="GOS - DREAM LEAGUE SOCCER"
                                >
                                    <img
                                        height="250px"
                                        width="250px"
                                        src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505199/logo-group_jz2ezw.jpg"
                                        alt="GOS"
                                        title="GOS"
                                    />
                                </a>
                            </div>

                            <div class="orbit-container">
                                <div
                                    v-for="(item, index) in menuItems"
                                    :key="index"
                                    class="menu-item"
                                    :style="getItemPosition(index)"
                                    @click="navigateToSection(item.route)"
                                >
                                    <div class="menu-item-content">
                                        <div class="inner-content">
                                            <img
                                                :src="item.image"
                                                :alt="item.title"
                                                :title="item.title"
                                                class="menu-bg-image"
                                            />
                                            <div class="menu-hover-content">
                                                <div class="menu-icon">
                                                    <i :class="item.icon"></i>
                                                </div>
                                                <div class="menu-text text-uppercase">
                                                    <p>{{ item.title }}</p>
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
        </section>
    </main>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    import LanguageSwitcher from './LanguageSwitcher.vue'

    const { t } = useI18n()

    const menuItems = computed(() => [
        {
            title: t('HOME.MENU.TOURNAMENT'),
            icon: 'bi bi-trophy',
            image: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753509756/logo-cup_a0op4f.jpg',
            route: '#tournaments'
        },
        {
            title: t('HOME.MENU.HISTORY'),
            icon: 'bi bi-clock-history',
            image: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753505170/bieu-tuong_n7zetw.jpg',
            route: '#history'
        },
        {
            title: t('HOME.MENU.GOLD_BOARD'),
            icon: 'bi bi-star-fill',
            image: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753510398/logo-bang-vang_ydkkb7.png',
            route: '#hall-of-fame'
        },
        {
            title: t('HOME.MENU.ADMINISTRATION'),
            icon: 'bi bi-people-fill',
            image: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753505185/logo-admin_fh2b4q.jpg',
            route: '#administration'
        },
        {
            title: t('HOME.MENU.TEAM'),
            icon: 'bi bi-shield-check',
            image: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753505200/logo-team_zzr4nj.jpg',
            route: '#teams'
        }
    ])

    const getItemPosition = (index: number) => {
        const width = window.innerWidth
        const isMobile = width <= 768
        const isTablet = width > 768 && width <= 1024

        let baseRadius = 200
        if (isMobile) baseRadius = 60
        if (isTablet) baseRadius = 130

        const offset = 25
        const radius = baseRadius + offset
        const angle = index * (360 / menuItems.value.length)

        return {
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            transformOrigin: 'center'
        }
    }

    const navigateToSection = (route: string) => {
        const routesMap: Record<string, string> = {
            '#tournaments': '/giai-dau',
            '#history': '/lich-su',
            '#hall-of-fame': '/bang-vang',
            '#administration': '/quan-tri',
            '#teams': '/doi-tuyen'
        }
        window.location.href = routesMap[route] || '/'
    }
</script>

<style scoped>
    .home-container {
        min-height: 100vh;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    .hero-section {
        position: relative;
        background-image: url('https://res.cloudinary.com/springboot-cloud/image/upload/v1753513401/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_llaqju.png');
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        color: white;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .logo-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .main-logo {
        position: relative;
        z-index: 20;
    }

    .main-logo img {
        border-radius: 50%;
        object-fit: cover;
        box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.2),
            0 0 20px rgba(102, 126, 234, 0.3);
    }

    .orbit-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: 400px;
        animation: orbit-rotate 40s linear infinite;
    }

    .inner-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: rotate(-0deg);
        transition: transform 0.3s ease;
    }

    .orbit-container .menu-item .inner-content {
        animation: counter-rotate 40s linear infinite;
    }

    @keyframes counter-rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
    }

    @keyframes orbit-rotate {
        from {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }

    .menu-item {
        cursor: pointer;
        position: absolute;
        transform-origin: center;
        transition: all 0.3s ease;
    }

    .menu-item-content {
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        width: 130px;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, -50%);
        transition: transform 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .menu-bg-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        transition:
            opacity 0.3s ease,
            transform 0.3s ease;
    }

    .menu-hover-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .menu-item-content:hover .menu-hover-content {
        opacity: 1;
    }

    .menu-item-content:hover .menu-bg-image {
        opacity: 0.3;
        transform: scale(1.1);
    }

    .menu-icon i {
        font-size: 2.5rem;
        color: red;
    }

    .menu-text p {
        margin: 0;
        font-weight: bold;
        font-size: 16px;
        color: #000000;
        white-space: nowrap;
        text-align: center;
    }

    @media (min-width: 1025px) {
        .hero-section .col-md-6:first-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .menu-bg-image {
            display: none !important;
        }

        .menu-hover-content {
            opacity: 1 !important;
            background: #ffffff !important;
            position: relative;
        }

        .menu-icon i {
            font-size: 1.4rem;
            color: red;
        }

        .menu-text p {
            font-size: 11px !important;
            color: #000000;
        }

        .hero-section,
        .container-fluid,
        .hero-section .row,
        .hero-section .col-12,
        .hero-section .col-md-6 {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        .hero-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 !important;
        }

        .hero-section .row {
            margin: 0 !important;
            padding: 0 !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .logo-container {
            width: 100% !important;
            height: 35vh;
        }

        .main-logo img {
            width: 140px;
            height: 140px;
        }

        .menu-item-content {
            width: 80px;
            height: 80px;
        }

        .col-12 .fs-2 {
            font-size: 2.4rem !important;
        }
        .col-12 .fs-4 {
            font-size: 1.4rem !important;
        }
        .col-12 .fs-5 {
            font-size: 1.2rem !important;
        }

        .copy-right-mobile {
            font-size: 14px;
        }

        .container-fluid,
        .row > [class*='col-'] {
            padding: 0 !important;
            margin: 0 !important;
        }

        .row footer {
            padding: 5px 0 !important;
            font-size: 18px;
            margin-left: 50px !important;
        }

        @keyframes rotate-mobile {
            from {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }
    }

    @media (max-width: 768px) {
        .menu-bg-image {
            display: none !important;
        }

        .menu-hover-content {
            opacity: 1 !important;
            background: #ffffff !important;
            position: relative;
        }

        .menu-icon i {
            font-size: 1.5rem;
            color: red;
        }

        .menu-text p {
            font-size: 7px !important;
            color: #000000;
        }

        .copy-right-mobile {
            font-size: 14px;
        }

        .logo-container {
            height: 20vh;
        }

        .hero-section .row {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
        }

        .row > [class*='col-'] {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
        }

        .row.mt-5,
        .row.mt-3 {
            margin-top: 0 !important;
        }

        .row footer {
            padding-top: 5px !important;
            padding-bottom: 5px !important;
        }

        .main-logo img {
            width: 100px;
            height: 100px;
        }

        .menu-item-content {
            width: 55px;
            height: 55px;
        }

        .menu-icon i {
            font-size: 1.2rem;
        }

        .menu-text p {
            font-size: 10px;
        }

        .col-6.text-center {
            padding: 0 15px;
        }

        .col-6 .fs-2 {
            font-size: 1.2rem !important;
        }
        .col-6 .fs-4 {
            font-size: 0.9rem !important;
        }
        .col-6 .fs-5 {
            font-size: 0.8rem !important;
        }

        .col-12 .fs-2 {
            font-size: 1rem !important;
        }
        .col-12 .fs-4 {
            font-size: 0.8rem !important;
        }
        .col-12 .fs-5 {
            font-size: 0.7rem !important;
        }

        .col-12 {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }

        @keyframes rotate-mobile {
            from {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }
    }
</style>
