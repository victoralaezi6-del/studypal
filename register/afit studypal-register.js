const Signup = document.getElementById('register');
const SignupMessage = document.getElementById('signup_message');
SignupMessage.textContent = '.... Signup successful ....';
const AlertM = document.getElementById('alert');
AlertM.textContent = '.... Please fill in all fields ....';
const logoutAnimation = document.getElementById('logout_animation');

Signup.addEventListener('click', () => {

    const Firstname = document.getElementById('firstName').value.trim();
    const Lastname = document.getElementById('lastName').value.trim();
    const MatricNumber = document.getElementById('matricNumber').value.trim();
    const Password = document.getElementById('password').value.trim();

    //VALIDATION
    if (Firstname.trim() === '' || Lastname.trim() === '' || MatricNumber.trim() === '' || Password.trim() === '') {
        AlertM.classList.add('appear');
        setTimeout(() => {
            AlertM.classList.remove('appear');
        }, 750);
    } 
    else {
        //STORE USER DATA IN LOCAL STORAGE
        const userData = {
            Firstname,
            Lastname,
            MatricNumber,
            Password
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        SignupMessage.classList.add('appear');
        setTimeout(() => {
            SignupMessage.classList.remove('appear');
            logoutAnimation.style.display = 'flex';
        }, 700);
        setTimeout(() => {
            window.location.href = '/login/afit studypal-login.html';
        }, 2000);
    }
});