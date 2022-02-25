import React from 'react';

const Contact = () => {
    return (
        <>
            <p className="mb-3">
                You can contact me here...
            </p>

            <form className="d-flex flex-column contact">
                    <label>Name:</label>
                    <input></input>

                    <label>Email:</label>
                    <input></input>

                    <label>Message:</label>
                    <textarea></textarea>    
            </form>
        </>
    )
};

export default Contact;