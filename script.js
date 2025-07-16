// Ghost data for The Otherside
const ghosts = [
    {
        name: "Revenant",
        description: "Known to be a powerful active spirit, with reports that being haunted by one feels like literal suffocation.",
        evidence: ["EMF", "Radiation", "Writing"],
        behaviors: [
            "Stamina drains faster when targeted"
        ],
        category: "aggressive"
    },
    {
        name: "Banshee",
        description: "Known for its high pitched screams, electrical interferences, and being close to those who have a close relationship with death.",
        evidence: ["Audio", "Radiation", "EMF"],
        behaviors: [
            "Player can hear screams from Spirit box or Spirit boom box"
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
            "Decreased LOS",
            "Increased efficiency",
            "From the time it is sprayed, it will stop the ghost from hunting for two minutes"
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
            "Increased speed until near target, and then reduces speed to normal LOS"
        ],
        category: "protective"
    },
    {
        name: "Wraith",
        description: "An incredibly fast harbinger of death, the Wraith is a furious, malevolent spirit, born of hatred and sorrow.",
        evidence: ["Audio", "Freezing", "UV"],
        behaviors: [
            "Targets specific player",
            "Breaks LOS easily",
            "No feet when hunting",
            "Reduces speed during hunt",
            "Substantially increased LOS"
        ],
        category: "malevolent"
    },
    {
        name: "Bhoot",
        description: "Unable to find peace in the after life, the Bhoot haunt the grounds which they've been wronged seeking revenge.",
        evidence: ["Freezing", "Radiation", "Writing"],
        behaviors: [
            "Increased hunt cooldown",
            "Room the ghost is in gets cold moments before hunting"
        ],
        category: "vengeful"
    },
    {
        name: "Tariaksuq",
        description: "Representing darkness, death, and the unseen existence, the Tariaksuq lurks often unseen. Factoring the dark, frequent light trippings are reported with these beings.",
        evidence: ["Audio", "EMF", "Freezing"],
        behaviors: [
            "Blows out candles more frequently than other ghosts",
            "Turns off lights more frequently",
            "Never turns on lights",
            "Will only appear in full form during a hunt",
            "From the time it is sprayed, it will stop the ghost from hunting for 90 seconds",
            "LOS Increases/decreases with light"
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
            "Less effective",
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
            "Larger LOS range",
            "Harder to break LOS",
            "Less effective",
            "Increases speed"
        ],
        category: "violent"
    },
    {
        name: "Phantom",
        description: "Known to be powerful malevolent beings of darkness, created by darkness itself. Phantoms are hard to see, and keep a low profile until they're ready to strike fear into their target.",
        evidence: ["Radiation", "Audio", "UV"],
        behaviors: [
            "No manifest events",
            "More shadow events",
            "Turns off radios, but never on."
        ],
        category: "shadow"
    },
    {
        name: "Poltergeist",
        description: "A mischievous spirit, they're believed to be responsible for causing disruptive phenomena - throwing objects, interfering with electronics, and unexplained noises.",
        evidence: ["UV", "EMF", "Writing"],
        behaviors: [
            "Throws more objects than normal ghosts",
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
            "From the time it is sprayed, it will stop the ghost from hunting for two minutes",
            "Increases speed slightly"
        ],
        category: "malevolent"
    },
    {
        name: "The Echo",
        description: "A passive, residual spirit that is felt through memory more than presence - quiet, elusive, and hard to track.",
        evidence: ["Radiation", "Freezing", "UV"],
        behaviors: [
            "Can not turn FLXPod off",
            "Cant interact with main breaker, only individual breakers (except post hunt)",
            "Cant turn on or off lights",
            "Cant turn on or off radios"
        ],
        category: "residual"
    },
    {
        name: "The Forgotten",
        description: "Quiet, passive ghost, known for making rooms very cold, delayed messages, and barley interacts.",
        evidence: ["EMF", "Radiation", "UV"],
        behaviors: [
            "Can not turn FLXPod off",
            "The hardest ghost to identify with No Evidence.",
            "Increases speed slightly"
        ],
        category: "elusive"
    },
    {
        name: "Doppelganger",
        description: "A deceptive spirit that takes on the persona of a person, often to trick its intended targets",
        evidence: ["Audio", "Writing", "UV"],
        behaviors: [
            "Returns to favorite room before hunting",
            "Shorter distance LOS"
        ],
        category: "deceptive"
    },
    {
        name: "Wewe Gombel",
        description: "Historically known for being a vengeful ghost, Gombel is known for being malicious and unforgiving.",
        evidence: ["Radiation", "EMF", "Freezing"],
        behaviors: [
            "Turns off lights only.",
            "Short cooldown.",
            "Cant interact with main breaker, only individual breakers (except post hunt)",
            "Increased efficiency",
            "Increases speed drastically"
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
let quickFilters = [];
let selectedSpeed = 'all';
let selectedEvidence = [];
let selectedBehaviors = [];
let filteredGhosts = [...ghosts];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderGhosts();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    
    // Handle quick filter buttons (separate from other filters)
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            toggleQuickFilter(filter, button);
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
            const value = checkbox.value;
            
            if (checkbox.checked) {
                if (!selectedEvidence.includes(value)) {
                    selectedEvidence.push(value);
                }
            } else {
                selectedEvidence = selectedEvidence.filter(e => e !== value);
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

// Toggle quick filter
function toggleQuickFilter(filter, button) {
    if (filter === 'all') {
        // Clear all filters and activate "All Ghosts"
        quickFilters = [];
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    } else if (quickFilters.includes(filter)) {
        // Remove filter
        quickFilters = quickFilters.filter(f => f !== filter);
        button.classList.remove('active');
        
        // If no filters are active, activate "All Ghosts"
        if (quickFilters.length === 0) {
            document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
        }
    } else {
        // Add filter
        quickFilters.push(filter);
        button.classList.add('active');
        
        // Remove active state from "All Ghosts" when other filters are selected
        document.querySelector('.filter-btn[data-filter="all"]').classList.remove('active');
    }
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
        

        
        // Check LOS filter
        if (selectedSpeed !== 'all') {
            const losBehaviors = ghost.behaviors.join(' ').toLowerCase();
            switch (selectedSpeed) {
                case 'normal':
                    // Normal LOS - no speed-related behaviors
                    if (losBehaviors.includes('increases speed') || 
                        losBehaviors.includes('increased speed') ||
                        losBehaviors.includes('increases speed slightly') ||
                        losBehaviors.includes('increases speed drastically') ||
                        losBehaviors.includes('substantially increased los') ||
                        losBehaviors.includes('larger los range') ||
                        losBehaviors.includes('decreased los')) {
                        return false;
                    }
                    break;
                case 'increased':
                    if (!losBehaviors.includes('increases speed') && 
                        !losBehaviors.includes('increased speed') &&
                        !losBehaviors.includes('increases speed slightly') &&
                        !losBehaviors.includes('increases speed drastically') &&
                        !losBehaviors.includes('substantially increased los') &&
                        !losBehaviors.includes('larger los range')) {
                        return false;
                    }
                    break;
                case 'decreased':
                    if (!losBehaviors.includes('decreased los')) {
                        return false;
                    }
                    break;
            }
        }
        
        // Check quick filters (separate from other filters)
        if (quickFilters.length > 0) {
            const ghostBehaviors = ghost.behaviors.join(' ').toLowerCase();
            
            // Check each selected quick filter - ghost must pass ALL selected filters
            for (const filter of quickFilters) {
                switch (filter) {
                case 'slow':
                    if (!ghost.behaviors.some(behavior => 
                        behavior.toLowerCase().includes('decreased los')
                    )) {
                        return false;
                    }
                    break;
                case 'turns-off-lights':
                    // Show ghosts that can turn off lights (exclude those that never do)
                    if (ghostBehaviors.includes('never turns off lights') || 
                        ghostBehaviors.includes('cant turn on or off lights') ||
                        ghostBehaviors.includes('Cant turn on or off lights')) {
                        return false;
                    }
                    break;
                case 'turns-on-lights':
                    // Show ghosts that can turn on lights (exclude those that never do)
                    if (ghostBehaviors.includes('never turns on lights') || 
                        ghostBehaviors.includes('cant turn on or off lights') ||
                        ghostBehaviors.includes('Cant turn on or off lights') ||
                        ghostBehaviors.includes('turns off lights only') ||
                        ghostBehaviors.includes('Turns off lights only.')) {
                        return false;
                    }
                    break;
                case 'turns-off-radios':
                    // Show ghosts that can turn off radios (exclude those that never do)
                    if (ghostBehaviors.includes('never turns off radios') || 
                        ghostBehaviors.includes('turns on radios, never off') ||
                        ghostBehaviors.includes('Cant turn on or off radios')) {
                        return false;
                    }
                    break;
                case 'turns-on-radios':
                    // Show ghosts that can turn on radios (exclude those that never do)
                    if (ghostBehaviors.includes('never turns on radios') || 
                        ghostBehaviors.includes('turns off radios, but never on') ||
                        ghostBehaviors.includes('Cant turn on or off radios')) {
                        return false;
                    }
                    break;
                case 'cant-turn-flxpod-off':
                    if (!ghost.behaviors.some(behavior => 
                        behavior.toLowerCase().includes('can not turn flxpod off')
                    )) {
                        return false;
                    }
                    break;
                case 'high-los':
                    if (!ghost.behaviors.some(behavior => 
                        behavior.toLowerCase().includes('increased line of sight') ||
                        behavior.toLowerCase().includes('increased los speed') ||
                        behavior.toLowerCase().includes('substantially increased los') ||
                        behavior.toLowerCase().includes('larger los range') ||
                        behavior.toLowerCase().includes('increases speed') ||
                        behavior.toLowerCase().includes('increased speed') ||
                        behavior.toLowerCase().includes('increases speed slightly') ||
                        behavior.toLowerCase().includes('increases speed drastically')
                    )) {
                        return false;
                    }
                    break;
                case 'weak-holy-water':
                    if (!ghost.behaviors.some(behavior => 
                        behavior.toLowerCase().includes('increased efficiency') ||
                        behavior.toLowerCase().includes('holy water stops hunting for two minutes') ||
                        behavior.toLowerCase().includes('holy water stops hunting for 90 seconds') ||
                        behavior.toLowerCase().includes('reduces speed during hunt')
                    )) {
                        return false;
                    }
                    break;
                case 'less-effective-holy-water':
                    if (!ghost.behaviors.some(behavior => 
                        behavior.toLowerCase().includes('less effective')
                    )) {
                        return false;
                    }
                    break;
            }
        }
        
        return true;
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

// Helper function to identify holy water behaviors
function getHolyWaterBehaviors(ghost) {
    const holyWaterKeywords = [
        'increased efficiency',
        'holy water stops hunting',
        'less effective',
        'from the time it is sprayed',
        'reduces speed during hunt'
    ];
    
    return ghost.behaviors.filter(behavior => 
        holyWaterKeywords.some(keyword => 
            behavior.toLowerCase().includes(keyword)
        )
    );
}

// Helper function to get non-holy water behaviors
function getNonHolyWaterBehaviors(ghost) {
    const holyWaterBehaviors = getHolyWaterBehaviors(ghost);
    return ghost.behaviors.filter(behavior => 
        !holyWaterBehaviors.includes(behavior)
    );
}

// Create individual ghost card
function createGhostCard(ghost) {
    const card = document.createElement('div');
    card.className = 'ghost-card';
    
    const losInfo = getLOSInfo(ghost);
    const holyWaterInfo = getHolyWaterInfo(ghost);
    
    const holyWaterBehaviors = getHolyWaterBehaviors(ghost);
    const nonHolyWaterBehaviors = getNonHolyWaterBehaviors(ghost);
    
    card.innerHTML = `
        <div class="ghost-name">${ghost.name}</div>
        <div class="ghost-description">${ghost.description}</div>
        
        <div class="evidence-list">
            <h4>Evidence</h4>
            <div class="evidence-items">
                ${ghost.evidence.map(evidence => {
                    const evidenceClass = evidence.toLowerCase().replace(/\s+/g, '-');
                    return `<span class="evidence-tag ${evidenceClass}">${evidence}</span>`;
                }).join('')}
            </div>
        </div>
        
        <div class="behaviors">
            <h4>Unique Behaviors</h4>
            ${nonHolyWaterBehaviors.map(behavior => 
                `<div class="behavior-item">${behavior}</div>`
            ).join('')}
        </div>
        
        ${holyWaterBehaviors.length > 0 ? `
        <div class="behaviors">
            <h4>Holy Water</h4>
            ${holyWaterBehaviors.map(behavior => 
                `<div class="behavior-item">${behavior}</div>`
            ).join('')}
        </div>
        ` : ''}
        
        <div class="stats-container">
            <div class="stat-item">
                <div class="stat-label">LOS: ${losInfo.label}</div>
                <div class="stat-bar">
                    <div class="stat-fill los-fill" style="width: ${losInfo.percentage}%; background: ${losInfo.color}"></div>
                </div>
            </div>
            
            <div class="stat-item">
                <div class="stat-label">Holy Water: ${holyWaterInfo.label}</div>
                <div class="stat-bar">
                    <div class="stat-fill holy-water-fill" style="width: ${holyWaterInfo.percentage}%; background: ${holyWaterInfo.color}"></div>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Get speed information for ghost
function getSpeedInfo(ghost) {
    const behaviors = ghost.behaviors.join(' ').toLowerCase();
    
    if (behaviors.includes('increases speed until near target, and then reduces speed to normal')) {
        return { label: 'Variable', percentage: 75, color: '#ff6b35' };
    } else if (behaviors.includes('increases speed drastically')) {
        return { label: 'Very Fast', percentage: 100, color: '#8b0000' };
    } else if (behaviors.includes('increases speed') || behaviors.includes('increased speed')) {
        return { label: 'Fast', percentage: 75, color: '#ff4444' };
    } else if (behaviors.includes('increases speed slightly')) {
        return { label: 'Slightly Fast', percentage: 60, color: '#ff8c00' };
    } else if (behaviors.includes('reduces speed during hunt')) {
        return { label: 'Normal', percentage: 50, color: '#ffd700' };
    } else if (behaviors.includes('reduces speed') || behaviors.includes('decreases speed') || behaviors.includes('decreased speed')) {
        return { label: 'Slow', percentage: 25, color: '#32cd32' };
    } else if (behaviors.includes('normal speed') || behaviors.includes('normal line of sight')) {
        return { label: 'Normal', percentage: 50, color: '#ffd700' };
    } else {
        return { label: 'Normal', percentage: 50, color: '#ffd700' };
    }
}

// Get LOS speed information for ghost
function getLOSInfo(ghost) {
    const behaviors = ghost.behaviors.join(' ').toLowerCase();
    
    if (behaviors.includes('substantially increased line of sight') || behaviors.includes('substantially increased los') || behaviors.includes('larger line of sight range')) {
        return { label: 'Very High', percentage: 100, color: '#8b0000' };
    } else if (behaviors.includes('increases speed drastically')) {
        return { label: 'Very Fast', percentage: 100, color: '#8b0000' };
    } else if (behaviors.includes('increased line of sight') || behaviors.includes('increases line of sight') || behaviors.includes('increased los speed')) {
        return { label: 'High', percentage: 75, color: '#ff4444' };
    } else if (behaviors.includes('increases speed slightly')) {
        return { label: 'Moderate', percentage: 60, color: '#ff8c00' };
    } else if (behaviors.includes('increases speed') || behaviors.includes('increased speed')) {
        return { label: 'Fast', percentage: 75, color: '#ff4444' };
    } else if (behaviors.includes('decreased line of sight') || behaviors.includes('decreased los')) {
        return { label: 'Low', percentage: 25, color: '#32cd32' };
    } else if (behaviors.includes('normal line of sight')) {
        return { label: 'Normal', percentage: 50, color: '#ffd700' };
    } else {
        return { label: 'Normal', percentage: 50, color: '#ffd700' };
    }
}

// Get Holy Water effectiveness for ghost
function getHolyWaterInfo(ghost) {
    const behaviors = ghost.behaviors.join(' ').toLowerCase();
    
    if (behaviors.includes('increased efficiency') || behaviors.includes('holy water stops hunting for two minutes')) {
        return { label: 'Very Effective', percentage: 100, color: '#4ecdc4' };
    } else if (behaviors.includes('holy water stops hunting for 90 seconds') || behaviors.includes('reduces speed during hunt')) {
        return { label: 'Effective', percentage: 75, color: '#45b7d1' };
    } else if (behaviors.includes('less effective')) {
        return { label: 'Less Effective', percentage: 25, color: '#ff6b6b' };
    } else if (behaviors.includes('normal')) {
        return { label: 'Normal', percentage: 50, color: '#a0a0a0' };
    } else {
        return { label: 'Normal', percentage: 50, color: '#a0a0a0' };
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