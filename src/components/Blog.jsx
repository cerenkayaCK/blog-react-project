import React from 'react';
import { posts } from '/src/assets/data/data';
import '../assets/styles/blog.scss';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='blog'>
            <h2>News</h2>
            <div className='blog-card'>
                {posts.map(item => (
                    <Link key={item.id} to={item.id} className='blog-card-link'>
                        <div className='blog-card' key={item.id}>
                            <h3>{item.title}</h3>
                            <img className='img-blog' src={item.url} alt="photo"></img>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;
