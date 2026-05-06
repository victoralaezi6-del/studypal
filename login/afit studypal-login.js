const Login = document.getElementById('login-button');
const LoggedInMessage = document.getElementById('login_message');
LoggedInMessage.textContent = '.... Login successful ....';
const AlertM = document.getElementById('alert');
AlertM.textContent = '.... Please fill in all fields ....';
const logoutAnimation = document.getElementById('logout_animation');
const Alert = document.getElementById('alert_message');
Alert.textContent = '.... Credentials doesnt match ....';
const noAccount = document.getElementById('noAccount');
noAccount.textContent = '....Account doesnt exist! Create an account....';

Login.addEventListener('click', () => {
    const Firstname = document.getElementById('firstName').value.trim();
    const MatricNumber = document.getElementById('matricNumber').value.trim();
    const Password = document.getElementById('password').value.trim();

    //VALIDATION
    if (Firstname.trim() === '' || MatricNumber.trim() === '' || Password.trim() === '') {
        AlertM.classList.add('appear');
        setTimeout(() => {
            AlertM.classList.remove('appear');
        }, 750);
    } 
    else {
        //STORE USER DATA IN LOCAL STORAGE
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (!storedUserData) {
            noAccount.classList.add('appear');
            setTimeout(() => {
                noAccount.classList.remove('appear');
            }, 900);
        }

        //Check credentials
        if (storedUserData.Firstname === Firstname && storedUserData.MatricNumber === MatricNumber && storedUserData.Password === Password) {
            LoggedInMessage.classList.add('appear');
            setTimeout(() => {
                LoggedInMessage.classList.remove('appear');
                logoutAnimation.style.display = 'flex';
            }, 700);
            setTimeout(() => {
                window.location.href = '/home/afit studypal-home.html';
            }, 2000);
        } else {
            Alert.classList.add('appear');
            setTimeout(() => {
                Alert.classList.remove('appear');
            }, 750);
        } 
    }
})