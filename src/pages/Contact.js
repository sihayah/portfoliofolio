import React, { useState, useRef } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {

    return (
        <center>
            <section id="contact">
                <div id="form-wrapper">
                    <p className="mb-3">
                        You can contact me here...
                    </p>
                    <ContactForm />
                </div>
            </section>
        </center>

    )
};

export default Contact;