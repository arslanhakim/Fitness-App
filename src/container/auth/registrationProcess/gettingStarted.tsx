
import { Key, useEffect, useState } from 'react'
import { FaArrowCircleRight, FaArrowRight} from 'react-icons/fa'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { RedBtnD2 } from '../../../components/buttons/redBtnD2'
import { LogoComponent } from '../../../components/Logo'
import { getLocalStorage } from '../../../utils/functions'

export const GettingStarted = () => {
    const navigate = useNavigate()
    const location = useLocation() 
    
    return (
        <div className="flex flex-col items-center justify-between h-full pb-6  space-y-6 smd:space-y-12 lg:space-y-0 w-full  sm:w-1/2 lg:w-1/3 px-5 sm:px-0 text-center">
            <div className='space-y-10 pt-14 flex flex-col items-center'>
                <LogoComponent />
                <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white space-y-1">
                    <div className="Exo-Regular">{getLocalStorage('userName') || 'Jessica Martin'}</div>
                    <div className="Exo-Bold">Welcome to Alien Fitness</div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="text-sm md:text-base lg:text-lg xl:text-xl text-white Exo-Regular lg:whitespace-nowrap">
                    Everything Ready, You are just few steps away to get it
                    started.
                </div>
                <div className="space-y-1 md:space-y-2 lg:space-y-4 xl:space-y-6 w-full px-12 sm:px-16 lg:px-24 xl:px-28">
                    <RedBtnD2
                        title="Let's Start"
                        type="button"
                        moveTo={() =>
                            navigate('/auth/chose-gender', {
                                state: location.state,
                            })
                        }
                        icon={<FaArrowRight  className='text-sm sm:text-base text-white'/>}
                    />
                    <div className="text-sm md:text-base xl:text-lg">
                        <Link to="/" className="text-red Exo-Bold">
                            Skip
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
