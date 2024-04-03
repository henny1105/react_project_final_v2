import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuList = ['WOMAN', 'MAN', 'KIDS', 'HOME', '향수'];

	const handleAuthClick = () => {
		if (isAuthenticated) {
			// 디스패치를 사용하여 로그아웃 액션을 실행
			dispatch({ type: 'LOGOUT' });
			navigate('/mall_project');
		} else {
			navigate('/mall_project/login');
		}
	};

	const goToMain = () => {
		navigate('/mall_project');
	};

	const search = (event) => {
		if (event.key === 'Enter') {
			let keyword = event.target.value;
			navigate(`/mall_project?q=${keyword}`);
		}
	};

	const handleSearchClick = () => {
		const searchInput = document.querySelector('.search_box input');
		const keyword = searchInput.value;
		if (keyword) {
			navigate(`/mall_project?q=${keyword}`);
		}
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen); // 메뉴 토글 상태 업데이트
	};

	return (
		<div className='top_cont'>
			<div className='inner'>
				<div className='login_button_box' onClick={handleAuthClick}>
					<div className='login_button'>
						<FontAwesomeIcon icon={isAuthenticated ? faSignOutAlt : faUser} />
						<div>{isAuthenticated ? 'LOG OUT' : 'LOGIN'}</div>
					</div>
				</div>
				<div className='nav_section' onClick={goToMain}>
					<img width={200} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/800px-Zara_Logo.svg.png' alt='logo' />
					<div className='menu_area_mo'>
						<button className={`btnCall ${isMenuOpen ? 'on' : ''}`} onClick={toggleMenu}>
							<span>메뉴호출</span>
						</button>
					</div>
				</div>
				<div className='menu_area'>
					<ul className='menu_list'>
						{menuList.map((menu, index) => (
							<li key={menu}>{menu}</li>
						))}
					</ul>
					<div className='search_box'>
						<input type='text' placeholder='Search products' onKeyPress={search} />
						<FontAwesomeIcon icon={faSearch} onClick={handleSearchClick} />
					</div>
				</div>
				<div className={`menu_area_mo_desc ${isMenuOpen ? 'on' : ''}`}>
					<div className='search_box'>
						<input type='text' placeholder='Search products' onKeyPress={search} />
						<FontAwesomeIcon icon={faSearch} onClick={handleSearchClick} />
					</div>
					<ul className='menu_list'>
						{menuList.map((menu, index) => (
							<li key={menu}>{menu}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
