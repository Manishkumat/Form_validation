document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    let isValid = true; // Assume form is valid initially
  
    // Get form input values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
  
    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
  
    // Full Name Validation
    if (fullName.length < 5) {
      nameError.textContent = "Full Name must be at least 5 characters.";
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }
  
    // Email Validation
    if (!email.includes('@') || email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
      emailError.textContent = "Enter a valid Email ID with '@'.";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }
  
    // Phone Number Validation
    if (phoneNumber.length !== 10 || phoneNumber === "123456789" || isNaN(phoneNumber)) {
      phoneError.textContent = "Phone Number must be 10 digits and not '123456789'.";
      phoneError.style.display = "block";
      isValid = false;
    } else {
      phoneError.style.display = "none";
    }
  
    // Password Validation
    if (
      password.length < 8 ||
      password.toLowerCase() === "password" ||
      password.toLowerCase() === fullName.toLowerCase()
    ) {
      passwordError.textContent =
        "Password must be at least 8 characters, and cannot be 'password' or the same as your name.";
      passwordError.style.display = "block";
      isValid = false;
    } else {
      passwordError.style.display = "none";
    }
  
    // Confirm Password Validation
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      confirmPasswordError.style.display = "block";
      isValid = false;
    } else {
      confirmPasswordError.style.display = "none";
    }
  
    // Final Check
    if (isValid) {
      alert("Form submitted successfully!");
      document.getElementById('registrationForm').reset();
    }
  });
  