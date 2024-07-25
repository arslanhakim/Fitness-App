import { Login } from './container/auth/Login.js'
import { LoginType } from './container/auth/LoginType.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth } from './container/auth/registrationProcess'
import { GettingStarted } from './container/auth/registrationProcess/gettingStarted.js'
import { ChoseGender } from './container/auth/registrationProcess/step-1.js'
import { Register } from './container/auth/registrationProcess/register.js'
import { ChoseAge } from './container/auth/registrationProcess/step-2.js'
import { ChoseWeight } from './container/auth/registrationProcess/step-3.js'
import { ChoseHeight } from './container/auth/registrationProcess/step-4.js'
import { DietryPreference } from './container/auth/registrationProcess/step-5.js'
import { ChoseGoal } from './container/auth/registrationProcess/step-8.js'
import { ActivityLevel } from './container/auth/registrationProcess/step-6.js'
import { FitnessLevel } from './container/auth/registrationProcess/step-7.js'
import { Dashboard } from './container/dashboard/index.js'
import { ToastContainer } from 'react-toastify'
import { Main } from './container/dashboard/container/index.js'
import { Training } from './container/dashboard/container/training/index.js'
import { Classes } from './container/dashboard/container/classes/index.js'
import { Nutrition } from './container/dashboard/container/nutrition/index'
import { CheckIn } from './container/dashboard/container/checkIn/index'
import { MentalHealth } from './container/dashboard/container/mentalHealth/index'
import { Notes } from './container/dashboard/container/notes/index'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginType />} />
                    <Route path="login" element={<Login />} />
                    <Route path="/dashboard" element={<Main />} />
                    <Route path="/dashboard/training" element={<Training />} />
                    <Route path="/dashboard/classes" element={<Classes />} />
                    <Route
                        path="/dashboard/nutrition"
                        element={<Nutrition />}
                    />
                    <Route
                        path="/dashboard/mentalHealth"
                        element={<MentalHealth />}
                    />
                    <Route path="/dashboard/checkIn" element={<CheckIn />} />
                    <Route path="/dashboard/notes" element={<Notes />} />
                    <Route path="auth" element={<Auth />}>
                        <Route path="register" element={<Register />} />
                        <Route
                            path="getting-started"
                            element={<GettingStarted />}
                        />
                        <Route path="chose-gender" element={<ChoseGender />} />
                        <Route path="chose-age" element={<ChoseAge />} />
                        <Route path="chose-weight" element={<ChoseWeight />} />
                        <Route path="chose-height" element={<ChoseHeight />} />
                        <Route
                            path="activity-level"
                            element={<ActivityLevel />}
                        />
                        <Route
                            path="fitness-level"
                            element={<FitnessLevel />}
                        />

                        <Route
                            path="dietry-preference"
                            element={<DietryPreference />}
                        />
                        <Route path="chose-goal" element={<ChoseGoal />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </div>
    )
}

export default App
