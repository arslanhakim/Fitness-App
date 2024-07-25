import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type propsType = {
    icon?: React.ReactNode
    title: string
    type: 'button' | 'submit' | 'reset' | undefined
    moveTo?: string | any
    styles?: string
}

export const RedBtnD2: FC<propsType> = ({
    title,
    icon,
    type,
    moveTo,
    styles,
}) => {
    return (
        <button
            onClick={moveTo}
            type={type}
            className={` shadow-custom  group transition-all duration-300  text-white text-sm sm:text-base md:text-lg flex items-center justify-between  bg-gradient-to-l from-red to-gray-light hover:from-gray-light hover:to-red 
            ${
                styles
                    ? styles
                    : 'h-12 lg:h-14 xl:h-15 2xl:h-16 rounded-xl px-5 w-full '
            } 
            `}>
            <span className="w-10"></span>{' '}
            <span className="Exo-Bold">{title}</span>
            <div className="w-10 relative flex items-center transition-all">
                <span className="absolute duration-300 right-10 opacity-0 group-hover:opacity-100  group-hover:right-0 group-hover:text-white">
                    {icon}
                </span>
            </div>
        </button>
    )
}
