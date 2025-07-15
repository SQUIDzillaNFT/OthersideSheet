// Ghost data for The Otherside
const ghosts = [
    {
        name: "Revenant",
        description: "Known to be a powerful active spirit, with reports that being haunted by one feels like literal suffocation. Stamina drains faster when targeted.",
        evidence: ["EMF", "Radiation", "Writing"],
        behaviors: [
            "Stamina drains faster when targeted",
            "Normal speed during hunts",
            "Normal line of sight behavior"
        ],
        category: "aggressive"
    },
    {
        name: "Banshee",
        description: "Known for its high pitched screams, electrical interferences, and being close to those who have a close relationship with death.",
        evidence: ["Audio", "Radiation", "EMF"],
        behaviors: [
            "Player can hear screams from Spirit box or Spirit boom box",
            "Normal speed during hunts",
            "Normal line of sight behavior"
        ],
        category: "auditory"
    },
    {
        name: "Demon",
        description: "Malevolent entity associated with evil, and harm. There is no mistaking the demon, as its intentions are negative, and it seeks to harm humans.",
        evidence: ["Writing", "UV", "Radiation"],
        behaviors: [
            "Hunts as soon as 90 BPM",
            "Shorter hunt cooldown",
            "Leaves hot temps on touched objects",
            "Increased efficiency",
            "Holy water stops hunting for two minutes",
            "Decreased line of sight"
        ],
        category: "demonic"
    },
    {
        name: "Skia",
        description: "The Skia, often called 'Spirit' or 'tutelary deities' are known to protect their families, homes, or places of interest. They do not want to harm humans, but will if they feel threatened.",
        evidence: ["Audio", "EMF", "UV"],
        behaviors: [
            "Unique Spirit Box responses",
            "Increased hunt cooldown",
            "Distressed sounds near player during hunt",
            "Increased speed until near target, then reduces to normal",
            "Normal line of sight"
        ],
        category: "protective"
    },
    {
        name: "Wraith",
        description: "An incredibly fast harbinger of death, the Wraith is a furious, malevolent spirit, born of hatred and sorrow.",
        evidence: ["Audio", "Freezing", "UV"],
        behaviors: [
            "Targets specific player",
            "Breaks line of sight easily",
            "No feet when hunting",
            "Reduces speed during hunt",
            "Substantially increased line of sight"
        ],
        category: "malevolent"
    },
    {
        name: "Bhoot",
        description: "Unable to find peace in the afterlife, the Bhoot haunt the grounds which they've been wronged seeking revenge.",
        evidence: ["Freezing", "Radiation", "Writing"],
        behaviors: [
            "Increased hunt cooldown",
            "Room the ghost is in gets cold moments before hunting",
            "Normal speed during hunts",
            "Normal line of sight behavior"
        ],
        category: "vengeful"
    },
    {
        name: "Tariaksuq",
        description: "Representing darkness, death, and the unseen existence, the Tariaksuq lurks often unseen. Favoring the dark, frequent light trippings are reported with these beings.",
        evidence: ["Audio", "EMF", "Freezing"],
        behaviors: [
            "Blows out candles more frequently than other ghosts",
            "Turns off lights more frequently",
            "Never turns on lights",
            "Will only appear in full form during a hunt",
            "Holy water stops hunting for 90 seconds",
            "Increases/decreases with light",
            "Increases speed slightly"
        ],
        category: "darkness"
    },
    {
        name: "Tantalus",
        description: "Known to be aggressive, the Tantalus is considered to be close to those who have witnessed or experienced death.",
        evidence: ["Freezing", "UV", "EMF"],
        behaviors: [
            "Never closes doors",
            "Never slams doors (except during a hunt)",
            "Can not turn FLXPod off",
            "Less effective holy water",
            "Increases speed slightly"
        ],
        category: "aggressive"
    },
    {
        name: "Iblis",
        description: "Known to possess abilities like shape-shifting and invisibility, the Iblis is neither good nor evil, but free moral agency. Associated with magic, they are powerful and mysterious beings.",
        evidence: ["Audio", "Freezing", "Writing"],
        behaviors: [
            "Shapeshifts during hunts",
            "Normal line of sight",
            "Increases speed slightly"
        ],
        category: "mystical"
    },
    {
        name: "Shura",
        description: "Consumed by wrath, and an insatiable thirst for violence, they are stuck on Earth because of a curse that keeps them from entering Hell or the underworld.",
        evidence: ["EMF", "Writing", "Freezing"],
        behaviors: [
            "Shorter cooldown",
            "Larger line of sight range",
            "Harder to break line of sight",
            "Less effective holy water",
            "Increases speed"
        ],
        category: "violent"
    },
    {
        name: "Phantom",
        description: "Known to be powerful malevolent beings of darkness, created by darkness itself, Phantoms are hard to see, and keep a low profile until they're ready to strike fear into their target.",
        evidence: ["Audio", "EMF", "UV"],
        behaviors: [
            "Harder to see",
            "Can not be seen by night vision",
            "Can not be seen by FLXPod",
            "Normal line of sight",
            "Normal speed"
        ],
        category: "shadow"
    },
    {
        name: "Poltergeist",
        description: "A mischievous spirit, they're believed to be responsible for causing disruptive phenomena - throwing objects, interfering with electronics, and unexplained noises.",
        evidence: ["UV", "EMF", "Writing"],
        behaviors: [
            "Throws more objects than normal ghosts",
            "Normal line of sight",
            "Increases speed slightly"
        ],
        category: "mischievous"
    },
    {
        name: "Strigoi",
        description: "Often depicted as troubled spirits or living dead that can rise from the grave, typically at night.",
        evidence: ["UV", "Freezing", "Writing"],
        behaviors: [
            "Actively raises heart rate when in the room with the ghost",
            "Shadow events only",
            "Turns on radios, never off",
            "Normal line of sight",
            "Increases speed slightly"
        ],
        category: "undead"
    },
    {
        name: "Wisp",
        description: "Portrayed as malevolent, leading travelers to harm or death. Often associated with the visibility of ghost orbs.",
        evidence: ["Audio", "Radiation", "Freezing"],
        behaviors: [
            "Turns on lights significantly more than other ghosts",
            "Never turns off lights",
            "Increased efficiency",
            "Holy water stops hunting for two minutes",
            "Increases speed slightly"
        ],
        category: "malevolent"
    },
    {
        name: "The Echo",
        description: "A passive, residual spirit that is felt through memory more than presence - quiet, elusive, and hard to track.",
        evidence: ["Radiation", "Freezing", "UV"],
        behaviors: [
            "Can't interact with main breaker, only individual breakers (except post hunt)",
            "Can't turn on or off lights",
            "Can't turn on or off radios",
            "Can not turn FLXPod off",
            "Normal line of sight",
            "Normal speed"
        ],
        category: "residual"
    },
    {
        name: "The Forgotten",
        description: "Delayed messages, and barely interacts. The hardest ghost to identify with No Evidence.",
        evidence: ["EMF", "Radiation", "UV"],
        behaviors: [
            "Delayed messages",
            "Barely interacts",
            "Hardest ghost to identify",
            "Can not turn FLXPod off",
            "Normal line of sight",
            "Increases speed slightly"
        ],
        category: "elusive"
    },
    {
        name: "Doppelganger",
        description: "A deceptive spirit that takes on the persona of a person, often to trick its intended targets.",
        evidence: ["Audio", "Writing", "UV"],
        behaviors: [
            "Returns to favorite room before hunting",
            "Shorter distance line of sight",
            "Normal speed"
        ],
        category: "deceptive"
    },
    {
        name: "Wewe Gombel",
        description: "Historically known for being a vengeful ghost, Gombel is known for being malicious and unforgiving.",
        evidence: ["Radiation", "EMF", "Freezing"],
        behaviors: [
            "Turns off lights only",
            "Short cooldown",
            "Can't interact with main breaker, only individual breakers (except post hunt)",
            "Increased efficiency",
            "Increases speed drastically",
            "Player can hear screams from Spirit box or Spirit boom box",
            "Room the ghost is in gets cold moments before hunting",
            "Can not turn FLXPod off"
        ],
        category: "vengeful"
    }
];

