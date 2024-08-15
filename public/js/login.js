// Get the login and signup forms
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

// Add event listeners for form submissions
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission
  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;

  const loginData = {
    email: email,
    password: password
  };

  // Make a POST request to the server with loginData
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
  .then(response => {
    // Handle the response as needed
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission
  const username = document.getElementById('username-signup').value;
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;

  const signupData = {
    username: username,
    email: email,
    password: password
  };

  // Make a POST request to the server with signupData
  fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signupData)
  })
  .then(response => {
    return response.json()
  })
  .then( data => {
    console.log(data)
  })
  .catch(error => {
    console.error('Error:', error);
  });
});