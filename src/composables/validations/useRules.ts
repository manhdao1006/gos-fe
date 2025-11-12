import { ref } from 'vue'
import type { Composer } from 'vue-i18n'

export const useRules = ($t: Composer['t']) => {
    const errorMatKhau = ref('')
    const errorEmail = ref('')
    const errorLinkFace = ref('')

    const validatePassword = (value: string): boolean => {
        if (value.length < 8) {
            errorMatKhau.value = $t('message.valid.passwordMin8Chars') as string
            return false
        } else if (!/[A-Z]/.test(value)) {
            errorMatKhau.value = $t('message.valid.passwordUppercase') as string
            return false
        } else if (!/[0-9]/.test(value)) {
            errorMatKhau.value = $t('message.valid.passwordNumber') as string
            return false
        } else if (!/[!@#$%^&*]/.test(value)) {
            errorMatKhau.value = $t('message.valid.passwordSpecialChar') as string
            return false
        }
        errorMatKhau.value = ''
        return true
    }

    const validateEmail = (value: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
            errorEmail.value = $t('message.valid.invalidEmail') as string
            return false
        }
        errorEmail.value = ''
        return true
    }

    const validateLinkFace = (value: string): boolean => {
        if (!/^https?:\/\/(www\.)?facebook\.com\/.+$/i.test(value)) {
            errorLinkFace.value = $t('message.valid.invalidLinkFace') as string
            return false
        }
        errorLinkFace.value = ''
        return true
    }

    return {
        errorMatKhau,
        errorEmail,
        errorLinkFace,
        validatePassword,
        validateEmail,
        validateLinkFace
    }
}
