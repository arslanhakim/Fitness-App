import { ASSETS } from '../../assets/path'
import { FaArrowRight, FaLock, FaUser } from 'react-icons/fa'
import { InputWithLabel } from '../../components/inputWithLabel'
import { RedBtn } from '../../components/buttons/redBtn'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { LogoComponent } from '../../components/Logo'
import { RedBtnD2 } from '../../components/buttons/redBtnD2'
import LoadingBar from 'react-top-loading-bar'

export const Login = () => {
    const [error, seterror] = useState<string>()
    const navigate = useNavigate()
    const [loading, setloading] = useState<number>(0)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required('Email address Required'),
            password: Yup.string()
                .min(6, 'Must be greater 6 digits.')
                // .max(12, 'Must be less than 12 digits.')
                .required('Password Required'),
        }),
        onSubmit: (values) => {
            setloading(50)
            console.log(values, 'TEST')
            var config = {
                method: 'post',
                url: 'https://alien-app-backend.herokuapp.com/login',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: values,
            }
            setloading(prev => prev + 20)
            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    // console.log(response.data)
                    console.log(response.status)
                    if (response.status === 200) {
                        // seterror(response.data.message)
                        // setdata()
                        setloading(100)
                        navigate('/dashboard')
                        console.log('success')
                    } else {
                        setloading(0)
                        seterror('')
                        // setdata(response?.data?.data)
                    }
                })
                .catch(function (error) {
                    setloading(0)
                    seterror('Error : ' + error.response.data.message)
                    // seterror(error.message);
                })
        },
    })

    return (
        <div
            style={{ backgroundImage: `url(${ASSETS.LOGIN.LOGIN_BG})` }}
            className="min-h-screen h-screen bg-cover bg-center bg-black-dark bg-no-repeat flex items-center justify-center ">
            <LoadingBar
                color="#0091F7"
                progress={loading}
                onLoaderFinished={() => setloading(100)}
            />
            <div className="flex flex-col items-center justify-between h-full py-5 px-5 sm:px-0 w-full sm:w-1/2 lg:w-1/3 text-center">
                <LogoComponent />
                <div className="Exo-Bold text-xl md:text-3xl lg:text-4xl text-white">
                    Login
                </div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="space-y-3 w-full sm:px-4 md:px-8 lg:px-10">
                    <InputWithLabel
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        errors={formik?.errors?.email}
                        touched={formik?.touched?.email}
                        icon={<FaUser className="text-xl" />}
                        label="Email / User Name"
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
                    />
                    <RedBtn
                        icon={<FaArrowRight />}
                        title="Login"
                        type="submit"
                    />
                </form>
                <div className="text-xs sm:text-sm Exo-SemiBold h-2 text-red">
                    {error}
                </div>
                <div className="space-x-2 sm:whitespace-nowrap text-sm md:text-base xl:text-lg">
                    <span className="text-white Exo-Regular px-2 border-r border-white">
                        Forgot Password
                    </span>
                    <span className="text-white Exo-Regular">
                        Didn't have an account?{' '}
                    </span>
                    <Link to="/auth/register" className="text-red Exo-Bold">
                        Register Now
                    </Link>
                </div>
            </div>
        </div>
    )
}
