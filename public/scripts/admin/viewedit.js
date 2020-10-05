let url = window.location.href;
let id = url.substring(url.lastIndexOf('/') + 1);

window.addEventListener('load', function () {
    getDataAndAppend();
})

const getDataAndAppend = async () => {
    $("#testname").val(id)

    await db.collection(id).doc("description").get()
        .then(doc => {
            if (doc)
                $("#score").val(doc.data().about)
        }).catch(error => {
            console.error("Error writing document: ", error);
            alert('failed to load data, please contact support');
        });
}

const saveDesc = async () => {
    let desc = $("#score").val()
    await db.collection(id).doc("description").set({
        about: desc,
    }, {
        merge: true
    }).catch(error => {
        console.error("Error writing document: ", error);
        alert('failed to load data, please contact support');
    });
}