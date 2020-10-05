window.addEventListener('load', () => {
    addTestOptions();
});

const addTestOptions = async () => {
    let data = {};

    await db.collection("tests").doc("subjectNames")
        .get().then(doc => {
            for (let i = 0; i <= Object.keys(doc.data()).length - 1; i++) {
                if (Object.keys(doc.data())[i] !== "count") {
                    data[i] = Object.keys(doc.data())[i];
                    optText = data[i];
                    optValue = data[i];
                    $('#theme-dd').append(`<option value="${optValue}"> ${optText} </option>`);
                }
            }
        })
    return data;
}

let testSetName = document.getElementById('testname').value;
let score;
let timeQue;
let indexSubject = 0;
let quesCount = 1;

const showTestSet = () => {
    $('#new-test-set').hide();
    $('#testname').val = '';
    $('#test-set').show();
    selectTheme = document.querySelector('#theme-dd');
    testSetName = selectTheme.value;
}

const showCreateTest = () => {
    $('#new-test-set').show();
    $('#theme-dd').val = '';
    $('#test-set').hide();
    testSetName = document.getElementById('testname').value;
}

const firstform = document.querySelector('#infoblank');
firstform.addEventListener('submit', async (e) => {
    e.preventDefault();

    // get data
    testSetName = testSetName.charAt(0).toUpperCase() + testSetName.slice(1).toLowerCase();
    score = firstform['score'].value;
    timeQue = firstform['time-dd'].value;

    let pass = true;

    if (score < 1 || score > 20) {
        pass = false;
        alert('Score should be between 1 to 20 only');
    }

    if (!testSetName) {
        pass = false;
        alert(`Test name shouldn't be empty`);
    }

    let notExists = true
    await db.collection("tests").doc("subjectNames")
        .get().then(doc => {
            for (let i = 0; i <= Object.keys(doc.data()).length - 1; i++) {
                if (Object.keys(doc.data())[i] == testSetName) {
                    notExists = false;
                }
            }
        })

    if (notExists) {
        await db.collection("tests").doc("subjectNames").set({
            testSetName: 1,
            count: firebase.firestore.FieldValue.increment(1)
        }, {
            merge: true
        }).catch(error => {
            console.error("Error writing document: ", error);
            alert('failed to save data, please contact support');
        });

        await db.collection("tests").doc(testSetName).set({
            index: indexSubject
        }, {
            merge: true
        }).catch(error => {
            console.error("Error writing document: ", error);
            alert('failed to save data, please contact support');
        });
    }

    await db.collection("tests").doc(testSetName).get().then(doc => {
        indexSubject = doc.data()["index"] + 1;
    })

    if (pass) {
        $('#info-blank').hide();
        $('#node-blank').show();
        $('#countQuestion').text(indexSubject);
    }
});

const saveToDb = async () => {

    $('#countQuestion').val = indexSubject;

    const question = $('#ques').val();
    const opt1 = $('#opt1').val();
    const opt2 = $('#opt2').val();
    const opt3 = $('#opt3').val();
    const opt4 = $('#opt4').val();
    const ans = $('#ans').val();

    console.log(testSetName + "  " + indexSubject)

    if (question != '' && opt1 != '' && opt2 != '' && opt3 != '' && opt4 != '' && ans != '') {
        await db.collection(testSetName).doc(indexSubject.toString()).set({
            question: question,
            option1: opt1,
            option2: opt2,
            option3: opt3,
            option4: opt4,
            answer: ans,
            score: score,
            time: timeQue
        }).catch(error => {
            console.error("Error writing document: ", error);
            alert('failed to save data, please contact support');
        });

        await db.collection("tests").doc(testSetName)
            .set({
                index: indexSubject
            }, {
                merge: true
            }).catch(error => {
                console.error("Error writing document: ", error);
                alert('failed to save data, please contact support');
            });

        indexSubject++;

        generateQuestionNode();

    } else
        alert('Please fill all the fields!')
}

function endSubmission() {
    document.location.href = '/admin/view'
}

const generateQuestionNode = () => {
    $('#countQuestion').text(indexSubject);
    $('#ques').val('');
    $('#opt1').val('');
    $('#opt2').val('');
    $('#opt3').val('');
    $('#opt4').val('');
    $('#ans').val('');
}