import { useLocation, useNavigate } from 'react-router-dom'
import { RedBtn } from '../../../components/buttons/redBtn'
import { useState } from 'react'
import { RedBtnD2 } from '../../../components/buttons/redBtnD2'
import axios from 'axios'
import { showToast } from '../../../utils/functions'
import { TOAST_TYPE } from '../../../utils/constants'
import { FaArrowRight } from 'react-icons/fa'
import { Counter } from '../../../components/counter'
import LoadingBar from 'react-top-loading-bar'

export const ChoseGoal = () => {
    const [goal, setgoal] = useState<string>()
    const [error, seterror] = useState<string>()
    const [email, setemail] = useState('')
    const [loading, setloading] = useState<number>(0)
    const navigate = useNavigate()
    const location = useLocation()

    const onSubmit = () => {
        setloading(prev => prev + 40)
        var config = {
            method: 'patch',
            url: 'https://alien-app-backend.herokuapp.com/add-steps',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                goal: goal,
                ...(location.state as Object),
            },
        }
        setloading(prev => prev + 30)
        axios(config)
            .then(function (response) {
                console.log(response)
                console.log(response.status)
                if (response.status === 200) {
                    seterror('')
                    showToast(
                        'registration process completed',
                        TOAST_TYPE.success
                    )
                    setloading(prev => prev + 30)
                    console.log('success added steps')
                    navigate('/login', { state: response.data.data })
                }
            })
            .catch(function (error) {
                console.log(error)
                setloading(0)
                seterror('Error : ' + error.response.data.error)
                console.log(error.response.data.error)
                // seterror(error.message);
            })
    }

    return (
        <div className="w-full p-5 sm:px-10 sm:py-6 flex flex-col justify-between h-full">
            <LoadingBar
                color="#0091F7"
                progress={loading}
                onLoaderFinished={() => setloading(100)}
            />
            <Counter value={8} />
            <div className="flex flex-col items-center justify-between mx-auto pt-14 h-full w-full">
                <div className="Exo-Bold text-xl md:text-3xl lg:text-4xl text-white">
                    What Is Your Goal?
                </div>

                <div className="w-full text-white grid  lg:grid-cols-3 lg:gap-6 sm:w-1/2 lg:w-7/12 overflow-hidden">
                    <div
                        onClick={() => setgoal('Gain')}
                        className={`border ${
                            goal === 'Gain'
                                ? 'border-red'
                                : 'border-transparent'
                        }  p-2 rounded-lg w-full hover:border-red`}>
                        <div className="rounded-lg cursor-pointer text-xs sm:text-sm md:text-base py-4 lg:py-10 Exo-Regular text-center flex items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                            Gain
                        </div>
                    </div>
                    <div
                        onClick={() => setgoal('Lose Weight')}
                        className={`border ${
                            goal === 'Lose Weight'
                                ? 'border-red'
                                : 'border-transparent'
                        }  p-2 rounded-lg w-full hover:border-red`}>
                        <div className="rounded-lg cursor-pointer text-xs sm:text-sm md:text-base py-4 lg:py-10 Exo-Regular text-center flex items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                            Lose Weight
                        </div>
                    </div>
                    <div
                        onClick={() => setgoal('Maintain')}
                        className={`border ${
                            goal === 'Maintain'
                                ? 'border-red'
                                : 'border-transparent'
                        }  p-2 rounded-lg w-full hover:border-red`}>
                        <div className="rounded-lg cursor-pointer text-xs sm:text-sm md:text-base py-4 lg:py-10 Exo-Regular text-center flex items-center justify-center bg-gradient-to-tl from-red to-gray-light">
                            Maintain
                        </div>
                    </div>
                </div>
                <div className="space-y-3 md:space-y-4 lg:space-y-6 w-full  tect-center sm:w-1/2 lg:w-1/3 px-8">
                    <RedBtnD2
                        title="Next"
                        type="button"
                        icon={
                            <FaArrowRight className="text-sm sm:text-base text-white" />
                        }
                        moveTo={onSubmit}
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
