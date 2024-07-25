import React, { FC } from 'react'

type propsType = {
    value: number
}
export const Counter: FC<propsType> = ({ value }) => {
    return (
        <div className="rounded-full bg-red h-10 w-10 md:h-16 md:w-14 flex items-center justify-center text-white text-sm Exo-Regular">
            {value}/8
        </div>
    )
}
