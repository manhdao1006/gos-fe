<template>
    <div
        class="home-container p-0 m-0"
        style="background: linear-gradient(135deg, #000000 0%, #ff0000 100%)"
        role="main"
        aria-label="Trang chủ GOS Dream League Soccer"
    >
        <div class="hero-section p-0 bg-white">
            <div class="container pt-3 pb-3">
                <LanguageSwitcher class="position-absolute top-0 start-0 m-3" />
                <div class="row">
                    <div class="col-12">
                        <div class="mb-5">
                            <h2 class="fw-bold text-center text-uppercase">
                                {{ $t('auth.title.login') }}
                            </h2>
                            <p class="text-center m-0">
                                {{ $t('auth.title.notAccount') }}
                                <a href="/dang-ky-tai-khoan" class="text-black">
                                    {{ $t('auth.title.register') }}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-5 text-black">
                                <form class="isFormMobile" @submit.prevent="handleLogin">
                                    <div class="row overflow-hidden">
                                        <div class="col-12 mb-3">
                                            <div class="block-error">{{ error }}</div>
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    class="form-control border-0 rounded"
                                                    :placeholder="$t('auth.placeholder.username')"
                                                    required
                                                    v-model="tenTK"
                                                />
                                                <label for="tenTK" class="form-label">
                                                    {{ $t('auth.label.username') }}
                                                    <span class="text-danger">*</span></label
                                                >
                                            </div>
                                        </div>
                                        <div class="col-12 row align-items-center mb-3">
                                            <div
                                                class="form-floating mb-3 col-xl-10 col-md-10 col-sm-10 col-10"
                                            >
                                                <input
                                                    :type="showMatKhau ? 'text' : 'password'"
                                                    class="form-control border-0 rounded-end-0"
                                                    :placeholder="$t('auth.placeholder.password')"
                                                    required
                                                    v-model="matKhau"
                                                />
                                                <label for="password" class="form-label">
                                                    {{ $t('auth.label.password') }}
                                                    <span class="text-danger">*</span></label
                                                >
                                            </div>
                                            <div
                                                class="col-xl-2 col-md-2 col-sm-2 col-2 justify-content-center align-content-center bg-dark-subtle rounded rounded-start-0 h-100"
                                                @click="toggleShowPassword"
                                            >
                                                <i
                                                    :class="[
                                                        'far',
                                                        showMatKhau ? 'fa-eye' : 'fa-eye-slash'
                                                    ]"
                                                ></i>
                                            </div>
                                        </div>

                                        <div class="col-12 mb-3">
                                            <div class="d-grid">
                                                <button
                                                    class="btn btn-lg btn-dark rounded fs-6 text-uppercase"
                                                    type="submit"
                                                >
                                                    {{ $t('auth.button.login') }}
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <a
                                                href="/"
                                                class="text-decoration-none fs-6 text-black"
                                            >
                                                {{ $t('auth.title.backToHome') }}
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div
                                class="col-12 col-lg-2 d-flex align-items-center justify-content-center gap-3 flex-lg-column isHiddenMobile"
                            >
                                <div
                                    class="bg-dark h-100 d-none d-lg-block"
                                    style="width: 1px; --bs-bg-opacity: 0.3"
                                ></div>
                                <div
                                    class="bg-dark w-100 d-lg-none"
                                    style="height: 1px; --bs-bg-opacity: 0.3"
                                ></div>
                                <div
                                    class="bg-dark h-100 d-none d-lg-block"
                                    style="width: 1px; --bs-bg-opacity: 0.3"
                                ></div>
                                <div
                                    class="bg-dark w-100 d-lg-none"
                                    style="height: 1px; --bs-bg-opacity: 0.3"
                                ></div>
                            </div>
                            <div class="col-12 col-lg-5 d-flex align-items-center isHiddenMobile">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <PopupLoading :isLoading="isLoadingPage" />
</template>

<script lang="ts">
    import { defineComponent, inject, type Ref, ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { useRouter } from 'vue-router'
    import { useToast } from 'vue-toastification'
    import { useTogglePassword } from '../../composables/useTogglePassword'
    import { eventBus } from '../../eventBus'
    import { ACCOUNT_URL } from '../../utils/constants'
    import LanguageSwitcher from '../../views/LanguageSwitcher.vue'
    import PopupLoading from '../common/PopupLoading.vue'

    export default defineComponent({
        name: 'DangNhap',
        components: {
            PopupLoading,
            LanguageSwitcher
        },
        setup() {
            const { t } = useI18n()
            const isLoggedIn = inject('isLoggedIn') as Ref<boolean> | undefined
            const tenTK = ref('') as Ref<string>
            const matKhau = ref('') as Ref<string>
            const email = ref('') as Ref<string>
            const tenFace = ref('') as Ref<string>
            const linkFace = ref('') as Ref<string>
            const error = ref('') as Ref<string>
            const { showMatKhau, toggle: toggleShowPassword } = useTogglePassword()
            const router = useRouter()
            const toast = useToast()
            const isLoadingPage = ref(false) as Ref<boolean>

            const handleLogin = () => {
                if (!tenTK.value || !matKhau.value) {
                    error.value = t('message.error.required')
                    return
                }

                const payload = {
                    action: 'login',
                    taiKhoan: tenTK.value,
                    matKhau: matKhau.value
                }

                const callbackName = 'handleLoginResult_' + Date.now()
                isLoadingPage.value = true
                ;(window as any)[callbackName] = (data: any) => {
                    isLoadingPage.value = false

                    if (data.status === 'success') {
                        toast.success(data.message)

                        localStorage.setItem('user', JSON.stringify(data.user))
                        console.log('JSON.stringify(data.user): ', JSON.stringify(data.user))

                        if (isLoggedIn) isLoggedIn.value = true
                        eventBus.emit('userLoggedIn', data.user)

                        if (data.user?.vaiTro === 'admin') {
                            router.push('/quan-tri/trang-chu')
                        } else {
                            router.push('/')
                        }
                    } else {
                        toast.error(data.message)
                    }

                    delete (window as any)[callbackName]
                    document.body.removeChild(script)
                }

                const params = new URLSearchParams({
                    ...payload,
                    callback: callbackName
                }).toString()

                const SHEET_URL = ACCOUNT_URL + params

                const script = document.createElement('script')
                script.src = SHEET_URL
                document.body.appendChild(script)
            }

            return {
                error,
                isLoadingPage,
                tenTK,
                matKhau,
                email,
                tenFace,
                linkFace,
                showMatKhau,
                handleLogin,
                toggleShowPassword
            }
        }
    })
</script>

<style scoped>
    .block-error {
        color: #ed1c24;
        margin-bottom: 10px;
        font-size: 15px;
    }
    .home-container {
        min-height: 100vh;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    .hero-section {
        position: relative;
        background-image: url('https://res.cloudinary.com/springboot-cloud/image/upload/v1753513401/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_llaqju.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        min-height: 100vh;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: visible;
        padding: 4rem 0;
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

    .form-floating {
        height: 42px !important;
    }

    @media (max-width: 1024px) {
        .isHiddenMobile {
            display: none !important;
        }

        .isFormMobile {
            margin: 20px !important;
        }
    }
</style>
