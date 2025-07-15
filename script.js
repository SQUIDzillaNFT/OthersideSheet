// Ghost data for The Otherside
const ghosts = [
    {
        name: "Shadow Phantom",
        description: "A dark entity that thrives in shadows and darkness. Extremely aggressive when exposed to light.",
        evidence: ["EMF Level 5", "Spirit Box", "Ghost Orbs"],
        behaviors: [
            "Becomes more aggressive in dark areas",
            "Will actively avoid bright lights",
            "Can phase through walls when in shadow form",
            "Hunts more frequently during night hours"
        ],
        difficulty: 4,
        category: "aggressive"
    },
    {
        name: "Echo Spirit",
        description: "A ghost that mimics sounds and voices. Can perfectly replicate any audio it hears.",
        evidence: ["Spirit Box", "Ghost Writing", "Freezing Temperatures"],
        behaviors: [
            "Mimics player voices and sounds",
            "Creates false audio cues to mislead investigators",
            "Becomes more active when players are talking",
            "Can create multiple simultaneous sounds"
        ],
        difficulty: 3,
        category: "deceptive"
    },
    {
        name: "Corrupted Entity",
        description: "A malevolent spirit corrupted by negative energy. Extremely dangerous and unpredictable.",
        evidence: ["EMF Level 5", "Fingerprints", "Freezing Temperatures"],
        behaviors: [
            "Randomly changes behavior patterns",
            "Can corrupt electronic equipment",
            "Becomes stronger when players are afraid",
            "May ignore traditional ghost hunting rules"
        ],
        difficulty: 5,
        category: "corrupted"
    },
    {
        name: "Memory Fragment",
        description: "A ghost that exists as fragments of memories. Can manipulate time and reality perception.",
        evidence: ["Ghost Writing", "Ghost Orbs", "Spirit Box"],
        behaviors: [
            "Can create time loops or distorted reality",
            "Manipulates player memories and perceptions",
            "Becomes stronger when players are confused",
            "May appear in multiple locations simultaneously"
        ],
        difficulty: 4,
        category: "reality"
    },
    {
        name: "Void Walker",
        description: "A ghost that can create portals and move between dimensions. Extremely rare and dangerous.",
        evidence: ["EMF Level 5", "Fingerprints", "Ghost Orbs"],
        behaviors: [
            "Can teleport between rooms instantly",
            "Creates temporary dimensional rifts",
            "May pull players into void spaces",
            "Becomes more powerful in areas with high paranormal activity"
        ],
        difficulty: 5,
        category: "dimensional"
    },
    {
        name: "Spectral Mimic",
        description: "A ghost that can take on the appearance of other entities or even players.",
        evidence: ["Spirit Box", "Ghost Writing", "Freezing Temperatures"],
        behaviors: [
            "Can disguise itself as other ghost types",
            "May appear as a player to confuse the team",
            "Changes appearance based on player expectations",
            "Becomes more deceptive when players are confident"
        ],
        difficulty: 4,
        category: "deceptive"
    },
    {
        name: "Resonance Ghost",
        description: "A ghost that resonates with specific frequencies and emotions.",
        evidence: ["EMF Level 5", "Spirit Box", "Fingerprints"],
        behaviors: [
            "Responds to specific sound frequencies",
            "Becomes more active when players experience strong emotions",
            "Can amplify or dampen sounds in the area",
            "May create harmonic disturbances"
        ],
        difficulty: 3,
        category: "resonant"
    },
    {
        name: "Temporal Echo",
        description: "A ghost that exists outside of normal time flow. Can manipulate time perception.",
        evidence: ["Ghost Writing", "Freezing Temperatures", "Ghost Orbs"],
        behaviors: [
            "Can slow down or speed up time perception",
            "May cause players to experience time loops",
            "Becomes more active during specific time periods",
            "Can create temporal anomalies"
        ],
        difficulty: 4,
        category: "temporal"
    },
    {
        name: "Quantum Phantom",
        description: "A ghost that exists in multiple states simultaneously. Extremely unpredictable.",
        evidence: ["EMF Level 5", "Ghost Writing", "Spirit Box"],
        behaviors: [
            "Can exist in multiple locations at once",
            "May appear and disappear randomly",
            "Behaves differently for different players",
            "Can create quantum superposition effects"
        ],
        difficulty: 5,
        category: "quantum"
    },
    {
        name: "Emotional Specter",
        description: "A ghost that feeds on and amplifies human emotions.",
        evidence: ["Spirit Box", "Fingerprints", "Freezing Temperatures"],
        behaviors: [
            "Becomes stronger when players are emotional",
            "Can induce specific emotions in players",
            "May target the most emotional player",
            "Creates emotional feedback loops"
        ],
        difficulty: 3,
        category: "emotional"
    }
];

