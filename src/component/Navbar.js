import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // faTimes 아이콘 추가
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const [menuActive, setMenuActive] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const goToLogin = () => {
        navigate('/login');
    };

    const logout = () => {
        setAuthenticate(false);
        navigate('/');
    };

    const Home = () => {
        navigate('/');
    };

    const search = (event) => {
        if (event.key === 'Enter') {
            navigate(`/?q=${event.target.value}`);
        }
    };

    return (
        <div>
            {/* 사이드메뉴 토글 버튼 */}
            <div className="menu-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            {/* 사이드메뉴 */}
            <div className={`nav-section ${menuActive ? 'active' : ''}`}>
                <div className="menu-close" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faTimes} /> 닫기
                </div>
                <ul className="menu-lists">
                    {['여성', '남성', '신생아', '아동', 'Sale'].map((menu) => (
                        <li key={menu}>{menu}</li>
                    ))}
                </ul>
            </div>

            {/* 로그인/로그아웃 버튼 */}
            <div className="login-button" onClick={authenticate ? logout : goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>{authenticate ? '로그아웃' : '로그인'}</div>
            </div>

            {/* 로고 이미지 */}
            <div className="nav-section">
                <img onClick={Home} width={100} src="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg" />
            </div>

            {/* 데스크탑 버전의 메뉴 리스트 및 검색창 */}
            <div className="menu-area">
                <ul className="menu-list">
                    {['여성', '남성', '신생아', '아동', 'Sale'].map((menu) => (
                        <li key={menu}>{menu}</li>
                    ))}
                </ul>
                <div className="search-area">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="제품검색" onKeyDown={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
