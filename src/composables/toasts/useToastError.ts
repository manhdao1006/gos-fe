import { type Ref } from 'vue'
import { POSITION, useToast } from 'vue-toastification'

export function useToastError() {
    const toast = useToast()

    const handleChangePassword = (
        matKhau: Ref<string>,
        validatePassword: (value: string) => boolean,
        errorMatKhau: Ref<string>
    ) => {
        const isValid = validatePassword(matKhau.value)
        if (!isValid) {
            toast.error(errorMatKhau.value, {
                timeout: 3000,
                position: POSITION.TOP_RIGHT
            })
        }
    }

    const handleChangeEmail = (
        email: Ref<string>,
        validateEmail: (value: string) => boolean,
        errorEmail: Ref<string>
    ) => {
        const isValid = validateEmail(email.value)
        if (!isValid) {
            toast.error(errorEmail.value, {
                timeout: 3000,
                position: POSITION.TOP_RIGHT
            })
        }
    }

    const handleChangeLinkFace = (
        linkFace: Ref<string>,
        validateLinkFace: (value: string) => boolean,
        errorLinkFace: Ref<string>
    ) => {
        const isValid = validateLinkFace(linkFace.value)
        if (!isValid) {
            toast.error(errorLinkFace.value, {
                timeout: 3000,
                position: POSITION.TOP_RIGHT
            })
        }
    }

    return { handleChangePassword, handleChangeEmail, handleChangeLinkFace }
}
