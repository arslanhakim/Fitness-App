import { Link, useLocation, useNavigate } from 'react-router-dom'

import ReactSlider from 'react-slider'
import { RedBtnD2 } from '../../../components/buttons/redBtnD2'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Counter } from '../../../components/counter'
export const ChoseAge = () => {
    const [age, setage] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state)
    const onMoveSlider = (value: any) => {
        console.log(value)
        setage(value)
    }

    return (
        <div className="w-full  p-5 sm:px-10 sm:py-6 flex flex-col justify-between h-full">
              <Counter value={2}/>
            <div className="flex flex-col items-center justify-between h-full mx-auto pt-14 w-full">
                <div className="Exo-Bold text-xl md:text-3xl lg:text-4xl text-white">
                    What Is Your Age?
                </div>
                <div className="w-full flex items-center justify-center sm:w-1/2 lg:w-8/12 overflow-hidden">
                    <ReactSlider
                        className="horizontal-slider text-white py-10 w-full"
                        thumbClassName="text-white bg-red bg-black h-10 w-10 rounded-full flex items-center justify-center cursor-pointer outline-none border-none"
                        trackClassName="h-1 bg-gray-extraLight my-auto mt-4 w-full mx-auto"
                        onChange={onMoveSlider}
                        renderThumb={(props, state) => (
                            <div className="bg-red shadow-md" {...props}>
                                {state.valueNow}
                            </div>
                        )}
                    />
                </div>
                <div className="space-y-3 md:space-y-4 lg:space-y-6 w-full  tect-center sm:w-1/2 lg:w-1/3 px-8">
                    <RedBtnD2
                        title="Next"
                        type="submit"
                        icon={<FaArrowRight className='text-sm sm:text-base text-white'/>}
                        moveTo={() =>
                            navigate('/auth/chose-weight', { state: {age: age , ... location?.state as Object} })
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
