import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingScreen from './globalComponent/Loader/LoadingScreen';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { MobileProvider } from './globalComponent/context/MobileContext';
import DriverHomePage from './pages/DriverHomePage';
import './App.css';
import SignUpCarDetails from './components/signUp/SignUpCarDetails';
import { GlobalStateProvider } from './utils/GlobalState';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const startTime = Date.now();

    // Simulate page content loading (replace with actual loading logic)
    setTimeout(() => {
      const endTime = Date.now();
      const elapsedTime = endTime - startTime;

      // Adjust the minimum loading time if the page content takes longer than 500ms
      const minLoadingTime = Math.max(500, elapsedTime);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, minLoadingTime);

      return () => clearTimeout(timer);
    }, 500); // Simulated page content loading time
  }, []);

  return (
    <div className="App">
      <GlobalStateProvider>
        <MobileProvider>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Router>
            <Routes>
              <Route path='/' element={<Navigate to="/login" />} />
              {/* <Route path='/tutorial' element={<TutorialPage />} /> */}
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignUpPage />} />
              <Route path='/signup/car' element={<SignUpCarDetails />} />
              {/* <Route path='/setup' element={<SetupPage />} /> */}
              <Route path='/driver/*' element={<DriverHomePage />} />
              {/* <Route path='/courier/*' element={<CourierPage />} /> */}
              {/* <Route path='/verification/*' element={<VerificationPage />} /> */}
            </Routes>
          </Router>
        )}
        </MobileProvider>
      </GlobalStateProvider>
    </div>
  );
}

export default App;
