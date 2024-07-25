import { Link, useLocation, useNavigate } from 'react-router-dom'
import { RedBtn } from '../../../components/buttons/redBtn'
import ReactSlider from 'react-slider'
import { RedBtnD2 } from '../../../components/buttons/redBtnD2'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Counter } from '../../../components/counter'

export const DietryPreference = () => {
    const navigate = useNavigate()
    const [dietry_preference, setdietry_preference] =
        useState<string>('standard')

    const location = useLocation()

    return (
        <div className="w-full p-5 sm:px-10 sm:py-6 flex flex-col justify-between h-full ">
            <Counter value={5} />
            <div className="flex flex-col items-center justify-between mx-auto pt-14   h-full w-full">
                <div className="Exo-Bold text-xl md:text-3xl lg:text-4xl text-white">
                    Dietry Preference
                </div>

                <div className="w-full text-white grid  lg:grid-cols-3 lg:gap-3 sm:w-1/2 lg:w-6/12 overflow-hidden">
                    <div
                        onClick={() => setdietry_preference('standard')}
                        className={`border ${
                            dietry_preference === 'standard'
                                ? 'border-red'
                                : 'border-transparent'
                        } hover:border-red  p-2 rounded-lg`}>
                        <div className="rounded-lg cursor-pointer text-xs sm:text-sm md:text-base py-4 lg:py-8 Exo-Regular text-center flex items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                            Standard
                        </div>
                    </div>
                    <div
                        onClick={() => setdietry_preference('vegan')}
                        className={`border ${
                            dietry_preference === 'vegan'
                                ? 'border-red'
                                : 'border-transparent'
                        } hover:border-red  p-2 rounded-lg`}>
                        <div className="rounded-lg cursor-pointer text-xs sm:text-sm md:text-base py-4 lg:py-8 Exo-Regular text-center flex items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                            Vegan
                        </div>
                    </div>
                    <div
                        onClick={() => setdietry_preference('vegetarian')}
                        className={`border ${
                            dietry_preference === 'vegetarian'
                                ? 'border-red'
                                : 'border-transparent'
                        } hover:border-red  p-2 rounded-lg`}>
                        <div className="rounded-lg cursor-pointer text-xs sm:text-sm md:text-base py-4 lg:py-8 Exo-Regular text-center flex items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                            Vegetarian
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
                            navigate('/auth/activity-level', {
                                state: {
                                    dietry_preference: dietry_preference,
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
