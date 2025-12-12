<template>
    <div class="homepage">
        <UserHeader />

        <section class="hero-slider">
            <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div
                        class="carousel-item"
                        v-for="(slide, i) in slides"
                        :key="i"
                        :class="{ active: i === 0 }"
                    >
                        <div class="hero-img"><img :src="slide.img" alt="" /></div>
                        <div class="carousel-caption slider-caption">
                            <h1 class="fw-bold display-5 text-warning">{{ slide.title }}</h1>
                            <p class="text-white">{{ slide.desc }}</p>
                            <button class="btn btn-danger btn-lg fw-bold px-4 py-2">
                                Xem chi tiết
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon"></span>
                </button>

                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </section>

        <section class="py-5 bg-white text-white">
            <div class="container">
                <h2 class="text-center fw-bold mb-4 text-warning">Về Giải Đấu</h2>

                <div class="row">
                    <motion-div
                        class="col-md-4 mb-4"
                        v-for="(item, i) in intro"
                        :key="i"
                        v-motion
                        :initial="{ opacity: 0, scale: 0.8 }"
                        :in-view="{ opacity: 1, scale: 1 }"
                        :transition="{ duration: 0.6, delay: i * 0.15 }"
                    >
                        <div class="card intro-card h-100 p-3">
                            <h4 class="fw-bold text-danger mb-2">{{ item.title }}</h4>
                            <p class="text-light">{{ item.desc }}</p>
                        </div>
                    </motion-div>
                </div>
            </div>
        </section>

        <section class="py-5 bg-white text-white">
            <div class="container">
                <h2 class="text-center fw-bold mb-4 text-warning">Đội Tuyển Tham Gia</h2>

                <div class="row">
                    <motion-div
                        class="col-6 col-md-3 mb-4"
                        v-for="(team, i) in teams"
                        :key="i"
                        v-motion
                        :initial="{ opacity: 0, y: 50 }"
                        :in-view="{ opacity: 1, y: 0 }"
                        :transition="{ duration: 0.6, delay: i * 0.1 }"
                    >
                        <div class="team-card text-center">
                            <img :src="team.logo" class="team-logo mb-3" />
                            <h5 class="fw-bold text-white">{{ team.name }}</h5>
                        </div>
                    </motion-div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import UserHeader from '../../../components/common/user/UserHeader.vue'
    import Footer from '../../../components/Footer.vue'

    export default defineComponent({
        name: 'TrangChu',

        components: {
            UserHeader,
            Footer
        },

        data() {
            return {
                slides: [
                    {
                        img: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1765513586/banner-gos_mzzd7f.jpg',

                        title: 'Giải đấu bóng đá Esport lớn nhất 2025',
                        desc: 'Tranh tài – Bùng nổ – Đỉnh cao cảm xúc!'
                    },
                    {
                        img: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1765180048/gos/su-kien/GOS_-_Swiss_Stage_r5fmii.png',

                        title: 'Thi đấu chuyên nghiệp',
                        desc: 'Được tổ chức theo tiêu chuẩn thi đấu quốc tế.'
                    },
                    {
                        img: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753510398/logo-bang-vang_ydkkb7.png',
                        title: 'Giải thưởng hấp dẫn',
                        desc: 'Tổng giá trị giải thưởng trên 200 triệu đồng!'
                    }
                ],

                intro: [
                    { title: 'Giải thưởng lớn', desc: 'Tổng giải thưởng lên đến 200 triệu đồng.' },
                    {
                        title: 'Quy mô toàn quốc',
                        desc: 'Các đội mạnh nhất trên toàn quốc tham gia.'
                    },
                    {
                        title: 'Truyền hình trực tiếp',
                        desc: 'Livestream chất lượng cao, bình luận chuyên nghiệp.'
                    }
                ],

                teams: [
                    {
                        name: 'Phoenix FC',
                        logo: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753510398/logo-bang-vang_ydkkb7.png'
                    },
                    {
                        name: 'Dragon Elite',
                        logo: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753510398/logo-bang-vang_ydkkb7.png'
                    },
                    {
                        name: 'Thunder Wolves',
                        logo: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753510398/logo-bang-vang_ydkkb7.png'
                    },
                    {
                        name: 'Shadow Knights',
                        logo: 'https://res.cloudinary.com/springboot-cloud/image/upload/v1753510398/logo-bang-vang_ydkkb7.png'
                    }
                ]
            }
        }
    })
</script>

<style scoped>
    .hero-img {
        width: 100%;
        height: 80vh;
        opacity: 0.7;
    }
    .hero-img img {
        width: 100%;
        height: 100%;
    }

    .slider-caption {
        background: rgba(0, 0, 0, 0.55);
        padding: 20px 30px;
        border-radius: 10px;
        border: 2px solid #ffcc00;
    }

    .intro-card {
        background: #1a1a1a;
        border: 1px solid #333;
        transition: 0.3s;
    }
    .intro-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 0 15px #ff0000;
    }

    .team-card {
        background: #111;
        border-radius: 10px;
        border: 1px solid #444;
        padding: 20px;
        transition: 0.3s;
    }
    .team-card:hover {
        transform: scale(1.06);
        box-shadow: 0 0 15px #ff3333;
    }
    .team-logo {
        height: 80px;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        .hero-img {
            height: 60vh;
            background-size: contain;
            background-color: #000;
        }
        .slider-caption h1 {
            font-size: 1.7rem;
        }
    }

    @media (max-width: 576px) {
        .slider-caption {
            padding: 12px 15px;
        }
        .slider-caption h1 {
            font-size: 1.3rem;
        }
        .slider-caption p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        .hero-img {
            height: 45vh;
        }
    }
</style>
