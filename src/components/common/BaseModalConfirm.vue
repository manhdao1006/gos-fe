<template>
    <div v-if="show" class="modal-overlay">
        <div class="modal-dialog-custom">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white p-3">
                    <h5 class="modal-title">{{ title }}</h5>
                    <button
                        type="button"
                        class="btn-close btn-close-white"
                        @click="$emit('update:show', false)"
                    ></button>
                </div>
                <div class="modal-body p-3">
                    <p>{{ message }}</p>
                </div>
                <div class="modal-footer mb-3 me-3">
                    <button class="btn btn-secondary" @click="$emit('update:show', false)">
                        Hủy
                    </button>
                    <button class="btn btn-danger ms-3" @click="$emit('confirm')">
                        {{ confirmText || 'Xác nhận' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            show: { type: Boolean, default: false },
            title: { type: String, default: 'Xác nhận' },
            message: { type: String, default: 'Bạn có chắc?' },
            confirmText: { type: String, default: 'Xác nhận' }
        }
    }
</script>

<style scoped>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    .modal-dialog-custom {
        max-width: 400px;
        width: 100%;
    }
    .modal-content {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    .modal-header {
        border-top-left-radius: 8px !important;
        border-top-right-radius: 8px !important;
    }
</style>