// DOM elements
const ghostGrid = document.getElementById('ghostGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

// Current filter state
let currentFilter = 'all';
let selectedSpeed = 'all';
let selectedEvidence = [];
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
    
    // Add tab listeners
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            switchTab(tab);
        });
    });
    
    // Add speed filter listeners
    document.querySelectorAll('input[name="speed"]').forEach(radio => {
        radio.addEventListener('change', () => {
            selectedSpeed = radio.value;
            applyFilters();
        });
    });
    
    // Add evidence checkbox listeners
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const evidence = checkbox.value;
            if (checkbox.checked) {
                if (!selectedEvidence.includes(evidence)) {
                    selectedEvidence.push(evidence);
                }
            } else {
                selectedEvidence = selectedEvidence.filter(e => e !== evidence);
            }
            applyFilters();
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
        
        // Check evidence filters
        if (selectedEvidence.length > 0) {
            const hasAllSelectedEvidence = selectedEvidence.every(evidence => 
                ghost.evidence.includes(evidence)
            );
            if (!hasAllSelectedEvidence) {
                return false;
            }
        }
        
        // Check speed filter
        if (selectedSpeed !== 'all') {
            const speedBehaviors = ghost.behaviors.join(' ').toLowerCase();
            switch (selectedSpeed) {
                case 'normal':
                    if (!speedBehaviors.includes('normal speed') && !speedBehaviors.includes('normal line of sight')) {
                        return false;
                    }
                    break;
                case 'increased':
                    if (!speedBehaviors.includes('increases speed') && !speedBehaviors.includes('increased speed')) {
                        return false;
                    }
                    break;
                case 'decreased':
                    if (!speedBehaviors.includes('decreases speed') && !speedBehaviors.includes('decreased speed') && !speedBehaviors.includes('reduces speed')) {
                        return false;
                    }
                    break;
            }
        }
        
        switch (currentFilter) {
            default:
                return true;
        }
    });
    
    renderGhosts();
}

