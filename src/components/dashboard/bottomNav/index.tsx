import React, { useState } from 'react'
import { ASSETS } from '../../../assets/path'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

export const BottomNav = () => {
    const navigate = useNavigate()
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
            navigation: '/dashboard/classes',
        },
        {
            icon: ASSETS.BOTTOM_TAB.NUTRITION,
            text: 'Nutrition',
            navigation: '/dashboard/nutrition',
        },
        {
            icon: ASSETS.BOTTOM_TAB.MENTAL_HEALTH,
            text: 'Mental Health',
            navigation: '/dashboard/mentalHealth',
        },
        {
            icon: ASSETS.BOTTOM_TAB.CHECK_IN,
            text: 'Check-In',
            navigation: '/dashboard/checkIn',
        },
        {
            icon: ASSETS.BOTTOM_TAB.NOTES,
            text: 'Notes',
            navigation: '/dashboard/notes',
        },
    ])

    return (
        <div className="bottom-0 fixed shadow-custom h-16 px-4 py-1 flex items-center justify-between rounded-tl-3xl rounded-tr-3xl bg-gra bg-gray-bottomNav w-full">
            <img src={ASSETS.LOGIN.LOGO} alt="" className="w-12 h-full" />
            <div className="w-7/12 flex justify-between items-center py-1">
                {menu.map((item, index) => (
                    <div key={index} className="flex flex-col space-y-1">
                        <div className="flex items-center justify-center">
                            <img
                                src={item.icon}
                                alt=""
                                className="w-6 h-6 cursor-pointer"
                                onClick={() => navigate(`${item?.navigation}`)}
                            />
                        </div>
                        <div className="text-xs Exo-Regular">{item.text}</div>
                    </div>
                ))}
            </div>
            <div className="flex space-x-6 ">
                <div className="bg-gray-normal p-2 rounded-full h-9 w-9">
                    <img
                        src={ASSETS.BOTTOM_TAB.CHAT}
                        alt=""
                        className="w-5 h-5"
                    />
                </div>
                <div className="bg-gray-normal p-2 rounded-full h-9 w-9">
                    <img
                        src={ASSETS.BOTTOM_TAB.BELL}
                        alt=""
                        className="w-5 h-5"
                    />
                </div>
                <div className=" h-9 w-9">
                    <img
                        src={ASSETS.BOTTOM_TAB.PROFILE}
                        alt=""
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    )
}
