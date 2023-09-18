import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './style.css';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  opacity: 95%;
  li {
    padding: 5vh 4vh 5vh 0;
  }
  @media (max-width: 10000px) {
    flex-flow: column nowrap;
    background: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 30vh;
    padding-top: 18vh;
    z-index: 9998;
    transition: transform 0.3s ease-in-out;
    li a {
      color: var(--pop);
    }
    li a:hover {
      color: var(--golden-touch);
    }
  }
`;

const RightNav = ({ open }) => {

    const tabs = [
        {
            title: "Design",
            name: "design",
            location: "/design"
        },
        {
            title: "Develop",
            name: "develop",
            location: "/develop"
        },
        {
            title: "Home",
            name: "home",
            location: "/ "
        },
        {
            title: "Contact",
            name: "contact",
            location: "/contact"
        }

    ];

    const scrollToTop = () => {
        scroller.scrollToTop({
            duration: 100,
            smooth: 'easeInOutQuint'
        });
    };

    const currentLocation = useLocation().pathname; 

    return(
        <>
            <Ul open={open}>
                <li>
                    <Link to='/'> Home </Link>     
                </li>       
                <li>
                    <a href='https://docs.google.com/document/d/1GIfZjPmqrDaK3gKBSS7m8bbbKSDsBA4i/edit?usp=sharing&ouid=110368676910301222653&rtpof=true&sd=true' target='_blank' rel='noreferrer'> Resume </a>
                </li>             
                <li>
                    <Link to='/design'> Design </Link>     
                </li>                   
                <li>
                    <Link to='/develop'> Development </Link>     
                </li>                   
                <li>
                    <Link to='/contact'> Contact </Link>     
                </li>                                  
            </Ul> 
        </>

    )
}

export default RightNav;