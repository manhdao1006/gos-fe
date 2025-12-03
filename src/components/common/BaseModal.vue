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
                <form @submit.prevent="submitForm">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title">
                            {{ isEdit ? editTitle : title }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close btn-close-white"
                            @click="$emit('update:show', false)"
                        ></button>
                    </div>

                    <div class="modal-body text-start row">
                        <template v-for="field in fields">
                            <div
                                :key="field.key"
                                class="mb-3"
                                :class="[field.col, field.padding]"
                                v-if="!field.showIf || Boolean(localModel[field.showIf])"
                            >
                                <label class="fw-bold mb-2" v-if="field.type !== 'checkbox'">
                                    {{ field.label }}
                                    <span v-if="field.required" class="text-danger">*</span>
                                </label>

                                <template v-if="field.type === 'checkbox'">
                                    <div class="d-flex align-items-center gap-2">
                                        <input
                                            type="checkbox"
                                            :id="field.key"
                                            v-model="localModel[field.key]"
                                            class="form-check-input"
                                        />
                                        <label :for="field.key" class="form-check-label fw-bold">{{
                                            field.label
                                        }}</label>
                                    </div>
                                </template>

                                <input
                                    v-if="field.type === 'text'"
                                    v-model="localModel[field.key]"
                                    class="form-control"
                                    :placeholder="field.placeholder || ''"
                                    :required="field.required || false"
                                />

                                <select
                                    v-else-if="field.type === 'select'"
                                    v-model="localModel[field.key]"
                                    class="form-select"
                                    :required="field.required || false"
                                >
                                    <option
                                        v-for="op in field.options"
                                        :key="op.value"
                                        :value="op.value"
                                    >
                                        {{ op.label }}
                                    </option>
                                </select>

                                <textarea
                                    v-else-if="field.type === 'textarea'"
                                    v-model="localModel[field.key]"
                                    class="form-control"
                                    :required="field.required || false"
                                ></textarea>
                            </div>
                        </template>
                    </div>

                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            @click="$emit('update:show', false)"
                        >
                            Hủy
                        </button>

                        <button type="submit" class="btn btn-success">Lưu</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaseModal',
        props: {
            modalId: { type: String, required: true },
            show: { type: Boolean, default: false },
            title: { type: String, default: 'Thêm mới' },
            editTitle: { type: String, default: 'Chỉnh sửa' },
            isEdit: { type: Boolean, default: false },
            fields: { type: Array, required: true },
            modelValue: { type: Object, default: () => ({}) },
            size: { type: String, default: 'lg' }
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
            },
            'localModel.daCoGroup'(newVal) {
                if (!newVal && 'tenGroup' in this.localModel) {
                    this.localModel.tenGroup = ''
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
<style scoped>
    .ps-2,
    .pe-2,
    .px-2 {
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
    }
</style>
