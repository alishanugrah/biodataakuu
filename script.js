// Menyimpan password yang benar
const correctPassword = 'Elisa'; // Ganti dengan password yang diinginkan

// Mendapatkan elemen DOM yang dibutuhkan
const loginBtn = document.getElementById('login-btn');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Event listener untuk tombol login
loginBtn.addEventListener('click', () => {
    // Memeriksa apakah password yang dimasukkan benar
    if (passwordInput.value === correctPassword) {
        window.location.href = 'biodata.html'; // Arahkan ke halaman biodata jika password benar
    } else {
        errorMessage.textContent = 'Password salah, coba lagi.'; // Tampilkan pesan kesalahan
    }
});
