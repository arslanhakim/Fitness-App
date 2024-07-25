import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Dashboard } from '../..'
import { AvatarCard } from '../../../../components/dashboard/cards/avatarCard'
import { Listcard } from '../../../../components/dashboard/cards/Listcard'
import { SearchBar } from '../../../../components/dashboard/searchBar'

export const Trainings = () => {
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

    return (
        <Dashboard>
            <div className="h-full w-full">
                <div className="text-white flex justify-between w-full ">
                    <div className="flex space-x-2">
                        <div className="Exo-Bold text-xl sm:text-2xl lg:text-3xl">
                            Activities
                        </div>
                        <div className="rounded-2xl bg-gray-normal px-3 text-sm h-6 flex items-center justify-center">
                            36
                        </div>
                    </div>
                    <SearchBar />
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10">
                    {List.map((item, index) => (
                        <AvatarCard key={index} />
                    ))}
                </div>
            </div>
        </Dashboard>
    )
}
