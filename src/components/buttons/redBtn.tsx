import React, { FC } from 'react'

type propsType = {
    icon?: React.ReactNode
    title: string
    type: 'button' | 'submit' | 'reset' | undefined
}

export const RedBtn: FC<propsType> = ({ title, icon, type }) => {
    return (
        <button
            type={type}
            className="h-12 shadow-custom lg:h-14 xl:h-15 group transition-all duration-300 2xl:h-16 px-5 text-white text-sm sm:text-base md:text-lg flex items-center justify-between w-full rounded-xl bg-gradient-to-l hover:from-red hover:to-gray-light from-gray-light to-red ">
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
