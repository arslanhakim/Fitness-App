import { ASSETS } from '../../../assets/path'

export const ActivityCard = () => {
    return (
        <div className="rounded-lg  sm:rounded-2xl flex shadow-custom border-2 border-gray-extraLight bg-gray-bottomNav">
            <div className="h-full w-32 bg-gray-normal flex items-center justify-center">
                <img src={ASSETS.TODO_LIST.COMPLETE_HABIT} />
            </div>
            <div className="Exo-Bold text-sm lg:text-base bg-gradient-to-l from-red to-gray-light hover:from-gray-light hover:to-red">
                American Football
            </div>
        </div>
    )
}
