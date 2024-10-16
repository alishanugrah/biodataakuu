// Cek status login dari localStorage
const isLoggedIn = localStorage.getItem('isLoggedIn');

// Jika pengguna tidak login, arahkan kembali ke halaman login
if (isLoggedIn !== 'true') {
    window.location.href = "index.html"; // Ganti dengan nama file login yang sesuai
}
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
