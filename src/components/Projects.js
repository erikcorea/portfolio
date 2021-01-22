import React from 'react';

const Projects = () => {
    return (
			<div className='project-container'>
				<h1 id='project-h1'>Projects</h1>
				<div className='project-cards'>
					<div className='project-card-one'>
						<div className='card-background-one'></div>
						<div className='card-btns'>
							<a href="https://github.com/erikcorea/flash-card"><button className='project-github-btn'>gitHub</button></a>
							<a href="https://estudiarcards.netlify.app/"><button className='project-live-btn'>Live</button></a>
						</div>
					</div>
					<div className='project-card-two'>
						<div className='card-background-two'></div>
						<div className='card-btns'>
							<a href="https://github.com/erikcorea/news-project2"><button className='project-github-btn'>gitHub</button></a>
							<button className='project-live-btn'>Live</button>
						</div>
					</div>
					<div className='project-card-three'>
						<div className='card-background-three'></div>
						<div className='card-btns'>
							<a href="https://github.com/Team-Orange4"><button className='project-github-btn'>gitHub</button></a>
							<a href="http://team-orange4.herokuapp.com/"><button className='project-live-btn'>Live</button></a>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Projects;