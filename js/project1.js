// Data for Production Hierarchy
const productionHierarchy = {
    level1: [
        { role: "DIRECTOR", name: "Victoryne Christania Ekklesia", img: "https://via.placeholder.com" }
    ],
    level2: [
        { role: "SCRIPT", name: "Ni Nyoman Desyana", img: "https://via.placeholder.com" },
        { role: "SCRIPT", name: "Pande Made Cintya Mahadewi", img: "https://via.placeholder.com" }
    ],
    level3: [
        { role: "CREATIVE TEAM", name: "Benedicta Naomi Widi", img: "https://via.placeholder.com" },
        { role: "CREATIVE TEAM", name: "Made Tiara Andina Pramesti", img: "https://via.placeholder.com" },
        { role: "EQUIPMENT", name: "I Gede Umbu Desta Pratama", img: "https://via.placeholder.com" },
        { role: "EQUIPMENT", name: "I Gede Gada Megantara", img: "https://via.placeholder.com" },
        { role: "EQUIPMENT", name: "I Komang Wistara Arta Ratrianjaya", img: "https://via.placeholder.com" },
        { role: "EQUIPMENT", name: "Naufal Al-Khalifa Utomo", img: "https://via.placeholder.com" },
        { role: "EQUIPMENT", name: "I Made Diva Mahottama Putra", img: "https://via.placeholder.com" },
        { role: "EQUIPMENT", name: "Putu Bagus Tresna Upadana", img: "https://via.placeholder.com" },
        { role: "EQUIPMENT", name: "Naradhika Rusman Saputra", img: "https://via.placeholder.com" },
        { role: "EDITOR", name: "Putu Rama Satya Mahendra", img: "https://via.placeholder.com" },
        { role: "EDITOR", name: "Raden Nayla Dewindari Basja", img: "https://via.placeholder.com" },
        { role: "EDITOR", name: "I Made Oldi Jaya Kusuma", img: "https://via.placeholder.com" },
        { role: "EDITOR", name: "I Komang Rio Jaya Saputra", img: "https://via.placeholder.com" },
        { role: "CAMERAMEN", name: "I Made Oldi Jaya Kusuma", img: "https://via.placeholder.com" },
        { role: "CAMERAMEN", name: "Ni Made Dhea Arista Putri", img: "https://via.placeholder.com" },
        { role: "CAMERAMEN", name: "Victoryne Christania Ekklesia", img: "https://via.placeholder.com" },
        { role: "FASHION STYLIST", name: "Ni Putu Nomi Nesa Ardani", img: "https://via.placeholder.com" },
        { role: "FASHION STYLIST", name: "Yowana Dwi Aminara", img: "https://via.placeholder.com" },
        { role: "FASHION STYLIST", name: "Ida Ayu Kade Mila Pradewi", img: "https://via.placeholder.com" },
        { role: "MAKE UP ARTIST", name: "Ni Luh Putu Mutiara Calista Putrawan", img: "https://via.placeholder.com" },
        { role: "MAKE UP ARTIST", name: "Sharah Ferhat", img: "https://via.placeholder.com" },
        { role: "MAKE UP ARTIST", name: "Luh Putu Putri Dharma Maharani", img: "https://via.placeholder.com" },
        { role: "MAKE UP ARTIST", name: "Ni Made Dwi Febriyanti", img: "https://via.placeholder.com" }
    ]
};

