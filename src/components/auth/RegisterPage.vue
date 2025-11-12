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
                <div class="row mt-5">
                    <div class="col-12">
                        <div class="mb-3">
                            <h2 class="fw-bold text-center text-uppercase">
                                {{ $t('auth.title.register') }}
                            </h2>
                            <p class="text-center m-0">
                                {{ $t('auth.title.hasAccount') }}
                                <a href="/dang-nhap" class="text-black">
                                    {{ $t('auth.title.login') }}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-5 text-black">
                                <form class="isFormMobile" @submit.prevent="handleRegister">
                                    <div class="row overflow-hidden">
                                        <div class="col-12 mb-3">
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    class="form-control border-0 rounded"
                                                    :class="{ 'is-invalid': taiKhoanTonTai }"
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
                                                    :class="{ 'is-invalid': errorMatKhau }"
                                                    :placeholder="$t('auth.placeholder.password')"
                                                    required
                                                    v-model="matKhau"
                                                    @change="onChangePassword"
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
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    class="form-control border-0 rounded"
                                                    :class="{ 'is-invalid': errorEmail }"
                                                    :placeholder="$t('auth.placeholder.email')"
                                                    v-model="email"
                                                    @change="onChangeEmail"
                                                />
                                                <label for="email" class="form-label">
                                                    {{ $t('auth.label.email') }}
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    class="form-control border-0 rounded"
                                                    :placeholder="$t('auth.placeholder.nameFace')"
                                                    required
                                                    v-model="tenFace"
                                                />
                                                <label for="tenFace" class="form-label">
                                                    {{ $t('auth.label.nameFace') }}
                                                    <span class="text-danger">*</span></label
                                                >
                                            </div>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    class="form-control border-0 rounded"
                                                    :class="{ 'is-invalid': errorLinkFace }"
                                                    :placeholder="$t('auth.placeholder.linkFace')"
                                                    required
                                                    v-model="linkFace"
                                                    @change="onChangeLinkFace"
                                                />
                                                <label for="linkFace" class="form-label">
                                                    {{ $t('auth.label.linkFace') }}
                                                    <span class="text-danger">*</span></label
                                                >
                                            </div>
                                        </div>
                                        <div class="col-12 mb-3 d-flex align-items-center gap-2">
                                            <input
                                                type="checkbox"
                                                id="daCoGroup"
                                                v-model="daCoGroup"
                                                class="form-check-input"
                                            />
                                            <label for="daCoGroup" class="form-check-label">
                                                {{ $t('auth.label.hasGroup') }}
                                            </label>
                                        </div>

                                        <div class="col-12 mb-3" v-if="daCoGroup">
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    class="form-control border-0 rounded"
                                                    :placeholder="$t('auth.placeholder.nameGroup')"
                                                    v-model="tenGroup"
                                                    required
                                                />
                                                <label for="tenGroup" class="form-label">
                                                    {{ $t('auth.label.nameGroup') }}
                                                    <span class="text-danger">*</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-12 mb-3">
                                            <div class="d-grid">
                                                <button
                                                    class="btn btn-lg btn-dark rounded fs-6 text-uppercase"
                                                    type="submit"
                                                    :disabled="!isFormValid"
                                                >
                                                    {{ $t('auth.button.register') }}
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
    import { computed, defineComponent, type Ref, ref, watch } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { useRouter } from 'vue-router'
    import { useToast } from 'vue-toastification'
    import { useToastError } from '../../composables/toasts/useToastError'
    import { useTogglePassword } from '../../composables/useTogglePassword'
    import { useRules } from '../../composables/validations/useRules'
    import { ACCOUNT_URL, GROUP, ROLE } from '../../utils/constants'
    import LanguageSwitcher from '../../views/LanguageSwitcher.vue'
    import PopupLoading from '../common/PopupLoading.vue'

    export default defineComponent({
        name: 'RegisterPage',
        components: { LanguageSwitcher, PopupLoading },
        setup() {
            const { t } = useI18n()
            const tenTK = ref('') as Ref<string>
            const matKhau = ref('') as Ref<string>
            const email = ref('') as Ref<string>
            const tenFace = ref('') as Ref<string>
            const linkFace = ref('') as Ref<string>
            const daCoGroup = ref(false) as Ref<boolean>
            const tenGroup = ref('') as Ref<string>
            const error = ref('') as Ref<string>
            const isLoadingPage = ref(false) as Ref<boolean>
            const toast = useToast()
            const router = useRouter()
            const { showMatKhau, toggle: toggleShowPassword } = useTogglePassword()
            const {
                errorMatKhau,
                errorEmail,
                errorLinkFace,
                validatePassword,
                validateEmail,
                validateLinkFace
            } = useRules(t)
            const { handleChangePassword, handleChangeEmail, handleChangeLinkFace } =
                useToastError()

            const onChangePassword = () =>
                handleChangePassword(matKhau, validatePassword, errorMatKhau)
            const onChangeEmail = () => handleChangeEmail(email, validateEmail, errorEmail)
            const onChangeLinkFace = () =>
                handleChangeLinkFace(linkFace, validateLinkFace, errorLinkFace)
            const taiKhoanTonTai = ref(false) as Ref<boolean>
            const isCheckingUsername = ref(false) as Ref<boolean>
            let checkScript: HTMLScriptElement | null = null
            let debounceTimeout: number | null = null

            const isFormValid = computed(() => {
                return (
                    !errorMatKhau.value &&
                    !errorEmail.value &&
                    !errorLinkFace.value &&
                    tenTK.value.trim() !== '' &&
                    matKhau.value.trim() !== '' &&
                    tenFace.value.trim() !== '' &&
                    linkFace.value.trim() !== '' &&
                    !taiKhoanTonTai.value &&
                    !isCheckingUsername.value
                )
            })

            const checkTaiKhoanExist = () => {
                if (!tenTK.value) {
                    taiKhoanTonTai.value = false
                    isCheckingUsername.value = false
                    return
                }

                isCheckingUsername.value = true

                if (checkScript && checkScript.parentNode) {
                    checkScript.parentNode.removeChild(checkScript)
                    checkScript = null
                }

                const callbackName = 'checkUser_' + Date.now()
                ;(window as any)[callbackName] = (data: any) => {
                    taiKhoanTonTai.value = data.exists
                    isCheckingUsername.value = false

                    if (data.exists) {
                        tenTK.value = ''
                        toast.error(t('message.error.accountExist'))
                    }

                    delete (window as any)[callbackName]
                    if (checkScript && checkScript.parentNode) {
                        checkScript.parentNode.removeChild(checkScript)
                        checkScript = null
                    }
                }

                const params = new URLSearchParams({
                    action: 'checkUsername',
                    taiKhoan: tenTK.value,
                    callback: callbackName
                }).toString()

                checkScript = document.createElement('script')
                checkScript.src = ACCOUNT_URL + params
                document.body.appendChild(checkScript)
            }

            watch(tenTK, () => {
                if (!tenTK.value) {
                    taiKhoanTonTai.value = false
                    isCheckingUsername.value = false
                    return
                }

                isCheckingUsername.value = true

                if (debounceTimeout) clearTimeout(debounceTimeout)
                debounceTimeout = window.setTimeout(() => {
                    checkTaiKhoanExist()
                }, 500)
            })

            const handleRegister = () => {
                if (!tenTK.value || !matKhau.value || !tenFace.value || !linkFace.value) {
                    toast.error(t('message.error.required'))
                    return
                }

                const payload = {
                    action: 'save',
                    taiKhoan: tenTK.value,
                    matKhau: matKhau.value,
                    email: email.value,
                    tenFace: tenFace.value,
                    linkFace: linkFace.value,
                    vaiTro: ROLE.MEMBER,
                    daCoGroup: daCoGroup.value ? GROUP.HAS : GROUP.NOT_HAS,
                    tenGroup: daCoGroup.value ? tenGroup.value : '',
                    ngayTao: new Date().toLocaleString('vi-VN')
                }

                const callbackName = 'handleResult_' + Date.now()
                isLoadingPage.value = true
                ;(window as any)[callbackName] = (data: any) => {
                    isLoadingPage.value = false

                    if (data.status === 'success') {
                        toast.success(data.message)
                        tenTK.value = ''
                        matKhau.value = ''
                        email.value = ''
                        tenFace.value = ''
                        linkFace.value = ''

                        router.push('/dang-nhap')
                    } else {
                        toast.error(t('message.error.fail') + data.message)
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
                taiKhoanTonTai,
                isLoadingPage,
                isFormValid,
                error,
                tenTK,
                matKhau,
                email,
                tenFace,
                linkFace,
                daCoGroup,
                tenGroup,
                showMatKhau,
                errorMatKhau,
                errorEmail,
                errorLinkFace,
                validatePassword,
                onChangePassword,
                onChangeEmail,
                onChangeLinkFace,
                handleRegister,
                toggleShowPassword
            }
        }
    })
</script>

<style scoped>
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

    .toast {
        animation:
            slideIn 0.3s ease,
            fadeOut 0.3s ease 2.7s forwards;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        to {
            opacity: 0;
        }
    }
</style>
