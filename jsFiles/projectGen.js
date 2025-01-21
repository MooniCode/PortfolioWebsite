// Project and category data
const categories = [
    {
        id: "3dart",
        title: "3D Art",
        description: "3D modeling, texturing, and animation are fundamental elements of any great game. These aspects bring virtual worlds to life and are crucial for creating immersive gaming experiences.",
        image: "/images/Content/projects/Kart.png",
    },
    {
        id: "gamedev",
        title: "Game Development",
        description: "Game development is my greatest passion. What captivates me most is its limitless creative potential – from crafting gameplay mechanics to building entire universes.",
        image: "/images/Content/projects/BirdAssaultMenuScreen.png",
    },
    {
        id: "webdev",
        title: "Web Development",
        description: "I discovered web development during my studies at a film and media school. Since then, I've been passionate about creating responsive, engaging web experiences that push creative boundaries.",
        image: "/images/Content/projects/MicrowaveStudios.jpg",
    },
    {
        id: "film",
        title: "Film",
        description: "While studying at a film and media school I produced various film projects that sparked my interest in cinematography and visual storytelling.",
        image: "/images/Content/projects/Docport.jpg",
    },
    {
        id: "youtube",
        title: "Youtube",
        description: "While I currently focus on gaming content, I'm eager to expand into creating videos that document and explore the game development process.",
        image: "/images/Content/projects/TouchGrass.jpg",
    }
];

const projects = {
    webdev: [
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website built with modern technologies.",
            image: "/images/Content/projects/BirdAssaultMenuScreen.png",
            tags: ["HTML", "CSS", "JavaScript"],
            demo: "https://demo-link.com",
            github: "https://github.com/username/project1"
        },
        {
            title: "Dashboard App",
            description: "An interactive dashboard for data visualization.",
            image: "/api/placeholder/400/320",
            tags: ["React", "D3.js", "Node.js"],
            demo: "https://demo-link.com",
            github: "https://github.com/username/project2"
        }
    ],
    gamedev: [
        {
            title: "Platform Game",
            description: "A 2D platform game with pixel art graphics.",
            image: "/images/Content/projects/BirdAssaultMenuScreen.png",
            tags: ["Unity", "C#", "Pixel Art"],
            demo: "https://demo-link.com",
            github: "https://github.com/username/project3"
        }
    ],
    "3dart": [
        {
            title: "The Monopolist",
            date: "January 2025",
            description: "The final assignment for Game Art 2 at DAE - Kortrijk. The kart is based of a luxury Rollce-Royce with some over exagerated shapes.",
            image: "/images/Content/projects/Kart.png",
            tags: ["Blender", "Substance Painter"],
            demo: "https://demo-link.com",
            github: "https://github.com/username/project4"
        },
        {
            title: "Plugger",
            date: "November - December 2024",
            description: "Second assignment for Game Art 2 at DAE - Kortrijk. It's a walking extension cord called Plugger!",
            image: "/images/Content/projects/Robuddy.png",
            tags: ["Blender", "Substance Painter"],
            demo: "https://demo-link.com",
            github: "https://github.com/username/project4"
        },
        {
            title: "Sea Side Diorama",
            date: "November-December 2023",
            description: "The final assignment for 3D1 at DAE - Kortrijk. It's a scene that takes place somwhere in Norway.",
            image: "/images/Content/projects/Diorama.jpg",
            tags: ["Maya", "Photoshop"]
        },
        {
            title: "A knights Desk",
            date: "March - April 2024",
            description: "The final assignment for 3D1 at DAE - Kortrijk. It's a scene that takes place somwhere in Norway.",
            image: "/images/Content/projects/Desk.png",
            tags: ["Maya", "Photoshop"]
        },
    ]
};

// Function to create category cards
function createCategoryCard(category) {
    return `
        <div class="category-card" onclick="showCategory('${category.id}')">
            <img src="${category.image}" alt="${category.title}" class="category-image">
            <div class="category-content">
                <h2 class="category-title">${category.title}</h2>
                <p class="category-description">${category.description}</p>
            </div>
        </div>
    `;
}

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h2 class="project-date">${project.date}</h2>
                <h2 class="project-title">${project.title}</h2>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Function to show category projects
function showCategory(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    const categoryProjects = projects[categoryId];
    
    document.getElementById('mainContent').innerHTML = `
        <h1 class="section-title">${category.title}</h1>
        <a href="#" class="back-button" onclick="showCategories(event)">← Back to Categories</a>
        <div class="projects-grid">
            ${categoryProjects.map(project => createProjectCard(project)).join('')}
        </div>
    `;

    // Update URL without page reload
    window.history.pushState({categoryId}, '', `#${categoryId}`);
}

// Function to show main categories page
function showCategories(event) {
    if (event) event.preventDefault();
    
    document.getElementById('mainContent').innerHTML = `
        <h1 class="section-title">Categories</h1>
        <div class="categories-grid">
            ${categories.map(category => createCategoryCard(category)).join('')}
        </div>
    `;

    // Update URL without page reload
    window.history.pushState({}, '', window.location.pathname);
}

// Handle browser back/forward buttons
window.onpopstate = function(event) {
    if (event.state && event.state.categoryId) {
        showCategory(event.state.categoryId);
    } else {
        showCategories();
    }
};

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check for hash in URL
    const hash = window.location.hash.slice(1);
    if (hash && projects[hash]) {
        showCategory(hash);
    } else {
        showCategories();
    }
});

// Make functions globally available
window.showCategory = showCategory;
window.showCategories = showCategories;