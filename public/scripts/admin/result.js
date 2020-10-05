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
                    let attempts = ''

                    await db.collection(data).doc("description").get()
                        .then(doc => {
                            if (doc)
                                desc = doc.data().about
                        }).catch(error => {
                            console.error("Error writing document: ", error);
                            alert('failed to load data, please contact support');
                        });

                    if (desc === '') {
                        desc = "None given"
                    }

                    await db.collection(data + "Tests").doc("attempts").get()
                        .then(doc => {
                            if (doc)
                                attempts = doc.data().count
                        }).catch(error => {
                            console.error("Error writing document: ", error);
                            alert('failed to load data, please contact support');
                        });

                    if (attempts == '') {
                        attempts = "None"
                    }

                    $('#container').append(` <div class="rcard"> \
                    <div class="rcard-bg"></div> \
                    <div class="rcard-content"> \
                        <h2 id="testname">${data}</h2> \
                        <p id="description">${desc}</p> \
                    </div> \
                    <div class="rcard-stats"> \
                        <div class="stat"> \
                            <button class="view" type="button" onclick="userResults('${data}');"><i class="fa fa-eye"></i><br> View Results</button> \
                        </div> \
                        <div class="stat" id="plays"> \
                            <div class="value">${attempts}</div> \
                            <div class="type">attempts</div> \
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

const userResults = (TestName) => {
    window.location.href = '/admin/resultview/' + TestName;
}