// Data for Cast Hierarchy
const castHierarchy = {
    level1: [
        { role: "MAIN ROLE", name: "I Komang Rio Jaya Saputra", character: "Dilan", img: "https://via.placeholder.com" },
        { role: "MAIN ROLE", name: "Ni Putu Diah Rihana Anggia Dewi", character: "Milea", img: "https://via.placeholder.com" }
    ],
    level2: [
        { role: "SUPPORTING", name: "Nicola Naomas Damaris Aritonang", character: "Wati", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "Ni Made Dhea Arista Putri", character: "Rani", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "I Pande Putu Maheza Suryadistra", character: "Piyan", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "I Komang Andhika Arya Permana", character: "Nandan", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "I Putu Bagus Pasya Dinatha", character: "Adnan Husain", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "I Nyoman Surya Pramadya Pradnyadana P", character: "Anhar", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "Komang Baskara Surya Radhitya", character: "Beni", img: "https://via.placeholder.com" }
    ],
    level3: [
        { role: "SUPPORTING", name: "Sharah Ferhat", character: "Susi", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "Putu Rama Satya Mahendra", character: "Pak Suripto", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "Zeebe Ramadhan Yunarko", character: "Kepala Sekolah", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "Teuku Derick Xavier Syah Putra", character: "Kang Adi", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "Ni Kadek Sintya Puspita Dewi", character: "Bi Eem", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "Ni Komang Yudiartini", character: "Bi Asih", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "I Gusti Ayu Shinta Tribeca", character: "Bu Rini", img: "https://via.placeholder.com" },
        { role: "SUPPORTING", name: "I Gede Umbu Desta Pratama", character: "Agus", img: "https://via.placeholder.com" }
    ]
};

// Function to render Production Hierarchy
function renderProductionHierarchy() {
    const container = document.getElementById('production-hierarchy');
    if (!container) return;

    let html = '';

    // Level 1: Director
    html += '<div class="hierarchy-level">';
    productionHierarchy.level1.forEach(member => {
        html += `
            <div class="p-card accent-orange">
                <div class="rank-tag">${member.role}</div>
                <div class="p-img-container">
                    <img src="${member.img}" alt="${member.name}" />
                </div>
                <h3>${member.name}</h3>
            </div>
        `;
    });
    html += '</div><div class="connector-line"></div>';

    // Level 2: Script Writers
    html += '<div class="hierarchy-level">';
    productionHierarchy.level2.forEach(member => {
        html += `
            <div class="p-card accent-blue">
                <div class="rank-tag">${member.role}</div>
                <div class="p-img-container">
                    <img src="${member.img}" alt="${member.name}" />
                </div>
                <h3>${member.name}</h3>
            </div>
        `;
    });
    html += '</div><div class="connector-line"></div>';

    // Level 3: Production Team (Slider)
    html += '<div class="staff-grid slider-container">';
    html += '<button class="slider-btn prev-btn" onclick="slidePrev(\'production-level3\')"><i class="fa-solid fa-chevron-left"></i></button>';
    html += '<div class="slider-wrapper" id="production-level3">';
    productionHierarchy.level3.forEach(member => {
        html += `
            <div class="p-card">
                <div class="p-img-small">
                    <img src="${member.img}" alt="${member.name}" />
                </div>
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
        `;
    });
    html += '</div>';
    html += '<button class="slider-btn next-btn" onclick="slideNext(\'production-level3\')"><i class="fa-solid fa-chevron-right"></i></button>';
    html += '</div>';

    container.innerHTML = html;
}

// Function to render Production Team
function renderProductionTeam() {
    const container = document.getElementById('production-team');
    if (!container) return;

    productionTeam.forEach(member => {
        const accentClass = member.role === "DIRECTOR" ? "accent-orange" : member.role === "SCRIPT" ? "accent-blue" : "";
        container.innerHTML += `
            <div class="p-card ${accentClass}">
                <div class="rank-tag">${member.role}</div>
                <div class="p-img-small">
                    <img src="${member.img}" alt="${member.name}" />
                </div>
                <h3>${member.name}</h3>
            </div>
        `;
    });
}

