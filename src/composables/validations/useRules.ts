import { ref } from 'vue'

export const useRules = () => {
    const errorMatKhau = ref('')
    const errorEmail = ref('')
    const errorLinkFace = ref('')

    const validatePassword = (value: string): boolean => {
        if (value.length < 8) {
            errorMatKhau.value = 'Mật khẩu phải có ít nhất 8 ký tự'
            return false
        } else if (!/[A-Z]/.test(value)) {
            errorMatKhau.value = 'Mật khẩu phải chứa ít nhất 1 chữ hoa'
            return false
        } else if (!/[0-9]/.test(value)) {
            errorMatKhau.value = 'Mật khẩu phải chứa ít nhất 1 chữ số'
            return false
        } else if (!/[!@#$%^&*]/.test(value)) {
            errorMatKhau.value = 'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt'
            return false
        }
        errorMatKhau.value = ''
        return true
    }

    const validateEmail = (value: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
            errorEmail.value = 'Email không hợp lệ'
            return false
        }
        errorEmail.value = ''
        return true
    }

    const validateLinkFace = (value: string): boolean => {
        if (!/^https?:\/\/(www\.)?facebook\.com\/.+$/i.test(value)) {
            errorLinkFace.value = 'Link Facebook không hợp lệ'
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
