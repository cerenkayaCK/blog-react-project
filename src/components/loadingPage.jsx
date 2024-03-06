import React, { useEffect } from 'react'
import Load from '../assets/img/giphy.gif'
import { useNavigate } from 'react-router-dom'

const loadingPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/online-6/anasayfa")
        }, 3000);
    })
    return (
        <div className='loading'>
            <img src={Load} alt="" />
        </div>
    )
}
export default loadingPage