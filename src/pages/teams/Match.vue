<template>
    <div class="administration-page">
        <div class="hero-section text-white py-3 w-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 text-center">
                        <div
                            class="d-flex flex-column flex-md-row align-items-center justify-content-center"
                        >
                            <img
                                src="https://res.cloudinary.com/springboot-cloud/image/upload/v1753505200/logo-team_zzr4nj.jpg"
                                :alt="$t('TEAM.MATCH.TITLE')"
                                :title="$t('TEAM.MATCH.TITLE')"
                                class="logo-admin img-fluid"
                            />
                            <span class="fw-bold ms-0 ms-md-3 mt-2 mt-md-0 title-admin">{{
                                $t('TEAM.MATCH.TITLE')
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Header />

        <div class="container-fluid p-0">
            <div class="container my-4">
                <ul class="nav nav-tabs justify-content-center mb-3">
                    <li class="nav-item">
                        <button
                            class="nav-link"
                            :class="{ active: activeTab === 'official' }"
                            @click="activeTab = 'official'"
                        >
                            🏆 Giải chính thức
                        </button>
                    </li>
                    <li class="nav-item">
                        <button
                            class="nav-link"
                            :class="{ active: activeTab === 'friendly' }"
                            @click="activeTab = 'friendly'"
                        >
                            🤝 Giải giao hữu
                        </button>
                    </li>
                </ul>

                <!-- FILTER CARD -->
                <div class="card shadow-sm mb-3">
                    <div class="card-body">
                        <div class="row g-2 align-items-end">
                            <!-- SEARCH -->
                            <div class="col-lg-6 col-md-12">
                                <label class="form-label fw-semibold">Tìm kiếm</label>
                                <div class="position-relative">
                                    <i class="bi bi-search search-icon"></i>
                                    <input
                                        v-model="keyword"
                                        type="text"
                                        class="form-control ps-5 pe-5"
                                        placeholder="Tên giải hoặc đội khách..."
                                    />
                                    <button
                                        v-if="keyword || fromDate || toDate"
                                        class="btn btn-sm btn-clear"
                                        @click="clearFilter"
                                        title="Xóa lọc"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            <!-- FROM DATE -->
                            <div class="col-lg-3 col-md-6">
                                <label class="form-label fw-semibold">Từ ngày / Tháng</label>
                                <input v-model="fromDate" type="date" class="form-control" />
                            </div>

                            <!-- TO DATE -->
                            <div class="col-lg-3 col-md-6">
                                <label class="form-label fw-semibold">Đến ngày</label>
                                <input v-model="toDate" type="date" class="form-control" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-bordered table-hover align-middle text-center mb-0">
                        <thead class="table-dark">
                            <tr>
                                <th class="text-center" style="width: 60px">STT</th>
                                <th class="text-start">Tên giải</th>
                                <th class="text-center" style="width: 180px">Thời gian</th>
                                <th class="text-center" style="min-width: 260px">Tỷ số</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(match, index) in paginatedMatches" :key="index">
                                <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>

                                <td class="text-start fw-semibold">
                                    {{ match.tenGiai }}
                                </td>

                                <td>{{ match.thoiGian }}</td>

                                <td>
                                    <div class="score-row">
                                        <span class="team team-home text-uppercase">
                                            {{ match.doiNha }}
                                        </span>

                                        <span
                                            class="badge score-badge"
                                            :class="{
                                                'bg-success':
                                                    match.banThangNha > match.banThangKhach,
                                                'bg-warning text-dark':
                                                    match.banThangNha === match.banThangKhach,
                                                'bg-danger': match.banThangNha < match.banThangKhach
                                            }"
                                        >
                                            {{ match.banThangNha }} - {{ match.banThangKhach }}
                                        </span>

                                        <span class="team team-away text-uppercase">
                                            {{ match.doiKhach }}
                                        </span>
                                    </div>
                                </td>
                            </tr>

                            <tr v-if="paginatedMatches.length === 0">
                                <td colspan="4" class="text-muted py-4">
                                    Không có dữ liệu trận đấu
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <nav v-if="totalPages > 1" class="mt-3">
                        <ul class="pagination justify-content-center mb-0">
                            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                <button
                                    class="page-link"
                                    @click="currentPage--"
                                    :disabled="currentPage === 1"
                                >
                                    ‹
                                </button>
                            </li>

                            <li
                                v-for="page in totalPages"
                                :key="page"
                                class="page-item"
                                :class="{ active: currentPage === page }"
                            >
                                <button class="page-link" @click="currentPage = page">
                                    {{ page }}
                                </button>
                            </li>

                            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                                <button
                                    class="page-link"
                                    @click="currentPage++"
                                    :disabled="currentPage === totalPages"
                                >
                                    ›
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script setup lang="ts">
    import { computed, ref, watch } from 'vue'
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue'

    type Match = {
        type: 'official' | 'friendly'
        tenGiai: string
        thoiGian: string
        doiNha: string
        doiKhach: string
        banThangNha: number
        banThangKhach: number
    }

    const activeTab = ref<'official' | 'friendly'>('official')
    const currentPage = ref(1)
    const pageSize = 20
    const filteredAndSortedMatches = computed(() => {
        return (
            matches.value
                .filter((m) => m.type === activeTab.value)

                // 🔍 lọc tên giải
                .filter((m) => {
                    if (!keyword.value) return true
                    const kw = keyword.value.toLowerCase()
                    return (
                        m.tenGiai.toLowerCase().includes(kw) ||
                        m.doiKhach.toLowerCase().includes(kw)
                    )
                })

                // 📅 lọc theo khoảng ngày
                .filter((m) => {
                    if (!fromDate.value && !toDate.value) return true

                    const matchDate = parseDate(m.thoiGian)
                    if (!matchDate) return false

                    const from = fromDate.value ? new Date(fromDate.value) : null
                    const to = toDate.value ? new Date(toDate.value) : null

                    // Nếu lọc theo THÁNG
                    if (from && !to) {
                        return (
                            matchDate.getMonth() === from.getMonth() &&
                            matchDate.getFullYear() === from.getFullYear()
                        )
                    }

                    if (from && matchDate < from) return false
                    if (to && matchDate > to) return false

                    return true
                })

                // ⬇⬆ sort mới → cũ
                .sort((a, b) => {
                    const dateA = parseDate(a.thoiGian)?.getTime() || 0
                    const dateB = parseDate(b.thoiGian)?.getTime() || 0
                    return dateB - dateA
                })
        )
    })

    const paginatedMatches = computed(() => {
        const start = (currentPage.value - 1) * pageSize
        return filteredAndSortedMatches.value.slice(start, start + pageSize)
    })

    const matches = ref<Match[]>([
        {
            type: 'official',
            tenGiai: 'DPC Cúp SS4',
            thoiGian: '19/02/2023',
            doiNha: 'GOS',
            doiKhach: 'DPC',
            banThangNha: 3,
            banThangKhach: 2
        },
        {
            type: 'official',
            tenGiai: 'DPC Cúp SS4',
            thoiGian: '20/02/2023',
            doiNha: 'GOS',
            doiKhach: 'Silver Tail',
            banThangNha: 3,
            banThangKhach: 2
        },
        {
            type: 'official',
            tenGiai: 'DPC Cúp SS4',
            thoiGian: '21/02/2023',
            doiNha: 'GOS',
            doiKhach: 'DSW',
            banThangNha: 0,
            banThangKhach: 5
        },
        {
            type: 'official',
            tenGiai: 'DPC Cúp SS4',
            thoiGian: '24/02/2023',
            doiNha: 'GOS',
            doiKhach: 'PT',
            banThangNha: 1,
            banThangKhach: 4
        },
        {
            type: 'official',
            tenGiai: 'VFC 5 Cúp',
            thoiGian: '19/03/2023',
            doiNha: 'GOS',
            doiKhach: 'OWL',
            banThangNha: 2,
            banThangKhach: 4
        },
        {
            type: 'official',
            tenGiai: 'VNM Cúp',
            thoiGian: '17/08/2025',
            doiNha: 'GOS',
            doiKhach: 'Avengers',
            banThangNha: 2,
            banThangKhach: 3
        },
        {
            type: 'official',
            tenGiai: 'VNM Cúp',
            thoiGian: '23/08/2025',
            doiNha: 'GOS',
            doiKhach: 'PSU',
            banThangNha: 3,
            banThangKhach: 1
        },
        {
            type: 'official',
            tenGiai: 'VNM Cúp',
            thoiGian: '26/08/2025',
            doiNha: 'GOS',
            doiKhach: 'VGT',
            banThangNha: 1,
            banThangKhach: 3
        },
        {
            type: 'official',
            tenGiai: 'VNM Cúp',
            thoiGian: '30/08/2025',
            doiNha: 'GOS',
            doiKhach: 'NGK',
            banThangNha: 1,
            banThangKhach: 3
        },
        {
            type: 'official',
            tenGiai: 'EACL CUP SS8',
            thoiGian: '27/09/2025',
            doiNha: 'GOS',
            doiKhach: 'BHF',
            banThangNha: 2,
            banThangKhach: 4
        },
        {
            type: 'official',
            tenGiai: 'AECL CUP SS8',
            thoiGian: '29/09/2025',
            doiNha: 'GOS',
            doiKhach: 'SWF',
            banThangNha: 4,
            banThangKhach: 1
        },
        {
            type: 'official',
            tenGiai: 'AECL CUP SS8',
            thoiGian: '05/10/2025',
            doiNha: 'GOS',
            doiKhach: 'RPG',
            banThangNha: 2,
            banThangKhach: 4
        },
        {
            type: 'official',
            tenGiai: 'AECL CUP SS8',
            thoiGian: '10/10/2025',
            doiNha: 'GOS',
            doiKhach: 'PDH',
            banThangNha: 4,
            banThangKhach: 1
        },
        {
            type: 'official',
            tenGiai: 'AECL CUP SS8',
            thoiGian: '19/10/2025',
            doiNha: 'GOS',
            doiKhach: 'GOG',
            banThangNha: 4,
            banThangKhach: 3
        },
        {
            type: 'official',
            tenGiai: 'AECL CUP SS8',
            thoiGian: '23/10/2025',
            doiNha: 'GOS',
            doiKhach: 'BHF',
            banThangNha: 1,
            banThangKhach: 4
        },
        {
            type: 'official',
            tenGiai: 'MPR OPEN LEAGUE',
            thoiGian: '26/10/2025',
            doiNha: 'GOS',
            doiKhach: 'MPR',
            banThangNha: 7,
            banThangKhach: 22
        },
        {
            type: 'official',
            tenGiai: 'VNM CUP',
            thoiGian: '31/10/2025',
            doiNha: 'GOS',
            doiKhach: 'U3X',
            banThangNha: 5,
            banThangKhach: 1
        },
        {
            type: 'official',
            tenGiai: 'VNM CUP',
            thoiGian: '11/2025',
            doiNha: 'GOS',
            doiKhach: 'CTHT',
            banThangNha: 2,
            banThangKhach: 4
        },
        {
            type: 'official',
            tenGiai: 'VNM CUP',
            thoiGian: '11/2025',
            doiNha: 'GOS',
            doiKhach: 'BNFC',
            banThangNha: 2,
            banThangKhach: 4
        },
        {
            type: 'official',
            tenGiai: 'VNM CUP',
            thoiGian: '11/2025',
            doiNha: 'GOS',
            doiKhach: 'AEBTN',
            banThangNha: 4,
            banThangKhach: 2
        },
        {
            type: 'official',
            tenGiai: 'VNM CUP',
            thoiGian: '11/2025',
            doiNha: 'GOS',
            doiKhach: 'NGK',
            banThangNha: 4,
            banThangKhach: 2
        },
        {
            type: 'official',
            tenGiai: 'VNM CUP',
            thoiGian: '11/2025',
            doiNha: 'GOS',
            doiKhach: 'BNFC',
            banThangNha: 3,
            banThangKhach: 4
        },
        {
            type: 'official',
            tenGiai: 'VDF LEAGUE',
            thoiGian: '01/2026',
            doiNha: 'GOS',
            doiKhach: 'AEHT',
            banThangNha: 3,
            banThangKhach: 2
        },
        {
            type: 'official',
            tenGiai: 'VDF LEAGUE',
            thoiGian: '01/2026',
            doiNha: 'GOS',
            doiKhach: 'CTHT',
            banThangNha: 0,
            banThangKhach: 6
        },
        {
            type: 'official',
            tenGiai: 'SIF CUP',
            thoiGian: '01/2026',
            doiNha: 'GOS',
            doiKhach: 'LAC',
            banThangNha: 3,
            banThangKhach: 1
        },
        {
            type: 'official',
            tenGiai: 'SIF CUP',
            thoiGian: '01/2026',
            doiNha: 'GOS',
            doiKhach: 'AEBTN',
            banThangNha: 1,
            banThangKhach: 3
        },
        {
            type: 'official',
            tenGiai: 'SIF CUP',
            thoiGian: '01/2026',
            doiNha: 'GOS',
            doiKhach: 'BHF',
            banThangNha: 2,
            banThangKhach: 0
        },
        {
            type: 'official',
            tenGiai: 'VDF LEAGUE',
            thoiGian: '01/2026',
            doiNha: 'GOS',
            doiKhach: 'BMT',
            banThangNha: 3,
            banThangKhach: 3
        },
        {
            type: 'official',
            tenGiai: 'VDF LEAGUE',
            thoiGian: '01/2026',
            doiNha: 'GOS',
            doiKhach: 'MPR',
            banThangNha: 1,
            banThangKhach: 5
        },
        {
            type: 'official',
            tenGiai: 'VDF LEAGUE',
            thoiGian: '25/01/2026',
            doiNha: 'GOS',
            doiKhach: 'AK',
            banThangNha: 5,
            banThangKhach: 0
        },
        {
            type: 'official',
            tenGiai: 'VDF LEAGUE',
            thoiGian: '25/01/2026',
            doiNha: 'GOS',
            doiKhach: 'Vsip QN',
            banThangNha: 4,
            banThangKhach: 1
        },
        {
            type: 'friendly',
            tenGiai: 'Giao hữu',
            thoiGian: '22/06/2025',
            doiNha: 'GOS',
            doiKhach: 'PDH',
            banThangNha: 17,
            banThangKhach: 5
        },
        {
            type: 'friendly',
            tenGiai: 'Cúp Tứ Hùng',
            thoiGian: '24/07/2025',
            doiNha: 'GOS',
            doiKhach: 'PDH',
            banThangNha: 5,
            banThangKhach: 8
        },
        {
            type: 'friendly',
            tenGiai: 'Cúp Tứ Hùng',
            thoiGian: '25/07/2025',
            doiNha: 'GOS',
            doiKhach: 'RPG',
            banThangNha: 7,
            banThangKhach: 7
        },
        {
            type: 'friendly',
            tenGiai: 'Cúp Tứ Hùng',
            thoiGian: '26/07/2025',
            doiNha: 'GOS',
            doiKhach: '36TH',
            banThangNha: 6,
            banThangKhach: 9
        },
        {
            type: 'friendly',
            tenGiai: 'Giao hữu',
            thoiGian: '03/08/2025',
            doiNha: 'GOS',
            doiKhach: 'AEBTN',
            banThangNha: 1,
            banThangKhach: 2
        },
        {
            type: 'friendly',
            tenGiai: 'VN-IND',
            thoiGian: '24/08/2025',
            doiNha: 'GOS',
            doiKhach: 'T7',
            banThangNha: 3,
            banThangKhach: 3
        },
        {
            type: 'friendly',
            tenGiai: 'Giao hữu',
            thoiGian: '01/09/2025',
            doiNha: 'GOS',
            doiKhach: 'SVD',
            banThangNha: 3,
            banThangKhach: 2
        },
        {
            type: 'friendly',
            tenGiai: 'Giao hữu',
            thoiGian: '01/09/2025',
            doiNha: 'Trẻ GOS',
            doiKhach: 'SVD',
            banThangNha: 1,
            banThangKhach: 2
        },
        {
            type: 'friendly',
            tenGiai: 'Giao hữu',
            thoiGian: '16/09/2025',
            doiNha: 'GOS',
            doiKhach: 'LAC',
            banThangNha: 3,
            banThangKhach: 3
        },
        {
            type: 'friendly',
            tenGiai: 'Giao hữu',
            thoiGian: '13/11/2025',
            doiNha: 'GOS',
            doiKhach: 'GOG',
            banThangNha: 4,
            banThangKhach: 3
        },
        {
            type: 'friendly',
            tenGiai: 'Cúp Tứ Hùng',
            thoiGian: '',
            doiNha: 'GOS',
            doiKhach: 'LAC',
            banThangNha: 2,
            banThangKhach: 4
        },
        {
            type: 'friendly',
            tenGiai: 'Cúp Tứ Hùng',
            thoiGian: '',
            doiNha: 'GOS',
            doiKhach: 'RBT',
            banThangNha: 1,
            banThangKhach: 3
        },
        {
            type: 'friendly',
            tenGiai: 'Giao hữu',
            thoiGian: '',
            doiNha: 'GOS',
            doiKhach: 'VGM',
            banThangNha: 5,
            banThangKhach: 0
        },
        {
            type: 'friendly',
            tenGiai: 'TỨ HÙNG LAC',
            thoiGian: '25/01/2026',
            doiNha: 'GOS',
            doiKhach: 'VGM',
            banThangNha: 4,
            banThangKhach: 0
        }
    ])

    const totalPages = computed(() => {
        return Math.ceil(filteredAndSortedMatches.value.length / pageSize)
    })

    const keyword = ref('')
    const fromDate = ref('')
    const toDate = ref('')

    const parseDate = (dateStr: string) => {
        if (!dateStr) return null

        // dd/MM/yyyy
        if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
            const [d, m, y] = dateStr.split('/')
            return new Date(`${y}-${m}-${d}`)
        }

        // MM/YYYY
        if (/^\d{2}\/\d{4}$/.test(dateStr)) {
            const [m, y] = dateStr.split('/')
            return new Date(Number(y), Number(m) - 1, 1)
        }

        return null
    }

    const clearFilter = () => {
        keyword.value = ''
        fromDate.value = ''
        toDate.value = ''
        currentPage.value = 1
    }

    watch([activeTab, keyword, fromDate, toDate], () => {
        currentPage.value = 1
    })
</script>

<style scoped>
    /* FILTER CARD */
    .card {
        border-radius: 12px;
    }

    /* SEARCH ICON */
    .search-icon {
        position: absolute;
        top: 50%;
        left: 14px;
        transform: translateY(-50%);
        color: #6c757d;
        font-size: 1rem;
    }

    /* CLEAR BUTTON */
    .btn-clear {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        border: none;
        background: transparent;
        color: #6c757d;
        font-size: 1rem;
        padding: 0;
    }

    .btn-clear:hover {
        color: #dc3545;
    }

    /* INPUT FOCUS */
    .form-control:focus {
        box-shadow: 0 0 0 0.15rem rgba(13, 110, 253, 0.15);
    }

    .hero-section {
        background-image: url('https://res.cloudinary.com/springboot-cloud/image/upload/v1753513401/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_llaqju.png');
    }

    .container-fluid img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
    }

    .logo-member-admin {
        width: 150px !important;
        height: 150px !important;
    }

    .administration-page {
        background: #f8f9fa;
    }

    .title-admin {
        font-size: 1.5rem;
    }

    .description-admin {
        font-size: 1rem;
    }

    .admin-card {
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        border: 2px solid transparent;
    }

    .admin-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        border-color: red;
    }

    .admin-avatar {
        margin-bottom: 20px;
    }

    .admin-info p {
        margin-bottom: 10px;
        font-size: 0.9rem;
    }

    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(6, 1fr);
        height: 100vh;
        gap: 8px;
        padding: 8px;
    }

    .grid-item {
        cursor: pointer;
        font-size: 1.2rem;
        text-align: center;
        padding: 12px;
        position: relative;
        background: #212529;
        color: #fff;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .item-name {
        z-index: 1;
    }

    .overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        font-weight: bold;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .score-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        white-space: nowrap;
    }

    .team {
        min-width: 80px;
        text-align: center;
        font-weight: 600;
    }

    .score-badge {
        width: 90px;
        text-align: center;
        font-size: 1rem;
        padding: 6px 0;
    }
    .grid-item:hover .overlay {
        opacity: 1;
    }

    .grid-item:hover .item-name {
        opacity: 0;
    }

    @media (max-width: 768px) {
        .custom-modal {
            max-width: 100vw;
            height: 100vh;
            margin: 0;
        }
        .modal-content {
            border-radius: 0;
        }

        .logo-admin {
            width: 60px;
        }

        .title-admin {
            font-size: 1.5rem;
        }

        .description-admin {
            font-size: 0.9rem;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .custom-modal {
            max-width: 90vw;
            height: 85vh;
            margin: auto;
        }

        .logo-admin {
            width: 80px;
        }

        .title-admin {
            font-size: 2rem;
        }

        .description-admin {
            font-size: 1rem;
        }
    }

    @media (min-width: 1025px) {
        .custom-modal {
            max-width: 70vw;
            height: 80vh;
            margin: auto;
        }

        .logo-admin {
            width: 100px;
        }

        .title-admin {
            font-size: 2.5rem;
        }

        .description-admin {
            font-size: 1.1rem;
        }
    }
</style>
