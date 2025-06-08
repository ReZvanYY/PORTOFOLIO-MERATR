import { projects } from "./projects.js";

function renderMinorProjects () {
    const renderProjects = document.querySelector('.displayed-projects-container');
    renderProjects.innerHTML = '';

    projects.forEach(project => {
        const displayedProject = document.createElement('article');
        displayedProject.classList.add('project-article');

        displayedProject.innerHTML = `
        <h2 class="project-title">${project.title.mainTitle}</h2>
        <h5 class="project-sub-title">${project.title.projectTitle}</h5>
        <img src="${project.media.url}" alt="${project.media.alt}" class="project-thumbnail-img"/>
        <p class="minor-description">${project.description.minorDescription}</p>
        <p class="tech-minor">${project.tech.minorTech}</p>
        <div class="interactive-buttons">
        <a href="${project.link.deploy}"><button class="action-button">DEPLOYMENT SITE</button></a>
        <a href="${project.link.repo}"><button class="action-button">GITHUB REPO</button></a>
        </div>
        `;
        renderProjects.appendChild(displayedProject);
    });
}
renderMinorProjects();