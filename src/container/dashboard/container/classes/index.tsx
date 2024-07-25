import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Dashboard } from '../..'
import { AvatarCard } from '../../../../components/dashboard/cards/avatarCard'
import { ClassesCard } from '../../../../components/dashboard/cards/classesCard'
import { Listcard } from '../../../../components/dashboard/cards/Listcard'
import { SearchBar } from '../../../../components/dashboard/searchBar'
import { ASSETS } from '../../../../assets/path'

export const Classes = () => {
    const [List, setList] = useState([
        {
            icon: ASSETS.TRAINING.CLINT,
            text: 'Zumba',
            exercises: 'Full Body Gainer',
            time: '15 min',
        },
        {
            icon: ASSETS.TRAINING.ROPE,
            text: 'Dance',
            exercises: 'Weight Loss',
            time: '02 min',
        },

        {
            icon: ASSETS.TRAINING.MEDICINE,
            text: 'Dance',
            exercises: 'Strength Training',
            time: '37 min',
        },
        {
            icon: ASSETS.TRAINING.BRUNETTE,
            text: 'Yoga',
            exercises: 'Fit & Strong',
            time: '15 min',
        },

        {
            icon: ASSETS.TRAINING.MODAL_POSE,
            text: 'Zumba',
            exercises: 'Fat Loss',
            time: '30 min',
        },
        {
            icon: ASSETS.TRAINING.SINGLET,
            text: 'Treadmil Running',
            exercises: 'Trealmill Running',
            time: '15 min',
        },
        {
            icon: ASSETS.TRAINING.MAN,
            text: 'Cardio & Core ',
            exercises: 'Weight Lifting',
            time: '30 min',
        },
        {
            icon: ASSETS.TRAINING.TRAINI,
            text: 'Stretch',
            exercises: 'Strong Shoulder',
            time: '45 min',
        },

        {
            icon: ASSETS.TRAINING.MUSCLE,
            text: 'Zumba',
            exercises: 'Dumbbell Curl',
            time: '15 min',
        },

        {
            icon: ASSETS.TRAINING.ELASTIC,
            text: 'Zumba',
            exercises: 'Body Stretch',
            time: '30 min',
        },
        {
            icon: ASSETS.TRAINING.CLINT,
            text: 'Zumba',
            exercises: 'Full Body Gainer',
            time: '15 min',
        },
        {
            icon: ASSETS.TRAINING.ROPE,
            text: 'Dance',
            exercises: 'Weight Loss',
            time: '02 min',
        },

        {
            icon: ASSETS.TRAINING.MEDICINE,
            text: 'Dance',
            exercises: 'Strength Training',
            time: '37 min',
        },
        {
            icon: ASSETS.TRAINING.BRUNETTE,
            text: 'Yoga',
            exercises: 'Fit & Strong',
            time: '15 min',
        },

        {
            icon: ASSETS.TRAINING.MODAL_POSE,
            text: 'Zumba',
            exercises: 'Fat Loss',
            time: '30 min',
        },
    ])
    const [category, setcategory] = useState([
        'All',
        'Zumba',
        'Dance',
        'Yoga',
        'Step',
        'Cardio & Core',
        'Stretch',
    ])
    return (
        <Dashboard>
            <div className="h-full w-full">
                <div className="text-white flex justify-between w-full ">
                    <div className="flex items-center space-x-2">
                        <div className="Exo-Bold text-xl sm:text-2xl lg:text-3xl mr-[10px]">
                            Classes
                        </div>
                        <div className="rounded-2xl bg-gray-normal px-3 text-sm h-6 flex items-center justify-center   ">
                            30
                        </div>
                    </div>
                    <SearchBar />
                </div>
                <div className="flex items-center w-full justify-end mt-5">
                    <div className="w-1/2 flex items-center justify-between">
                        {category.map((item, index) => (
                            <div
                                className="text-sm cursor-pointer xl:text-base Exo-Regular first:text-red"
                                key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="text fixed bottom-20 z-10 right-10 bg-gradient-to-l from-red to-gray-light h-10 w-10 rounded-full flex items-center justify-center">
                    <FaPlus />
                </div> */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  mt-10 gap-9   ">
                    {List.map((item, index) => (
                        <ClassesCard key={index} items={item} />
                    ))}
                </div>
            </div>
        </Dashboard>
    )
}
