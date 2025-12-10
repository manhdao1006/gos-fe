<template>
    <div>
        <UserHeader />

        <div class="container mt-4">
            <div v-if="loading" class="text-center py-5 fs-5">Đang tải...</div>

            <div v-else class="row g-4">
                <!-- LEFT: Ảnh + Mô tả + Tác giả -->
                <div class="col-lg-7">
                    <div class="card shadow-sm mb-4">
                        <img
                            :src="event.hinhAnh"
                            class="card-img-top event-img"
                            alt="Hình ảnh sự kiện"
                        />

                        <div class="card-body">
                            <h5 class="fw-semibold mb-2">Mô tả</h5>
                            <div
                                class="ck-content border rounded p-3 bg-white shadow-sm text-start"
                                v-html="event.moTa"
                            ></div>

                            <div class="mt-3 text-muted text-end">
                                <i class="fa fa-user"></i>
                                <b class="ms-1">Tác giả:</b> {{ event.nguoiTao }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT: Tên + Thông tin + Buttons -->
                <div class="col-lg-5">
                    <div class="card shadow-sm p-3 mb-4">
                        <h2 class="fw-bold mb-4">{{ event.ten }}</h2>

                        <div class="p-3 bg-light border rounded shadow-sm mb-3">
                            <h5 class="fw-semibold mb-3">Thông tin sự kiện</h5>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2">
                                    <i class="fa fa-tag text-primary"></i>
                                    <b class="ms-1">Hình thức:</b>
                                    {{ $t(getLoaiSuKienLabel(event.loai)) }}
                                </li>

                                <li class="mb-2">
                                    <i class="fa fa-users text-primary"></i>
                                    <b class="ms-1">Số lượng đội:</b>
                                    {{ event.soLuongDoi }}
                                </li>

                                <li class="mb-2">
                                    <i class="fa fa-calendar text-primary"></i>
                                    <b class="ms-1">Bắt đầu:</b>
                                    {{ formatDate(event.ngayBatDau) }}
                                </li>

                                <li>
                                    <i class="fa fa-clock text-primary"></i>
                                    <b class="ms-1">Kết thúc:</b>
                                    {{ formatDate(event.ngayKetThuc) }}
                                </li>
                            </ul>
                        </div>

                        <div class="d-flex gap-2 mt-3">
                            <button class="btn btn-outline-secondary w-50" @click="$router.back()">
                                ← Quay lại
                            </button>
                            <button class="btn btn-primary w-50">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserHeader from '../../../../components/common/user/UserHeader.vue'
    import { LOAI_SU_KIEN } from '../../../../utils/constants'
    import { getLoaiSuKienLabel } from '../../../../utils/suKienUtils'

    export default {
        name: 'ChiTietSuKien',
        components: { UserHeader },

        data() {
            return {
                LOAI_SU_KIEN,
                getLoaiSuKienLabel,
                event: {},
                loading: true,
                sheetId: '1Uk85jm8ouKJEC3dJRfCotpYQqkKuayXm9z89OliGRrY',
                apiKey: 'AIzaSyBJOLTWvnRRegbkw1rRvr0K2dzV9SZ_Mwk',
                range: 'event!A:K'
            }
        },

        async created() {
            await this.fetchDetail()
        },

        methods: {
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
                    this.event = list.find((x) => x.ma === ma) || {}
                } catch (e) {
                    console.error('Fetch detail failed:', e)
                } finally {
                    this.loading = false
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
