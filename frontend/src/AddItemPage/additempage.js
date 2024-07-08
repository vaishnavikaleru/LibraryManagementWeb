import './itempage.css';
import img from '../Images/book.png';
import search from '../Images/search.png';
import btn from '../Images/switch.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import $ from 'jquery';

const url='http://localhost:2000/collection/find';

const googlebookapi='https://www.googleapis.com/books/v1/volumes'
function Item()
{
    const navigate=useNavigate();
  
    const [collectionname,setcollection]=useState([]);
  
    useEffect(()=>{
      findCollections();
    },[collectionname]);
  
    const findCollections=async ()=>{
       await fetch(url,{method:'Get',headers:{'Content-Type':'application/json'}}).then(e=>e.json())
       .then(e=>{setcollection(e);});
    }
  
    const [cookie,setcookie]=useState('');
    const logout=()=>{
       document.cookie=`ID=,expires=Thu, 01 Jan 1970 00:00:00 UTC,`;
       setcookie('');
       navigate('/login');
    }
    useEffect(()=>{
      const cookie=document.cookie.split(';')[0].split('=')[1]
      setcookie(cookie);
      if(!cookie)
         logout();
  },[]);
   
  const [bookData,setBookData]=useState([]);
  function BookApi(bookName="twain")
  {
    fetch(`${googlebookapi}?q=${bookName}`)
    .then(e=>e.json())
    .then(data=>{
      if(data)
      {
        $('.results').css('display','flex')
      }
      setBookData(data.items || []);
    
  }).catch(e=>console.log("erro thrown",e));
  console.log(bookData)
  }
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
        <div className='subpage2'>
          <div className='searchbar'>
            <div className='search'>
              <h1>Add Your Items</h1>
            </div>
            <div className='logout'>
               <h3>username</h3>
               <img src={btn} width='50' height='50'/>
            </div>
          </div>
          <hr/>
        <div className='collectionform'>
            <div className='bar1'>
                <h2>Selection Collection</h2>
                <select>
                   {
                   collectionname.map((e,index)=>(
                    <option key={index}>{e}</option>
                   )
                  )}
                </select>
                <h4>Choose the collection you're adding items to.</h4>
            </div>
            <div className='bar2'>
                <h2>Selection Item Type</h2>
                <select>
                   <option>Book</option>
                   <option>Movie</option>
                   <option>Music</option>
                   <option>Video Game</option>
                </select>
                <h4>The type of item are you adding.</h4>
            </div>
          
            <div className='bar3'>
                <h2>Search for Books </h2>
                <input type='text' placeholder='Search' onChange={(e)=>BookApi(e.target.value)}/>
                <h4>Search by keyword.</h4>
            </div>
         
            <div className='results'>
              <div className='sectionresult'>
              {bookData.map((e, index) => (
                <div className='imagesection' key={index}>
                  <img src={e.volumeInfo.imageLinks?.thumbnail || img} alt={e.volumeInfo.title} />
                  <h1>{e.volumeInfo.title}</h1>
                  <button>Add Book</button>
                </div>
              ))}
            </div>
            </div>
        </div>
        </div>
        </div>
      )
}

export default Item;