// DOM elements
const ghostGrid = document.getElementById('ghostGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

// Current filter state
let currentFilter = 'all';
let selectedEvidence = null;
let filteredGhosts = [...ghosts];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderGhosts();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            setActiveFilter(filter);
            applyFilters();
        });
    });
    
    // Add evidence click listeners
    document.querySelectorAll('.evidence-item').forEach(item => {
        item.addEventListener('click', () => {
            const evidence = item.dataset.evidence;
            toggleEvidenceFilter(evidence, item);
        });
    });
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    applyFilters(searchTerm);
}

// Set active filter button
function setActiveFilter(filter) {
    currentFilter = filter;
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Apply filters and search
function applyFilters(searchTerm = '') {
    filteredGhosts = ghosts.filter(ghost => {
        const matchesSearch = searchTerm === '' || 
            ghost.name.toLowerCase().includes(searchTerm) ||
            ghost.description.toLowerCase().includes(searchTerm) ||
            ghost.evidence.some(evidence => evidence.toLowerCase().includes(searchTerm)) ||
            ghost.behaviors.some(behavior => behavior.toLowerCase().includes(searchTerm));
        
        if (!matchesSearch) return false;
        
        // Check evidence filter
        if (selectedEvidence && !ghost.evidence.includes(selectedEvidence)) {
            return false;
        }
        
        switch (currentFilter) {
            case 'evidence':
                return ghost.evidence.length >= 3;
            case 'difficulty':
                return ghost.difficulty >= 4;
            default:
                return true;
        }
    });
    
    renderGhosts();
}

// Toggle evidence filter
function toggleEvidenceFilter(evidence, element) {
    if (selectedEvidence === evidence) {
        // Deselect if already selected
        selectedEvidence = null;
        element.classList.remove('active');
    } else {
        // Select new evidence
        selectedEvidence = evidence;
        // Remove active class from all evidence items
        document.querySelectorAll('.evidence-item').forEach(item => {
            item.classList.remove('active');
        });
        // Add active class to clicked item
        element.classList.add('active');
    }
    
    applyFilters();
}

// Render ghost cards
function renderGhosts() {
    ghostGrid.innerHTML = '';
    
    if (filteredGhosts.length === 0) {
        ghostGrid.innerHTML = `
            <div class="no-results">
                <h3>No ghosts found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    filteredGhosts.forEach(ghost => {
        const card = createGhostCard(ghost);
        ghostGrid.appendChild(card);
    });
}

// Create individual ghost card
function createGhostCard(ghost) {
    const card = document.createElement('div');
    card.className = 'ghost-card';
    
    const difficultyStars = '★'.repeat(ghost.difficulty) + '☆'.repeat(5 - ghost.difficulty);
    
    card.innerHTML = `
        <div class="ghost-name">${ghost.name}</div>
        <div class="ghost-description">${ghost.description}</div>
        
        <div class="evidence-list">
            <h4>Evidence</h4>
            <div class="evidence-items">
                ${ghost.evidence.map(evidence => 
                    `<span class="evidence-tag">${evidence}</span>`
                ).join('')}
            </div>
        </div>
        
        <div class="behaviors">
            <h4>Unique Behaviors</h4>
            ${ghost.behaviors.map(behavior => 
                `<div class="behavior-item">${behavior}</div>`
            ).join('')}
        </div>
        
        <div class="difficulty">
            <span>Difficulty:</span>
            <span class="difficulty-stars">${difficultyStars}</span>
        </div>
    `;
    
    return card;
}

// Add some interactive features
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchInput.value = '';
        applyFilters();
    }
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 