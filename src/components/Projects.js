import React from 'react';

const Projects = () => {
    return (
		<>
			<h1 id="project-h1">Projects</h1>
			<div className="card-container">
				<div className="card">
					<div className="card-image card-one"></div>
					<div className="card-btns">
						<a href="https://github.com/erikcorea/flash-card">GitHub</a>
						<a href="https://estudiarcards.netlify.app/">Live</a>
					</div>
				</div>
				<div className="card">
					<div className="card-image card-two"></div>
					<div className="card-btns">
						<a href="https://github.com/erikcorea/news-project2">GitHub</a>
						<a href="https://github.com/erikcorea/news-project2">Live</a>
					</div>
				</div>

				<div className="card">
					<div className="card-image card-three"></div>
					<div className="card-btns">
						<a href="https://github.com/Team-Orange4">GitHub</a>
						<a href="http://team-orange4.herokuapp.com/">Live</a>
					</div>
				</div>
			</div> 
		</>
		);
};





export default Projects;