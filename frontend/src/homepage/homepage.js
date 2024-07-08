import './homepage.css';
import img from '../Images/book.png';
import search from '../Images/search.png';
import btn from '../Images/switch.jpg'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState} from 'react';
import $ from 'jquery';


 const googlebookapi='https://www.googleapis.com/books/v1/volumes'
function Home()
{ 
  const location=useLocation();
  const navigate=useNavigate();
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

      console.log(location.state.data)
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
             <h2>Library Tool</h2>
              <img src={img} width='20' height='30'/>
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
              <img src={search} width='25px' height='25px'/>
              <input type='text' placeholder='Start Searching' onChange={(e)=>{BookApi(e.target.value)}}></input>
            </div>
            <div className='logout'>
               <h3>Hi! {sessionStorage.getItem("username")}</h3>
               <img src={btn} width='50' height='50'/>
            </div>
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
  );
}

export default Home;