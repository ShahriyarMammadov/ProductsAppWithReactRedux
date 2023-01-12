import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <header>
            <div className="logo">
                <Link to={'/'}>LOGO</Link >
            </div>
            <div className="links">
                <NavLink to={'/addProducts'}>Add Products</NavLink>
                <NavLink to={'/wishList'}>WishList</NavLink>
            </div>
        </header>
    )
}

export default HeaderComponent