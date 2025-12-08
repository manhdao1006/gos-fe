<template>
    <div>
        <BaseHeader />
        <div class="container mt-3">
            <button class="btn btn-secondary mb-3" @click="$router.back()">← Quay lại</button>

            <div v-if="loading">Đang tải...</div>

            <div v-else class="border p-3 rounded shadow-sm bg-white">
                <h3>{{ event.ten }}</h3>
                <p><b>Mã:</b> {{ event.ma }}</p>
                <p><b>Loại:</b> {{ $t(getLoaiSuKienLabel(event.loai)) }}</p>
                <p><b>Số lượng đội:</b> {{ event.soLuongDoi }}</p>

                <p><b>Mô tả:</b></p>
                <div class="ck-content" v-html="event.moTa"></div>

                <p class="mt-3"><b>Người tạo:</b> {{ event.nguoiTao }}</p>
                <p><b>Ngày bắt đầu:</b> {{ event.ngayBatDau }}</p>
                <p><b>Ngày kết thúc:</b> {{ event.ngayKetThuc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseHeader from '../../../../components/common/BaseHeader.vue'
    import { LOAI_SU_KIEN } from '../../../../utils/constants'
    import { getLoaiSuKienLabel } from '../../../../utils/suKienUtils'

    export default {
        name: 'ChiTietSuKien',
        components: { BaseHeader },

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
            }
        }
    }
</script>
