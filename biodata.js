// Cek status login dari localStorage
const isLoggedIn = localStorage.getItem('isLoggedIn');

// Jika pengguna tidak login, arahkan kembali ke halaman login
if (isLoggedIn !== 'true') {
    window.location.href = "index.html"; // Ganti dengan nama file login yang sesuai
}

// Jika pengguna login, tampilkan pesan selamat datang
document.getElementById('message').textContent = 'Selamat datang di halaman biodata!';
document.getElementById('message').style.color = 'green'; // Ubah warna pesan menjadi hijau

// Fungsi untuk logout
function logout() {
    const confirmLogout = confirm("Apakah Anda yakin ingin logout?");
    if (confirmLogout) {
        // Hapus status login dari localStorage
        localStorage.removeItem('isLoggedIn');
        
        // Arahkan pengguna ke halaman login
        window.location.href = "index.html"; // Ganti dengan nama file login yang sesuai
    }
}

// Event listener untuk tombol logout
document.getElementById('logoutBtn').addEventListener('click', logout);
