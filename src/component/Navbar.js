import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const menuList =['여성','남성','신생아','아동','Sale']
    return (
        <div>
            <div className="login-button">
                <FontAwesomeIcon icon={faUser}/>
                <div>로그인</div>
            </div>
            <div className="nav-section">
                <img width={100} src="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg"/>
            </div>
            <div className ="menu-area">
                    <ul className="menu-list">
                        {menuList.map((menu) => (
                            <li>{menu}</li>
                        ))}
                    </ul>
                <div className="search-area">
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="text" placeholder="제품검색"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
