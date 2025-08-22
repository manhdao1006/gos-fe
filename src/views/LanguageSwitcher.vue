<template>
    <div class="language-switcher">
        <select v-model="locale" class="form-select w-auto">
            <option v-for="lang in languages" :key="lang.code" :value="lang.code">
                {{ lang.flag }} {{ lang.label }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
    import { computed, watch } from 'vue'
    import { useI18n } from 'vue-i18n'

    const { locale, t } = useI18n()

    const languages = computed(() => [
        { code: 'vi', label: t('LANGUAGE.VN'), flag: '🇻🇳' },
        { code: 'en', label: t('LANGUAGE.EN'), flag: '🇺🇸' }
    ])

    watch(locale, (newLang) => {
        localStorage.setItem('lang', newLang)
    })

    const savedLang = localStorage.getItem('lang')
    if (savedLang) {
        locale.value = savedLang
    }
</script>

<style scoped>
    .language-switcher select {
        cursor: pointer;
        font-weight: 500;
    }
</style>
