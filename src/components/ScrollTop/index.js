import React, {useState} from 'react';
import '../ScrollTop/style.css';

const ScrollTop = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) { 
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo ({
            top: 0,
            behavior: 'smooth'
        })
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
            back to top
        </button>
    )
}

export default ScrollTop;