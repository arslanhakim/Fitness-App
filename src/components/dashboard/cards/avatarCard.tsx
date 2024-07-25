import React, { useState } from 'react'
import { ASSETS } from '../../../assets/path'

export const AvatarCard = ({ items }) => {
    const [menu, setmenu] = useState([
        {
            icon: ASSETS.BOTTOM_TAB.EXCELLENT,
            text: 'Dashboard',
            navigation: '/dashboard',
        },
        {
            icon: ASSETS.BOTTOM_TAB.TRAINING,
            text: 'Training',
            navigation: '/dashboard/training',
        },
        {
            icon: ASSETS.BOTTOM_TAB.CLASSES,
            text: 'Classes',
        },
        {
            icon: ASSETS.BOTTOM_TAB.NUTRITION,
            text: 'Nutrition',
        },
        {
            icon: ASSETS.BOTTOM_TAB.MENTAL_HEALTH,
            text: 'Mental Health',
        },
        {
            icon: ASSETS.BOTTOM_TAB.CHECK_IN,
            text: 'Check-In',
        },
        {
            icon: ASSETS.BOTTOM_TAB.NOTES,
            text: 'Notes',
        },
    ])
    return (
        <div className="relative group rounded-[38px] flex flex-col  border-gray-extraLight drop-shadow-lg border-[0.2px]  shadow-custom cursor-pointer h-[378px] bg-cover w-full overflow-hidden ">
            <img
                src={items.icon}
                alt={items.text}
                className="absolute h-full object-cover scale-100 group-hover:scale-105 duration-300"
            />
            <div className=" h-full flex text-white flex-col py-5 px-2 xl:px-3  justify-between bg-gradient-to-t from-black-dark to-transparent z-28 absolute  w-full ">
                <div className="text-xs Exo-Light ml-2 mt-2">{items.time}</div>
                <div className="px-4 w-full ">
                    <div className="Exo-Bold text-base sm:text-lg lg:text-xl ">
                        {/* Cardio & Abs */}
                        {items.text}
                    </div>
                    <div className="Exo-Regular text-xs sm:text-sm">
                        {items.exercises}
                    </div>
                </div>
            </div>
        </div>
    )
}
