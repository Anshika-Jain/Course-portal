// signup
const delay = ms => new Promise(res => setTimeout(res, ms));

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const username = signupForm['username'].value;
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;

    let pass = true

    if (username.length < 5) {
        alert('Please enter a suitable username of length 6 atleast.');
        pass = false;
    }

    if (!chechEmail(email)) {
        alert('Please enter a valid email address.');
        pass = false;
    }
    if (password.length < 7) {
        alert('Please enter a password of length greater than 7.');
        pass = false;
    }

    if (pass) {
        // sign up the user & add firestore data
        auth.createUserWithEmailAndPassword(email, password)
            .then(async () => {
                signupForm.reset();

                await auth.currentUser.updateProfile({
                    displayName: username
                }).catch(error => {
                    // console.error(error)
                    alert('failed to save, please contact support');
                });

                await db.collection("users").doc("userCount").update({
                    count: firebase.firestore.FieldValue.increment(1)
                }).catch(error => {
                    // console.error("Error writing document: ", error);
                    alert('failed to save, please contact support');
                });

                await db.collection("users").doc(auth.currentUser.uid).set({
                    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
                    name: username,
                    email: email,
                }).catch(error => {
                    // console.error("Error writing document: ", error);
                    alert('failed to save, please contact support');
                });

                sendEmailVerification();
                alert('Email Verification sent!');

                auth.signOut();
                delay(3000);
                sendToLogin();

            }).catch(error => {
                console.error(error)
                alert("Signup failed, either email doesn't exist or account associated with this e-mail exists already");
            });
    } else {
        alert('please check your details!!')
    }
});

const sendEmailVerification = () => {
    // [START sendemailverification]
    auth.currentUser.sendEmailVerification()
        .then(() => {
            alert('Email Verification sent!');
        })
        .catch(error => {
            // console.error(error);
            alert("Error: unable to send verification. Please contact support");
        })
    // [END sendemailverification]
}

const sendToLogin = () => {
    document.location.href = '/login'
};

const chechEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
};