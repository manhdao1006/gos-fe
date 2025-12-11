<template>
    <div>
        <UserHeader />
        <div v-if="loadingPage" class="text-center py-5 fs-5">Đang tải...</div>

        <div v-else class="container mt-4">
            <div class="row">
                <!-- LEFT: Ảnh + Mô tả + Tác giả -->
                <div class="col-lg-7">
                    <div class="card shadow-sm mb-4" style="padding: 20px">
                        <img
                            :src="suKien.hinhAnh"
                            class="card-img-top event-img"
                            :alt="suKien.ten"
                        />

                        <div class="card-body">
                            <h5 class="fw-semibold mb-2">Mô tả</h5>
                            <div
                                class="ck-content border rounded p-3 bg-white shadow-sm text-start"
                                v-html="suKien.moTa"
                            ></div>

                            <div class="mt-3 text-muted text-end">
                                <i class="fa fa-user"></i>
                                <b class="ms-1">Tác giả:</b> {{ suKien.nguoiTao }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT: Tên + Thông tin + Buttons -->
                <div class="col-lg-5">
                    <div class="shadow-sm p-3 mb-4">
                        <h2 class="fw-bold mb-4">{{ suKien.ten }}</h2>

                        <div class="p-3 bg-light shadow-sm mb-3">
                            <h5 class="fw-semibold mb-3">Thông tin sự kiện</h5>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2">
                                    <i class="fa fa-tag text-danger"></i>
                                    <b class="ms-1">Hình thức:</b>
                                    {{ $t(getLoaiSuKienLabel(suKien.loai)) }}
                                </li>

                                <li class="mb-2">
                                    <i class="fa fa-users text-danger"></i>
                                    <b class="ms-1">Số lượng đội:</b>
                                    {{ registeredCount }} / {{ suKien.soLuongDoi }}
                                </li>

                                <li class="mb-2">
                                    <i class="fa fa-calendar text-danger"></i>
                                    <b class="ms-1">Bắt đầu:</b>
                                    {{ formatDate(suKien.ngayBatDau) }}
                                </li>

                                <li>
                                    <i class="fa fa-clock text-danger"></i>
                                    <b class="ms-1">Kết thúc:</b>
                                    {{ formatDate(suKien.ngayKetThuc) }}
                                </li>
                            </ul>
                        </div>

                        <div
                            v-if="isUserRegistered"
                            class="alert alert-info text-center fw-semibold"
                        >
                            Bạn đã đăng ký giải đấu, chờ admin thông báo.
                        </div>
                        <div class="d-flex gap-2 mt-3">
                            <button
                                class="btn btn-outline-secondary"
                                :class="!showRegisterButton ? 'w-100' : 'w-50'"
                                @click="returnList()"
                            >
                                ← Quay lại
                            </button>
                            <button
                                class="btn btn-danger w-50"
                                v-if="showRegisterButton"
                                @click="handleSubmit"
                            >
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />

        <div v-if="loading" class="loading-overlay">
            <div class="spinner"></div>
        </div>
    </div>
</template>

<script>
    import { useToast } from 'vue-toastification'
    import UserHeader from '../../../../components/common/user/UserHeader.vue'
    import Footer from '../../../../components/Footer.vue'
    import { LOAI_SU_KIEN, TOUR_URL } from '../../../../utils/constants'
    import { generateTourCode } from '../../../../utils/giaiDauUtils'
    import { getLoaiSuKienLabel } from '../../../../utils/suKienUtils'

    export default {
        name: 'ChiTietSuKien',
        components: { UserHeader, Footer },

        data() {
            return {
                LOAI_SU_KIEN,
                getLoaiSuKienLabel,
                suKien: {},
                loading: false,
                loadingPage: true,
                isUserRegistered: false,
                registeredCount: 0,
                user: JSON.parse(localStorage.getItem('user') || 'null'),
                sheetId: '1Uk85jm8ouKJEC3dJRfCotpYQqkKuayXm9z89OliGRrY',
                apiKey: 'AIzaSyBJOLTWvnRRegbkw1rRvr0K2dzV9SZ_Mwk',
                range: 'event!A:K',
                rangeTour: 'tour!A:F'
            }
        },

        async created() {
            await this.fetchDetail()
            this.toast = useToast()
        },

        computed: {
            showRegisterButton() {
                return this.registeredCount < this.suKien.soLuongDoi && !this.isUserRegistered
            }
        },

        methods: {
            returnList() {
                this.$router.push(`/su-kien`)
            },
            handleSubmit() {
                this.loading = true

                const payload = {
                    action: 'save',
                    ma: generateTourCode(),
                    taiKhoan: this.user.taiKhoan,
                    maEvent: this.suKien.ma,
                    ngayDangKy: new Date().toLocaleString('vi-VN'),
                    isDelete: '0'
                }

                const callbackName = 'handleResult_' + Date.now()
                window[callbackName] = (data) => {
                    this.loading = false

                    if (data.status === 'success') {
                        this.toast.success('Đăng ký thành công!')

                        window.location.reload()
                    } else {
                        this.toast.error('message.error.fail' + data.message)
                    }

                    delete window[callbackName]
                    document.body.removeChild(script)
                }

                const params = new URLSearchParams({
                    ...payload,
                    callback: callbackName
                }).toString()

                const SHEET_URL = TOUR_URL + params

                const script = document.createElement('script')
                script.src = SHEET_URL
                document.body.appendChild(script)

                this.showModal = false
            },
            async fetchDetail() {
                try {
                    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.range}?key=${this.apiKey}`
                    const res = await fetch(url)
                    const data = await res.json()

                    const rows = data.values
                    const header = rows[0]

                    const list = rows.slice(1).map((r) => {
                        const obj = {}
                        header.forEach((h, i) => {
                            obj[h] = r[i] || ''
                        })
                        return obj
                    })

                    const ma = this.$route.params.ma
                    this.suKien = list.find((x) => x.ma === ma) || {}

                    const tourRes = await fetch(
                        `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.rangeTour}?key=${this.apiKey}`
                    )
                    const tourData = await tourRes.json()

                    const tourRows = tourData.values
                    const tourHeader = tourRows[0]

                    const tourList = tourRows.slice(1).map((r) => {
                        const obj = {}
                        tourHeader.forEach((h, i) => (obj[h] = r[i] || ''))
                        return obj
                    })

                    this.registeredCount = tourList.filter((t) => t.maEvent === ma).length

                    if (this.user?.taiKhoan) {
                        this.isUserRegistered = tourList.some(
                            (t) => t.maEvent === ma && t.taiKhoan === this.user.taiKhoan
                        )
                    }
                } catch (e) {
                    console.error('Fetch detail failed:', e)
                } finally {
                    this.loadingPage = false
                }
            },
            formatDate(dateStr) {
                if (!dateStr) return ''
                const d = new Date(dateStr)
                const pad = (n) => n.toString().padStart(2, '0')
                const hh = pad(d.getHours())
                const mm = pad(d.getMinutes())
                const dd = pad(d.getDate())
                const mmth = pad(d.getMonth() + 1)
                const yyyy = d.getFullYear()
                return `${hh}:${mm} ${dd}/${mmth}/${yyyy}`
            }
        }
    }
</script>

<style>
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #116096;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    p {
        margin: 0 !important;
    }

    .event-img {
        width: 100%;
        height: 400px;
        object-fit: contain;
    }

    @media (max-width: 992px) {
        .event-img {
            height: 300px;
        }
    }

    @media (max-width: 576px) {
        .event-img {
            height: 200px;
        }
    }
</style>
