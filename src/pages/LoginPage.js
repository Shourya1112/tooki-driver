import React from 'react'
import Login from '../components/login/Login'
import LoginMobile from '../components/login/LoginMobile'
import { useMobile } from '../globalComponent/context/MobileContext'

const LoginPage = () => {
  const { isMobile } = useMobile()

  return (
    <>
    {isMobile? <LoginMobile /> : <Login />}
    </>
  )
}

export default LoginPage