# The Otherside - Ghost Behavior Cheat Sheet

A modern, responsive cheat sheet website for The Otherside game, similar to the popular Phasmophobia cheat sheet. This website provides quick access to ghost information, evidence types, and unique behaviors to help players identify and deal with different ghost types.

## Features

- **Modern Dark Theme**: Beautiful gradient background with glassmorphism effects
- **Search Functionality**: Search through ghosts, evidence, and behaviors
- **Filtering Options**: Filter by evidence types or difficulty levels
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Cards**: Hover effects and smooth animations
- **Evidence Guide**: Quick reference for all evidence types

## Ghost Types Included

- Shadow Phantom
- Echo Spirit
- Corrupted Entity
- Memory Fragment
- Void Walker
- Spectral Mimic
- Resonance Ghost
- Temporal Echo
- Quantum Phantom
- Emotional Specter

## Evidence Types

- EMF Level 5
- Spirit Box
- Fingerprints
- Ghost Writing
- Freezing Temperatures
- Ghost Orbs

## Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. The website will load with all functionality ready to use

### Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose the main branch and save
6. Your site will be available at `https://yourusername.github.io/repository-name`

### Customization

#### Adding New Ghosts

Edit the `ghosts` array in `script.js`:

```javascript
{
    name: "New Ghost Name",
    description: "Description of the ghost",
    evidence: ["Evidence 1", "Evidence 2", "Evidence 3"],
    behaviors: [
        "Unique behavior 1",
        "Unique behavior 2"
    ],
    difficulty: 3, // 1-5 scale
    category: "category-name"
}
```

#### Modifying Evidence Types

Update the evidence section in `index.html` and the evidence arrays in `script.js`.

#### Styling Changes

Modify `styles.css` to change colors, fonts, or layout:

- Main colors: `#4ecdc4` (teal), `#ff6b6b` (red), `#45b7d1` (blue)
- Background: Dark gradient from `#0f0f23` to `#16213e`
- Font: Inter (Google Fonts)

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── New_ghost_behavior_chart.pdf  # Original PDF reference
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

Feel free to contribute by:
- Adding new ghost types
- Improving the design
- Adding new features
- Fixing bugs

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Inspired by the Phasmophobia cheat sheet
- Uses Inter font from Google Fonts
- Built with vanilla HTML, CSS, and JavaScript 