import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/navbar.css'
function Navbar() {
    const navigate = useNavigate();

    const goToPage = (path) => {
        navigate(path);
    };

    return (
        <>
            <div className='Nav-container'>
                <ul>
                    <li onClick={() => goToPage('/home')}>Home</li>
                    <li onClick={() => goToPage('/about')}>About</li>
                    <li onClick={() => goToPage('/contact')}>Contact</li>
                    <li onClick={() => goToPage('/profile')}>Profile</li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
