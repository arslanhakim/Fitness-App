import React, { FC } from 'react'
import { ASSETS } from '../../assets/path'
import { BottomNav } from '../../components/dashboard/bottomNav'

type propsType = {
    children: React.ReactNode
}
export const Dashboard: FC<propsType> = ({ children }) => {
    return (
        <div
            style={{ backgroundImage: `url(${ASSETS.BACKGROUND.RED_BARS_BG})` }}
            className="sm:min-h-screen h-full bg-cover text-white Exo-Bold bg-center  sm:overflow-hidden bg-gray-bg bg-no-repeat ">
            <div className="px-3 sm:px-5 md:px-10 lg:px-16 py-10">{children} </div>
            <BottomNav />
        </div>
    )
}
