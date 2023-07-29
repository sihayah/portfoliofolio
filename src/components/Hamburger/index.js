import React, { useState } from 'react';
import Nav from '../Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Hamburger = () => {

    const [open, setOpen] = useState(false);

return(
    <>

    <FontAwesomeIcon id="hamburger" icon={ faBars } className='bars'/>

    <div>
        <div />
        <div />
        <div />
    </div>
    <Nav open={open}/>
    </>
)
}

export default Hamburger;