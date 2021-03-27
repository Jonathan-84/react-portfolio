import React from 'react';
import Project from '../ProjectCard';

function Portfolio() {
	const projects = [
		{
			name: 'Pizza Hunt',
			description:
				'A tool to share your favorite pizza creation with others, see their favorites, and interact with one another',
			image: 'Pizza-hunt.png',
			technologies: [
				'Node.js', 'Mongoose', 'MongoDB', 'Express.js'
			],
			github: 'https://github.com/Jonathan-84/pizza-hunt',
      deployed: 'https://quiet-island-89954.herokuapp.com/',
		},
		{
			name: 'Horiseon',
			description:
				'This is a professionally done, mobile ready website.',
			image: 'Horiseon resized.png',
			technologies: [
				'HTML/CSS',
				'JavaScript'
			],
			github: 'https://github.com/Jonathan-84/urban-octo-telegram',
			deployed: 'https://jonathan-84.github.io/urban-octo-telegram/',
		},
		{
			name: 'Project1906',
			description:
				'This web based tool will allow you to quickly get key National Park Information and its forecast with ease.',
			image: 'Project1906.png',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery', 'API' ],
			github: 'https://github.com/sldowd/Project1906',
			deployed: 'https://sldowd.github.io/Project1906/',
		},
		{
			name: 'Run Buddy',
			description:
				'Professional website to learn about the Run Buddy Gym.',
			image: 'Run Buddy resized.jpg',
			technologies: [
				'JavaScript',
				'CSS',
        'HTML'
			],
			github: 'https://github.com/Jonathan-84/run-buddy',
			deployed: 'https://jonathan-84.github.io/run-buddy/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'Weather Dashboard.png',
			technologies: ['HTML/CSS', 'JavaScript', 'API'],
			github: 'https://github.com/Jonathan-84/Weather-Dashboard',
			deployed: 'https://jonathan-84.github.io/Weather-Dashboard/',
		},
		{
			name: 'Personal  Budget Blitz',
			description:
				'Using this application you can track your budget, online or offline.',
			image: 'Personal-Budget-Blitz.jpg',
			technologies: ['HTML/CSS', 'JavaScript', 'Node.js', 'Express.js', 'Mongoose', 'MongoDB' ],
			github: 'https://github.com/Jonathan-84/personal-budget-blitz',
			deployed: 'https://personal-budget-blitz.herokuapp.com/',
		},
	];

	return (
		<section>
			<div>
				<h1 className="page-header text-center py-5">My Portfolio</h1>
			</div>
      <div class="row row-cols-1 row-cols-md-2 g-4 m-4">
      <div class="col">
  <div class="card">
						<Project projects={projects[0]}></Project>
          </div>
          </div>
          <div class="col">
          <div class="card">
						<Project projects={projects[1]}></Project>
        </div>
        </div>
        <div class="col">
        <div class="card">
						<Project projects={projects[2]}></Project>
            </div>
            </div>
            <div class="col">
            <div class="card">
						<Project projects={projects[3]}></Project>
            </div>
            </div>
            <div class="col">
            <div class="card">
						<Project projects={projects[4]}></Project>
            </div>
            </div>
            <div class="col">
            <div class="card">
						<Project projects={projects[5]}></Project>
            </div>
            </div>
			</div>
		</section>
	);
}

export default Portfolio;