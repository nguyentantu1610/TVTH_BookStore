import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        <div className="col-3">
            <div className="blog-card">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
                </div>
                <div className="blog-content">
                    <p className="date">3 Tháng 8, 2023</p>
                        <h5 className="title">
                            Một buổi sáng CN tuyệt vời
                        </h5>
                        <p className="desc">Hôm nay chủ nhật nắng ấm, gió thoáng và không mưa</p>
                        <Link to="/" className="button ">Đọc thêm</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default BlogCard