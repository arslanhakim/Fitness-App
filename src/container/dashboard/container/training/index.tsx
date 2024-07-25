import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Dashboard } from '../..'
import { AvatarCard } from '../../../../components/dashboard/cards/avatarCard'
import { Listcard } from '../../../../components/dashboard/cards/Listcard'
import { SearchBar } from '../../../../components/dashboard/searchBar'
import { ASSETS } from '../../../../assets/path'

export const Training = () => {
    const [List, setList] = useState([
        {
            title: 'Mood Tracker for Today',
            des: 'After workout at home, I feel relaxed.',
            subdes: 'Good',
        },
        {
            title: 'Mood Tracker for Today',
            des: 'After workout at home, I feel relaxed.',
            subdes: 'Good',
        },
        {
            title: 'Mood Tracker for Today',
            des: 'After workout at home, I feel relaxed.',
            subdes: 'Good',
        },
        {
            title: 'Mood Tracker for Today',
            des: 'After workout at home, I feel relaxed.',
            subdes: 'Good',
        },
        {
            title: 'Mood Tracker for Today',
            des: 'After workout at home, I feel relaxed.',
            subdes: 'Good',
        },
        {
            title: 'Mood Tracker for Today',
            des: 'After workout at home, I feel relaxed.',
            subdes: 'Good',
        },
        {
            title: 'Mood Tracker for Today',
            des: 'After workout at home, I feel relaxed.',
            subdes: 'Good',
        },
        {
            title: 'Mood Tracker for Today',
            des: 'After workout at home, I feel relaxed.',
            subdes: 'Good',
        },
        {
            title: 'Mood Tracker for Today',
            des: 'After workout at home, I feel relaxed.',
            subdes: 'Good',
        },
        {
            title: 'Mood Tracker for Today',
            des: 'After workout at home, I feel relaxed.',
            subdes: 'Good',
        },
    ])
    const [training, setTraining] = useState([
        {
            icon: ASSETS.TRAINING.CLINT,
            text: 'Cardio & Abs',
            exercises: '05 Exercises',
            time: '15 min',
        },
        {
            icon: ASSETS.TRAINING.ROPE,
            text: 'Dynamic Warm Up',
            exercises: '05 Exercises',
            time: '02 min',
        },

        {
            icon: ASSETS.TRAINING.MEDICINE,
            text: 'Leg Tings',
            exercises: '05 Exercises',
            time: '37 min',
        },
        {
            icon: ASSETS.TRAINING.BRUNETTE,
            text: 'Peaches "R" Us',
            exercises: '02 Exercises',
            time: '15 min',
        },

        {
            icon: ASSETS.TRAINING.MODAL_POSE,
            text: 'Dumbbell Pull',
            exercises: '07 Days Activity',
            time: '30 min',
        },
        {
            icon: ASSETS.TRAINING.SINGLET,
            text: 'Trealmill Running',
            exercises: 'Daily Activity',
            time: '15 min',
        },
        {
            icon: ASSETS.TRAINING.MAN,
            text: 'Weight Lifting ',
            exercises: '07 Days Activity',
            time: '30 min',
        },
        {
            icon: ASSETS.TRAINING.TRAINI,
            text: 'Strong Shoulder',
            exercises: '30 Days Activity',
            time: '45 min',
        },

        {
            icon: ASSETS.TRAINING.MUSCLE,
            text: 'Dumbbell Curl',
            exercises: 'Daily Activity',
            time: '15 min',
        },

        {
            icon: ASSETS.TRAINING.ELASTIC,
            text: 'Body Stretch',
            exercises: '07 Days Activity',
            time: '30 min',
        },
        {
            icon: ASSETS.TRAINING.CLINT,
            text: 'Cardio & Abs',
            exercises: '05 Exercises',
            time: '15 min',
        },
        {
            icon: ASSETS.TRAINING.ROPE,
            text: 'Dynamic Warm Up',
            exercises: '05 Exercises',
            time: '02 min',
        },

        {
            icon: ASSETS.TRAINING.MEDICINE,
            text: 'Leg Tings',
            exercises: '05 Exercises',
            time: '37 min',
        },
        {
            icon: ASSETS.TRAINING.BRUNETTE,
            text: 'Peaches "R" Us',
            exercises: '02 Exercises',
            time: '15 min',
        },

        {
            icon: ASSETS.TRAINING.MODAL_POSE,
            text: 'Dumbbell Pull',
            exercises: '07 Days Activity',
            time: '30 min',
        },
    ])

    return (
        <Dashboard>
            <div className="h-full w-full">
                <div className="text-white flex justify-between w-full ">
                    <div className="flex space-x-2">
                        <div className="Exo-Bold text-xl sm:text-2xl lg:text-3xl">
                            Training
                        </div>
                        <div className="rounded-2xl bg-gray-normal px-3 text-sm h-6 flex items-center justify-center">
                            40
                        </div>
                    </div>
                    <SearchBar />
                </div>
                <div className="text fixed bottom-20 z-10 right-10 bg-gradient-to-l from-red to-gray-light h-10 w-10 rounded-full flex items-center justify-center cursor-pointer">
                    <FaPlus />
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-9 mt-10">
                    {training.map((item, index) => (
                        <AvatarCard key={index} items={item} />
                    ))}
                </div>
            </div>
        </Dashboard>
    )
}
