// Update last modified date
document.getElementById('last-updated').textContent = new Date().toLocaleDateString();

// ISO data structure - Add your ISOs here
const isoData = {
    linux: [
        {
            name: "Ubuntu 22.04 LTS",
            icon: "🐧",
            size: "3.6 GB",
            released: "April 2022",
            checksum: "84eed5e80d8e3c9d4c9b4e0b0b5b5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5",
            url: "#" // Replace with actual download URL
        },
        // Add more Linux ISOs
    ],
    windows: [
        // Add Windows ISOs
    ],
    utilities: [
        // Add utility ISOs
    ]
};

// Download tracking
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const isoName = this.getAttribute('data-iso');
        console.log(`Download initiated for: ${isoName}`);
        
        // You can add analytics or download tracking here
        // For actual hosting, you'll need to handle file storage
        // (GitHub Pages has size limits, consider using GitHub Releases or external hosting)
    });
});

// Dynamic ISO card generation (optional)
function generateISOCards(category, container) {
    const data = isoData[category];
    if (!data || data.length === 0) return;
    
    data.forEach(iso => {
        const card = document.createElement('div');
        card.className = 'iso-card';
        card.innerHTML = `
            <div class="iso-icon">${iso.icon}</div>
            <h4>${iso.name}</h4>
            <p class="iso-info">Size: ${iso.size} | Released: ${iso.released}</p>
            <p class="iso-checksum">SHA256: ${iso.checksum}</p>
            <a href="${iso.url}" class="download-btn" data-iso="${iso.name.toLowerCase().replace(/\s+/g, '-')}">Download</a>
        `;
        container.appendChild(card);
    });
}

// Search functionality (optional enhancement)
function addSearchFeature() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search ISOs...';
    searchInput.style.cssText = `
        width: 100%;
        padding: 15px;
        margin: 20px 0;
        background: #2a2a2a;
        border: 2px solid #444;
        color: #e0e0e0;
        border-radius: 5px;
        font-size: 1em;
    `;
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.iso-card').forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });
    
    const isoSection = document.querySelector('.iso-list');
    isoSection.insertBefore(searchInput, isoSection.firstChild);
}

// Initialize search on page load
document.addEventListener('DOMContentLoaded', () => {
    addSearchFeature();
});
