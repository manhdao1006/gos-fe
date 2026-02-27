<template>
    <div>
        <AdminHeader />
        <div class="container-fluid px-0">
            <div class="d-flex h-100">
                <div :style="{ width: collapsed ? '60px' : '220px', transition: 'width 0.3s' }">
                    <SidebarMenu
                        :user="user"
                        style="height: 100%"
                        @updateCollapsed="collapsed = $event"
                    />
                </div>
                <div class="flex-grow-1 m-3" style="width: 100%; height: 100%">
                    <div
                        class="border border-dark-subtle border-2 rounded-3 p-3 bg-white shadow-sm"
                        style="font-size: 13px"
                    >
                        <div class="text-black text-uppercase fs-5 fw-bolder text-start">
                            {{ $t('giaiDau.listEvent') }}
                        </div>
                        <div class="row mb-3">
                            <div class="col-9">
                                <input
                                    v-model="searchText"
                                    type="text"
                                    class="form-control"
                                    :placeholder="$t('giaiDau.button.search')"
                                />
                            </div>
                            <div class="col-3 filter-input">
                                <select v-model="filterTypeEvent" class="form-select">
                                    <option value="">
                                        {{ $t('giaiDau.button.filter.allType') }}
                                    </option>
                                    <option
                                        v-for="s in LOAI_SU_KIEN"
                                        :key="s.value"
                                        :value="s.value"
                                    >
                                        {{ $t(s.label) }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3 justify-content-end">
                            <div class="col-2"></div>
                            <div class="col-2 filter-input">
                                <button class="btn btn-success w-100" @click="exportToExcel">
                                    <i class="fas fa-file-excel"></i>
                                    {{ $t('giaiDau.button.exportExcel') }}
                                </button>
                            </div>
                        </div>

                        <div class="table-responsive" style="max-height: 550px; overflow-y: auto">
                            <table
                                class="table table-striped table-bordered align-middle text-center"
                            >
                                <thead class="table-light">
                                    <tr>
                                        <th>{{ $t('giaiDau.table.no') }}</th>
                                        <th @click="sortBy('ma')" style="cursor: pointer">
                                            {{ $t('giaiDau.table.ma') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th @click="sortBy('taiKhoan')" style="cursor: pointer">
                                            {{ $t('giaiDau.table.taiKhoan') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th @click="sortBy('maEvent')" style="cursor: pointer">
                                            {{ $t('giaiDau.table.maEvent') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th @click="sortBy('tenEvent')" style="cursor: pointer">
                                            {{ $t('giaiDau.table.tenEvent') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th @click="sortBy('ngayDangKy')" style="cursor: pointer">
                                            {{ $t('giaiDau.table.ngayDangKy') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th v-if="user.vaiTro === 'admin'">
                                            {{ $t('giaiDau.table.action') }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(v, index) in paginatedList" :key="v.ma">
                                        <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
                                        <td class="text-start">{{ v.ma }}</td>
                                        <td class="text-start">{{ v.taiKhoan }}</td>
                                        <td>{{ v.maEvent }}</td>
                                        <td>{{ eventMap[v.maEvent] || '-' }}</td>
                                        <td>{{ v.ngayDangKy }}</td>
                                        <td v-if="user.vaiTro === 'admin'">
                                            <button
                                                class="btn btn-sm text-danger"
                                                @click="openDeleteModal(v)"
                                            >
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                            <button
                                                class="btn btn-sm btn-primary"
                                                @click="$router.push(`/su-kien/${v.ma}`)"
                                            >
                                                <i class="fa-solid fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div
                                v-if="filteredEventList.length === 0"
                                class="text-center py-3 text-muted"
                            >
                                {{ $t('giaiDau.table.noData') }}
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <div>
                                {{ $t('giaiDau.pagination.display') }}
                                <select
                                    v-model.number="itemsPerPage"
                                    class="form-select d-inline w-auto mx-2"
                                >
                                    <option :value="5">5</option>
                                    <option :value="10">10</option>
                                    <option :value="20">20</option>
                                    <option :value="50">50</option>
                                    <option :value="100">100</option>
                                </select>
                                {{ $t('giaiDau.pagination.rowPerPage') }}
                            </div>

                            <nav>
                                <ul class="pagination mb-0">
                                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                        <button class="page-link" @click="prevPage">
                                            {{ $t('giaiDau.button.firstPage') }}
                                        </button>
                                    </li>
                                    <li
                                        v-for="page in totalPages"
                                        :key="page"
                                        class="page-item"
                                        :class="{ active: currentPage === page }"
                                    >
                                        <button class="page-link" @click="goToPage(page)">
                                            {{ page }}
                                        </button>
                                    </li>
                                    <li
                                        class="page-item"
                                        :class="{ disabled: currentPage === totalPages }"
                                    >
                                        <button class="page-link" @click="nextPage">
                                            {{ $t('giaiDau.button.lastPage') }}
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />

        <BaseModalConfirm
            v-model:show="showDeleteModal"
            title="Xóa sự kiện"
            :message="deleteTour ? `Bạn có chắc muốn xóa sự kiện ${deleteTour.ma}?` : ''"
            @confirm="confirmDelete"
        />

        <div v-if="loading" class="loading-overlay">
            <div class="spinner"></div>
        </div>
    </div>
</template>

<script>
    import { useToast } from 'vue-toastification'
    import * as XLSX from 'xlsx'
    import AdminHeader from '../../../../components/common/admin/AdminHeader.vue'
    import BaseModal from '../../../../components/common/BaseModal.vue'
    import BaseModalConfirm from '../../../../components/common/BaseModalConfirm.vue'
    import SidebarMenu from '../../../../components/common/SidebarMenu.vue'
    import Footer from '../../../../components/Footer.vue'
    import { TOUR_URL, LOAI_SU_KIEN } from '../../../../utils/constants'
    import { generateTourCode } from '../../../../utils/giaiDauUtils'
    import { getLoaiSuKienLabel } from '../../../../utils/suKienUtils'

    export default {
        name: 'QuanLyGiaiDau',
        components: { AdminHeader, SidebarMenu, BaseModal, BaseModalConfirm, Footer },

        data() {
            return {
                getLoaiSuKienLabel,
                LOAI_SU_KIEN,
                tourList: [],
                eventList: [],
                searchText: '',
                filterTypeEvent: '',
                sheetId: '1Uk85jm8ouKJEC3dJRfCotpYQqkKuayXm9z89OliGRrY',
                apiKey: 'AIzaSyBJOLTWvnRRegbkw1rRvr0K2dzV9SZ_Mwk',
                range: 'tour!A:E',
                eventRange: 'event!A:K',
                currentPage: 1,
                itemsPerPage: 10,
                user: JSON.parse(localStorage.getItem('user') || 'null'),
                collapsed: false,
                message: '',
                toast: null,
                success: false,
                loading: false,
                showModal: false,
                modalData: {},
                isEdit: false,
                showDeleteModal: false,
                deleteTour: null,
                showRestoreModal: false,
                restoreEvent: null,
                sortKey: '',
                sortOrder: 'asc'
            }
        },

        computed: {
            filteredEventList() {
                let list = this.tourList.filter((v) => {
                    const text = this.searchText.trim().toLowerCase()
                    const matchText =
                        v.ma.toLowerCase().includes(text) || v.ten.toLowerCase().includes(text)

                    const matchStatus = !this.filterTypeEvent || v.loai === this.filterTypeEvent

                    return matchText && matchStatus
                })

                if (this.sortKey) {
                    list.sort((a, b) => {
                        let valA = a[this.sortKey]
                        let valB = b[this.sortKey]

                        if (this.sortKey === 'ngayDangKy') {
                            valA = this.parseNgayTao(valA)
                            valB = this.parseNgayTao(valB)
                            return this.sortOrder === 'asc' ? valA - valB : valB - valA
                        } else {
                            valA = valA ? valA.toString() : ''
                            valB = valB ? valB.toString() : ''
                            return this.sortOrder === 'asc'
                                ? valA.localeCompare(valB, 'vi')
                                : valB.localeCompare(valA, 'vi')
                        }
                    })
                } else {
                    list.sort(
                        (a, b) => this.parseNgayTao(b.ngayDangKy) - this.parseNgayTao(a.ngayDangKy)
                    )
                }

                return list
            },

            totalPages() {
                return Math.ceil(this.filteredEventList.length / this.itemsPerPage)
            },

            paginatedList() {
                const start = (this.currentPage - 1) * this.itemsPerPage
                const end = start + this.itemsPerPage
                return this.filteredEventList.slice(start, end)
            },

            eventMap() {
                const map = {}
                this.eventList.forEach((e) => {
                    map[e.maEvent] = e.tenEvent
                })
                return map
            }
        },

        watch: {
            'modalData.soLuongDoi'(value) {
                if (value && !/^\d+$/.test(value)) {
                    this.toast.error('Số lượng đội chỉ được nhập số!')
                    this.modalData.soLuongDoi = value.replace(/[^0-9]/g, '')
                }
            },
            'modalData.ngayBatDau'(newVal) {
                this.validateDates('start')
            },
            'modalData.ngayKetThuc'(newVal) {
                this.validateDates('end')
            }
        },

        methods: {
            async fetchEvents() {
                try {
                    const res = await fetch(
                        `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.eventRange}?key=${this.apiKey}`
                    )
                    const data = await res.json()
                    if (!data.values) return

                    const rows = data.values.slice(1)

                    this.eventList = rows
                        .map((e) => ({
                            maEvent: e[0] || '',
                            tenEvent: e[1] || '',
                            loai: e[2] || '',
                            isDelete: e[10] || '0'
                        }))
                        .filter((e) => e.isDelete === '0')
                } catch (error) {
                    console.error('Lỗi tải event:', error)
                }
            },
            validateDates(changedField) {
                if (!this.modalData.ngayBatDau || !this.modalData.ngayKetThuc) return

                const start = new Date(this.modalData.ngayBatDau.replace('T', ' '))
                const end = new Date(this.modalData.ngayKetThuc.replace('T', ' '))

                if (isNaN(start) || isNaN(end)) return

                if (end < start) {
                    if (changedField === 'start') {
                        this.toast.error('Ngày bắt đầu phải nhỏ hơn ngày kết thúc!')
                        this.modalData.ngayBatDau = ''
                    }

                    if (changedField === 'end') {
                        this.toast.error('Ngày kết thúc phải lớn hơn ngày bắt đầu!')
                        this.modalData.ngayKetThuc = ''
                    }
                }
            },

            parseNgayTao(raw) {
                if (!raw) return new Date(0)

                const [timeStr, dateStr] = raw.split(' ')
                const [d, m, y] = dateStr.split('/')
                const converted = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}T${timeStr}`

                return new Date(converted)
            },
            sortBy(key) {
                if (this.sortKey === key) {
                    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'
                } else {
                    this.sortKey = key
                    this.sortOrder = 'asc'
                }
            },
            openDeleteModal(event) {
                this.deleteTour = event
                this.showDeleteModal = true
            },
            confirmDelete() {
                this.loading = true

                if (!this.deleteTour) return

                const payload = {
                    action: 'save',
                    ma: this.deleteTour.ma,
                    taiKhoan: this.deleteTour.taiKhoan,
                    maEvent: this.deleteTour.maEvent,
                    ngayDangKy: new Date().toLocaleString('vi-VN'),
                    isDelete: '1'
                }

                const callbackName = 'handleResult_' + Date.now()
                window[callbackName] = (data) => {
                    this.loading = false

                    if (data.status === 'success') {
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
                this.showDeleteModal = false
                this.deleteTour = null
                this.toast.success('Xóa thành công!')
            },

            prevPage() {
                if (this.currentPage > 1) this.currentPage--
            },

            nextPage() {
                if (this.currentPage < this.totalPages) this.currentPage++
            },

            goToPage(page) {
                this.currentPage = page
            },

            exportToExcel() {
                const data = this.filteredEventList.map((v, i) => ({
                    STT: i + 1,
                    [this.$t('giaiDau.table.ma')]: v.ma,
                    [this.$t('giaiDau.table.taiKhoan')]: v.taiKhoan,
                    [this.$t('giaiDau.table.maEvent')]: v.maEvent,
                    [this.$t('giaiDau.table.tenEvent')]: v.ten,
                    [this.$t('giaiDau.table.ngayDangKy')]: v.ngayTao
                }))

                const ws = XLSX.utils.json_to_sheet(data)
                const wb = XLSX.utils.book_new()
                XLSX.utils.book_append_sheet(wb, ws, 'tours')
                XLSX.writeFile(wb, 'Danh sách giải đấu - GOS.xlsx')
            },

            async fetchTours() {
                try {
                    const res = await fetch(
                        `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.range}?key=${this.apiKey}`
                    )
                    const data = await res.json()
                    if (!data.values) return

                    const rows = data.values.slice(1)
                    const unique = {}

                    rows.forEach((e) => {
                        const obj = {
                            ma: e[0] || '',
                            taiKhoan: e[1] || '',
                            maEvent: e[2] || '',
                            ngayDangKy: e[3] || '',
                            isDelete: e[4] || '',
                            _isEditing: false
                        }

                        const [timeStr, dateStr] = obj.ngayDangKy.split(' ')
                        const [d, m, y] = dateStr.split('/')
                        const converted = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}T${timeStr}`
                        const newDate = new Date(converted)

                        if (!unique[obj.ma]) {
                            unique[obj.ma] = { ...obj, _dateParsed: newDate }
                        } else {
                            if (newDate > unique[obj.ma]._dateParsed) {
                                unique[obj.ma] = { ...obj, _dateParsed: newDate }
                            }
                        }
                    })

                    this.tourList = Object.values(unique).filter((e) => e.isDelete === '0')
                    console.log(this.tourList)
                } catch (error) {
                    console.error('Lỗi tải dữ liệu:', error)
                }
            }
        },

        mounted() {
            this.fetchTours()
            this.fetchEvents()
            this.toast = useToast()
        }
    }
</script>

<style scoped>
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

    .table th,
    .table td {
        vertical-align: middle !important;
    }
    .page-item.active .page-link {
        background-color: #116096;
        border-color: #116096;
    }

    .filter-input {
        padding-left: 10px !important;
    }
</style>
