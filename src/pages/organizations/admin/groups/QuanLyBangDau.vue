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
                            {{ $t('suKien.listEvent') }}
                        </div>
                        <div class="row mb-3">
                            <div class="col-9">
                                <input
                                    v-model="searchText"
                                    type="text"
                                    class="form-control"
                                    :placeholder="$t('suKien.button.search')"
                                />
                            </div>
                            <div class="col-3 filter-input">
                                <select v-model="filterTypeEvent" class="form-select">
                                    <option value="">
                                        {{ $t('suKien.button.filter.allType') }}
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
                            <div class="col-2">
                                <button
                                    class="btn w-100 text-white"
                                    @click="openAddModal"
                                    style="background-color: #116096"
                                >
                                    <i class="fa-solid fa-plus"></i> Thêm mới
                                </button>
                            </div>
                            <div class="col-2 filter-input">
                                <button class="btn btn-success w-100" @click="exportToExcel">
                                    <i class="fas fa-file-excel"></i>
                                    {{ $t('suKien.button.exportExcel') }}
                                </button>
                            </div>
                        </div>

                        <div class="table-responsive" style="max-height: 550px; overflow-y: auto">
                            <div class="row">
                                <div
                                    v-for="event in filteredEventList"
                                    :key="event.ma"
                                    class="col-md-4 mb-4"
                                >
                                    <div class="card event-card h-100" @click="selectEvent(event)">
                                        <img
                                            :src="event.hinhAnh"
                                            class="card-img-top"
                                            style="height: 200px; object-fit: cover"
                                        />
                                        <div class="card-body">
                                            <h5 class="fw-bold">{{ event.ten }}</h5>
                                            <p class="text-muted mb-1">Mã: {{ event.ma }}</p>
                                            <p class="mb-1">Số đội: {{ event.soLuongDoi }}</p>
                                            <p class="small text-secondary">
                                                {{ event.ngayBatDau }} - {{ event.ngayKetThuc }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="selectedEvent" class="mt-4">
                                <div class="card p-3">
                                    <h4 class="fw-bold mb-3">
                                        {{ selectedEvent.ten }}
                                    </h4>

                                    <h6>Danh sách đội đăng ký</h6>

                                    <ul class="list-group mb-3">
                                        <li
                                            v-for="tour in tourList"
                                            :key="tour.ma"
                                            class="list-group-item"
                                        >
                                            {{ tour.taiKhoan }}
                                        </li>
                                    </ul>

                                    <button
                                        class="btn btn-primary"
                                        :disabled="tourList.length === 0"
                                        @click="openBracketModal"
                                    >
                                        Tạo bảng đấu
                                    </button>
                                </div>
                            </div>

                            <div v-if="bracket.length" class="mt-3">
                                <h6>Bảng đấu</h6>

                                <div
                                    v-for="(match, index) in bracket"
                                    :key="index"
                                    class="border rounded p-2 mb-2 text-center"
                                >
                                    {{ match.teamA }} VS {{ match.teamB }}
                                </div>
                            </div>

                            <div
                                v-if="filteredEventList.length === 0"
                                class="text-center py-3 text-muted"
                            >
                                {{ $t('suKien.table.noData') }}
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <div>
                                {{ $t('suKien.pagination.display') }}
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
                                {{ $t('suKien.pagination.rowPerPage') }}
                            </div>

                            <nav>
                                <ul class="pagination mb-0">
                                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                        <button class="page-link" @click="prevPage">
                                            {{ $t('suKien.button.firstPage') }}
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
                                            {{ $t('suKien.button.lastPage') }}
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

        <BaseModal
            ref="baseModal"
            modalId="modalEvent"
            :title="'Thêm mới sự kiện'"
            :editTitle="'Chỉnh sửa sự kiện'"
            :isEdit="isEdit"
            :fields="modalFields"
            v-model:show="showModal"
            v-model="modalData"
            @date-change="validateDates"
            @submit="handleSubmit"
        />

        <!-- Modal tạo bảng đấu -->
        <div v-if="showBracketModal" class="modal fade show d-block" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Tạo bảng đấu - {{ selectedEvent?.ten }}</h5>
                        <button class="btn-close" @click="closeBracketModal"></button>
                    </div>

                    <div class="modal-body">
                        <!-- Số bảng -->
                        <div class="mb-3">
                            <label class="form-label fw-bold">Số bảng</label>
                            <input
                                v-model.number="numberOfGroups"
                                type="number"
                                min="1"
                                class="form-control"
                                placeholder="Ví dụ: 2, 4..."
                            />
                        </div>

                        <!-- Danh sách bảng + chọn đội từng bảng -->
                        <div
                            v-for="(group, index) in groupsConfig"
                            :key="index"
                            class="mb-4 border rounded p-3"
                        >
                            <!-- Tên bảng -->
                            <div class="mb-2">
                                <label class="fw-bold">Tên bảng</label>
                                <input v-model="group.name" class="form-control" />
                            </div>

                            <!-- Chọn đội -->
                            <!-- Chọn đội -->
                            <label class="fw-bold">Chọn đội cho {{ group.name }}</label>

                            <div class="list-group" style="max-height: 250px; overflow-y: auto">
                                <label
                                    v-for="tour in getAvailableTeams(index)"
                                    :key="tour.ma"
                                    class="list-group-item d-flex align-items-center"
                                >
                                    <input
                                        type="checkbox"
                                        class="form-check-input me-2"
                                        :value="tour"
                                        v-model="group.teams"
                                    />
                                    {{ tour.taiKhoan }}
                                </label>
                            </div>

                            <small class="text-muted">
                                Đã chọn: {{ group.teams.length }} đội
                            </small>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" @click="closeBracketModal">Hủy</button>
                        <button class="btn btn-primary" @click="confirmCreateBracket">
                            Xác nhận tạo bảng
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- backdrop -->
        <div v-if="showBracketModal" class="modal-backdrop fade show"></div>

        <BaseModalConfirm
            v-model:show="showDeleteModal"
            title="Xóa sự kiện"
            :message="deleteEvent ? `Bạn có chắc muốn xóa sự kiện ${deleteEvent.ma}?` : ''"
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
import { EVENT_URL, LOAI_SU_KIEN } from '../../../../utils/constants'
import { generateEventCode, getLoaiSuKienLabel } from '../../../../utils/suKienUtils'

    export default {
        name: 'QuanLySuKien',
        components: { AdminHeader, SidebarMenu, BaseModal, BaseModalConfirm, Footer },

        data() {
            return {
                showBracketModal: false,
                numberOfGroups: 1,
                groupsConfig: [],
                getLoaiSuKienLabel,
                LOAI_SU_KIEN,
                selectedEvent: null,
                tourList: [],
                bracket: [],
                eventList: [],
                searchText: '',
                filterTypeEvent: '',
                sheetId: '1Uk85jm8ouKJEC3dJRfCotpYQqkKuayXm9z89OliGRrY',
                apiKey: 'AIzaSyBJOLTWvnRRegbkw1rRvr0K2dzV9SZ_Mwk',
                range: 'event!A:K',
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
                modalFields: [
                    {
                        key: 'ten',
                        label: 'Tên sự kiện',
                        type: 'text',
                        col: 'col-12',
                        padding: 'px-2',
                        required: true
                    },
                    {
                        key: 'loai',
                        label: 'Hình thức tổ chức',
                        type: 'select',
                        col: 'col-6',
                        options: LOAI_SU_KIEN,
                        padding: 'pe-2',
                        required: true
                    },
                    {
                        key: 'soLuongDoi',
                        label: 'Số lượng đội',
                        type: 'text',
                        col: 'col-6',
                        padding: 'ps-2',
                        required: true
                    },
                    {
                        key: 'ngayBatDau',
                        label: 'Ngày bắt đầu',
                        type: 'datetime',
                        col: 'col-6',
                        padding: 'pe-2',
                        required: true
                    },
                    {
                        key: 'ngayKetThuc',
                        label: 'Ngày kết thúc',
                        type: 'datetime',
                        col: 'col-6',
                        padding: 'ps-2',
                        required: true
                    },
                    {
                        key: 'moTa',
                        label: 'Mô tả',
                        type: 'ckeditor',
                        col: 'col-12',
                        padding: 'px-2',
                        required: true
                    },
                    {
                        key: 'hinhAnh',
                        label: 'Hình ảnh',
                        type: 'file',
                        col: 'col-12',
                        padding: 'px-2'
                    }
                ],
                showDeleteModal: false,
                deleteEvent: null,
                showRestoreModal: false,
                restoreEvent: null,
                sortKey: '',
                sortOrder: 'asc'
            }
        },

        computed: {
            filteredEventList() {
                let list = this.eventList.filter((v) => {
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

                        if (this.sortKey === 'ngayTao') {
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
                    list.sort((a, b) => this.parseNgayTao(b.ngayTao) - this.parseNgayTao(a.ngayTao))
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
            }
        },

        watch: {
            numberOfGroups(newVal) {
                if (newVal < 1) this.numberOfGroups = 1
                this.generateGroups()
            },
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
            getAvailableTeams(groupIndex) {
                if (!this.groupsConfig.length) return this.tourList

                // Lấy tất cả đội đã chọn ở các bảng TRƯỚC
                const selectedTeamIds = this.groupsConfig
                    .slice(0, groupIndex)
                    .flatMap((group) => group.teams.map((t) => t.ma))

                // Lọc: bảng sau sẽ KHÔNG thấy đội đã chọn ở bảng trước
                return this.tourList.filter((team) => !selectedTeamIds.includes(team.ma))
            },
            generateGroups() {
                this.groupsConfig = []

                for (let i = 0; i < this.numberOfGroups; i++) {
                    this.groupsConfig.push({
                        name: `Bảng ${String.fromCharCode(65 + i)}`, // A, B, C
                        teams: []
                    })
                }
            },
            openBracketModal() {
                if (!this.selectedEvent) {
                    this.toast.error('Vui lòng chọn sự kiện!')
                    return
                }

                if (this.tourList.length === 0) {
                    this.toast.error('Chưa có đội đăng ký sự kiện này!')
                    return
                }

                this.numberOfGroups = 1
                this.generateGroups() // 🔥 QUAN TRỌNG
                this.showBracketModal = true
            },
            closeBracketModal() {
                this.showBracketModal = false
                this.groupsConfig = []
            },
            confirmCreateBracket() {
                if (this.groupsConfig.length === 0) {
                    this.toast.error('Chưa tạo bảng!')
                    return
                }

                const usedTeams = new Set()
                const matches = []

                for (const group of this.groupsConfig) {
                    if (group.teams.length === 0) {
                        this.toast.error(`${group.name} chưa chọn đội!`)
                        return
                    }

                    // Check trùng đội giữa các bảng
                    for (const team of group.teams) {
                        if (usedTeams.has(team.ma)) {
                            this.toast.error(`Đội ${team.taiKhoan} bị trùng ở nhiều bảng!`)
                            return
                        }
                        usedTeams.add(team.ma)
                    }

                    // Tạo cặp đấu trong bảng
                    for (let i = 0; i < group.teams.length; i += 2) {
                        matches.push({
                            tenBang: group.name,
                            maEvent: this.selectedEvent.ma,
                            teamA: group.teams[i]?.taiKhoan || 'BYE',
                            teamB: group.teams[i + 1]?.taiKhoan || 'BYE'
                        })
                    }
                }

                this.bracket = matches
                this.showBracketModal = false
                this.toast.success('Tạo bảng đấu theo từng bảng thành công!')
            },
            async selectEvent(event) {
                this.selectedEvent = event
                this.bracket = []
                this.selectedTeams = []
                this.groupList = [] // chỉ reset, không fetch

                // 🔥 CHỈ lấy danh sách đăng ký (input)
                await this.fetchTours(event.ma)
            },
            async fetchTours(maEvent) {
                try {
                    const res = await fetch(
                        `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/tour!A:F?key=${this.apiKey}`
                    )
                    const data = await res.json()
                    if (!data.values) return

                    const rows = data.values.slice(1)
                    const unique = {}

                    rows.forEach((r) => {
                        const obj = {
                            ma: r[0] || '',
                            taiKhoan: r[1] || '',
                            maEvent: r[2] || '',
                            ngayDangKy: r[3] || '',
                            isDelete: r[4] || '0'
                        }

                        // 🔥 B1: Lọc đúng event trước
                        if (obj.maEvent !== maEvent) return

                        // Parse ngày đăng ký (dd/MM/yyyy HH:mm:ss)
                        let parsedDate = new Date(0)
                        if (obj.ngayDangKy) {
                            const parts = obj.ngayDangKy.split(' ')
                            if (parts.length === 2) {
                                const [timeStr, dateStr] = parts
                                const [d, m, y] = dateStr.split('/')
                                if (d && m && y) {
                                    const iso = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}T${timeStr}`
                                    parsedDate = new Date(iso)
                                }
                            }
                        }

                        // 🔥 B2: Check trùng theo MA → giữ bản mới nhất
                        if (!unique[obj.ma]) {
                            unique[obj.ma] = { ...obj, _dateParsed: parsedDate }
                        } else if (parsedDate > unique[obj.ma]._dateParsed) {
                            unique[obj.ma] = { ...obj, _dateParsed: parsedDate }
                        }
                    })

                    // 🔥 B3: Sau khi lấy bản mới nhất theo MA → mới filter isDelete = 0
                    this.tourList = Object.values(unique).filter((t) => t.isDelete === '0')
                } catch (error) {
                    console.error('Lỗi tải tour:', error)
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
                this.deleteEvent = event
                this.showDeleteModal = true
            },
            confirmDelete() {
                this.loading = true

                if (!this.deleteEvent) return

                const payload = {
                    action: 'save',
                    ma: this.deleteEvent.ma,
                    ten: this.deleteEvent.ten,
                    loai: this.deleteEvent.loai,
                    moTa: this.deleteEvent.moTa,
                    soLuongDoi: this.deleteEvent.soLuongDoi,
                    ngayBatDau: this.deleteEvent.ngayBatDau,
                    ngayKetThuc: this.deleteEvent.ngayKetThuc,
                    ngayTao: new Date().toLocaleString('vi-VN'),
                    nguoiTao: this.user.taiKhoan,
                    hinhAnh: this.deleteEvent.hinhAnh,
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

                const SHEET_URL = EVENT_URL + params

                const script = document.createElement('script')
                script.src = SHEET_URL
                document.body.appendChild(script)
                this.showDeleteModal = false
                this.deleteEvent = null
                this.toast.success('Xóa thành công!')
            },

            openAddModal() {
                this.isEdit = false
                this.modalData = {}
                this.showModal = true
            },
            openEditModal(item) {
                this.isEdit = true
                this.modalData = { ...item }

                this.$refs.baseModal.filePreviews = {}
                this.$nextTick(() => {
                    const inputs = this.$refs.baseModal.$el.querySelectorAll('input[type="file"]')
                    inputs.forEach((input) => (input.value = null))
                })
                this.showModal = true
            },
            async handleSubmit(form) {
                this.loading = true
                if (
                    !form.ten ||
                    !form.loai ||
                    !form.soLuongDoi ||
                    !form.ngayBatDau ||
                    !form.ngayKetThuc ||
                    !form.moTa
                ) {
                    return
                }

                try {
                    let imageUrl = form.hinhAnh
                    if (form.hinhAnh instanceof File) {
                        imageUrl = await this.uploadToCloudinary(form.hinhAnh, '/gos/su-kien')
                    }

                    const payload = {
                        action: 'save',
                        ma: this.isEdit ? form.ma : generateEventCode(),
                        ten: form.ten,
                        loai: form.loai,
                        moTa: form.moTa,
                        soLuongDoi: form.soLuongDoi,
                        ngayBatDau: form.ngayBatDau,
                        ngayKetThuc: form.ngayKetThuc,
                        ngayTao: new Date().toLocaleString('vi-VN'),
                        nguoiTao: this.user.taiKhoan,
                        hinhAnh: imageUrl,
                        isDelete: form.isDelete
                    }

                    const callbackName = 'handleResult_' + Date.now()
                    window[callbackName] = (data) => {
                        this.loading = false

                        if (data.status === 'success') {
                            this.toast.success(data.message)
                            form.ten = ''
                            form.loai = ''
                            form.moTa = ''
                            form.soLuongDoi = ''
                            form.ngayBatDau = ''
                            form.ngayKetThuc = ''
                            form.hinhAnh = null

                            window.location.reload()
                        } else {
                            this.toast.error('message.error.fail: ' + data.message)
                        }

                        delete window[callbackName]
                        document.body.removeChild(script)
                    }

                    const params = new URLSearchParams({
                        ...payload,
                        callback: callbackName
                    }).toString()

                    const SHEET_URL = EVENT_URL + params
                    const script = document.createElement('script')
                    script.src = SHEET_URL
                    document.body.appendChild(script)
                } catch (e) {
                    this.loading = false
                    console.error(e)
                    this.toast.error('Lỗi khi thêm sự kiện')
                }

                this.showModal = false
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
                    [this.$t('suKien.table.ma')]: v.ma,
                    [this.$t('suKien.table.ten')]: v.ten,
                    [this.$t('suKien.table.loai')]: this.$t(getLoaiSuKienLabel(v.loai)),
                    [this.$t('suKien.table.soLuongDoi')]: v.soLuongDoi,
                    [this.$t('suKien.table.nguoiTao')]: v.nguoiTao,
                    [this.$t('suKien.table.ngayBatDau')]: v.ngayBatDau,
                    [this.$t('suKien.table.ngayKetThuc')]: v.ngayKetThuc,
                    [this.$t('suKien.table.createDate')]: v.ngayTao
                }))

                const ws = XLSX.utils.json_to_sheet(data)
                const wb = XLSX.utils.book_new()
                XLSX.utils.book_append_sheet(wb, ws, 'events')
                XLSX.writeFile(wb, 'Danh sách sự kiện - GOS.xlsx')
            },

            async fetchEvents() {
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
                            ten: e[1] || '',
                            loai: e[2] || '',
                            soLuongDoi: e[3] || '',
                            moTa: e[4] || '',
                            ngayBatDau: e[5] || '',
                            ngayKetThuc: e[6] || '',
                            ngayTao: e[7] || '',
                            nguoiTao: e[8] || '',
                            hinhAnh: e[9] || '',
                            isDelete: e[10] || '',
                            _isEditing: false
                        }

                        const [timeStr, dateStr] = obj.ngayTao.split(' ')
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

                    this.eventList = Object.values(unique).filter((e) => e.isDelete === '0')
                } catch (error) {
                    console.error('Lỗi tải dữ liệu:', error)
                }
            }
        },

        mounted() {
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

    .event-card {
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 12px;
    }

    .event-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
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

    .page-item.active .page-link {
        background-color: #116096;
        border-color: #116096;
    }

    .filter-input {
        padding-left: 10px !important;
    }
</style>
