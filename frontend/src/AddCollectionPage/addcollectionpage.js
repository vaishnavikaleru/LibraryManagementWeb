import img from '../Images/book.png';
import search from '../Images/search.png';
import btn from '../Images/switch.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Collection()
{
    return(
        <div className='Page'>
        <div className='subpage1'>
            <div className='logo'>
             <h2>Library</h2>
              <img src={img} width='50' height='50'/>
            </div>
            <div className='sectiontop'>
                <h2>Lib</h2>
                <h2 onClick={()=>navigate('/additems')}>Add Items</h2>
                <h2 onClick={()=>navigate('/collection')}>Add Collections</h2>
                <h2>Publish</h2>
                <h2>Dashboard</h2>
            </div>
            <div className='sectiontop'>
                <h2>Settings</h2>
                <h2>Support</h2>
                <h2 onClick={()=>logout()}>Log Out</h2>
                <button>Upgrade</button>
            </div>
            </div>
            </div>
    )
}
export default Collection;