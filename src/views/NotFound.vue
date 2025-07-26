<template>
    <div class="not-found-page">
        <div class="container-fluid py-5">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center">
                    <div class="error-content">
                        <i class="bi bi-exclamation-triangle display-1 text-warning mb-4"></i>
                        <h1 class="display-4 mb-4">404</h1>
                        <h2 class="mb-4">Trang không tồn tại</h2>
                        <p class="lead mb-4">
                            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
                        </p>
                        <div class="d-flex justify-content-center gap-3">
                            <router-link to="/" class="btn btn-primary">
                                <i class="bi bi-house"></i> Về trang chủ
                            </router-link>
                            <button @click="goBack" class="btn btn-outline-secondary">
                                <i class="bi bi-arrow-left"></i> Quay lại
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const goBack = () => {
        router.go(-1)
    }
</script>

<style scoped>
    .not-found-page {
        min-height: 60vh;
        display: flex;
        align-items: center;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .error-content {
        padding: 40px;
        background: #f8f9fa;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
</style>
