import React, { FC } from 'react'
import { ASSETS } from '../../../assets/path'
import { BsThreeDots } from 'react-icons/bs'

type propsType = {
    item: any
    onUpdateStatus: any
    Index: number,
    onButtonStatus: any,
}

export const Listcard: FC<propsType> = ({
    item,
    onUpdateStatus,
    Index,
    onButtonStatus,
}) => {
    return (
        <div className="rounded-lg sm:h-32  overflow-hidden  sm:rounded-2xl lg:rounded-3xl flex items-center shadow-custom border-2 border-gray-extraLight bg-gray-bottomNav">
            <div className="w-32 h-full -ml-1 sm:w-44 sm:h-32 md:w-44 flex items-center justify-center rounded-r-lg sm:rounded-r-2xl lg:roundedr-r-3xl border-2 border-gray-extraLight">
                <img
                    onClick={() => onUpdateStatus(Index)}
                    src={
                        item.completed != null
                            ? item.completed
                                ? ASSETS.TODO_LIST.COMPLETE_HABIT
                                : ASSETS.TODO_LIST.INCOMPLETE_HABIT
                            : ASSETS.BOTTOM_TAB.EXCELLENT
                    }
                    className={`${
                        item.completed === null
                            ? 'w-14 h-14 cursor-pointer'
                            : 'w-8 h-8 cursor-pointer'
                    }`}
                />
            </div>
            <div className="h-full py-4 px-4 flex justify-between w-full ">
                <div>
                    <div className="Exo-Bold text-sm lg:text-base">
                        {item.title}
                    </div>
                    <div className="Exo-Regular text-xs lg:text-xs opacity-70">
                        {item.des}
                    </div>
                    <div className="Exo-Regular text-xs lg:text-xs  mt-6">
                        {item.time === '' ? (
                            <div className="opacity-40">Good</div>
                        ) : (
                            <div className="flex space-x-1 ">
                                <div className="opacity-40">To Do |</div>
                                <div className="text-white opacity-50">
                                    {item?.time}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className=" text-right space-y-2">
                    <div className="text-3xl  w-full flex justify-end opacity-70">
                        <BsThreeDots
                            className="cursor-pointer"
                            onClick={() => onButtonStatus(Index)}
                        />
                    </div>
                    {item.buttonStatus ? (
                        <div className="space-x-2 flex">
                            <img
                                src={ASSETS.TODO_LIST.DELETE_HABITS}
                                alt=""
                                className="w-8 h-8 md:w-10 md:h-10 2xl:h-12 2xl:w-12 cursor-pointer"
                            />
                            <img
                                src={ASSETS.TODO_LIST.EDIT_HABITS}
                                alt=""
                                className="w-8 h-8 md:w-10 md:h-10 2xl:h-12 2xl:w-12 cursor-pointer"
                            />
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    )
}
