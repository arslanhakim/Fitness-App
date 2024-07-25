import { Link, useLocation, useNavigate } from 'react-router-dom'

import { RedBtnD2 } from '../../../components/buttons/redBtnD2'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Counter } from '../../../components/counter'
export const FitnessLevel = () => {
    const navigate = useNavigate()
    const [fitness_level, setfitness_level] = useState<string>('Beginner')
    const location = useLocation()

    return (
        <div className="w-full  p-5 sm:px-10 sm:py-6 flex flex-col justify-between h-full">
            <Counter value={7} />
            <div className="flex flex-col items-center justify-between mx-auto pt-14  h-full w-full">
                <div className="Exo-Bold text-xl md:text-3xl lg:text-4xl text-white">
                    Your Fitness Level
                </div>

                <div className="w-full text-white grid lg:grid-cols-3 lg:gap-6 sm:w-1/2 lg:w-7/12 overflow-hidden">
                    <div
                        onClick={() => setfitness_level('Beginner')}
                        className={`border ${
                            fitness_level === 'Beginner'
                                ? 'border-red'
                                : 'border-transparent'
                        }  p-2 rounded-lg w-full hover:border-red`}>
                        <div className="rounded-lg cursor-pointer text-xs sm:text-sm md:text-base py-4 lg:py-10 Exo-Regular text-center flex items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                            Beginner
                        </div>
                    </div>
                    <div
                        onClick={() => setfitness_level('Intermediate')}
                        className={`border ${
                            fitness_level === 'Intermediate'
                                ? 'border-red'
                                : 'border-transparent'
                        }  p-2 rounded-lg w-full hover:border-red`}>
                        <div className="rounded-lg cursor-pointer text-xs sm:text-sm md:text-base py-4 lg:py-10 Exo-Regular text-center flex items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                            Intermediate
                        </div>
                    </div>
                    <div
                        onClick={() => setfitness_level('Advanced')}
                        className={`border ${
                            fitness_level === 'Advanced'
                                ? 'border-red'
                                : 'border-transparent'
                        }  p-2 rounded-lg w-full hover:border-red`}>
                        <div className="rounded-lg cursor-pointer text-xs sm:text-sm md:text-base py-4 lg:py-10 Exo-Regular text-center flex items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                            Advanced
                        </div>
                    </div>
                </div>
                <div className="space-y-3 md:space-y-4 lg:space-y-6 w-full  tect-center sm:w-1/2 lg:w-1/3 px-8">
                    <RedBtnD2
                        title="Next"
                        type="submit"
                        icon={
                            <FaArrowRight className="text-sm sm:text-base text-white" />
                        }
                        moveTo={() =>
                            navigate('/auth/chose-goal', {
                                state: {
                                    fitness_level: fitness_level,
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
