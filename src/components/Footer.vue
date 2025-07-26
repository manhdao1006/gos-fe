<template>
    <footer class="bg-dark text-light py-4 mt-5 w-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <h5>DLS Blog</h5>
                    <p class="text-muted">
                        Cộng đồng chia sẻ kinh nghiệm và tài nguyên cho game Dream League Soccer
                    </p>
                </div>
                <div class="col-md-4">
                    <h5>Liên kết nhanh</h5>
                    <ul class="list-unstyled">
                        <li>
                            <router-link to="/guides" class="text-muted text-decoration-none"
                                >Hướng dẫn</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/community" class="text-muted text-decoration-none"
                                >Cộng đồng</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/resources" class="text-muted text-decoration-none"
                                >Tài nguyên</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/contact" class="text-muted text-decoration-none"
                                >Liên hệ</router-link
                            >
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Theo dõi chúng tôi</h5>
                    <div class="d-flex gap-3">
                        <a href="#" class="text-muted text-decoration-none">
                            <i class="bi bi-facebook fs-4"></i>
                        </a>
                        <a href="#" class="text-muted text-decoration-none">
                            <i class="bi bi-youtube fs-4"></i>
                        </a>
                        <a href="#" class="text-muted text-decoration-none">
                            <i class="bi bi-discord fs-4"></i>
                        </a>
                    </div>
                </div>
            </div>
            <hr class="my-4" />
            <div class="text-center text-muted">
                <small>&copy; 2024 DLS Blog. Tất cả quyền được bảo lưu.</small>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
    // Component logic here
</script>

<style scoped>
    footer a:hover {
        color: #ffc107 !important;
    }
</style>
