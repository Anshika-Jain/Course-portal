window.addEventListener('load', () => {
    addTestCards();
});

const addTestCards = async () => {
    await db.collection("tests").doc("subjectNames")
        .get().then(async (doc) => {
            for (let i = 0; i <= Object.keys(doc.data()).length - 1; i++) {
                if (Object.keys(doc.data())[i] !== "count") {
                    let data = Object.keys(doc.data())[i];
                    let desc = '';

                    await db.collection(data).doc("description").get().then(doc => {
                        if (doc)
                            desc = doc.data().about
                    }).catch(error => {
                        console.error("Error writing document: ", error);
                        alert('failed to load data, please contact support');
                    });

                    if (desc === '') {
                        desc = "None given"
                    }

                    $('#container').append(` <div class="vcard"> \
                    <div class="vcard-bg"></div> \
                    <div class="vcard-content"> \
                        <h2><span> ${data} </span></h2> \
                        <p><span> ${desc}</span></p> \
                        <a href="#"><button type="button" id="btn" class="edit"><i class="fa fa-pencil"></i> Edit</button></a> \
                        <button type="button" id="btn"><span><i class="fa fa-trash"></i></span></button> \
                    </div> \
                </div> \
            </div>`);
                }
            }
        }).catch(error => {
            console.error("Error writing document: ", error);
            alert('failed to load data, please contact support');
        });
}