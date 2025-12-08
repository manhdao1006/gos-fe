import { LOAI_SU_KIEN } from './constants'

export function getLoaiSuKienLabel(value: string) {
    const found = LOAI_SU_KIEN.find((x) => x.value === value)
    return found ? found.label : ''
}
