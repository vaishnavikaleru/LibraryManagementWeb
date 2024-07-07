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
                <div className={signup.centerlogin}>
                <h1>Sign Up for Library Management</h1>
                <h2>Your library catalog available anywhere, anytime.</h2>
                   <div className={signup.form}>
                        <div className='headtitle'>
                        <h2>Account Info</h2>
                        </div>
                        <div className={signup.row}>
                        <div className={signup.column}>
                        <label>Email:</label>
                        <input type='email' name='email' className='email' placeholder='Email' onChange={(e)=>setemail(e.target.value)}/>
                        </div>
                            <div className={signup.column}>
                            <label>Name:</label>
                            <input type='text' name='name' className='name' placeholder='Name' onChange={(e)=>setname(e.target.value)}/>
                            </div>
                        </div>
                        <div className={signup.row}>
                            <div className={signup.column}>
                            <label>Password:</label>
                            <input type='password' name='password'  placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/>
                            </div>
                            <div className={signup.column}>
                            <label>Confirm Password:</label>
                            <input type='text' name='confirmpassword' placeholder='Confirm Password' onChange={(e)=>setcpassword(e.target.value)}/>
                            </div>
                        </div>
                        <h4 className>{error!=='' || error!==null ? error :''}</h4>
                        <button className='sign' onClick={()=>submitData()}>Sign Up</button>
                        <hr className='line'/>
                        <h3 className='formfooter'>Already Have Account!<span  onClick={()=>navigate('/login')}>  Sign In!</span></h3>
                   </div>
                </div>
        </div>
        </div>)

}

export default SignUp;