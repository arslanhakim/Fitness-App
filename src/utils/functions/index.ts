import { toast } from 'react-toastify'
import { TOAST_TYPE } from '../constants'

import 'react-toastify/dist/ReactToastify.css'

const config = {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
}

export const showToast = (message: any, type = TOAST_TYPE.info) => {
    switch (type) {
        case TOAST_TYPE.info:
            return toast.info(message, config as Object)

        case TOAST_TYPE.success:
            return toast.success(message, config as Object)

        case TOAST_TYPE.warning:
            return toast.warning(message, config as Object)

        case TOAST_TYPE.error:
            return toast.error(message, config as Object)

        default:
            return toast.info(message, config as Object)
    }
}

export const getLocalStorage = (key: any) => {
    return localStorage.getItem(key)
}

export const setLocalStorage = (key:any, value:any) => {
    localStorage.setItem(key, value)
}

export const removeLocalStorage = (key:any) => {
    return localStorage.removeItem(key)
}

export const errorMessage = (message:any) => {
    return {
        error: true,
        message: message,
    }
}
