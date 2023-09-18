import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const initialState = {
        name: "", 
        email: "", 
        message: ""    
    };
    const [formState, setFormState] = useState(initialState);
    const [errorMessage, setErrorMessage] = useState("");
    const [submitted, setSubmitted] = useState("");
    const { name, email, message } = formState;

    console.log(formState)

    const handleChange = (e) => {
        const isValid = (e.target.value)
        if (e.target.name === 'email') {
            if (!isValid) {
                setErrorMessage('This email is invalid')
            } else {
                setErrorMessage('')
            }
        } 
        if (e.target.name === 'from_name') {
            if (!isValid) {
                setErrorMessage('Name is required.')
            } else {
                setErrorMessage('')
            }
        } 
        else if (e.target.name === 'message') {
            if (!isValid) {
                setErrorMessage('Message is required.')
            } else {
                setErrorMessage('')
            }
        } 
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_cwczzz1', 'template_v7s5abl',form.current, 'I0lKIie4IjqLZ7jBz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setSubmitted("Your message has been sent!")
        setFormState(initialState);
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">
            Name:
            </label>
        <input type="text" name="from_name" defaultValue={name} onBlur={handleChange} />

        <label htmlFor="email">
            Email:
        </label>
        <input type="email" name="email" defaultValue={email} onChange={handleChange}/>

        <label htmlFor="message">
            Message:
        </label>
        <textarea name="message" defaultValue={message} onChange={handleChange}/>  
        {errorMessage && (
            <div>
                <p className="error-text danger">
                    {errorMessage}
                </p>
            </div>  
        )}
        <button type="submit" value="submit" onBlur={handleChange} className="submit-btn">Submit</button>
        {submitted && (
            <div>
                <p>
                    {submitted}
                </p>
            </div>
        )}
</form>
    )
}

export default ContactForm;