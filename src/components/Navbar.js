import React, { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
			<div className='nav-div'>
				<nav className='nav-main'>
					<div className='logo'>Erik Correa</div>
					<ul
						className='nav-links'
						style={{ transform: open ? 'translateX(0px)' : '' }}>
						<li>
							<a href="#contact-link"><button className='nav-btns'>Contact</button></a>
						</li>
						<li>
							<a href="https://docs.google.com/document/d/1jkvvAAhUp_HS4f_c0JRXavMNTiUCGbbdK24G6Acw_wo/edit?usp=sharing"><button className='nav-btns btn-open'>Resume</button></a>
						</li>
					</ul>
					<i onClick={() => setOpen(!open)} className='fas fa-bars burger'></i>
				</nav>
			</div>
		);
};

export default Navbar;