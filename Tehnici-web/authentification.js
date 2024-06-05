    // Funcția pentru afișarea formularului de autentificare atunci când utilizatorul face clic pe "Blog"
    function showLoginFormAndRedirect() {
        document.getElementById("loginPopup").style.display = "block"; // Arată formularul de autentificare
      }
    
      // Funcție pentru închiderea pop-up-ului de autentificare atunci când utilizatorul face clic pe butonul "X"
      function closeLoginForm() {
        document.getElementById("loginPopup").style.display = "none"; // Ascunde formularul de autentificare
      }
    
      // Funcție pentru autentificarea utilizatorului și redirecționarea către Blog.html
      function authenticateUser() {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
    // Verifică dacă utilizatorul a introdus un username
    if (!username) {
      alert("Introduceți un username.");
      return;
    }
  
    // Verifică dacă utilizatorul a introdus o parolă
    if (!password) {
      alert("Introduceți o parolă.");
      return;
    }

    // Salvează datele de autentificare în localStorage
    localStorage.setItem('authData', JSON.stringify({ username: username, password: password }));
  
    // Construiește URL-ul pentru Blog.html, includând și parola
    var url = "Blog.html?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
  
    // Redirecționează către URL-ul construit
    window.location.href = url;
    }


// Adăugăm un event listener pentru a verifica dacă utilizatorul este deja autentificat
document.addEventListener('DOMContentLoaded', function() {
    var authData = localStorage.getItem('authData');
    if (authData) {
        var parsedAuthData = JSON.parse(authData);
        console.log('User already logged in as:', parsedAuthData.username);
        // Aici poți să prepopulezi câmpurile de username și password
        document.getElementById('username').value = parsedAuthData.username;
        document.getElementById('password').value = parsedAuthData.password;
    }
});

// Trimite datele formularului de autentificare la server la submit
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    // Aici poți valida și gestiona datele formularului înainte de a le trimite
    console.log('Datele formularului de autentificare:', formData);
});

// Afișarea unui mesaj random la încărcarea paginii
window.onload = function execute_on_page_load() {
    const arrMessages = ["Bine a-ti venit la magazinnul de calisthenics Helios Strength"];
    
    function getRandomMessage() {
        const index = Math.floor(Math.random() * arrMessages.length);
        return arrMessages[index];
    }
    
    const randomMessage = getRandomMessage();
    alert(randomMessage);
}

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

//folosirea metodelor din clasa Math pentru a afisa un numar random
const randomNumber = Math.random();
console.log(randomNumber);

//creare si stergere de elemente

const h4Element = document.querySelector('footer h4');
// Elimină margin-right
 h4Element.style.marginRight = '';

//Creare element <p> in footer
const footerElement = document.querySelector('footer');
footerElement.style.color = 'gray';
const newElement = document.createElement('p');

newElement.textContent = 'Calisthenics shop';
newElement.style.textAlign = 'right';
newElement.style.color = 'gray';
footerElement.appendChild(newElement);


const Helios = document.querySelector('h1');
//schimbarea aleatoare a valorilor a unei proprietati(culoare)
const colors = ['purple', 'black', 'grey', 'blue'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
Helios.style.color = randomColor;
