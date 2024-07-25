import { ASSETS } from '../../../assets/path'
import { FaArrowRight, FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import { InputWithLabel } from '../../../components/inputWithLabel'
import { RedBtn } from '../../../components/buttons/redBtn'
import { Link, useNavigate } from 'react-router-dom'
import { RedBtnD2 } from '../../../components/buttons/redBtnD2'
import axios from 'axios'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TOAST_TYPE } from '../../../utils/constants'
import { setLocalStorage, showToast } from '../../../utils/functions'
import { LogoComponent } from '../../../components/Logo'
import LoadingBar from 'react-top-loading-bar'

export const Register = () => {
    const [error, seterror] = useState<string>()
    const [loading, setloading] = useState<number>(0)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name Required'),
            email: Yup.string().email().required('Email address Required'),
            password: Yup.string()
                .min(7, 'Must be greater 6 digits.')
                // .max(12, 'Must be less than 12 digits.')
                .required('Password Required'),
        }),
        onSubmit: (values) => {
            console.log(values, 'TEST')
            setloading(prev => prev + 50)
            setLocalStorage('userName', values?.name)
            var config = {
                method: 'post',
                url: 'https://alien-app-backend.herokuapp.com/register',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: { ...values, userType: 'User' },
            }
            setloading(prev => prev + 20)
            axios(config)
                .then(function (response) {
                    console.log(response)
                    console.log(response.status)
                    if (response.status === 200) {
                        seterror('')
                        console.log('success')
                        showToast(
                            'user successfully registered.',
                            TOAST_TYPE.success
                        )
                        setloading(prev => prev + 30)
                        navigate('/auth/getting-started', {
                            state: response.data.data,
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error)
                    setloading(0)
                    seterror('Error : ' + error.response.data.error)
                    console.log(error.response.data.error)
                    // seterror(error.message);
                })
        },
    })

    return (
        <div className="flex flex-col items-center justify-between lg:justify-center h-full space-y-3 2xl:space-y-8 w-full  sm:w-1/2 lg:w-1/3 px-5 sm:px-0 text-center">
            <LoadingBar
                color="#0091F7"
                progress={loading}
                onLoaderFinished={() => setloading(100)}
            />
            <LogoComponent />
            <div className="Exo-Bold text-xl md:text-3xl lg:text-4xl text-white">
                Register Now
            </div>
            <form
                onSubmit={formik.handleSubmit}
                className="space-y-3 w-full sm:px-4 md:px-8 lg:px-10">
                <InputWithLabel
                    type="text"
                    label="Name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    errors={formik?.errors?.name}
                    touched={formik?.touched?.name}
                    icon={<FaUser className="text-xl" />}
                    placeholder=""
                />
                <InputWithLabel
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    errors={formik?.errors?.email}
                    touched={formik?.touched?.email}
                    icon={<FaEnvelope className="text-xl" />}
                    label="Email"
                    placeholder=""
                />
                <InputWithLabel
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    errors={formik?.errors?.password}
                    touched={formik?.touched?.password}
                    icon={<FaLock className="text-xl" />}
                    label="Password"
                    placeholder=""
                    // placeholder="•••••••••"
                />

                <RedBtnD2
                    title="Register"
                    type="submit"
                    icon={
                        <FaArrowRight className="text-sm sm:text-base text-white" />
                    }
                    // moveTo="/auth/getting-started"
                />
            </form>
            <div className="text-xs sm:text-sm Exo-SemiBold h-2 text-red">
                {error}
            </div>
            <div className="space-x-2 text-sm md:text-base xl:text-lg">
                <span className="text-white Exo-Regular">
                    Already have an account?{' '}
                </span>
                <Link to="/login" className="text-red Exo-Bold">
                    Login Now
                </Link>
            </div>
        </div>
    )
}
