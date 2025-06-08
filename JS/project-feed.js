import { projects } from './projects.js';


function projectFeed () {
    const displayProjectFeed = document.querySelector('.displayed-projects-container');
    displayProjectFeed.innerHTML = '';

    projects.forEach(project => {
        const projectArticleElement = document.createElement('article');
        projectArticleElement.classList.add('project-article');
        projectArticleElement.innerHTML = `
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
        displayProjectFeed.appendChild(projectArticleElement);

        projectArticleElement.addEventListener('click', (e) =>{
            if(!e.target.closest('.action-button')){
                window.location.href = `project-specific.html?id=${project.id}`;
            }
        });
    })
}
projectFeed();