import React from 'react';

const Projects = () => {
    return (
			<div className='project-container'>
				<h1 id='project-h1'>Projects</h1>
				<div className='project-cards'>
					<div className='project-card-one'>
						<div className='card-background-one'></div>
						<div className='card-btns'>
							<button className='project-github-btn'>gitHub</button>
							<button className='project-live-btn'>Live</button>
						</div>
					</div>
					<div className='project-card-two'>
						<div className='card-background-two'></div>
						<div className='card-btns'>
							<button className='project-github-btn'>gitHub</button>
							<button className='project-live-btn'>Live</button>
						</div>
					</div>
					<div className='project-card-three'>
						<div className='card-background-three'></div>
						<div className='card-btns'>
							<button className='project-github-btn'>gitHub</button>
							<button className='project-live-btn'>Live</button>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Projects;