// Function to render Cast Hierarchy
function renderCastHierarchy() {
    const container = document.getElementById('cast-hierarchy');
    if (!container) return;

    let html = '';

    // Level 1: Main Roles
    html += '<div class="hierarchy-level">';
    castHierarchy.level1.forEach(actor => {
        html += `
            <div class="p-card accent-orange">
                <div class="rank-tag">${actor.role}</div>
                <div class="p-img-container">
                    <img src="${actor.img}" alt="${actor.name}" />
                </div>
                <h3>${actor.name}</h3>
                <p class="role-name"><i>as</i> ${actor.character}</p>
            </div>
        `;
    });
    html += '</div><div class="connector-line"></div>';

    // Level 2: Supporting Roles (First Group) - Slider
    html += '<div class="hierarchy-level slider-container">';
    html += '<button class="slider-btn prev-btn" onclick="slidePrev(\'cast-level2\')"><i class="fa-solid fa-chevron-left"></i></button>';
    html += '<div class="slider-wrapper" id="cast-level2">';
    castHierarchy.level2.forEach(actor => {
        html += `
            <div class="p-card accent-blue">
                <div class="rank-tag">${actor.role}</div>
                <div class="p-img-container">
                    <img src="${actor.img}" alt="${actor.name}" />
                </div>
                <h3>${actor.name}</h3>
                <p class="role-name"><i>as</i> ${actor.character}</p>
            </div>
        `;
    });
    html += '</div>';
    html += '<button class="slider-btn next-btn" onclick="slideNext(\'cast-level2\')"><i class="fa-solid fa-chevron-right"></i></button>';
    html += '</div><div class="connector-line"></div>';

    // Level 3: Supporting Roles (Second Group) - Slider
    html += '<div class="staff-grid slider-container">';
    html += '<button class="slider-btn prev-btn" onclick="slidePrev(\'cast-level3\')"><i class="fa-solid fa-chevron-left"></i></button>';
    html += '<div class="slider-wrapper" id="cast-level3">';
    castHierarchy.level3.forEach(actor => {
        html += `
            <div class="p-card">
                <div class="p-img-small">
                    <img src="${actor.img}" alt="${actor.name}" />
                </div>
                <h3>${actor.name}</h3>
                <p class="role-name"><i>as</i> ${actor.character}</p>
            </div>
        `;
    });
    html += '</div>';
    html += '<button class="slider-btn next-btn" onclick="slideNext(\'cast-level3\')"><i class="fa-solid fa-chevron-right"></i></button>';
    html += '</div>';

    container.innerHTML = html;
}

// Function to render Cast List
function renderCastList() {
    const container = document.getElementById('cast-list');
    if (!container) return;

    castList.forEach(actor => {
        const accentClass = actor.role === "MAIN ROLE" ? 'style="background: #e74c3c"' : "";
        container.innerHTML += `
            <div class="p-card">
                <div class="rank-tag" ${accentClass}>${actor.role}</div>
                <div class="p-img-small">
                    <img src="${actor.img}" alt="${actor.name}" />
                </div>
                <h3>${actor.name}</h3>
                <p class="role-name"><i>as</i> ${actor.character}</p>
            </div>
        `;
    });
}

// Slider functions
function slideNext(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    const cardWidth = slider.querySelector('.p-card')?.offsetWidth || 200;
    const scrollAmount = cardWidth + 20; // 20px for margin
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function slidePrev(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    const cardWidth = slider.querySelector('.p-card')?.offsetWidth || 200;
    const scrollAmount = cardWidth + 20; // 20px for margin
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

// Auto-slide function
function startAutoSlide(sliderId, interval = 3000) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    const cards = slider.querySelectorAll('.p-card');
    if (cards.length <= 2) return; // Don't auto-slide if 2 or fewer cards

    const cardWidth = cards[0]?.offsetWidth || 200;
    const scrollAmount = cardWidth + 20;

    return setInterval(() => {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            // At the end, scroll back to start
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Scroll next
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }, interval);
}

// Initialize rendering on DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderProductionHierarchy();
    renderCastHierarchy();

    // Start auto-slide for sliders
    startAutoSlide('production-level3');
    startAutoSlide('cast-level2');
    startAutoSlide('cast-level3');
});
