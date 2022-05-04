import React, { useState, useRef } from 'react';
import ContactForm from '../../components/ContactForm';
import '../Contact/style.css';

const Contact = () => {

    return (
        <center>
            <section id="contact">
                <div id="form-wrapper">
                    <p className="mb-3">
                        You can contact me here...
                    </p>
                    <ContactForm />
                    <p id='send-email'>
                        ...or send an e-mail to sihayaharris@gmail.com
                    </p>
                </div>
            </section>
        </center>

    )
};

export default Contact;