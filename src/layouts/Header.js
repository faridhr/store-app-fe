import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
	return (
		<header className='header'>
			<div className='header-body'>
				<div className='app-logo'>
					<img src={Logo} alt='Logo' style={{ color: 'white' }} />
					<Link className='text-decoration-none text-white fw-bold' to='/'>
						React App
					</Link>
				</div>
				<div className='cart'>
					<span className='badge text-bg-primary'>4</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
