import { Link, useLocation, useNavigate } from 'react-router-dom'
import { RedBtn } from '../../../components/buttons/redBtn'
import ReactSlider from 'react-slider'
import { RedBtnD2 } from '../../../components/buttons/redBtnD2'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Counter } from '../../../components/counter'
export const ChoseWeight = () => {
    const navigate = useNavigate()

    const [weight, setweight] = useState<string>()
    const [unit, setunit] = useState<string>('kg')
    const [error, seterror] = useState('')
    const location = useLocation() 
    const onMoveSlider = (value: any) => {
        if (unit === '') return seterror('Error: Please select the unit')
        console.log(value)
        const newVal = value + ' ' + unit
        setweight(newVal)
        seterror('')
    }
    return (
        <div className="w-full  p-5 sm:px-10 sm:py-6 flex flex-col justify-between h-full">
            <Counter value={3} />
            <div className="flex flex-col items-center justify-between mx-auto pt-14  h-full w-full">
                <div className="space-y-12">
                    <div className="Exo-Bold text-xl md:text-3xl lg:text-4xl text-white">
                        Your Current Weight
                    </div>
                    <div className="flex items-center justify-center text-white space-x-2 md:space-x-4">
                        <div
                            onClick={() => setunit('kg')}
                            className={`${
                                unit === 'kg'
                                    ? 'bg-gradient-to-r from-red to-gray-light '
                                    : 'bg-gray-normal'
                            } rounded-lg cursor-pointer text-xs sm:text-sm w-20 py-2 text-center flex items-center justify-center `}>
                            Kg
                        </div>
                        <div
                            onClick={() => setunit('Lbs')}
                            className={`${
                                unit === 'Lbs'
                                    ? 'bg-gradient-to-r from-red to-gray-light '
                                    : 'bg-gray-normal'
                            } rounded-lg cursor-pointer text-xs sm:text-sm w-20 py-2 text-center flex items-center justify-center `}>
                            Lbs
                        </div>
                    </div>
                    <div className="text-red text-sm Exo-Bold text-center">
                        {error}
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-8/12 h-20 overflow-hidden">
                    <ReactSlider
                        className="horizontal-slider text-white pb-10 w-full"
                        thumbClassName="text-white bg-red text-base md:text-xl bg-black h-10 w-10 rounded-full flex items-center justify-center cursor-pointer outline-none border-none"
                        trackClassName="h-1 bg-gray-extraLight my-auto mt-4 w-full mx-auto"
                        onChange={onMoveSlider}
                        renderThumb={(props, state) => (
                            <div className="bg-red shadow-md  " {...props}>
                                {state.valueNow}
                            </div>
                        )}
                    />
                </div>
                <div className="space-y-3 md:space-y-4 lg:space-y-6 w-full  tect-center sm:w-1/2 lg:w-1/3 px-8">
                    <RedBtnD2
                        title="Next"
                        type="submit"
                        icon={
                            <FaArrowRight className="text-sm sm:text-base text-white" />
                        }
                        moveTo={() =>
                            navigate('/auth/chose-height', {
                                state: {
                                    weight: weight,
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
