import React from 'react';
import '../App.css'
import RouterApp from './Router';


function Header (props) {
    return (
        <div id='Header' style={{backgroundColor : "blue", color : "white",}}>
            <aside>
                <h1 style={{color:"gold"}}>Support The Guardian</h1>
                <h6>Support our journalism with a year end gift</h6>
                <button type="button" style={{backgroundColor:"gold", borderRadius:10, padding:5, margin:10}}>Contribute --></button>
                <button type="button" style={{backgroundColor:"gold", borderRadius:10, padding:5,margin:10 }}>Subscribe --></button>
            
            <nav >
                <a>News |</a>
                <a>Opinion |</a>
                <a>Sports |</a>
                <a>culture |</a>
                <a>Lifestyle |</a>
                <a>More </a>
                {/* <RouterApp/> */}
            </nav>
            </aside>
        </div>
    );
}

export default Header;