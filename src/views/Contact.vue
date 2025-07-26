<template>
    <div class="contact-page">
        <div class="hero-section bg-info text-white py-5 w-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1><i class="bi bi-envelope"></i> Liên hệ với chúng tôi</h1>
                        <p class="lead">Có câu hỏi hoặc góp ý? Hãy liên hệ với đội ngũ DLS Blog</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid py-5">
            <div class="row">
                <div class="col-lg-8">
                    <div class="contact-form">
                        <div class="card">
                            <div class="card-header">
                                <h5><i class="bi bi-chat-dots"></i> Gửi tin nhắn</h5>
                            </div>
                            <div class="card-body">
                                <form @submit.prevent="submitForm">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="firstName" class="form-label"
                                                >Họ và tên *</label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="firstName"
                                                v-model="form.firstName"
                                                required
                                            />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="email" class="form-label">Email *</label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="email"
                                                v-model="form.email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label for="subject" class="form-label">Chủ đề *</label>
                                        <select
                                            class="form-select"
                                            id="subject"
                                            v-model="form.subject"
                                            required
                                        >
                                            <option value="">Chọn chủ đề</option>
                                            <option value="general">Câu hỏi chung</option>
                                            <option value="technical">Hỗ trợ kỹ thuật</option>
                                            <option value="suggestion">Góp ý</option>
                                            <option value="partnership">Hợp tác</option>
                                            <option value="other">Khác</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="message" class="form-label"
                                            >Nội dung tin nhắn *</label
                                        >
                                        <textarea
                                            class="form-control"
                                            id="message"
                                            rows="5"
                                            v-model="form.message"
                                            placeholder="Nhập nội dung tin nhắn của bạn..."
                                            required
                                        ></textarea>
                                    </div>

                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="newsletter"
                                                v-model="form.newsletter"
                                            />
                                            <label class="form-check-label" for="newsletter">
                                                Đăng ký nhận thông báo về tin tức và sự kiện mới
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                        :disabled="isSubmitting"
                                    >
                                        <i class="bi bi-send" v-if="!isSubmitting"></i>
                                        <span v-if="isSubmitting">Đang gửi...</span>
                                        <span v-else>Gửi tin nhắn</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="contact-info">
                        <div class="card mb-4">
                            <div class="card-header">
                                <h5><i class="bi bi-info-circle"></i> Thông tin liên hệ</h5>
                            </div>
                            <div class="card-body">
                                <div class="contact-item mb-3">
                                    <div class="d-flex align-items-center">
                                        <i class="bi bi-envelope text-primary me-3"></i>
                                        <div>
                                            <strong>Email</strong>
                                            <div>contact@dlsblog.com</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="contact-item mb-3">
                                    <div class="d-flex align-items-center">
                                        <i class="bi bi-clock text-success me-3"></i>
                                        <div>
                                            <strong>Thời gian làm việc</strong>
                                            <div>Thứ 2 - Thứ 6: 8:00 - 18:00</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="contact-item mb-3">
                                    <div class="d-flex align-items-center">
                                        <i class="bi bi-geo-alt text-danger me-3"></i>
                                        <div>
                                            <strong>Địa chỉ</strong>
                                            <div>Hà Nội, Việt Nam</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-4">
                            <div class="card-header">
                                <h5><i class="bi bi-people"></i> Đội ngũ hỗ trợ</h5>
                            </div>
                            <div class="card-body">
                                <div class="support-team">
                                    <div class="team-member mb-3">
                                        <div class="d-flex align-items-center">
                                            <div class="member-avatar me-3">
                                                <i class="bi bi-person-circle text-primary"></i>
                                            </div>
                                            <div>
                                                <strong>Admin Chính</strong>
                                                <div class="text-muted">Quản lý tổng thể</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="team-member mb-3">
                                        <div class="d-flex align-items-center">
                                            <div class="member-avatar me-3">
                                                <i class="bi bi-person-circle text-success"></i>
                                            </div>
                                            <div>
                                                <strong>Moderator</strong>
                                                <div class="text-muted">Hỗ trợ cộng đồng</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="team-member">
                                        <div class="d-flex align-items-center">
                                            <div class="member-avatar me-3">
                                                <i class="bi bi-person-circle text-info"></i>
                                            </div>
                                            <div>
                                                <strong>Event Manager</strong>
                                                <div class="text-muted">Tổ chức sự kiện</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h5><i class="bi bi-question-circle"></i> Câu hỏi thường gặp</h5>
                            </div>
                            <div class="card-body">
                                <div class="accordion" id="faqAccordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button
                                                class="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faq1"
                                            >
                                                Làm thế nào để tham gia cộng đồng?
                                            </button>
                                        </h2>
                                        <div
                                            id="faq1"
                                            class="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div class="accordion-body">
                                                Bạn có thể đăng ký tài khoản trên trang web hoặc
                                                tham gia các nhóm mạng xã hội của chúng tôi.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button
                                                class="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faq2"
                                            >
                                                Có an toàn khi sử dụng mod không?
                                            </button>
                                        </h2>
                                        <div
                                            id="faq2"
                                            class="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div class="accordion-body">
                                                Chúng tôi chỉ chia sẻ những mod đã được kiểm tra an
                                                toàn. Tuy nhiên, hãy sử dụng có trách nhiệm.
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
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const form = ref({
        firstName: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
    })

    const isSubmitting = ref(false)

    const submitForm = () => {
        isSubmitting.value = true

        // Simulate form submission
        setTimeout(() => {
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.')
            form.value = {
                firstName: '',
                email: '',
                subject: '',
                message: '',
                newsletter: false
            }
            isSubmitting.value = false
        }, 2000)
    }
</script>

<style scoped>
    .contact-item i {
        font-size: 1.2rem;
    }

    .member-avatar i {
        font-size: 2rem;
    }

    .accordion-button:not(.collapsed) {
        background-color: #e7f1ff;
        color: #0c63e4;
    }

    .accordion-button:focus {
        box-shadow: none;
        border-color: rgba(0, 0, 0, 0.125);
    }

    .sidebar .card-header {
        background-color: #f8f9fa;
        border-bottom: 1px solid #dee2e6;
    }

    .sidebar .card-header h5 {
        margin: 0;
        color: #495057;
    }

    .sidebar .card-header h5 i {
        margin-right: 8px;
    }
</style>
