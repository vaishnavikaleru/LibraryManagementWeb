import signup  from './signup.css';
import img from '../Images/book.png';
import img2 from '../Images/Image2.jpg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp()
{
    return (
        <div>

        <div className='firstbackground'>
            <div id='navbar' className={scrolled?'scrolled':'noscroll'}>
                <div className='logo'  onClick={()=>navigate('/')}>
                <h1>Library Management</h1>
                <img src={img} alt='book' width="50px" height="50px"/>
                </div>
                    <nav>
                        <h2>Price</h2>
                        <h2>Support</h2>
                        <h2>Contact Us</h2>
                        <button name='login' onClick={()=>{navigate('/login');}}>Login</button>
                        <button name='started' onClick={()=>navigate('/signup')}>Get Started</button>
                    </nav>
                </div>
        </div>)

}

export default SignUp;