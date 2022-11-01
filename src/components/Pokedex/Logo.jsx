import React from 'react'
import logo from '../../assets/pokemon-logo.png'

const Logo = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={logo} alt="pokemon logo" className='mt-20'/>
            </div>
        </>
    )
}

export default Logo