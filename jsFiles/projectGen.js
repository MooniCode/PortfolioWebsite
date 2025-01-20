        // Sample project data - you can easily add new projects here
        const projects = [
            {
                title: "Project 1",
                description: "A responsive web application built with modern technologies.",
                image: "/api/placeholder/400/320",
                tags: ["HTML", "CSS", "JavaScript"],
                demo: "https://demo-link.com",
                github: "https://github.com/username/project1"
            },
            {
                title: "Project 2",
                description: "An interactive dashboard for data visualization.",
                image: "/api/placeholder/400/320",
                tags: ["React", "D3.js", "Node.js"],
                demo: "https://demo-link.com",
                github: "https://github.com/username/project2"
            },
            {
                title: "Project 3",
                description: "A mobile-first e-commerce platform.",
                image: "/api/placeholder/400/320",
                tags: ["Vue.js", "Firebase", "Tailwind"],
                demo: "https://demo-link.com",
                github: "https://github.com/username/project3"
            }
        ];

        // Function to create project cards
        function createProjectCard(project) {
            return `
                <div class="project-card">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="project-content">
                        <h2 class="project-title">${project.title}</h2>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.demo}" class="project-link" target="_blank">Live Demo</a>
                            <a href="${project.github}" class="project-link" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            `;
        }

        // Function to render all projects
        function renderProjects() {
            const projectsGrid = document.getElementById('projectsGrid');
            projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
        }

        // Initial render
        renderProjects();