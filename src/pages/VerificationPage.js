import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SendOtp from '../components/verification/SendOtp'
import EnterOtp from '../components/verification/EnterOtp';

const VerificationPage = () => {
  return (
    <Routes>
        <Route path='/send' element={<SendOtp />} />
        <Route path='/enter' element={<EnterOtp />} />
    </Routes>
  )
}

export default VerificationPage