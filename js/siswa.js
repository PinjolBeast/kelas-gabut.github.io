const listSiswa = [
    { nama: "Benedicta Naomi Widi", role: "Absen 01", foto: "https://i.pravatar.cc" },
    { nama: "I Gede Gada Megantara", role: "Absen 02", foto: "https://i.pravatar.cc" },
    { nama: "I Gede Umbu Desta Pratama", role: "Absen 03", foto: "https://i.pravatar.cc" },
    { nama: "I Gusti Ayu Shinta Tribeca", role: "Absen 04", foto: "https://i.pravatar.cc" },
    { nama: "I Komang Andhika Arya Permana", role: "Absen 05", foto: "https://i.pravatar.cc" },
    { nama: "I Komang Rio Jaya Saputra", role: "Absen 06", foto: "https://i.pravatar.cc" },
    { nama: "I Komang Wistara Arta Ratrianjaya", role: "Absen 07", foto: "https://i.pravatar.cc" },
    { nama: "I Made Diva Mahottama Putra", role: "Absen 08", foto: "https://i.pravatar.cc" },
    { nama: "I Made Oldi Jaya Kusuma", role: "Absen 09", foto: "https://i.pravatar.cc" },
    { nama: "I Nyoman Surya Pramadya Pradnyadana Putra", role: "Absen 10", foto: "https://i.pravatar.cc" },
    { nama: "I Pande Putu Maheza Suryadistra", role: "Absen 11", foto: "https://i.pravatar.cc" },
    { nama: "I Putu Bagus Pasya Dinatha", role: "Absen 12", foto: "https://i.pravatar.cc" },
    { nama: "Ida Ayu Kade Mila Pradewi", role: "Absen 13", foto: "https://i.pravatar.cc" },
    { nama: "Kadek Adiputra Mandala", role: "Absen 14", foto: "https://i.pravatar.cc" },
    { nama: "Komang Baskara Surya Radhitya", role: "Absen 15", foto: "https://i.pravatar.cc" },
    { nama: "Komang Luisianna Venka", role: "Absen 16", foto: "https://i.pravatar.cc" },
    { nama: "Luh Putu Putri Dharma Maharani", role: "Absen 17", foto: "https://i.pravatar.cc" },
    { nama: "Made Tiara Andina Pramesti", role: "Absen 18", foto: "https://i.pravatar.cc" },
    { nama: "Naradhika Rusman Saputra", role: "Absen 19", foto: "https://i.pravatar.cc" },
    { nama: "Naufal Al-Khalifa Utomo", role: "Absen 20", foto: "https://i.pravatar.cc" },
    { nama: "Ni Kadek Sintya Puspita Dewi", role: "Absen 21", foto: "https://i.pravatar.cc" },
    { nama: "Ni Komang Yudiartini", role: "Absen 22", foto: "https://i.pravatar.cc" },
    { nama: "Ni Luh Putu Mutiara Calista Putrawan", role: "Absen 23", foto: "https://i.pravatar.cc" },
    { nama: "Ni Made Dhea Arista Putri", role: "Absen 24", foto: "https://i.pravatar.cc" },
    { nama: "Ni Made Dwi Febriyanti", role: "Absen 25", foto: "https://i.pravatar.cc" },
    { nama: "Ni Nyoman Desyana", role: "Absen 26", foto: "https://i.pravatar.cc" },
    { nama: "Ni Putu Diah Rihana Anggia Dewi", role: "Absen 27", foto: "https://i.pravatar.cc" },
    { nama: "Ni Putu Nomi Nesa Ardani", role: "Absen 28", foto: "https://i.pravatar.cc" },
    { nama: "Nicola Naomas Damaris Aritonang", role: "Absen 29", foto: "https://i.pravatar.cc" },
    { nama: "Pande Made Cintya Mahadewi", role: "Absen 30", foto: "https://i.pravatar.cc" },
    { nama: "Putu Bagus Tresna Upadana", role: "Absen 31", foto: "https://i.pravatar.cc" },
    { nama: "Putu Rama Satya Mahendra", role: "Absen 32", foto: "https://i.pravatar.cc" },
    { nama: "Raden Nayla Dewindari Basja", role: "Absen 33", foto: "https://i.pravatar.cc" },
    { nama: "Sharah Ferhat", role: "Absen 34", foto: "https://i.pravatar.cc" },
    { nama: "Teuku Derick Xavier Syah Putra", role: "Absen 35", foto: "https://i.pravatar.cc" },
    { nama: "Victoryne Christania Ekklesia", role: "Absen 36", foto: "https://i.pravatar.cc" },
    { nama: "Yowana Dwi Aminara", role: "Absen 37", foto: "https://i.pravatar.cc" },
    { nama: "Zeebe Ramadhan Yunarko", role: "Absen 38", foto: "https://i.pravatar.cc" },
];

// Function to toggle mobile menu


function renderSiswa() {
    const container = document.getElementById('siswa-full-list');
    listSiswa.forEach(s => {
        container.innerHTML += `
            <div class="siswa-card">
                <div class="card-glow"></div>
                <img src="${s.foto}" alt="${s.nama}">
                <div class="info">
                    <h3>${s.nama}</h3>
                    <span>${s.role}</span>
                </div>
            </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', renderSiswa);
