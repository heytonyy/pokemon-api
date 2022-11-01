import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [validateForm, setValidateForm] = useState(false)
    const [formMsg, setFormMsg] = useState('')

    // is this the right way to do this?
    const formHandler = (e) => {
        e.preventDefault()
        let isValid = true
        if (firstName < 2){
            isValid = false
        }
        if (lastName < 2){
            isValid = false
        }
        if (email < 5){
            isValid = false
        }
        if (password < 8){
            isValid = false
        }
        if (password !== confirmPassword){
            isValid = false
        }
        if (isValid) {
            setValidateForm(true)
            setFormMsg('Thank you for submitting!')
            const user = { firstName, lastName, email, password }
            console.log(user)
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setTimeout(()=>{
                setValidateForm(false)
                setFormMsg('')
            },2000)
        }
        else{
            setFormMsg('Invalid form submittion')
        }
    }
    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters")
        } else {
            setFirstNameError("")
        }
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters")
        } else {
            setLastNameError("")
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters")
        } else {
            setEmailError("")
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters long")
        } else {
            setPasswordError("")
        }
    }
    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
        if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match")
        } else {
            setConfirmPasswordError("")
        }
    }
    return (
        <div>
            <div className="card w-500 mx-auto">
                <form onSubmit={ formHandler } >
                    {
                        validateForm ?
                            <h6 className="text-success">{formMsg}</h6> :
                            <h6 className="text-danger">{formMsg}</h6>
                    }
                    
                    <div className="form-group form-inline">
                        <label htmlFor="firstName">First Name:</label>
                        <input onChange={firstNameHandler} value={firstName} className='form-control' type="text" />
                    </div>
                    {
                        firstNameError ?
                            <p className="text-danger">{firstNameError}</p> :
                            ''
                    }
                    <div className="form-group form-inline">
                        <label htmlFor="lastName">Last Name:</label>
                        <input onChange={lastNameHandler} value={lastName} className='form-control' type="text" />
                    </div>
                    {
                        lastNameError ?
                            <p className="text-danger">{lastNameError}</p> :
                            ''
                    }
                    <div className="form-group form-inline">
                        <label htmlFor="email">Email:</label>
                        <input onChange={emailHandler} value={email} className='form-control' type="email" />
                    </div>
                    {
                        emailError ?
                            <p className="text-danger">{emailError}</p> :
                            ''
                    }
                    <div className="form-group form-inline">
                        <label htmlFor="password">Password:</label>
                        <input onChange={passwordHandler} value={password} className='form-control' type="password" />
                    </div>
                    {
                        passwordError ?
                            <p className="text-danger">{passwordError}</p> :
                            ''
                    }
                    {
                        confirmPasswordError ?
                            <p className="text-danger">{confirmPasswordError}</p> :
                            ''
                    }
                    <div className="form-group form-inline">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input onChange={confirmPasswordHandler} value={confirmPassword} className='form-control' type="password" />
                    </div>
                    <input type="submit" className='btn btn-primary ml-auto' value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Form