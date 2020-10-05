const initResult = () => {
    auth.onAuthStateChanged(user => {
        // if (user) {
            // let docRef = db.collection("usersdata").doc(auth.currentUser.uid);
            // docRef
            //     .get()
            //     .then(doc => {
            //         if (doc.exists) {
            //             if (doc.data().form2 == true) {
            //                 sendResponse();
            //             }
            //         }
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     })

        // } else
            // document.location.href = '/login'
    });
}

window.addEventListener('load', () => {
    initResult();
    activeResult();
});

const activeResult = () => {
    $("#nav-dashboard").attr('class', 'inactive');
    $("#nav-test-kit").attr('class', 'inactive');
    $("#nav-result").attr('class', 'active');
};