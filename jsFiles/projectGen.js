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
    }
];

const projects = {
    film: [
        {
            title: "Coporate video - Flanders Best",
            date: "June 2023",
            description: "For this assignment in Graphical Media Design at Artevelde, I made a corporate video for a company called Flanders Best.",
            image: "/images/Content/projects/FlandersBest.jpg",
            tags: ["Premiere Pro", "Camera"],
        },
        {
            title: "Documentary Portret - Filip Ponseele",
            date: "January 2023",
            description: "For this assignment in Graphical Media Design at Artevelde, I made a small documentary about a blacksmith called Philip Ponseele.",
            image: "/images/Content/projects/Docport.jpg",
            tags: ["Premiere Pro", "Camera"],
        }
    ],
    webdev: [
        {
            title: "Portfolio Website",
            date: "January 2025",
            description: "Believe it or not but the website you are on right now is completely designed and developed by me!",
            image: "/images/Content/projects/portfolioWebsite.jpg",
            tags: ["HTML", "CSS", "JavaScript"],
        },
        {
            title: "Game Development Studio Website",
            date: "November 2024",
            description: "This website was completely designed and developed by me. Using Three.js to render 3D-moddels to the web. It was made as part of an assignment for Communication at DAE.",
            image: "/images/Content/projects/microwaveStudiosWebsite.jpg",
            tags: ["JavaScript", "Three.js", "Node.js"],
        }
    ],
    gamedev: [
        {
            title: "Slother",
            date: "September 2024",
            description: "The result of a two day game jam with the theme Nature always wins. Our team consisted of 3 people including Emiliano Dichter, Colin Berens and me. The game is made in Unity.",
            image: "/images/Content/projects/slother.jpg",
            tags: ["Unity", "C#", "Pixel Art"],
        },
        {
            title: "Grand Theft Fridge",
            date: "April 2024",
            description: "Grand Theft Fridge is a game where you need to collect food out of a fridge without making to much noise. It's a party game for up to 4 people. The game was made as the final assignment for Game Design 1 in DAE. The team consisted of 5 people including Nand Khalhofer, Timoth Vanstaen, Matteo Zoda, Denis Silov, Nathan Emmett and me.",
            image: "/images/Content/projects/GrandTheftFridge.jpg",
            tags: ["Unity", "C#"],
        },
        {
            title: "Bird Assault",
            date: "October 2023",
            description: "This game was made for the final exam of PD1 at DAE. You control a bird that needs to evade enemies, collect worms and find his way back to the nest.",
            image: "/images/Content/projects/BirdAssaultMenuScreen.png",
            tags: ["Monogame", "C#", "Pixel Art"],
        }
    ],
    "3dart": [
        {
            title: "The Monopolist",
            date: "January 2025",
            description: "The final assignment for Game Art 2 at DAE. A go-kart inspired by luxury brands like Rolls-Royce and Cadillac, showcasing their signature elements through bold, exaggerated forms.",
            image: "/images/Content/projects/Kart.png",
            tags: ["Blender", "Substance Painter"],
        },
        {
            title: "Plugger",
            date: "November - December 2024",
            description: "Second assignment for Game Art 2 at DAE. It's a walking extension cord called Plugger!",
            image: "/images/Content/projects/Robuddy.png",
            tags: ["Blender", "Substance Painter"],
        },
        {
            title: "A knights Desk",
            date: "March - April 2024",
            description: "Second assignment for Game Art 1 at DAE. For the knight who this desk belongs to, defeating dragons and freeing princesses is a day job.",
            image: "/images/Content/projects/Desk.png",
            tags: ["Blender", "Substance Painter"]
        },
        {
            title: "Sea Side Diorama",
            date: "November-December 2023",
            description: "The final assignment for 3D1 at DAE. It's a scene that takes place somwhere in Norway.",
            image: "/images/Content/projects/Diorama.jpg",
            tags: ["Maya", "Photoshop"]
        }
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
            <div class="project-content">
                <h2 class="project-title">${project.title}</h2>
                <h2 class="project-date">${project.date}</h2>
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function showCategory(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    const categoryProjects = projects[categoryId];
    
    document.getElementById('mainContent').innerHTML = `
        <div class="title-background">
            <div class="container">
                <div class="breadcrumb">
                    <a href="#" onclick="showCategories(event)">Projects</a>
                    <span class="breadcrumb-separator">></span>
                    <span>${category.title}</span>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="projects-grid">
                ${categoryProjects.map(project => createProjectCard(project)).join('')}
            </div>
        </div>
    `;

    window.history.pushState({categoryId}, '', `#${categoryId}`);
}

// Update the showCategories function
function showCategories(event) {
    if (event) event.preventDefault();
    
    document.getElementById('mainContent').innerHTML = `
        <div class="title-background">
            <div class="container">
                <h1 class="section-title1">Projects</h1>
                <h2 class="section-title2">Categories</h2>
            </div>
        </div>
        <div class="container">
            <div class="categories-grid">
                ${categories.map(category => createCategoryCard(category)).join('')}
            </div>
        </div>
    `;

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