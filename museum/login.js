   
    const loginForm = document.querySelector('.login');
    const registerForm = document.querySelector('.register');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    showRegister.addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    });

    showLogin.addEventListener('click', (e) => {
      e.preventDefault();
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
    });

  
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';

  
    const registerFormElement = document.getElementById('registerForm');
    registerFormElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = document.getElementById('reg-username').value;
      const email = document.getElementById('reg-email').value;
      const password = document.getElementById('reg-password').value;
      const confirmPassword = document.getElementById('reg-confirm-password').value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

 
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      alert("Registration successful! You can now log in.");
    
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
    });

   
    const loginFormElement = document.getElementById('loginForm');
    loginFormElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;


      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');

      if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "index.html";
      } else {
        alert("Invalid username or password.");
      }
    });