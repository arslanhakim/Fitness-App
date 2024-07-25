import React from 'react'
import { ASSETS } from '../../assets/path'

export const LogoComponent = () => {
    return (
        <img
            src={ASSETS.LOGIN.LOGO}
            alt=""
            className="h-20 w-16 sm:w-20 sm:h-24 md:w-24 md:h-28 lg:w-44 lg:h-48"
        />
    )
}
