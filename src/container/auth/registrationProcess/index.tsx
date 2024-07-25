import { ASSETS } from '../../../assets/path'
// import { FaEnvelope, FaLock } from 'react-icons/fa'
// import { InputWithLabel } from '../../../components/inputWithLabel'
// import { RedBtn } from '../../../components/buttons/redBtn'
import { Outlet } from 'react-router-dom'

export const Auth = () => {
    return (
        <div
            style={{ backgroundImage: `url(${ASSETS.LOGIN.BG_IMAGE})` }}
            className="sm:min-h-screen h-screen bg-cover bg-center max-h-screen sm:overflow-hidden bg-black-dark bg-no-repeat px-4 sm:px-10 flex flex-col items-center ">
            <Outlet />
        </div>
    )
}
