import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ASSETS } from '../../../assets/path'
import { RedBtnD2 } from '../../../components/buttons/redBtnD2'
import { Counter } from '../../../components/counter'
export const ChoseGender = () => {
    const navigate = useNavigate()
    const [gender, setgender] = useState('')
    const location = useLocation()
    console.log(location)
    return (
        <div className="w-full  p-5 sm:px-10 sm:py-6 flex flex-col justify-between h-full ">
            <Counter value={1} />
            <div className="flex flex-col items-center justify-between h-full mx-auto pt-14  w-full sm:w-1/2 xl:w-1/3">
                <div className="Exo-Bold text-xl md:text-3xl lg:text-4xl text-center w-full text-white">
                    Choose Your Gender
                </div>
                <div className="flex  justify-center md:space-x-4 lg:space-x-2 w-full ">
                    <div
                        onClick={() => setgender('male')}
                        className={`border ${
                            gender === 'male'
                                ? 'border-red'
                                : 'border-transparent'
                        }  p-2 rounded-lg hover:border-red w-full`}>
                        <div
                            onClick={() => setgender('male')}
                            className="cursor-pointer border w-full bg-green-text border-black-dark h-36 sm:w-32 sm:h-36 md:h-48 text-white  md:w-44 lg:h-52 lg:w-full  rounded-2xl bg-gradient-to-b from-gray-light to-red  flex flex-col justify-between p-2 sm:p-5">
                            <div className="w-full flex items-end justify-end text-xl text-white"></div>
                            <img
                                src={ASSETS.LOGIN.GENDER.MALE}
                                alt=""
                                className="h-10 w-10 sm:h-14 sm:w-14 md:w-16 md:h-16 self-center"
                            />
                            <div className="text-sm sm:text-base md:text-xl text-center Exo-Regular">
                                Male
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => setgender('female')}
                        className={`border ${
                            gender === 'female'
                                ? 'border-red'
                                : 'border-transparent'
                        }  p-2 rounded-lg hover:border-red w-full`}>
                    <div
                        onClick={() => setgender('female')}
                        className="cursor-pointer h-36 w-full sm:w-32 border border-black-dark sm:h-36 md:h-48 text-white  md:w-44 lg:h-52 lg:w-full  rounded-2xl bg-gradient-to-b from-gray-light to-red flex flex-col justify-between p-2 sm:p-5">
                        <div className="w-full Exo-Regular flex items-end justify-end text-xl text-transparent"></div>
                        <img
                            src={ASSETS.LOGIN.GENDER.FEMALE}
                            alt=""
                            className="h-10 w-10 sm:h-14 sm:w-14 md:w-16 md:h-16 self-center"
                        />
                        <div className="text-sm sm:text-base md:text-xl text-center Exo-Regular">
                            Female
                        </div>
                    </div>
                    </div>
                </div>
                <div className="space-y-3 md:space-y-4 lg:space-y-4 xl:space-y-6 w-full  tect-center px-3">
                    <RedBtnD2
                        title="Next"
                        type="submit"
                        icon={
                            <FaArrowRight className="text-sm sm:text-base text-white" />
                        }
                        moveTo={() =>
                            navigate('/auth/chose-age', {
                                state: {
                                    gender: gender,
                                    ...(location.state as Object),
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
