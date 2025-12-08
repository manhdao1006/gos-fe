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
                                    :disabled="isEdit && field.disableOnEdit"
                                    @input="
                                        $emit('update:modelValue', {
                                            ...modelValue,
                                            [field.key]: $event.target.value
                                        })
                                    "
                                />

                                <input
                                    v-else-if="field.type === 'date'"
                                    v-model="localModel[field.key]"
                                    type="date"
                                    class="form-control"
                                    :required="field.required || false"
                                    :disabled="isEdit && field.disableOnEdit"
                                />

                                <input
                                    v-else-if="field.type === 'datetime'"
                                    v-model="localModel[field.key]"
                                    type="datetime-local"
                                    class="form-control"
                                    :required="field.required || false"
                                    :disabled="isEdit && field.disableOnEdit"
                                    @input="emitModel"
                                    @change="$emit('date-change')"
                                />

                                <template v-if="field.type === 'file'">
                                    <input
                                        type="file"
                                        class="form-control"
                                        :required="field.required || false"
                                        @change="onFileChange($event, field.key)"
                                        :disabled="isEdit && field.disableOnEdit"
                                        :data-key="field.key"
                                    />

                                    <div
                                        v-if="
                                            filePreviews[field.key] ||
                                            (isEdit &&
                                                localModel[field.key] &&
                                                typeof localModel[field.key] === 'string')
                                        "
                                        class="image-wrapper mt-2"
                                    >
                                        <img
                                            :src="filePreviews[field.key] || localModel[field.key]"
                                            class="preview-image"
                                            @click="
                                                openImageViewer(
                                                    filePreviews[field.key] || localModel[field.key]
                                                )
                                            "
                                        />

                                        <div class="remove-btn" @click="removeImage(field.key)">
                                            ×
                                        </div>
                                    </div>
                                </template>

                                <select
                                    v-else-if="field.type === 'select'"
                                    v-model="localModel[field.key]"
                                    class="form-select"
                                    :required="field.required || false"
                                    :disabled="isEdit && field.disableOnEdit"
                                >
                                    <option
                                        v-for="op in field.options"
                                        :key="op.value"
                                        :value="op.value"
                                    >
                                        {{ $t(op.label) }}
                                    </option>
                                </select>

                                <textarea
                                    v-else-if="field.type === 'textarea'"
                                    v-model="localModel[field.key]"
                                    class="form-control"
                                    :required="field.required || false"
                                    rows="5"
                                ></textarea>

                                <ckeditor
                                    v-else-if="field.type === 'ckeditor'"
                                    :editor="Editor"
                                    v-model="localModel[field.key]"
                                    class="w-100"
                                ></ckeditor>
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
        <div v-if="showImageViewer" class="image-viewer-overlay" @click="closeImageViewer">
            <img :src="viewerImage" class="image-viewer-img" />
        </div>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

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
                Editor: ClassicEditor,
                filePreviews: {},
                showImageViewer: false,
                viewerImage: null,
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
            emitModel() {
                this.$emit('update:modelValue', this.localModel)
            },
            submitForm() {
                this.$emit('submit', { ...this.localModel })
            },
            openImageViewer(imgUrl) {
                this.viewerImage = imgUrl
                this.showImageViewer = true
            },
            closeImageViewer() {
                this.showImageViewer = false
            },
            onFileChange(event, key) {
                const file = event.target.files[0]
                if (file) {
                    this.localModel[key] = file

                    this.filePreviews[key] = URL.createObjectURL(file)
                } else {
                    this.localModel[key] = null
                    this.filePreviews[key] = null
                }
            },
            removeImage(key) {
                this.localModel[key] = null
                this.filePreviews[key] = null

                const input = this.$el.querySelector(`input[type="file"][data-key="${key}"]`)
                if (input) input.value = null
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

    .image-wrapper {
        position: relative;
        display: inline-block;
        max-height: 200px;
    }

    .preview-image {
        max-height: 200px;
        object-fit: contain;
        border-radius: 6px;
        border: 1px solid #ddd;
    }

    .remove-btn {
        position: absolute;
        top: 4px;
        right: 4px;
        background: rgba(255, 0, 0, 0.85);
        color: white;
        border: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
        padding: 0;
    }

    .image-viewer-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        cursor: zoom-out;
    }

    .image-viewer-img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        animation: fadeIn 0.2s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .preview-image {
        cursor: zoom-in;
    }
</style>
