import React, { useState, useRef } from 'react';
import { validateEmail } from '../utils/helpers';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [submitted, setSubmitted] = useState("");
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
    };

    return (
        <section id="contact">
            <div id="form-wrapper">
                <p className="mb-3">
                    You can contact me here...
                </p>

                <form ref={form} onSubmit={sendEmail}>
                        <label htmlFor="name">
                            Name:
                            </label>
                        <input type="text" name="from_name" defaultValue={name} onBlur={handleChange} />

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
                        <button type="submit" value="submit" className="btn btn-outline-dark contact-btn">Submit</button>
                        {submitted && (
                            <div>
                                <p>
                                    {submitted}
                                </p>
                            </div>
                        )}
                </form>
            </div>
        </section>

    )
};

export default Contact;