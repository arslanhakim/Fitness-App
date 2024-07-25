import { ASSETS } from '../../../assets/path'

export const ClassesCard = ({ items }) => {
    return (
        <div className="relative shadow-custom group flex flex-col cursor-pointer bg-cover w-full overflow-hidden group rounded-[38px] border-gray-extraLight drop-shadow-lg border-[0.2px]      h-[378px]   ">
            <img
                src={items.icon}
                alt={items.text}
                className="absolute h-full object-cover scale-100 group-hover:scale-105 duration-300"
            />
            <div className="absolute w-full h-full flex text-white flex-col py-5 px-2 xl:px-3  justify-between z-28  bg-gradient-to-t from-black-dark to-transparent">
                <div className="text-xs Exo-Light text-transparent">
                    {items.time}
                </div>
                <div className="px-4 space-y-0.5">
                    <div className="Exo-Regular  text-xs text-gray-extraLight">
                        {items.text}
                    </div>
                    <div className="Exo-Bold text-sm sm:text-baselg:text-lg">
                        {items.exercises}
                    </div>
                </div>
            </div>
        </div>
    )
}
