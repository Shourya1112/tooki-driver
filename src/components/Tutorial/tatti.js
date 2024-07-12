import React from 'react'
import { BrowserRouter as Router, useLocation, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './globalComponents/navbar/NavBar';
import BottomBar from './globalComponents/bottombar/BottomBar';
import { UserProvider } from './globalComponents/userContext/UserContext';
import "./App.css"
import LoginPage from './home/pages/LoginPage';
import Signup from './home/components/signup/signup';
import { BreadCrumbsProvider } from './utils/pathBar/PathBarContext';
import Sidebar from './globalComponents/sidebar/sidebar';

// Games Pages Import Here
import DragAndDropGames from "./home/aicansell/Games/DragandDropGame/DragDropGame";
import BoardGames from "./home/aicansell/Games/15Puzzlegame/board/Board";
import AssessmentFirst from "./home/aicansell/Assessment/Test1/AssessmentFirst";
import AssessmentThird from "./home/aicansell/Assessment/Test3/AssessmentThird";
import FirstTestAns from "./home/aicansell/Assessment/Test1/FirstTestAns";
import SecondTestAns from "./home/aicansell/Assessment/Test2/SecondTestAns";
import ThirdTestAns from "./home/aicansell/Assessment/Test3/ThirdTestAns";
import AssessmentSecond from "./home/aicansell/Assessment/Test2/AssessmentSecond";


const LoginRedirect = () => {
    return <Navigate to="/login" replace />;
};

const CondtionalNavbar = () => {
    const location = useLocation()
const noNavbar = ["/login", "/signup"]

    if (noNavbar.includes(location.pathname)) {
        return
    }

    return <NavBar />
}

const CondtionalBottomBar = () => {
    const location = useLocation()
    const noBottomBar = ["/login", "/signup"]

    if (noBottomBar.includes(location.pathname)) {
        return
    }

    return <BottomBar />
}

// const DesktopErrorPage = () => {

//     return (
//         <div>
//             <h1 >
//                 Error
//             </h1>
//             <p >
//                 Not supported on desktop
//             </p>
//         </div>
//     )
// }

const App = () => {
   
  return (
    <div className='App'>
        <UserProvider>
            <BreadCrumbsProvider>
            <Router>
            <div className='sidebar-main-container'>
                <Sidebar />
            </div>
            <div className='right-app'>
                <div className='navbar-main-container'>
                    <CondtionalNavbar />
                </div>

                <div className='app-main-container'>
                    <Routes>
                    <Route path="/" element={<LoginRedirect />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home/*" element={<HomePage />} />

                    {/* Assessment Pages Routes */}
                    <Route path="/asmentfirst" element={<AssessmentFirst />} />
                    <Route path="/asmentsecond" element={<AssessmentSecond />} />
                    <Route path="/asmentthird" element={<AssessmentThird />} />
                    <Route path="/ansfirst" element={<FirstTestAns />} />
                    <Route path="/anssecond" element={<SecondTestAns />} />
                    <Route path="/ansthird" element={<ThirdTestAns />} />

                    {/* Games Pages Routes */}
                    <Route path="/draggame" element={<DragAndDropGames />} />
                    <Route
                        path="/puzzlegame"
                        element={
                        <div className="puzzle-board">
                            <BoardGames />
                        </div>
                        }
                    />
                    </Routes>
                    <CondtionalBottomBar />
                </div>
            </div>
          </Router>
            </BreadCrumbsProvider>
        </UserProvider>
    </div>
  )
}

export default App