import { ASSETS } from '../../assets/path'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { LogoComponent } from '../../components/Logo'
export const LoginType = () => {
    return (
        <div
            style={{ backgroundImage: `url(${ASSETS.LOGIN.BG_IMAGE})` }}
            className="min-h-screen h-screen bg-cover bg-black-dark bg-no-repeat flex flex-col sm:items-center sm:justify-between py-6 xl:py-8 2xl:py-10">
            <div className="flex flex-col items-center justify-center space-y-6 flex-1">
                <LogoComponent/>
                <div className="space-y-4 sm:space-y-6 text-center">
                    <div className="Exo-Bold text-xl md:text-3xl lg:text-4xl text-white">
                        Please Login As
                    </div>
                    <div className="grid grid-cols-2 gap-8 py-0">
                        <Link to="/login" className="w-24 h-28 sm:w-32 sm:h-36 md:h-52  border border-black-dark hover:border hover:border-gray-extraLight shadow-custom text-white  md:w-48 xl:h-56 xl:w-52  rounded-2xl bg-gradient-to-br from-red to-gray-light flex flex-col justify-between p-2 sm:p-5">
                            <div className="w-full flex items-end justify-end text-xl text-white">
                                <FaArrowRight />
                            </div>
                            <img
                                src={ASSETS.LOGIN.USER}
                                alt=""
                                className="h-10 w-10 sm:h-14 sm:w-14 md:w-16 md:h-16 self-center"
                            />
                            <div className="text-sm sm:text-base md:text-xl text-center Exo-Regular">
                                User
                            </div>
                        </Link>
                        <div className="w-24 h-28 sm:w-32 border border-black-dark hover:border group hover:border-gray-extraLight shadow-custom sm:h-36 md:h-52 text-white  md:w-48 xl:h-56 xl:w-52  rounded-2xl bg-gradient-to-b from-gray-light to-red flex flex-col justify-between p-2 sm:p-5">
                            <div className="w-full Exo-Regular flex items-end justify-end text-xl text-transparent duration-300 group-hover:text-white">
                                <FaArrowRight />
                            </div>
                            <img
                                src={ASSETS.LOGIN.TRAINER}
                                alt=""
                                className="h-10 w-10 sm:h-14 sm:w-14 md:w-16 md:h-16 self-center"
                            />
                            <div className="text-sm sm:text-base md:text-xl text-center Exo-Regular">
                                Trainer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-x-1 text-sm md:text-base xl:text-lg text-center">
                <span className="text-white Exo-Regular">
                    Didn't have an account?{' '}
                </span>
                <Link to="/auth/register" className="text-red Exo-Bold">
                    Register Now
                </Link>
            </div>
        </div>
    )
}