// Toggle evidence filter (for bottom section)
function toggleEvidenceFilter(evidence, element) {
    if (selectedEvidence.includes(evidence)) {
        // Deselect if already selected
        selectedEvidence = selectedEvidence.filter(e => e !== evidence);
        element.classList.remove('active');
    } else {
        // Select new evidence
        selectedEvidence.push(evidence);
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
    
    const speedInfo = getSpeedInfo(ghost);
    
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
        
        <div class="speed-indicator">
            <div class="speed-label">Speed: ${speedInfo.label}</div>
            <div class="speed-bar">
                <div class="speed-fill" style="width: ${speedInfo.percentage}%"></div>
            </div>
        </div>
    `;
    
    return card;
}

// Get speed information for ghost
function getSpeedInfo(ghost) {
    const behaviors = ghost.behaviors.join(' ').toLowerCase();
    
    if (behaviors.includes('increases speed drastically')) {
        return { label: 'Very Fast', percentage: 100 };
    } else if (behaviors.includes('increases speed') || behaviors.includes('increased speed')) {
        return { label: 'Fast', percentage: 75 };
    } else if (behaviors.includes('reduces speed') || behaviors.includes('decreases speed') || behaviors.includes('decreased speed')) {
        return { label: 'Slow', percentage: 25 };
    } else if (behaviors.includes('normal speed') || behaviors.includes('normal line of sight')) {
        return { label: 'Normal', percentage: 50 };
    } else {
        return { label: 'Normal', percentage: 50 };
    }
}

// Switch between tabs
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
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