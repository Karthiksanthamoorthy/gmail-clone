import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import DialpadOutlinedIcon from '@material-ui/icons/DialpadOutlined';
import { Avatar } from '@material-ui/core';
import './css/Header.css'

 function Header() {

     return (
         <div className = "header">
             <div className = "headerLeft">
             <MenuIcon /> 
                 <img src = "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png" 
                 alt = "logo"
                 />
             </div>
             <div className = "headerMiddle">
                 <div className = "header__SearchContainer">
                     <SearchIcon />
                     <input 
                        type = "text"
                        placeholder = "Search mail"
                    />
                    <ArrowDropDownIcon />
                </div>
            </div>
            <div className = "headerRight">
                <div className = "headerRightIcons">
                    <HelpOutlineOutlinedIcon />
                    <SettingsOutlinedIcon />
                    <DialpadOutlinedIcon /> </div>
                    
                    <div className = "headerAvatar" style = {{
                        cursor: "pointer",
                    }}>  
                    <Avatar />
                     </div>
           </div>
         </div>
     );
 }

 export default Header
