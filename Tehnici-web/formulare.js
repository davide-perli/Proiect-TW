 // Afiseaza formularul de autentificare la clic pe o imagine
 document.querySelectorAll('.image-container img').forEach(function(img) {
    img.addEventListener('click', function() {
        document.getElementById('paymentPopup').style.display = 'block';
        document.getElementById('loginForm').style.display = 'block';
    });
});

// Ascunde pop-up-ul la încărcarea paginii
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('paymentPopup').style.display = 'none';
});

// Adaugă eveniment de clic pe imagini pentru a afișa pop-up-ul de plată
document.querySelectorAll('.image-container img').forEach(function(img) {
    img.addEventListener('click', function() {
        document.getElementById('paymentPopup').style.display = 'block';
    });
});

// Ascunde pop-up-ul la clic pe butonul "X"
document.getElementById('closePaymentPopup').addEventListener('click', function() {
    document.getElementById('paymentPopup').style.display = 'none';
});


// Ascunde pop-up-ul la clic pe butonul de "Anulează"
document.getElementById('cancelPayment').addEventListener('click', function() {
    document.getElementById('paymentPopup').style.display = 'none';
});


// Trimite datele formularului de autentificare la server la submit
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    // Aici poți valida și gestiona datele formularului înainte de a le trimite
    console.log('Datele formularului de autentificare:', formData);
});

// Trimite datele formularului de plată la server la submit
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    // Aici poți valida și gestiona datele formularului înainte de a le trimite
    console.log('Datele formularului de plată:', formData);
});