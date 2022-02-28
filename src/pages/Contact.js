import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    const handleChange = (e) => {
        const isValid = validateEmail(e.target.value)
        if (e.target.name === 'email') {
            if (!isValid) {
                setErrorMessage('This email is invalid')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
                console.log(errorMessage)
            } else {
                setErrorMessage('')
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section id="contact" className="d-flex flex-column">
            <div id="form-wrapper">
                <p className="mb-3">
                    You can contact me here...
                </p>

                <form className="d-flex flex-column contact" onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            Name:
                            </label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />

                        <label htmlFor="email">
                            Email:
                        </label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>

                        <label htmlFor="message">
                            Message:
                        </label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange}/>  
                        {errorMessage && (
                            <div>
                                <p className="error-text danger">
                                    {errorMessage}
                                </p>
                            </div>  
                        )}
                        <button type="submit" className="btn btn-outline-dark contact-btn">Submit</button>
                </form>
            </div>
        </section>

    )
};

export default Contact;