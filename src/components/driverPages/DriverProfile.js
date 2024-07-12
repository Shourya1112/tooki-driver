import React, { useContext, useEffect, useState } from 'react'
import OrangeDivider from '../../globalComponent/ui/OrangeDivider'
import CurrentOrderCard from '../../globalComponent/ui/CurrentOrderCard'
import EarnedTodayCard from '../../globalComponent/ui/EarnedTodayCard'
import "../../styles/component/driver/DriverProfile.css"
import { GlobalStateContext } from '../../utils/GlobalState'
import axiosInstance from '../../utils/axiosInstance'
import BackBtn from '../../globalComponent/ui/BackBtn'

const DriverProfile = () => {
  const { state } = useContext(GlobalStateContext)
  const [ earning, setEarning ] = useState()

  useEffect(() => {
    axiosInstance
      .put(`/analytics/data/driver/earning/${state.userId}/`)
      .then(res => {
        const response = res.data.data
        setEarning(response)
      })
      .catch(err => console.log(err))
  }, [state])

  return (
    <div className='driver-profile-main-div'>
        <BackBtn />
        
        <div className='empty-left-container'>

        </div>

        <OrangeDivider height={"90%"} color={"#FFC294"} width={"2.5px"} />

        <div className='right-main-div'>

            <div className='current-trip-card-container'>
                <CurrentOrderCard customerName={state.name} />
            </div>

            <div className='earnings-today-card'>
                <EarnedTodayCard earning={earning && earning[0].total_amount}/>
            </div>
        </div>
    </div>
  )
}

export default DriverProfile