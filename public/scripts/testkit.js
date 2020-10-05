let url = window.location.href;
let id = url.substring(url.lastIndexOf('/') + 1);

window.addEventListener('load', () => {
    activeTest();
    initTest();
});

const activeTest = () => {
    $("#nav-dashboard").attr('class', 'inactive');
    $("#nav-test-kit").attr('class', 'active');
    $("#nav-result").attr('class', 'inactive');
};

const initTest = async () => {
    let about;
    await db.collection(id).doc("description").get().then(doc => {
        about = doc.data().about
    }).catch(error => {
        console.error("Error writing document: ", error);
        alert('failed to save data, please contact support');
    });
    $("#course-span").text(id);
    $("#about-test").text(about);
}

let questions = {};
let options = {};
let jagged = [];

const generateTest = async () => {
    let aQues;
    let score = 0;
    let time = 0;

    await db.collection("tests").doc(id).get()
        .then(doc => {
            aQues = doc.data().index;
        }).catch(error => {
            console.error("Error writing document: ", error);
            alert('failed to save data, please contact support');
        });

    for (let i = 0; i < aQues; i++) {
        jagged[i] = i + 1
    }

    shuffle(jagged);
    jagged = jagged.slice(0, 20);

    for (let i = 0; i < 20; i++) {
        await db.collection(id).doc(jagged[i].toString()).get().then(doc => {
            score += parseInt(doc.data().score);
            time += parseInt(doc.data().time);
            questions[i] = doc.data().question;
            options[i] = [doc.data().option1, doc.data().option2, doc.data().option3, doc.data().option4];
        }).catch(error => {
            console.error("Error writing document: ", error);
            alert('1 - failed to load data, please contact support');
        });
    }

    await db.collection(id + "Tests").doc(auth.currentUser.uid).set({
        inProcess: true,
        timeAlloted: time,
        maxScore: score,
        timeOfTest: new Date().toLocaleString()
    }, {
        merge: true
    }).catch(error => {
        console.error("Error writing document: ", error);
        alert('2 - failed to save data, please contact support');
    });

    const input = document.querySelectorAll("input");
    const label = document.querySelectorAll("label");
    const parah = document.querySelectorAll(".parah");
    let k = 0;

    for (let i = 0; i < Object.keys(options).length; i++) {
        parah[i].textContent = questions[i]
        for (let j = 0; j < Object.keys(options[i]).length; j++) {
            label[k].textContent = options[i][j]
            input[k].value = options[i][j]
            input[k].id = options[i][j]
            label[k].htmlFor = options[i][j]
            k++;
        }
    }
    let display = document.querySelector('#min');

    let timeLeft = time * 60

    // setCookie("timeLeftOnUser", "stillTime", timeLeft)

    startTimer(timeLeft, display);
}

// function setCookie(name, value, min) {
//     var expires = "";
//     if (min) {
//         var date = new Date();
//         date.setTime(date.getTime() + (min * 60 * 1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "") + expires + "; path=/testkit/" + id;
// }

// function getCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//     }
//     return null;
// }

// function eraseCookie(name) {
//     document.cookie = name + '=; Max-Age=-99999999;';
// }

