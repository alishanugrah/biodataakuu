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
        // Password benar, tampilkan pesan berhasil
        errorMessage.textContent = 'Login berhasil!';
        errorMessage.style.color = 'green'; // Ubah warna pesan menjadi hijau untuk keberhasilan
    } else {
        // Password salah, tampilkan pesan kesalahan
        errorMessage.textContent = 'Password salah, coba lagi.';
        errorMessage.style.color = 'red'; // Ubah warna pesan menjadi merah untuk kesalahan
    }
});
