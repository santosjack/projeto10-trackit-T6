import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import UserContext from "./contexts/UserContext";
import ScreenHistoric from './screens/ScreenHistoric';
import ScreenListHabits from './screens/ScreenListHabits';
import ScreenListTodayHabits from './screens/ScreenListTodayHabits';
import ScreenLogin from './screens/ScreenLogin';
import ScreenRegister from './screens/ScreenRegister';



function App() {

    const [ userData, setUserData ] = useState('');

    

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ScreenLogin />} />
                    <Route path='/cadastro' element={<ScreenRegister />} />
                    <Route path='/habitos' element={<ScreenListHabits />} />
                    <Route path='/hoje' element={<ScreenListTodayHabits />} />
                    <Route path='/historico' element={<ScreenHistoric />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;