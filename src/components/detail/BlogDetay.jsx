import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../assets/styles/blog-detay.scss'
import { posts } from '../../assets/data/data'

const BlogDetay = () => {
    const params = useParams()
    const parametre = params.blogID;
    return (
        <div className='blog-detay'>
            <img src={posts[parametre - 1].url} alt="photo" />
            <h3>{posts[parametre - 1].title}</h3>
            <p>{posts[parametre - 1].content}</p>
            <Link to="/online-6/anasayfa">Back to Home</Link>
        </div>
    )
}
export default BlogDetay
