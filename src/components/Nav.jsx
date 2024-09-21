import React from 'react'
import logo from "../assets/images/logo.svg"
import store from "../assets/images/store.svg"
import search from "../assets/images/search.svg"

function Nav() {
  return (
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <ul className='list-styled'>
                <li>
                    <img src={logo} alt="Apple" />
                </li>
                <li>
                    <a className='link-styled'>Store</a>
                </li>
                <li>
                    <a className='link-styled'>Mac</a>
                </li>
                <li>
                    <a className='link-styled'>iPad</a>
                </li>
                <li>
                    <a className='link-styled'>AirPods</a>
                </li>
                <li>
                    <a className='link-styled'>Accessories</a>
                </li>
                <li>
                    <a className='link-styled'>Watch</a>
                </li>
                <li>
                    <a className='link-styled'>Entertainment</a>
                </li>
                <li>
                    <img src={search} alt="Search" />
                </li>
                <li>
                    <img src={store} alt="Store" />
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav