import { projects } from './projects.js';

const param = new URLSearchParams(window.location.search);
const id = param.get('id');

const specificProject = projects.find((projects) => projects.id === parseInt(id));


function displaySpecificDetailedProject () {
    const displayProjectFeed = document.querySelector('.display-detailed-info');
    displayProjectFeed.innerHTML = '';

        const projectArticleElement = document.createElement('article');
        projectArticleElement.classList.add('article-detailed-container');

        projectArticleElement.innerHTML = `
        <h2 class="project-specific-title">${specificProject.title.mainTitle}</h2>
        <h5 class="project-specific-sub-title">${specificProject.title.projectTitle}</h5>
        <img src="${specificProject.media.url}" alt="${specificProject.media.alt}" class="project-specific-img"/>
        <p class="specific-description">${specificProject.description.mainDescription}</p>
        <p class="specific-tech">${specificProject.tech.mainTech}</p>
        <div class="specific-interactive-buttons">
        <a href="${specificProject.link.deploy}"><button class="action-button">DEPLOYMENT SITE</button></a>
        <a href="${specificProject.link.repo}"><button class="action-button">GITHUB REPO</button></a>
        </div>
        `;
        displayProjectFeed.appendChild(projectArticleElement);

        document.title = 'Project: ' + specificProject.title.mainTitle
}
displaySpecificDetailedProject();
