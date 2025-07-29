<template>
    <footer class="bg-dark text-light py-4 mt-5 w-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <router-link class="navbar-brand fw-bold text-white" to="/">
                        <img
                            src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505199/logo-group_jz2ezw.jpg"
                            alt="GOS"
                        />
                        <span class="ms-3">GOS - Dream League Soccer</span>
                    </router-link>
                    <div class="fst-italic text-white fw-bold fs-4">
                        "Kết sức mạnh, nối thành công"
                    </div>
                </div>
                <div class="col-6">
                    <h5>Theo dõi chúng tôi</h5>
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
                </div>
            </div>
            <hr class="my-4" />
            <footer class="text-center text-white py-3 copy-right-mobile">
                &copy; Copyright 2025 by GOS - Dream League Soccer
            </footer>
        </div>
    </footer>
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

    footer a:hover {
        color: #ffc107 !important;
    }
</style>
