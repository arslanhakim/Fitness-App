import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { RedBtn } from '../../../components/buttons/redBtn'
import { RedBtnD2 } from '../../../components/buttons/redBtnD2'
import { Counter } from '../../../components/counter'

export const ActivityLevel = () => {
    const navigate = useNavigate()
    const [activity_level, setactivity_level] =
        useState<string>('Sedentary')
    const location = useLocation()
    return (
        <div className="w-full p-5 sm:px-10 sm:py-6 flex flex-col justify-between h-full">
            <Counter value={6} />
            <div className="flex flex-col items-center justify-between mx-auto pt-1 sm:pt-4 md:pt-14  h-full w-full">
                <div className="Exo-Bold text-xl md:text-3xl lg:text-4xl text-white">
                    Activity Level
                </div>

                <div className="lg:space-y-2 flex flex-col items-center justify-center w-full lg:w-9/12">
                    <div className="w-full text-white grid  lg:grid-cols-3 gap-0 lg:gap-2 lg:justify-center lg:items-center lg:overflow-hidden ">
                        <div
                            onClick={() => setactivity_level('Sedentary')}
                            className={`border ${
                                activity_level === 'Sedentary'
                                    ? 'border-red'
                                    : 'border-transparent'
                            }  p-2 rounded-lg hover:border-red`}>
                            <div className="rounded-lg  cursor-pointer  px-2 xl:px-8 h-16 py-1  lg:h-24 xl:h-28 Exo-Regular text-center flex flex-col items-center justify-center bg-gradient-to-tl from-red to-gray-light bg-black-dark">
                                <div>
                                    <div className="text-sm sm:text-base md:text-lg">
                                        Sedentary
                                    </div>
                                    <div className="text-xs xl:text-sm ">
                                        Little to no exercise
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => setactivity_level('lightly activity')}
                            className={`border ${
                                activity_level === 'lightly activity'
                                    ? 'border-red'
                                    : 'border-transparent'
                            }  p-2 rounded-lg hover:border-red`}>
                            <div className="rounded-lg cursor-pointer   px-2 xl:px-8 h-16 py-1  lg:h-24 xl:h-28 Exo-Regular text-center flex flex-col items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                                <div>
                                    <div className="text-sm sm:text-base md:text-lg">
                                        Lightly activity
                                    </div>
                                    <div className="text-xs xl:text-sm">
                                        Light exercise/sports 3-5 per week
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() =>
                                setactivity_level('Moderately active')
                            }
                            className={`border ${
                                activity_level === 'Moderately active'
                                    ? 'border-red'
                                    : 'border-transparent'
                            }  p-2 rounded-lg hover:border-red`}>
                            <div className="rounded-lg cursor-pointer  px-2 xl:px-8 h-16 py-1  lg:h-24 xl:h-28 Exo-Regular text-center flex flex-col items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                                <div>
                                    <div className="text-sm sm:text-base md:text-lg">
                                        Moderately active
                                    </div>
                                    <div className="text-xs xl:text-sm">
                                        Moderate exercise/sports 3-5 per
                                        week
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-0 sm:gap-2 text-white w-full lg:w-8/12">
                        <div
                            onClick={() => setactivity_level('Very active')}
                            className={`border ${
                                activity_level === 'Very active'
                                    ? 'border-red'
                                    : 'border-transparent'
                            }  p-2 rounded-lg hover:border-red`}>
                            <div className="rounded-lg cursor-pointer  px-2 xl:px-8 h-16 py-1  lg:h-24 xl:h-28 Exo-Regular text-center  flex flex-col items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                                <div>
                                    <div className="text-sm sm:text-base md:text-lg">
                                        Very active
                                    </div>
                                    <div className="text-xs xl:text-sm">
                                        Hard exercise/sports 6-7 per week
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => setactivity_level('Extra active')}
                            className={`border ${
                                activity_level === 'Extra active'
                                    ? 'border-red'
                                    : 'border-transparent'
                            }  p-2 rounded-lg hover:border-red`}>
                            <div className="rounded-lg cursor-pointer  px-2 xl:px-8 h-16 py-1  lg:h-24 xl:h-28 Exo-Regular text-center flex flex-col items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                                <div>
                                    <div className="text-sm sm:text-base md:text-lg">
                                        Extra active
                                    </div>
                                    <div className="text-xs xl:text-sm">
                                        Hard exercise/sports 6-7 per week + physical job
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 lg:space-y-6  w-full  tect-center sm:w-1/2 lg:w-1/3">
                    <RedBtnD2
                        title="Next"
                        type="submit"
                        icon={
                            <FaArrowRight className="text-sm sm:text-base text-white" />
                        }
                        moveTo={() =>
                            navigate('/auth/fitness-level', {
                                state: {
                                    activity_level: activity_level,
                                    ...(location?.state as Object),
                                },
                            })
                        }
                    />
                    <div className="text-sm md:text-base xl:text-lg text-center">
                        <div
                            onClick={() => navigate(-1)}
                            className="text-red Exo-Bold cursor-pointer">
                            Back
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
