import React, { useEffect } from 'react'
import CardComponent from '../../../components/card'
import InputComponent from '../../../components/input'

import './index.scss'



const HomePage = () => {

  return (
    <div>
      {<InputComponent />}
      <CardComponent />
    </div >
  )
}

export default HomePage