const shuffle = (array) => {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

let nextBtn = document.querySelector("#next")
let submitBtn = document.querySelector("#submit")
let backBtn = document.querySelector("#back")
let set = document.querySelectorAll(".set")
let start = document.querySelector("#start")
let timer = document.querySelector("#timer")
let exitBtn = document.querySelector("#exit")
let duration = 0;
let display = document.querySelector("#display")
let buttons = document.querySelectorAll("div [class='buttons']")
let countNext = 0;
let countSubmit = 0;
let countBack = 0;
let m = 0;
let n = 0;
let counter1 = 0;
let counter2 = 0;
let element = []
let userInput = []
let looper = 0;

let btnIagree = document.querySelector("#iAgree")

backBtn.disabled = true
backBtn.classList.add("cursor")


btnIagree.addEventListener("click", function () {
    start.classList.remove("hide")
    btnIagree.classList.add("hide")
})

start.addEventListener("click", function () {
    start.classList.add("hide");
    set[m].classList.remove("hide")
    nextBtn.classList.remove("hide")
    submitBtn.classList.remove("hide")
    backBtn.classList.remove("hide")
    timer.classList.remove("hide")
});

if (!(set[0].classList.contains("hide"))) {
    backBtn.disabled = true
}

nextBtn.addEventListener("click", function () {
    countNext += 1
    counter1 += 1
    backBtn.disabled = false;
    n = (countNext + countSubmit) - countBack;
    if (n < ((Object.keys(questions).length / 4) - 1)) {
        set[n - 1].classList.add("hide")
        set[n].classList.remove("hide")
    } else if (n === ((Object.keys(questions).length / 4) - 1)) {
        set[n - 1].classList.add("hide")
        set[n].classList.remove("hide")
        submitBtn.textContent = "Finish"
        next.classList.add("hide")
    } else {
        set[n - 1].classList.add("hide")
        for (i = 0; i < 3; i++) {
            buttons[i].classList.add("hide")
        }
    }

    getUserInput(looper)

    looper++;

})

submitBtn.addEventListener("click", function () {
    countSubmit += 1
    counter1 = 0
    counter2 = 0
    backBtn.disabled = true
    backBtn.classList.add("cursor")
    m = (countNext + countSubmit) - countBack

    if (m < ((Object.keys(questions).length / 4) - 1)) {
        set[m - 1].classList.add("hide")
        set[m].classList.remove("hide")

    } else if (m === ((Object.keys(questions).length / 4) - 1)) {
        set[m - 1].classList.add("hide")
        set[m].classList.remove("hide")
        nextBtn.classList.add("hide")
        submitBtn.textContent = "Finish"
    }

    getUserInput(looper)
    looper++;
})

const askUser = () => {
    if (submitBtn.textContent === "Finish") {
        if (confirm('This will submit and end the assessment')) {
            getUserInput(looper)
            submitTest();
            // set[m - 1].classList.add("hide")
            set[m].classList.add("hide")
            $(".set").css("display", "none")
            submitBtn.classList.add("hide")
            backBtn.classList.add("hide")
            exitBtn.classList.remove("hide")
            timer.classList.add("hide")
        }
    }
}

backBtn.addEventListener("click", function () {
    countBack += 1
    counter2 += 1
    n = (countNext + countSubmit) - countBack
    if (counter2 < counter1) {
        submitBtn.textContent = "Submit"
        next.classList.remove("hide")
        set[n].classList.remove("hide")
        set[n + 1].classList.add("hide")
    } else if ((counter2 === counter1) || (n === 1)) {
        submitBtn.textContent = "Submit"
        next.classList.remove("hide")
        set[n].classList.remove("hide")
        set[n + 1].classList.add("hide")
        backBtn.disabled = true
        backBtn.classList.add("cursor")
    }

    looper--;
})

exitBtn.addEventListener("click", function () {
    window.location.href = "/result";
})

const startTimer = (duration, display)  => {
    let timer = duration,
        minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (minutes == 0 && seconds == 0) {
            submitTest();
            set[m].classList.add("hide")
            $(".set").css("display", "none")
            submitBtn.classList.add("hide")
            backBtn.classList.add("hide")
            exitBtn.classList.remove("hide")

            timer.classList.add("hide")
        }

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

const submitTest = async () => {

    let score = 0;
    let ansj = 0;
    let answer;

    for (let i = 0; i < jagged.length; i++) {
        ansj = extractUserAnswer(userInput[i]);

        if (ansj != "") {
            await db.collection(id).doc(jagged[i].toString()).get()
                .then(doc => {
                    answer = doc.data();
                    // if (answer == undefined) {
                    //     console.log(jagged[i]);
                    // } else {
                    if (ansj === answer.answer) {
                        score = score + parseInt(doc.data().score)
                    }
                    // }

                }).catch(error => {
                    console.error("Error writing document: ", error);
                    // alert('failed to save data, please contact support');
                });
        }
    }

    await db.collection(id + "Tests").doc(auth.currentUser.uid).set({
        inProcess: false,
        attempts: firebase.firestore.FieldValue.increment(1),
        score: score,
        adminVerification: false,
        answer1: userInput[0],
        answer2: userInput[1],
        answer3: userInput[2],
        answer4: userInput[3],
        answer5: userInput[4],
        answer6: userInput[5],
        answer7: userInput[6],
        answer8: userInput[7],
        answer9: userInput[8],
        answer10: userInput[9],
        answer11: userInput[10],
        answer12: userInput[11],
        answer13: userInput[12],
        answer14: userInput[13],
        answer15: userInput[14],
        answer16: userInput[15],
        answer17: userInput[16],
        answer18: userInput[17],
        answer19: userInput[18],
        answer20: userInput[19],
    }, {
        merge: true
    }).catch(error => {
        console.error("Error writing document: ", error);
        alert('failed to save data, please contact support');
    });

    await db.collection(id + "Tests").doc("attempts").set({
        count: firebase.firestore.FieldValue.increment(1),
    }, {
        merge: true
    }).catch(error => {
        console.error("Error writing document: ", error);
        alert('failed to save data, please contact support');
    });

    let scorePercentile = 0;

    await db.collection(id + "Tests").doc(auth.currentUser.uid).get()
        .then(doc => {
            scorePercentile = ((score / doc.data().maxScore) * 100).toPrecision(4);
        }).catch(error => {
            console.error("Error writing document: ", error);
            alert('failed to save data, please contact support');
        });


    await db.collection("users").doc(auth.currentUser.uid).set({
        currentTest: "",
        scorePercentile: scorePercentile
    }, {
        merge: true
    }).catch(error => {
        console.error("Error writing document: ", error);
        alert('failed to save data, please contact support');
    });

}

const getUserInput = (looper) => {
    for (let i = looper * 4; i < 4 * (looper + 1); i++) {
        element[i] = document.getElementsByName(i);
        let somecount = 0
        for (let j = 1; j < 5; j++) {
            if (element[i][j].checked) {
                somecount = 1
                userInput[i] = "id-" + jagged[i] + "-ans-" + element[i][j].value;
            }
        }
        if (somecount == 0) {
            userInput[i] = "id-" + jagged[i] + "-ans-" + "";
        }
    }
}

const extractUserAnswer = (userAnswer) => {
    var rx = /-ans-(.*)$/gm;
    var arr = rx.exec(userAnswer);
    return arr[1];
}