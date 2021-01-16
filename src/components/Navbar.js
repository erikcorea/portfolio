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
							<button className='nav-btns'>Contact</button>
						</li>
						<li>
							<button className='nav-btns btn-open'>Resume</button>
						</li>
					</ul>
					<i onClick={() => setOpen(!open)} className='fas fa-bars burger'></i>
				</nav>
			</div>
		);
};

export default Navbar;