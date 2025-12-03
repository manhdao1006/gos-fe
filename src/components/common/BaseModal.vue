<template>
    <div
        class="modal fade"
        :id="modalId"
        tabindex="-1"
        :class="{ show: showModal }"
        :style="{
            display: show ? 'block' : 'none',
            backgroundColor: show ? 'rgba(0,0,0,0.5)' : 'transparent'
        }"
    >
        <div class="modal-dialog" :class="modalSize">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title">
                        {{ isEdit ? editTitle : title }}
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        @click="$emit('update:show', false)"
                    ></button>
                </div>

                <div class="modal-body">
                    <div v-for="field in fields" :key="field.key" class="mb-3">
                        <label class="fw-bold">{{ field.label }}</label>

                        <input
                            v-if="field.type === 'text'"
                            v-model="localModel[field.key]"
                            class="form-control"
                            :placeholder="field.placeholder || ''"
                        />

                        <select
                            v-else-if="field.type === 'select'"
                            v-model="localModel[field.key]"
                            class="form-select"
                        >
                            <option v-for="op in field.options" :key="op.value" :value="op.value">
                                {{ op.label }}
                            </option>
                        </select>

                        <textarea
                            v-else-if="field.type === 'textarea'"
                            v-model="localModel[field.key]"
                            class="form-control"
                        ></textarea>
                    </div>
                </div>

                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        @click="$emit('update:show', false)"
                    >
                        Hủy
                    </button>

                    <button class="btn btn-success" @click="submitForm">
                        {{ isEdit ? 'Lưu thay đổi' : 'Thêm mới' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaseModal',
        props: {
            modalId: { type: String, required: true }, // ID modal
            show: { type: Boolean, default: false },
            title: { type: String, default: 'Thêm mới' },
            editTitle: { type: String, default: 'Chỉnh sửa' },
            isEdit: { type: Boolean, default: false },
            fields: { type: Array, required: true }, // Danh sách input
            modelValue: { type: Object, default: () => ({}) },
            size: { type: String, default: 'lg' } // sm, md, lg, xl
        },

        data() {
            return {
                localModel: {}
            }
        },

        computed: {
            modalSize() {
                return `modal-${this.size}`
            },
            showModal() {
                return this.show
            }
        },

        watch: {
            modelValue: {
                immediate: true,
                handler(val) {
                    this.localModel = { ...val }
                }
            }
        },

        methods: {
            submitForm() {
                this.$emit('submit', { ...this.localModel })
            }
        }
    }
</script>
