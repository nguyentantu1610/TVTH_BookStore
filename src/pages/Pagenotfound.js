import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <Layout title="Lỗi trang 404">
       <div className='pnf'>
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Xin lỗi ! Trang không được tìm thấy</h2>
        <Link to="/" className="pnf-btn">
          Trở Về
        </Link>
       </div>
    </Layout>
  )
}

export default Pagenotfound