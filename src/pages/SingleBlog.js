import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import blog from '../images/blog-1.jpg';

const Singleblog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title='Dynamic Blog Name' />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blogs" className="d-flex align-items-center gap-10">
                                    <HiOutlineArrowLeft className="fs-4" /> Quay về tin tức</Link>
                                <h3 className="title">
                                    Một buổi sáng CN tuyệt vời
                                </h3>
                                <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
                                <p>Hôm nay chủ nhật nắng ấm, gió thoáng và không mưa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Singleblog