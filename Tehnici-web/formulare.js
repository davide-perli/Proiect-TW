// Afiseaza formularul de autentificare la clic pe o imagine
// modificarea stilului unui element sau al unui grup de elemente
document.querySelectorAll('.image-container img').forEach(function(img) {
    img.addEventListener('click', function() {
        document.getElementById('paymentPopup').style.display = 'block';
        document.getElementById('loginForm').style.display = 'block';
    });
});

// Ascunde pop-up-ul la încărcarea paginii
// modificarea stilului unui element sau al unui grup de elemente
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('paymentPopup').style.display = 'none';
});

// Adaugă eveniment de clic pe imagini pentru a afișa pop-up-ul de plată
// modificarea stilului unui element sau al unui grup de elemente
document.querySelectorAll('.image-container img').forEach(function(img) {
    img.addEventListener('click', function() {
        document.getElementById('paymentPopup').style.display = 'block';
    });
});

// Ascunde pop-up-ul la clic pe butonul "X"
// modificarea stilului unui element sau al unui grup de elemente
document.getElementById('closePaymentPopup').addEventListener('click', function() {
    document.getElementById('paymentPopup').style.display = 'none';
});

// Ascunde pop-up-ul la clic pe butonul de "Anulează"
// modificarea stilului unui element sau al unui grup de elemente
document.getElementById('cancelPayment').addEventListener('click', function() {
    document.getElementById('paymentPopup').style.display = 'none';
});


// Trimite datele formularului de plată la server la submit
// folosirea si modificarea evenimentelor generate de mouse si tastatura
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    console.log('Datele formularului de plată:', formData);
});

// Validare formular cu regex
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var cardNumber = document.getElementById('cardNumber').value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var cardPattern = /^[0-9]{16}$/;

    if (!emailPattern.test(email)) {
        alert('Introduceți un email valid.');
        return;
    }

    if (!cardPattern.test(cardNumber)) {
        alert('Introduceți un număr de card valid.');
        return;
    }

    var formData = new FormData(this);
    console.log('Datele formularului de plată:', formData);
});

// Metoda getComputedStyle și stopPropagation
document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.styled-element');
    elements.forEach(function(element) {
        var style = getComputedStyle(element);
        console.log('Element style:', style);

        element.addEventListener('click', function(event) {
            event.stopPropagation();
            console.log('Click event stopped from propagating.');
        });
    });
});
