import React, { useState } from 'react'
import { Dashboard } from '../..'
import { ASSETS } from '../../../../assets/path'
import { RedBtnD2 } from '../../../../components/buttons/redBtnD2'

export const Nutrition = () => {
    return (
        <Dashboard>
            <div className="h-full w-full">
                <div className="text-white flex justify-between w-full ">
                    <div className="flex space-x-2">
                        <div className="Exo-Bold text-xl sm:text-2xl lg:text-3xl">
                            Meal Plans
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-4  ">
                        <RedBtnD2
                            title="Meal Tracker"
                            type="button"
                            styles="h-[63px]  rounded-3xl sm:w-[150px] sm:text-  lg:h-11 xl:h-12 2xl:h-13   px-0 lg:w-[205px]  "
                        />
                        <RedBtnD2
                            title="Shopping List"
                            type="button"
                            styles="h-[63px]  rounded-3xl   lg:h-11 xl:h-12 2xl:h-13   px-0 w-[205px] "
                        />
                        <RedBtnD2
                            title="Meal Progress"
                            type="button"
                            styles="h-[63px]  rounded-3xl   lg:h-11 xl:h-12 2xl:h-13   px-0 w-[205px] "
                        />
                        <div className="h-[63px]  rounded-3xl h-10 lg:h-11 xl:h-12 2xl:h-13  px-0 w-[205px] "></div>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}
