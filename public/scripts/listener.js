// listen for auth status changes
const initApp = () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            let emailVerified = user.emailVerified;
            let username = user.displayName;
            // let photoURL = user.photoURL;

            // if (!emailVerified) {
            //     auth.signOut();
            //     alert("Email not verified. Access denied");
            //     document.location.href = '/login'
            // } else
            //     $('#notactive').html("Active");

            $('#displayName').html(username);
            $('#username').html(username);

        }
        // else
        //     document.location.href = '/login'
    });
}

window.onload = () => {
    initApp();
};

const checkAndLink = async () => {
    let testName;
    await db.collection("users").doc(auth.currentUser.uid).get().then(doc => {
        testName = doc.data().currentTest
    }).catch(error => {
        console.error("Error writing document: ", error);
        alert('failed to load data, please contact support');
    });

    if (testName != '')
        window.location.href = "/testkit/" + testName;
    else
        alert('No ongoing test');
}