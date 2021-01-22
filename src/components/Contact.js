import React from 'react';
import linked from '../photos/link.png';
import email from '../photos/gmail.png';
import phone from '../photos/phone.png';

const Contact = () => {
    return (
			<div className='contact-container'>
				<h1 id="contact-link" className='contact-h1'>Contact</h1>

				<div className='contact-info'>
					<div id='linkedin'>
						<img className='contact-logo' src={linked} alt='linkedin' />
						<a
							href='https://www.linkedin.com/in/erik-correa/'
							className='portfolio-links'>
							linkedin/erik-correa
						</a>
					</div>
					<div id='email'>
						<img className='contact-logo' src={email} alt='linkedin' />
						<a
							href='https://mail.google.com/mail/u/0/?view=cm&to=erikcorrea444@gmail.com&fs=1&tf=1'
							className='portfolio-links'>
							erikcorrea444@gmail.com
						</a>
					</div>
					<div id='phone'>
						<img className='contact-logo' src={phone} alt='linkedin' />
						<h5>(708)200-5780</h5>
					</div>
				</div>
			</div>
		);
};

export default Contact;