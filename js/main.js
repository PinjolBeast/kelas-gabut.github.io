

// Data Moments (Pastikan path gambar benar)
const momentsData = [
    { title: "Moment-Moment", img: "img/moment1.avif" },
    { title: "Moment-Moment", img: "img/moment2.avif" },
    { title: "Moment-Moment", img: "img/moment3.avif" },
    { title: "Moment-Moment", img: "img/moment4.avif" },
    { title: "Moment-Moment", img: "img/moment5.avif" },
    { title: "Moment-Moment", img: "img/moment6.avif" },
    { title: "Moment-Moment", img: "img/moment7.avif" },
    { title: "Moment-Moment", img: "img/moment8.avif" },
    { title: "Moment-Moment", img: "img/moment9.avif" },
    { title: "Moment-Moment", img: "img/moment10.avif" },
    { title: "Moment-Moment", img: "img/moment11.avif" },
    { title: "Moment-Moment", img: "img/moment12.avif" },
    { title: "Moment-Moment", img: "img/moment13.avif" },
    { title: "Moment-Moment", img: "img/moment14.avif" },
    { title: "Moment-Moment", img: "img/moment15.avif" },
    { title: "Moment-Moment", img: "img/moment16.avif" },
    { title: "Moment-Moment", img: "img/moment17.avif" },
    { title: "Moment-Moment", img: "img/moment18.avif" },
    { title: "Moment-Moment", img: "img/moment19.avif" },
    { title: "Moment-Moment", source: "video/moment1.mp4" },
    { title: "Moment-Moment", img: "img/moment20.avif" },
    { title: "Moment-Moment", img: "img/moment21.avif" },
    { title: "Moment-Moment", source: "video/self.mp4" },

];

// Render Moments
function loadMoments() {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    container.innerHTML = "";
    momentsData.forEach(moment => {
        // Cek apakah ini video atau gambar
        if (moment.source) {
            // Template untuk VIDEO
            container.innerHTML += `
                <div class="moment-card" onclick="openModalVideo('${moment.source}', '${moment.title}')">
                    <video src="${moment.source}" muted></video>
                    <div class="play-overlay"><i class="fa-solid fa-play"></i></div>
                </div>
            `;
        } else {
            // Template untuk GAMBAR
            container.innerHTML += `
                <div class="moment-card" onclick="openModal('${moment.img}', '${moment.title}')">
                    <img src="${moment.img}" alt="${moment.title}" onerror="this.src='https://via.placeholder.com'">
                </div>
            `;
        }
    });
}

// Fungsi Modal Khusus Video
function openModalVideo(src, title) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull"); // Kita akan sembunyikan ini
    const captionText = document.getElementById("caption");
    
    // Buat elemen video jika belum ada di dalam modal
    let modalVideo = document.getElementById("videoFull");
    if (!modalVideo) {
        modalVideo = document.createElement('video');
        modalVideo.id = "videoFull";
        modalVideo.controls = true;
        modalVideo.style.width = "90%";
        modalVideo.style.maxWidth = "1000px";
        modalImg.parentNode.insertBefore(modalVideo, modalImg);
    }

    if(modal) {
        modal.style.display = "flex"; 
        modalImg.style.display = "none"; // Sembunyikan gambar
        modalVideo.style.display = "block"; // Munculkan video
        modalVideo.src = src;
        modalVideo.play();
        captionText.innerHTML = title;
        document.body.style.overflow = "hidden";
    }
}

// Update Fungsi openModal (Gambar) agar menyembunyikan video
function openModal(src, title) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const modalVideo = document.getElementById("videoFull");
    const captionText = document.getElementById("caption");
    
    if(modal && modalImg) {
        modal.style.display = "flex"; 
        modalImg.style.display = "block";
        if(modalVideo) modalVideo.style.display = "none"; // Sembunyikan video
        modalImg.src = src;
        captionText.innerHTML = title;
        document.body.style.overflow = "hidden";
    }
}

// Update fungsi closeModal agar video berhenti saat ditutup
function closeModal() {
    const modal = document.getElementById("imageModal");
    const modalVideo = document.getElementById("videoFull");
    if(modal) {
        modal.style.display = "none";
        if(modalVideo) {
            modalVideo.pause();
            modalVideo.src = "";
        }
        document.body.style.overflow = "auto";
    }
}

// Function to toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Gunakan Event Listener DOMContentLoaded agar lebih aman daripada window.onload
document.addEventListener('DOMContentLoaded', () => {
    loadMoments();
});
