import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Assets/css/Header.css'
// import dropdown_icon from '../Assets/icons/dropdown.webp'
import menu_icon from '../Assets/icons/menu.webp'
import close_icon from '../Assets/icons/close.webp'


const Header = () => {

  const nav_links = [
    // {page : 'Home',link : '/'},
    {page : 'Work',link : '/'},
    {page : 'Photography',link : '/photography'},
    {page : 'About',link : '/about'}
  ];
  // const work_sub_menu = [
  //   {page : 'Identity & Branding',link : '/branding'},
  //   {page : 'Wedding',link : '/wedding'},
  //   {page : 'Films',link : '/films'},
  //   {page : 'Data Visualization',link : '/visualization'},
  //   {page : 'Spread Design',link : '/spread'},
  //   {page : 'Illustration',link : '/illustration'},
  //   {page : 'Ui | UX',link : '/uiux'},
  //   {page : 'Styling',link : '/styling'}  
  // ];
  // const photography_sub_menu = [
  //   {page : 'People',link : '/people'},
  //   {page : 'Kashmir',link : '/kashmir'},
  //   {page : 'Dubai',link : '/dubai'},
  //   {page : "Farmer's Protest",link : '/protest'},
  //   {page : 'Turkey',link : '/turkey'},
  //   {page : 'London',link : '/london'},
  //   {page : 'Nauure',link : '/nature'},
  //   {page : 'Thailand',link : '/thailand'}
  // ];

  const [menu,setmenu] = useState('')
  function toggle_menu(){
    if(menu===''){
      setmenu('active');
    }
    else{
      setmenu('')
    }

  }

  return (
    <>
      <nav className={`menu-${menu}`}>
        <div className="logo-container">
          <h1 className='logo-txt'>Sehej</h1>
        </div>
        <div className="menu-btn-container">
          <img src={menu==='active'?close_icon:menu_icon} alt="menu" className="menu-btn-icon" onClick={()=>{toggle_menu()}}/>
        </div> 
        <div className={`menu-container ${menu}`}>
          <ul className="menu-list">
            {
              nav_links.map((i)=>{
                return(
                  <li><Link className="menu-list-item" to={i.link} onClick={()=>{toggle_menu()}}>{i.page}</Link></li>
                )
                // if(i.page==='Work'){
                //   return(
                //     <li><Link className="menu-list-item" to={i.link}>{i.page}</Link><img src={dropdown_icon} alt="Down" className="dropdown-icon"/>
                //       <ul className="sub-menu">{work_sub_menu.map((j)=>{
                //         return(
                //           <li><Link className="menu-list-item" to={j.link}>{j.page}</Link></li>                        
                //         )
                //       })}</ul>
                //     </li>
                //   )
                // }
                // else if(i.page==='Photography'){
                //   return(
                //     <li><Link className="menu-list-item" to={i.link}>{i.page}</Link><img src={dropdown_icon} alt="Down" className="dropdown-icon"/>
                //       <ul className="sub-menu">{photography_sub_menu.map((j)=>{
                //         return(
                //           <li><Link className="menu-list-item" to={j.link}>{j.page}</Link></li>                        
                //         )
                //       })}</ul>
                //     </li>
                //   )
                // }
                // else{
                //   return(
                //     <li><Link className="menu-list-item" to={i.link}>{i.page}</Link></li>
                //   )
                // }
              })
            }
          </ul>
        </div> 
      </nav>      
    </>
  )
}

export default Header