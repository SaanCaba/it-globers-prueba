import React from 'react';
import './navbar.scss';

import { TbArmchair2 } from 'react-icons/tb';
import { FiUmbrella } from 'react-icons/fi';
import { RiShoppingBag2Line, RiRestTimeLine } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

const NavBar = () => {
	return (
		<header className='sectionNavBar'>
			<nav className='contNavBar'>
				<div className='contLogo'>
					<span>Pufi</span>
				</div>
				<ul className='ulNavBar'>
					<li>
						<TbArmchair2 size={24} color={'white'} />
						<span>PUFI PUFF</span>
					</li>
					<li>
						<FiUmbrella size={24} color={'white'} />
						<span>PUFI RAIN</span>
					</li>
					<li>
						<RiShoppingBag2Line size={24} color={'white'} />
						<span>PUFI CART</span>
					</li>
					<li>
						<RiRestTimeLine size={24} color={'white'} />
						<span>PUFI NAP</span>
					</li>
				</ul>
				<div className='contSettings'>
					<span>
						MI CUENTA <MdKeyboardArrowDown />
					</span>
					<span>MI COMPRA</span>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
