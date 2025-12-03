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
                <div class="flex-grow-1 ms-3 mt-3 me-3" style="width: 100%; height: 100%">
                    <div
                        class="border border-dark-subtle border-2 rounded-3 p-3 bg-white shadow-sm"
                        style="font-size: 13px"
                    >
                        <div class="text-black text-uppercase fs-5 fw-bolder text-start">
                            {{ $t('data.listUser') }}
                        </div>
                        <div class="row mb-3">
                            <div class="col-8">
                                <input
                                    v-model="searchText"
                                    type="text"
                                    class="form-control"
                                    :placeholder="$t('data.button.search')"
                                />
                            </div>
                            <div class="col-2 filter-input">
                                <select v-model="filterStatus" class="form-select">
                                    <option value="" class="text-muted">
                                        {{ $t('data.button.filter.allStatus') }}
                                    </option>
                                    <option value="1">{{ $t('data.button.filter.active') }}</option>
                                    <option value="0">
                                        {{ $t('data.button.filter.inactive') }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-2">
                                <select v-model="filterRole" class="form-select">
                                    <option value="" class="text-muted">
                                        {{ $t('data.button.filter.allRole') }}
                                    </option>
                                    <option value="admin">
                                        {{ $t('data.button.filter.admin') }}
                                    </option>
                                    <option value="thanhvien">
                                        {{ $t('data.button.filter.member') }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3 justify-content-end">
                            <div class="col-2 filter-input">
                                <button
                                    class="btn w-100 text-white"
                                    @click="openAddModal"
                                    style="background-color: #116096"
                                >
                                    <i class="fa-solid fa-plus"></i> Thêm mới
                                </button>
                            </div>
                            <div class="col-2">
                                <button class="btn btn-success w-100" @click="exportToExcel">
                                    <i class="fas fa-file-excel"></i>
                                    {{ $t('data.button.exportExcel') }}
                                </button>
                            </div>
                        </div>

                        <div class="table-responsive" style="max-height: 550px; overflow-y: auto">
                            <table
                                class="table table-striped table-bordered align-middle text-center"
                            >
                                <thead class="table-light">
                                    <tr>
                                        <th>{{ $t('data.table.no') }}</th>
                                        <th>{{ $t('data.table.taiKhoan') }}</th>
                                        <th>{{ $t('data.table.email') }}</th>
                                        <th>{{ $t('data.table.tenFace') }}</th>
                                        <th>{{ $t('data.table.vaiTro') }}</th>
                                        <th>{{ $t('data.table.nameGroup') }}</th>
                                        <th>{{ $t('data.table.status') }}</th>
                                        <th>{{ $t('data.table.createDate') }}</th>
                                        <th v-if="user.email === 'manhdao1006@gmail.com'">
                                            {{ $t('data.table.action') }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(v, index) in filteredUserList" :key="v.bienSoXe">
                                        <td>{{ index + 1 }}</td>
                                        <td class="text-start">{{ v.taiKhoan }}</td>
                                        <td class="text-start">{{ v.email }}</td>
                                        <td class="text-start">
                                            <template v-if="v.linkFace">
                                                <a
                                                    :href="v.linkFace"
                                                    target="_blank"
                                                    class="text-danger"
                                                    >{{ v.tenFace }}</a
                                                >
                                            </template>
                                            <template v-else> {{ v.tenFace }} </template>
                                        </td>
                                        <td class="text-start">
                                            {{
                                                v.vaiTro === 'admin'
                                                    ? $t('data.table.admin')
                                                    : $t('data.table.member')
                                            }}
                                        </td>
                                        <td class="text-start">{{ v.tenGroup }}</td>
                                        <td>
                                            <span
                                                class="badge"
                                                :class="
                                                    v.trangThai === '1'
                                                        ? 'bg-success'
                                                        : 'bg-secondary'
                                                "
                                            >
                                                {{
                                                    v.trangThai === '1'
                                                        ? $t('data.table.active')
                                                        : $t('data.table.inactive')
                                                }}
                                            </span>
                                        </td>
                                        <td>{{ v.ngayTao }}</td>
                                        <td v-if="user.email === 'manhdao1006@gmail.com'">
                                            <button
                                                class="btn btn-sm text-warning"
                                                @click="openEditModal(v)"
                                            >
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </button>
                                            <button
                                                class="btn btn-sm text-danger"
                                                @click="openBanModal(v)"
                                            >
                                                <i class="fa-solid fa-ban"></i>
                                            </button>
                                            <button
                                                class="btn btn-sm btn-outline-danger"
                                                @click="openDeleteModal(v)"
                                            >
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div
                                v-if="filteredUserList.length === 0"
                                class="text-center py-3 text-muted"
                            >
                                {{ $t('data.table.noData') }}
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <div>
                                {{ $t('data.pagination.display') }}
                                <select
                                    v-model.number="itemsPerPage"
                                    class="form-select d-inline w-auto mx-2"
                                >
                                    <option :value="5">5</option>
                                    <option :value="10">10</option>
                                    <option :value="20">20</option>
                                </select>
                                {{ $t('data.pagination.rowPerPage') }}
                            </div>

                            <nav>
                                <ul class="pagination mb-0">
                                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                        <button class="page-link" @click="prevPage">
                                            {{ $t('data.button.firstPage') }}
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
                                            {{ $t('data.button.lastPage') }}
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <BaseModal
            modalId="modalUser"
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
            title="Xóa người dùng"
            :message="deleteUser ? `Bạn có chắc muốn xóa người dùng ${deleteUser.taiKhoan}?` : ''"
            @confirm="confirmDelete"
        />

        <BaseModalConfirm
            v-model:show="showBanModal"
            title="Khoá người dùng"
            :message="banUser ? `Bạn có chắc muốn khoá người dùng ${banUser.taiKhoan}?` : ''"
            confirmText="Khoá"
            @confirm="confirmBan"
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

    export default {
        name: 'QuanLyNguoiDung',
        components: { BaseHeader, SidebarMenu, BaseModal, BaseModalConfirm },

        data() {
            return {
                userList: [],
                searchText: '',
                filterStatus: '',
                filterRole: '',
                sheetId: '1Uk85jm8ouKJEC3dJRfCotpYQqkKuayXm9z89OliGRrY',
                apiKey: 'AIzaSyBJOLTWvnRRegbkw1rRvr0K2dzV9SZ_Mwk',
                range: 'A:J',
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
                    { key: 'taiKhoan', label: 'Tài khoản', type: 'text' },
                    { key: 'email', label: 'Email', type: 'text' },
                    { key: 'tenFace', label: 'Tên Facebook', type: 'text' },
                    {
                        key: 'vaiTro',
                        label: 'Vai trò',
                        type: 'select',
                        options: [
                            { label: 'Admin', value: 'admin' },
                            { label: 'Thành viên', value: 'thanhvien' }
                        ]
                    },
                    {
                        key: 'trangThai',
                        label: 'Trạng thái',
                        type: 'select',
                        options: [
                            { label: 'Hoạt động', value: '1' },
                            { label: 'Không hoạt động', value: '0' }
                        ]
                    }
                ],
                showDeleteModal: false,
                deleteUser: null,
                showBanModal: false,
                banUser: null
            }
        },

        computed: {
            filteredUserList() {
                return this.userList
                    .filter((v) => {
                        const text = this.searchText.trim().toLowerCase()
                        const matchText =
                            v.taiKhoan.toLowerCase().includes(text) ||
                            v.email.toLowerCase().includes(text) ||
                            v.tenFace.toLowerCase().includes(text)

                        const matchStatus = !this.filterStatus || v.trangThai === this.filterStatus
                        const matchRole = !this.filterRole || v.vaiTro === this.filterRole

                        return matchText && matchStatus && matchRole
                    })
                    .sort((a, b) => new Date(b.ngayTao).getTime() - new Date(a.ngayTao).getTime())
            },

            totalPages() {
                return Math.ceil(this.filteredUserList.length / this.itemsPerPage)
            },

            paginatedList() {
                const start = (this.currentPage - 1) * this.itemsPerPage
                const end = start + this.itemsPerPage
                return this.filteredUserList.slice(start, end)
            }
        },

        methods: {
            openDeleteModal(user) {
                this.deleteUser = user
                this.showDeleteModal = true
            },
            confirmDelete() {
                if (!this.deleteUser) return
                console.log('Xóa:', this.deleteUser)
                this.userList = this.userList.filter((u) => u !== this.deleteUser)
                this.showDeleteModal = false
                this.deleteUser = null
                this.toast.success('Xóa thành công!')
            },

            openBanModal(user) {
                this.banUser = user
                this.showBanModal = true
            },
            confirmBan() {
                if (!this.banUser) return
                console.log('Ban:', this.banUser)
                this.banUser.trangThai = '0'
                this.showBanModal = false
                this.banUser = null
                this.toast.success('Người dùng đã bị khoá!')
            },
            openAddModal() {
                this.isEdit = false
                this.modalData = {}
                this.showModal = true
            },
            openEditModal(item) {
                this.isEdit = true
                this.modalData = { ...item }
                this.showModal = true
            },
            handleSubmit(form) {
                if (this.isEdit) {
                    console.log('UPDATE:', form)
                } else {
                    console.log('CREATE:', form)
                }
                this.showModal = false
            },
            async saveRow(v) {
                if (v._editDon < v._editTra) {
                    this.toast.error('Số lượng trả không được lớn hơn số lượng đón')
                    return
                }
                this.loading = true

                try {
                    const params = new URLSearchParams({
                        action: 'saveSoLuong',
                        bienSoXe: v.bienSoXe,
                        tenXe: v.tenXe,
                        trangThai: v.trangThai,
                        lng: v.lng,
                        lat: v.lat,
                        nhietDo: v.nhietDo,
                        maNhanVien: v.maNhanVien,
                        tenTaiXe: v.tenTaiXe,
                        soDienThoai: v.soDienThoai,
                        soLuongDon: v._editDon || 0,
                        soLuongTra: v._editTra || 0
                    }).toString()

                    const baseUrl =
                        'https://script.google.com/macros/s/AKfycbwsxM1nFX50O9haEMlt1TUE8Lj1ABvpGpwtPyLenEV3P_iiGMRtvkTd99c66uCpbcuwoQ/exec?' +
                        params

                    const res = await fetch(baseUrl)
                    const data = await res.json()

                    if (data.status === 'success') {
                        this.message = this.$t('notification.successSave')
                        this.success = true
                        this.toast.success(this.message)
                        window.location.reload()
                    } else {
                        this.message = this.$t('notification.error') + data.message
                        this.success = false
                        this.toast.error(this.message)
                        window.location.reload()
                    }
                    v.soLuongDon = v._editDon
                    v.soLuongTra = v._editTra
                    v._isEditing = false
                } catch (error) {
                    this.message = this.$t('notification.error') + error.message
                    this.success = false
                    this.toast.error(this.message)
                    window.location.reload()
                } finally {
                    this.loading = false
                    window.location.reload()
                }
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
                const data = this.filteredUserList.map((v, i) => ({
                    STT: i + 1,
                    [this.$t('data.table.taiKhoan')]: v.taiKhoan,
                    [this.$t('data.table.email')]: v.email,
                    [this.$t('data.table.tenFace')]: v.tenFace,
                    [this.$t('data.table.vaiTro')]:
                        v.vaiTro === 'admin'
                            ? this.$t('data.table.admin')
                            : this.$t('data.table.member'),
                    [this.$t('data.table.nameGroup')]: v.tenGroup,
                    [this.$t('data.table.status')]:
                        v.trangThai === '1'
                            ? this.$t('data.table.active')
                            : this.$t('data.table.inactive'),
                    [this.$t('data.table.createDate')]: v.ngayTao
                }))

                const ws = XLSX.utils.json_to_sheet(data)
                const wb = XLSX.utils.book_new()
                XLSX.utils.book_append_sheet(wb, ws, 'users')
                XLSX.writeFile(wb, 'Danh sách người dùng - GOS.xlsx')
            },

            async fetchUsers() {
                try {
                    const res = await fetch(
                        `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.range}?key=${this.apiKey}`
                    )
                    const data = await res.json()
                    if (!data.values) return

                    const rows = data.values.slice(1)
                    this.userList = rows.map((u) => ({
                        taiKhoan: u[0] || '',
                        matKhau: u[1] || '',
                        email: u[2] || '',
                        tenFace: u[3] || '',
                        linkFace: u[4] || '',
                        vaiTro: u[5] || '',
                        daCoGroup: u[6] || '',
                        tenGroup: u[7] || '',
                        ngayTao: u[8] || '',
                        trangThai: u[9] || '',
                        _isEditing: false
                    }))
                } catch (error) {
                    console.error('Lỗi tải dữ liệu:', error)
                }
            }
        },

        mounted() {
            this.fetchUsers()
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
        padding-right: 10px !important;
    }
</style>
