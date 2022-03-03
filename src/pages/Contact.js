import React, { useState, useRef } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {

    return (
        <section id="contact">
            <div id="form-wrapper">
                <p className="mb-3">
                    You can contact me here...
                </p>
                <ContactForm />
            </div>
        </section>

    )
};

export default Contact;