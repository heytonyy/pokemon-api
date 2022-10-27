import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const createUser = (e) => {
        e.preventDefault()
        const user = { firstName, lastName, email, password, confirmPassword }
        console.log(user)
    };
  return (
    <div>
        <div className="card w-400 mx-auto">
            <form onSubmit={ createUser }>
                <div className="form-group form-inline">
                    <label htmlFor="firstName">First Name:</label>
                    <input onChange={(e)=>setFirstName(e.target.value)} className='form-control' type="text" />
                </div>
                <div className="form-group form-inline">
                    <label htmlFor="lastName">Last Name:</label>
                    <input onChange={(e)=>setLastName(e.target.value)} className='form-control' type="text" />
                </div>
                <div className="form-group form-inline">
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e)=>setEmail(e.target.value)} className='form-control' type="email" />
                </div>
                <div className="form-group form-inline">
                    <label htmlFor="password">Password:</label>
                    <input onChange={(e)=>setPassword(e.target.value)} className='form-control' type="password" />
                </div>
                <div className="form-group form-inline">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input onChange={(e)=>setConfirmPassword(e.target.value)} className='form-control' type="password" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form
