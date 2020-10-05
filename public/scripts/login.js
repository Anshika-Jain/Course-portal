// check user
const initLogin = () => {
    if (auth.currentUser === null || auth.currentUser !== null)
        auth.signOut();
}

window.addEventListener('load', () => {
    initLogin();
})

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    let pass = true;

    if (!chechEmail(email)) {
        alert('Please enter an email address.');
        pass = false;
    }
    if (password.length < 7) {
        alert('Please enter a password.');
        pass = false
    }

    if (pass) {

        // log the user in
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                loginForm.reset();
                auth.currentUser.getIdTokenResult().then(idTokenResult => {
                    auth.currentUser.admin = idTokenResult.claims.admin;
                    if (auth.currentUser.admin === true)
                        sendToAdminDash();
                    else
                        sendToHome();
                })
                // loginForm.querySelector('.error').innerHTML = '';
            }).catch((error) => {
                // loginForm.querySelector('.error').innerHTML = err.message;
                alert('wrong email or password')
            });
    }
});

const resetPasswordLink = () => {
    const loginForm = document.querySelector('#login-form');
    const email = loginForm['email'].value;

    auth.sendPasswordResetEmail(email).then(() => {
        alert('Email send successfully! Please check your inbox.')
    }).catch((error) => {
        alert('To get the link to reset password please input your email then click here')
    })
}

const sendToHome = () => {
    document.location.href = '/home'
};

const sendToAdminDash = () => {
    document.location.href = '/admin/creator'
};

const chechEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
};