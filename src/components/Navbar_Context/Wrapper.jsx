import React, {useState} from 'react'
import {userContext} from '../../context/userContext'


const Wrapper = (props) => {
  const [user, setUser] = useState('')
  return (
    <>
      <userContext.Provider value={{ user, setUser }} />
    </>
  )
}

export default Wrapper