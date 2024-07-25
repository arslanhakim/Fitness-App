import React, { useState } from 'react'
import { FaCalendar, FaCalendarAlt, FaPlus, FaTimes } from 'react-icons/fa'
import { Dashboard } from '..'
import { ASSETS } from '../../../assets/path'
import { RedBtnD2 } from '../../../components/buttons/redBtnD2'
import { Listcard } from '../../../components/dashboard/cards/Listcard'

export const Main = () => {
    const [List, setList] = useState([
        {
            title: 'Mood Tracker for Today',
            des: 'After workout at home, I feel relaxed.',
            subdes: 'Good',
            time: '',
            completed: null,
            buttonStatus: false,
        },
        {
            title: 'Workout Reminder',
            des: 'Walking lunges, 10 reps on each leg',
            subdes: 'Good',
            time: '7:45 PM',
            completed: false,
            buttonStatus: false,
        },
        {
            title: 'Intake Water',
            des: 'intake 2 glass of water in the morning',
            subdes: 'Good',
            time: '7:30 AM',
            completed: false,
            buttonStatus: false,
        },
        {
            title: 'Gym Joining',
            des: 'I have to join Alien Fitness gym in next week',
            subdes: 'Good',
            time: '4:00 PM',
            completed: false,
            buttonStatus: false,
        },
    ])
    const [modal, setmodal] = useState(false)
    const onUpdateList = (index: any) => {
        console.log(index)
        const _List = [...List]
        _List[index].completed = !_List[index].completed
        // console.log(_List[index])
        setList(_List)
    }

    const onButtonStatus = (index: any) => {
        console.log(index)
        const _List = [...List]
        _List[index].buttonStatus = !_List[index].buttonStatus
        // console.log(_List[index])
        setList(_List)
    }

    const [moods, setmoods] = useState([
        {
            img: ASSETS.MODAL.MOODS.EXCELLENT_,
            text: 'Excellent',
        },
        {
            img: ASSETS.MODAL.MOODS.HAPPY,
            text: 'Happy',
        },
        {
            img: ASSETS.MODAL.MOODS.CALM,
            text: 'Calm',
        },
        {
            img: ASSETS.MODAL.MOODS.ANXIOUS,
            text: 'Anxious',
        },
        {
            img: ASSETS.MODAL.MOODS.SAD,
            text: 'Sad',
        },
        {
            img: ASSETS.MODAL.MOODS.MAD,
            text: 'Mad',
        },
    ])

    return (
        <Dashboard>
            <div className="h-full w-full relative ">
                <div className="flex justify-center overflow-hidden rounded-3xl">
                    {modal && (
                        <div
                            style={{
                                backgroundImage: `url(${ASSETS.MODAL.MODAL_BG})`,
                                borderRadius: '20px',
                            }}
                            className="z-50 h-auto    bg-cover overflow-hidden bg-red absolute sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-9/12 shadow-custom mx-auto p-0">
                            <div className="text-right mt-5 opacity-40 text-3xl Exo-Light w-full flex items-center justify-end px-5">
                                <FaTimes
                                    className="cursor-pointer"
                                    onClick={() => setmodal(!modal)}
                                />
                            </div>
                            <div className="py-12 space-y-6 ">
                                <div className="flex flex-col items-center space-y-1 justify-center">
                                    <div className="Exo-Bold text-xl sm:text-2xl lg:text-3xl">
                                        How do you feel today?
                                    </div>
                                    <div className="Exo-Regular text-sm opacity-40">
                                        Rate your mood
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    {moods.map((item, index) => (
                                        <div
                                            key={index}
                                            className="space-y-2 flex flex-col items-center">
                                            <img
                                                src={item.img}
                                                alt=""
                                                className="w-16 h-16 md:w-24 md:h-24"
                                            />
                                            <div className="text-xs sm:text-xs md:text-base">
                                                {item.text}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-gray-normal text-xs sm:text-sm  relative p-3 sm:p-5 w-10/12 sm:w-8/12 mx-auto Exo-Regular ">
                                    To be content doesn’t mean you don’t desire
                                    more, it means you’re thankful for what you
                                    have and patient for what’s to come.” Tony
                                    Gaskins
                                    <div
                                        className="absolute -bottom-10 right-10 w-0 h-0 

   border-t-[50px] border-t-gray-normal
   border-r-[40px] border-r-transparent "></div>
                                </div>
                                <div className="w-1/3 mx-auto">
                                    <RedBtnD2 title="Submit" type="button" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="text-white flex justify-between w-full ">
                    <div className="">
                        <div className="Exo-Bold text-xl sm:text-2xl lg:text-3xl">
                            Hello Jessica Wilson
                        </div>
                        <div className="Exo-Light text-base sm:text-lg lg:text-xl">
                            Todays Todo list
                        </div>
                    </div>
                    <div>
                        <div className="flex space-x-4">
                            <div
                                onClick={() => setmodal(!modal)}
                                className="relative group duration-300 text-xl bg-gradient-to-l from-red to-gray-light h-10 w-10 rounded-full flex items-center justify-center">
                                <div className="absolute hidden  group-hover:flex -left-32 text-sm whitespace-nowrap w-200">
                                    Track Your Mood
                                </div>
                                <FaPlus className="cursor-pointer" />
                            </div>
                            <div className="rounded-3xl whitespace-nowrap space-x-2 text-base flex items-center justify-between bg-gray-normal px-5 py-1">
                                <FaCalendarAlt />
                                <div>24-03-2022</div>
                                {/* <input className='' type='date'/> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-10 mt-10">
                    {List.map((item, index) => (
                        <Listcard
                            item={item}
                            Index={index}
                            key={index}
                            onUpdateStatus={onUpdateList}
                            onButtonStatus={onButtonStatus}
                        />
                    ))}
                </div>
            </div>
        </Dashboard>
    )
}
