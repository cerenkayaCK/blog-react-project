import React from 'react'
import '../assets/styles/navbar.scss'
import { Link, NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink style={({isActive})=>({color:isActive? "orangered": "whitesmoke"})} to="anasayfa">Anasayfa</NavLink></li>
                    <li><NavLink style={({isActive})=>({color:isActive? "orangered": "whitesmoke"})} to="galeri">Galeri</NavLink></li>
                    <li><NavLink style={({isActive})=>({color:isActive? "orangered": "whitesmoke"})} to="blog">Blog</NavLink></li>
                    <li><NavLink style={({isActive})=>({color:isActive? "orangered": "whitesmoke"})} to="iletisim">İletişim</NavLink></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar