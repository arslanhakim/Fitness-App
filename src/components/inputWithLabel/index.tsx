import React, { FC } from 'react'
type propsType = {
    label: string
    type: string
    name: string
    placeholder: string
    icon: React.ReactNode
    onChange: any
    onBlur: any
    touched: any
    errors: string | undefined
    value: string
}

export const InputWithLabel: FC<propsType> = ({
    label,
    type,
    placeholder,
    icon,
    name,
    onChange,
    onBlur,
    touched,
    errors,
    value,
}) => {
    return (
        <div className="space-y-1 ">
            <div className="flex h-14 2xl:h-16 bg-gray-normal items-center space-x-5 text-white px-6 py-2 rounded-xl">
                {icon}
                <div className="relative w-full">
                    <input
                        name={name}
                        type={type}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder={label}
                        id={name}
                        className="block bg-transparent rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm appearance-none  placeholder-transparent focus:outline-none focus:ring-0  peer"
                    />
                    <label
                        htmlFor={name}
                        className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                        {label}
                    </label>
                </div>
            </div>

            <div className="Exo-SemiBold h-2  text-xs text-red text-left pl-3">
                {touched && errors ? 'Error : ' + errors : ''}
            </div>
        </div>
    )
}
