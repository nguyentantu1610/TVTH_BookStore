import React from 'react'
import BlogCard from '../components/BlogCard';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import { services } from '../utils/Data'; 

const Blog = () => {
    return (
        <>
            <Meta title={"Tin tức"} />
            <BreadCrumb title='Tin tức' />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Tìm theo loại
                            </h3>
                            <div>
                                <ul className="ps-0">
                                    <li>LightNovel</li>
                                    <li>Truyện tranh</li>
                                    <li>Truyện nước ngoài</li>
                                    <li>Truyện thiếu nhi</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-9 py-3">
                        <div className="d-flex gap-10">
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <BlogCard />
                                </div>
                                <div className="col-6 mb-3">
                                    <BlogCard />
                                </div>
                                <div className="col-6 mb-3">
                                    <BlogCard />
                                </div>
                                <div className="col-6 mb-3">
                                    <BlogCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Blog