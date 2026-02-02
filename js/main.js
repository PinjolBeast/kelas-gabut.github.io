

// Authentication state observer
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log('User signed in:', user.email);
    showAddMomentForm();
    updateAuthUI(user);
  } else {
    // User is signed out
    console.log('User signed out');
    hideAddMomentForm();
    updateAuthUI(null);
  }
});

// Update authentication UI
function updateAuthUI(user) {
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const userInfo = document.getElementById('user-info');

  if (user) {
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
    userInfo.textContent = `Logged in as: ${user.email}`;
    userInfo.style.display = 'block';
  } else {
    loginBtn.style.display = 'block';
    logoutBtn.style.display = 'none';
    userInfo.style.display = 'none';
  }
}

// Login function
function login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).catch((error) => {
    console.error('Login error:', error);
    alert('Login failed: ' + error.message);
  });
}

// Logout function
function logout() {
  firebase.auth().signOut().catch((error) => {
    console.error('Logout error:', error);
  });
}

// Function to convert file to base64 data URL
function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Function to upload file data to Firebase Realtime Database
async function uploadFile(file) {
  const user = firebase.auth().currentUser;
  if (!user) throw new Error('User not authenticated');

  // Convert file to base64 data URL
  const dataURL = await fileToDataURL(file);

  return dataURL;
}

// Function to add a new moment with file upload
async function addMoment(title, file) {
  try {
    const user = firebase.auth().currentUser;
    if (!user) {
      alert('You must be logged in to add a moment');
      return;
    }

    if (!title.trim()) {
      alert('Please enter a title');
      return;
    }

    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    // Show loading state
    const submitBtn = document.querySelector('#add-moment-form button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Uploading...';
    submitBtn.disabled = true;

    // Upload file
    const downloadURL = await uploadFile(file);

    // Determine if it's an image or video
    const isVideo = file.type.startsWith('video/');
    const momentData = {
      title: title.trim(),
      img: isVideo ? null : downloadURL,
      source: isVideo ? downloadURL : null,
      createdAt: Date.now(),
      userId: user.uid,
      userEmail: user.email,
      fileType: file.type
    };

    // Save to Firebase Realtime Database
    const momentsRef = db.ref('moments');
    const newMomentRef = momentsRef.push();
    await newMomentRef.set(momentData);
    console.log('Moment added with ID:', newMomentRef.key);

    // Reset form
    document.getElementById('add-moment-form').reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // Reload moments
    loadMoments();

    alert('Moment added successfully!');
  } catch (error) {
    console.error('Error adding moment:', error);
    alert('Error adding moment: ' + error.message);

    // Reset button
    const submitBtn = document.querySelector('#add-moment-form button[type="submit"]');
    submitBtn.textContent = 'Add Moment';
    submitBtn.disabled = false;
  }
}

// Function to handle add moment form submission
function handleAddMoment(event) {
  event.preventDefault();

  const title = document.getElementById('moment-title').value;
  const fileInput = document.getElementById('moment-file');
  const file = fileInput.files[0];

  addMoment(title, file);
}


// Render Moments
// function loadMoments() {
//     const container = document.getElementById('gallery-container');
//     if (!container) return; // Mencegah error jika elemen tidak ditemukan

//     container.innerHTML = ""; // Bersihkan kontainer
//     momentsData.forEach(moment => {
//         container.innerHTML += `
//             <div class="moment-card" onclick="openModal('${moment.img}', '${moment.title}')">
//                 <img src="${moment.img}" alt="${moment.title}" onerror="this.src='https://via.placeholder.com'">
//             </div>
//         `;
//     });
// }


// Render Moments from Firebase Realtime Database
function loadMoments() {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    container.innerHTML = "<p>Loading moments...</p>";

    const momentsRef = db.ref('moments');

    momentsRef.on('value', (snapshot) => {
        container.innerHTML = "";

        if (snapshot.exists()) {
            const moments = snapshot.val();
            const momentsArray = Object.keys(moments).map(key => ({
                id: key,
                ...moments[key]
            }));

            // Sort by createdAt descending
            momentsArray.sort((a, b) => b.createdAt - a.createdAt);

            momentsArray.forEach((moment) => {
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
        } else {
            container.innerHTML = "<p>No moments yet. Be the first to add one!</p>";
        }
    }, (error) => {
        console.error('Error loading moments:', error);
        container.innerHTML = "<p>Error loading moments. Please try again.</p>";
    });
}

// Show add moment form for authenticated users
function showAddMomentForm() {
    const form = document.getElementById('add-moment-form');
    if (form) form.style.display = 'block';
}

// Hide add moment form for non-authenticated users
function hideAddMomentForm() {
    const form = document.getElementById('add-moment-form');
    if (form) form.style.display = 'none';
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

// Gunakan Event Listener DOMContentLoaded agar lebih aman daripada window.onload
document.addEventListener('DOMContentLoaded', () => {
    loadMoments();
});
