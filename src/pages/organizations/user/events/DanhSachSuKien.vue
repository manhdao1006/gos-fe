<template>
    <div>
        <UserHeader />

        <div class="container mt-4">
            <h2 class="fw-bold mb-3">Danh sách sự kiện</h2>

            <div v-if="loading" class="text-center py-5 fs-5">Đang tải...</div>

            <div v-else>
                <!-- LIST -->
                <div class="row" style="padding-left: 5px; padding-right: 5px">
                    <div
                        v-for="ev in paginatedEvents"
                        :key="ev.ma"
                        class="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                        @click="goDetail(ev.ma)"
                    >
                        <div class="card shadow-sm h-100 event-card p-2">
                            <img :src="ev.hinhAnh" class="card-img-top event-img" :alt="ev.ten" />

                            <div class="card-body d-flex flex-column p-2">
                                <h5 class="fw-bold fs-6 mb-1 event-title">{{ ev.ten }}</h5>

                                <p class="text-muted text-start small text-truncate-3 event-desc">
                                    {{ ev.moTaText }}
                                </p>

                                <div class="mt-3 text-muted text-end event-author">
                                    <i class="fa fa-user"></i>
                                    <b class="ms-1">Tác giả:</b> {{ ev.nguoiTao }}
                                </div>

                                <div class="mt-auto">
                                    <div class="mb-2 small">
                                        <b class="text-danger">Số đội:</b>
                                        {{ ev.registeredCount }} / {{ ev.soLuongDoi }}
                                    </div>

                                    <button
                                        class="btn btn-danger w-100 btn-sm"
                                        @click="goDetail(ev.ma)"
                                    >
                                        Xem chi tiết
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- PAGINATION -->
                <div class="text-center mt-3 mb-3">
                    <button
                        class="btn btn-outline-secondary btn-sm me-2"
                        :disabled="page === 1"
                        @click="page--"
                    >
                        ‹ Trước
                    </button>

                    <span class="mx-2 fw-bold"> Trang {{ page }} / {{ totalPages }} </span>

                    <button
                        class="btn btn-outline-secondary btn-sm ms-2"
                        :disabled="page === totalPages"
                        @click="page++"
                    >
                        Sau ›
                    </button>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
    import UserHeader from '../../../../components/common/user/UserHeader.vue'
    import Footer from '../../../../components/Footer.vue'

    export default {
        name: 'ListSuKien',
        components: { UserHeader, Footer },

        data() {
            return {
                suKiens: [],
                loading: true,

                sheetId: '1Uk85jm8ouKJEC3dJRfCotpYQqkKuayXm9z89OliGRrY',
                apiKey: 'AIzaSyBJOLTWvnRRegbkw1rRvr0K2dzV9SZ_Mwk',

                rangeEvent: 'event!A:K',
                rangeTour: 'tour!A:F',

                // Pagination
                page: 1,
                pageSize: 6
            }
        },

        computed: {
            totalPages() {
                return Math.ceil(this.suKiens.length / this.pageSize)
            },

            paginatedEvents() {
                const start = (this.page - 1) * this.pageSize
                return this.suKiens.slice(start, start + this.pageSize)
            }
        },

        async created() {
            await this.fetchEvents()
        },

        methods: {
            goDetail(ma) {
                this.$router.push(`/su-kien/${ma}`)
            },

            async fetchEvents() {
                try {
                    // Fetch event sheet
                    const eventRes = await fetch(
                        `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.rangeEvent}?key=${this.apiKey}`
                    )
                    const eventData = await eventRes.json()

                    const rows = eventData.values
                    const header = rows[0]

                    let events = rows.slice(1).map((r) => {
                        const obj = {}
                        header.forEach((h, i) => (obj[h] = r[i] || ''))

                        // Mô tả rút gọn
                        obj.moTaText = obj.moTa?.replace(/<[^>]+>/g, '').slice(0, 120) + '...'

                        return obj
                    })

                    // Fetch tour sheet
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

                    // Gắn số lượng
                    events = events.map((ev) => {
                        ev.registeredCount = tourList.filter((t) => t.maEvent === ev.ma).length
                        return ev
                    })

                    this.suKiens = events
                } catch (err) {
                    console.error('Fetch events failed:', err)
                } finally {
                    this.loading = false
                }
            }
        }
    }
</script>

<style scoped>
    .event-card {
        border-radius: 12px;
        padding: 16px; /* tăng từ 10 → 16 */
        margin-left: 5px; /* thêm margin giữa các item */
        margin-right: 5px; /* thêm margin giữa các item */
        background: #fff;
        transition: 0.2s;
    }

    .event-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
    }

    .event-img {
        width: 100%;
        height: 200px; /* lớn hơn chút */
        object-fit: cover;
        border-radius: 10px;
    }

    .event-title {
        min-height: 40px; /* ~2 dòng */
    }

    .event-desc {
        min-height: 60px; /* ~3 dòng */
    }

    .event-author {
        min-height: 24px; /* 1 dòng */
    }

    .text-truncate-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>
