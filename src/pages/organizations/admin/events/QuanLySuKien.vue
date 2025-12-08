<template>
    <div>
        <BaseHeader />
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
                            <table
                                class="table table-striped table-bordered align-middle text-center"
                            >
                                <thead class="table-light">
                                    <tr>
                                        <th>{{ $t('suKien.table.no') }}</th>
                                        <th @click="sortBy('ma')" style="cursor: pointer">
                                            {{ $t('suKien.table.ma') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th @click="sortBy('ten')" style="cursor: pointer">
                                            {{ $t('suKien.table.ten') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th @click="sortBy('loai')" style="cursor: pointer">
                                            {{ $t('suKien.table.loai') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th @click="sortBy('soLuongDoi')" style="cursor: pointer">
                                            {{ $t('suKien.table.soLuongDoi') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th @click="sortBy('moTa')" style="cursor: pointer">
                                            {{ $t('suKien.table.moTa') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th @click="sortBy('ngayBatDau')" style="cursor: pointer">
                                            {{ $t('suKien.table.ngayBatDau') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th @click="sortBy('ngayKetThuc')" style="cursor: pointer">
                                            {{ $t('suKien.table.ngayKetThuc') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th @click="sortBy('ngayTao')" style="cursor: pointer">
                                            {{ $t('suKien.table.createDate') }}
                                            <i class="fa fa-sort"></i>
                                        </th>
                                        <th v-if="user.vaiTro === 'admin'">
                                            {{ $t('suKien.table.action') }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(v, index) in paginatedList" :key="v.ma">
                                        <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
                                        <td class="text-start">{{ v.ma }}</td>
                                        <td class="text-start">{{ v.ten }}</td>
                                        <td>{{ $t(getLoaiSuKienLabel(v.loai)) }}</td>
                                        <td>{{ v.soLuongDoi }}</td>
                                        <td class="text-start">{{ v.moTa }}</td>

                                        <td>{{ v.ngayBatDau }}</td>
                                        <td>{{ v.ngayKetThuc }}</td>
                                        <td>{{ v.ngayTao }}</td>
                                        <td v-if="user.vaiTro === 'admin'">
                                            <button
                                                class="btn btn-sm text-warning"
                                                @click="openEditModal(v)"
                                            >
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </button>
                                            <!-- <button
                                                class="btn btn-sm text-danger"
                                                @click="openBanModal(v)"
                                            >
                                                <i class="fa-solid fa-ban"></i>
                                            </button> -->
                                            <button
                                                class="btn btn-sm text-danger"
                                                @click="openDeleteModal(v)"
                                            >
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

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
            modalId="modalEvent"
            :title="'Thêm mới người dùng'"
            :editTitle="'Chỉnh sửa người dùng'"
            :isEdit="isEdit"
            :fields="modalFields"
            v-model:show="showModal"
            v-model="modalData"
            @submit="handleSubmit"
        />

        <BaseModalConfirm
            v-model:show="showDeleteModal"
            title="Xóa tài khoản"
            :message="deleteEvent ? `Bạn có chắc muốn xóa tài khoản ${deleteEvent.taiKhoan}?` : ''"
            @confirm="confirmDelete"
        />

        <BaseModalConfirm
            v-model:show="showBanModal"
            title="Khoá tài khoản"
            :message="banEvent ? `Bạn có chắc muốn khoá tài khoản ${banEvent.taiKhoan}?` : ''"
            confirmText="Khoá"
            @confirm="confirmBan"
        />

        <BaseModalConfirm
            v-model:show="showRestoreModal"
            title="Khôi phục tài khoản"
            :message="
                restoreEvent ? `Bạn có chắc muốn khôi phục tài khoản ${restoreEvent.taiKhoan}?` : ''
            "
            @confirm="confirmRestore"
        />

        <div v-if="loading" class="loading-overlay">
            <div class="spinner"></div>
        </div>
    </div>
</template>

<script>
    import { useToast } from 'vue-toastification'
    import * as XLSX from 'xlsx'
    import BaseHeader from '../../../../components/common/BaseHeader.vue'
    import BaseModal from '../../../../components/common/BaseModal.vue'
    import BaseModalConfirm from '../../../../components/common/BaseModalConfirm.vue'
    import SidebarMenu from '../../../../components/common/SidebarMenu.vue'
    import Footer from '../../../../components/Footer.vue'
    import { ACCOUNT_URL, GROUP, LOAI_SU_KIEN, ROLE } from '../../../../utils/constants'
    import { getLoaiSuKienLabel } from '../../../../utils/suKienUtils'

    export default {
        name: 'QuanLySuKien',
        components: { BaseHeader, SidebarMenu, BaseModal, BaseModalConfirm, Footer },

        data() {
            return {
                getLoaiSuKienLabel,
                LOAI_SU_KIEN,
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
                        key: 'taiKhoan',
                        label: 'Tên đăng nhập',
                        type: 'text',
                        col: 'col-6',
                        padding: 'pe-2',
                        required: true
                    },
                    {
                        key: 'email',
                        label: 'Email',
                        type: 'text',
                        col: 'col-6',
                        padding: 'ps-2'
                    },
                    {
                        key: 'tenFace',
                        label: 'Tên Facebook',
                        type: 'text',
                        col: 'col-6',
                        padding: 'pe-2',
                        required: true
                    },
                    {
                        key: 'linkFace',
                        label: 'Link Facebook',
                        type: 'text',
                        col: 'col-6',
                        padding: 'ps-2',
                        required: true
                    },
                    {
                        key: 'daCoGroup',
                        label: 'Đã có group?',
                        type: 'checkbox',
                        col: 'col-6',
                        padding: 'pe-2'
                    },
                    {
                        key: 'tenGroup',
                        label: 'Tên group',
                        type: 'text',
                        col: 'col-6',
                        padding: 'ps-2',
                        required: true,
                        showIf: 'daCoGroup'
                    }
                ],
                showDeleteModal: false,
                deleteEvent: null,
                showBanModal: false,
                banEvent: null,
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
                        v.ma.toLowerCase().includes(text) ||
                        v.ten.toLowerCase().includes(text) ||
                        v.moTa.toLowerCase().includes(text)

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

        methods: {
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
                if (!this.deleteEvent) return
                console.log('Xóa:', this.deleteEvent)
                this.eventList = this.eventList.filter((u) => u !== this.deleteEvent)
                this.showDeleteModal = false
                this.deleteEvent = null
                this.toast.success('Xóa thành công!')
            },

            // openBanModal(event) {
            //     this.banEvent = event
            //     this.showBanModal = true
            // },
            // confirmBan() {
            //     this.loading = true

            //     if (!this.banEvent) return

            //     const payload = {
            //         action: 'save',
            //         taiKhoan: this.banEvent.taiKhoan,
            //         matKhau: this.banEvent.matKhau,
            //         email: this.banEvent.email,
            //         tenFace: this.banEvent.tenFace,
            //         linkFace: this.banEvent.linkFace,
            //         vaiTro: this.banEvent.vaiTro,
            //         daCoGroup: this.banEvent.daCoGroup,
            //         tenGroup: this.banEvent.tenGroup,
            //         ngayTao: new Date().toLocaleString('vi-VN'),
            //         trangThai: '0',
            //         nguoiTao: this.user.taiKhoan
            //     }

            //     const callbackName = 'handleResult_' + Date.now()
            //     window[callbackName] = (data) => {
            //         this.loading = false

            //         if (data.status === 'success') {
            //             window.location.reload()
            //         } else {
            //             this.toast.error('message.error.fail' + data.message)
            //         }

            //         delete window[callbackName]
            //         document.body.removeChild(script)
            //     }

            //     const params = new URLSearchParams({
            //         ...payload,
            //         callback: callbackName
            //     }).toString()

            //     const SHEET_URL = ACCOUNT_URL + params

            //     const script = document.createElement('script')
            //     script.src = SHEET_URL
            //     document.body.appendChild(script)
            //     this.showBanModal = false
            //     this.banEvent = null
            //     this.toast.success('Người dùng đã bị khoá!')
            // },
            // openRestoreModal(event) {
            //     this.restoreEvent = event
            //     this.showRestoreModal = true
            // },
            // confirmRestore() {
            //     this.loading = true

            //     if (!this.restoreEvent) return

            //     const payload = {
            //         action: 'save',
            //         taiKhoan: this.restoreEvent.taiKhoan,
            //         matKhau: this.restoreEvent.matKhau,
            //         email: this.restoreEvent.email,
            //         tenFace: this.restoreEvent.tenFace,
            //         linkFace: this.restoreEvent.linkFace,
            //         vaiTro: this.restoreEvent.vaiTro,
            //         daCoGroup: this.restoreEvent.daCoGroup,
            //         tenGroup: this.restoreEvent.tenGroup,
            //         ngayTao: new Date().toLocaleString('vi-VN'),
            //         trangThai: '1',
            //         nguoiTao: this.user.taiKhoan
            //     }

            //     const callbackName = 'handleResult_' + Date.now()
            //     window[callbackName] = (data) => {
            //         this.loading = false

            //         if (data.status === 'success') {
            //             window.location.reload()
            //         } else {
            //             this.toast.error('message.error.fail' + data.message)
            //         }

            //         delete window[callbackName]
            //         document.body.removeChild(script)
            //     }

            //     const params = new URLSearchParams({
            //         ...payload,
            //         callback: callbackName
            //     }).toString()

            //     const SHEET_URL = ACCOUNT_URL + params

            //     const script = document.createElement('script')
            //     script.src = SHEET_URL
            //     document.body.appendChild(script)
            //     this.showRestoreModal = false
            //     this.restoreEvent = null
            //     this.toast.success('Người dùng đã được khôi phục!')
            // },
            openAddModal() {
                this.isEdit = false
                this.modalData = {}
                this.showModal = true
            },
            openEditModal(item) {
                this.isEdit = true
                this.modalData = { ...item }

                this.modalData.daCoGroup = item.daCoGroup === GROUP.HAS || item.daCoGroup === true
                this.showModal = true
            },
            handleSubmit(form) {
                if (this.isEdit) {
                    this.loading = true
                    if (!form.taiKhoan || !form.tenFace || !form.linkFace) {
                        return
                    }

                    const payload = {
                        action: 'save',
                        taiKhoan: form.taiKhoan,
                        matKhau: '123456',
                        email: form.email || '',
                        tenFace: form.tenFace,
                        linkFace: form.linkFace,
                        vaiTro: ROLE.MEMBER,
                        daCoGroup: form.daCoGroup ? GROUP.HAS : GROUP.NOT_HAS,
                        tenGroup: form.daCoGroup ? form.tenGroup : '',
                        ngayTao: new Date().toLocaleString('vi-VN'),
                        trangThai: '1',
                        nguoiTao: this.user.taiKhoan
                    }

                    const callbackName = 'handleResult_' + Date.now()
                    window[callbackName] = (data) => {
                        this.loading = false

                        if (data.status === 'success') {
                            this.toast.success(data.message)
                            form.taiKhoan = ''
                            form.matKhau = ''
                            form.email = ''
                            form.tenFace = ''
                            form.linkFace = ''

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

                    const SHEET_URL = ACCOUNT_URL + params

                    const script = document.createElement('script')
                    script.src = SHEET_URL
                    document.body.appendChild(script)
                } else {
                    this.loading = true
                    if (!form.taiKhoan || !form.tenFace || !form.linkFace) {
                        return
                    }

                    const payload = {
                        action: 'save',
                        taiKhoan: form.taiKhoan,
                        matKhau: '123456',
                        email: form.email || '',
                        tenFace: form.tenFace,
                        linkFace: form.linkFace,
                        vaiTro: ROLE.MEMBER,
                        daCoGroup: form.daCoGroup ? GROUP.HAS : GROUP.NOT_HAS,
                        tenGroup: form.daCoGroup ? form.tenGroup : '',
                        ngayTao: new Date().toLocaleString('vi-VN'),
                        trangThai: '1',
                        nguoiTao: this.user.taiKhoan
                    }

                    const callbackName = 'handleResult_' + Date.now()
                    window[callbackName] = (data) => {
                        this.loading = false

                        if (data.status === 'success') {
                            this.toast.success(data.message)
                            form.taiKhoan = ''
                            form.matKhau = ''
                            form.email = ''
                            form.tenFace = ''
                            form.linkFace = ''

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

                    const SHEET_URL = ACCOUNT_URL + params

                    const script = document.createElement('script')
                    script.src = SHEET_URL
                    document.body.appendChild(script)
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
                    [this.$t('suKien.table.taiKhoan')]: v.ma,
                    [this.$t('suKien.table.email')]: v.ten,
                    [this.$t('suKien.table.tenFace')]: v.loai,
                    [this.$t('suKien.table.vaiTro')]:
                        v.vaiTro === 'admin'
                            ? this.$t('suKien.table.admin')
                            : this.$t('suKien.table.member'),
                    [this.$t('suKien.table.nameGroup')]: v.soLuongDoi,
                    [this.$t('suKien.table.status')]:
                        v.trangThai === '1'
                            ? this.$t('suKien.table.active')
                            : this.$t('suKien.table.inactive'),
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
                    const list = rows
                        .map((e) => ({
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
                        }))
                        .filter((e) => e.isDelete === '0')

                    const unique = {}

                    list.forEach((e) => {
                        const [timeStr, dateStr] = e.ngayTao.split(' ')
                        const [d, m, y] = dateStr.split('/')
                        const converted = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}T${timeStr}`

                        const newDate = new Date(converted)

                        if (!unique[e.ma]) {
                            unique[e.ma] = e
                        } else {
                            const [oldTime, oldDateStr] = unique[e.ma].ngayTao.split(' ')
                            const [od, om, oy] = oldDateStr.split('/')
                            const oldConverted = `${oy}-${om.padStart(2, '0')}-${od.padStart(2, '0')}T${oldTime}`
                            const oldDate = new Date(oldConverted)

                            if (newDate > oldDate) {
                                unique[e.ma] = e
                            }
                        }
                    })

                    this.eventList = Object.values(unique)
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
