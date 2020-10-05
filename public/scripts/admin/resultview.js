let url = window.location.href;
let id = url.substring(url.lastIndexOf('/') + 1);

window.addEventListener('load', function () {
    getDataAndAppend();
})

const getDataAndAppend = async () => {

    let dataSet = []
    let userMarksScored = []
    let userUids = []
    let userNames = []
    let userEmails = []
    let userAttempts = []
    let userScorePercentiles = []
    let userMaxMarksPossible = []
    let timeAllotedToUsers = []
    let timeOfTestForUsers = []

    await db.collection(id + "Tests").where("inProcess", "==", false).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                userUids[doc.id] = doc.data();
            })
        });

    for (let i = 0; i < Object.keys(userUids).length; i++) {
        await db.collection("users").doc(Object.keys(userUids)[i]).get()
            .then(doc => {
                userNames[i] = doc.data().name;
                userEmails[i] = doc.data().email;
                userScorePercentiles[i] = doc.data().scorePercentile
            })

        await db.collection(id + "Tests").doc(Object.keys(userUids)[i]).get()
            .then(doc => {
                userMarksScored[i] = doc.data().score;
                userMaxMarksPossible[i] = doc.data().maxScore;
                timeAllotedToUsers[i] = doc.data().timeAlloted;
                timeOfTestForUsers[i] = doc.data().timeOfTest;
                userAttempts[i] = doc.data().attempts;
            })

        dataSet[i] = [userNames[i], userEmails[i], userMaxMarksPossible[i], userMarksScored[i], userScorePercentiles[i], timeAllotedToUsers[i], userAttempts[i], timeOfTestForUsers[i]]
    }

    $(document).ready(function () {
        let table = $('#subject-table').DataTable({
            data: dataSet,
            'bSort ': false,
            'aoColumns': [{
                    sWidth: "35%",
                    bSearchable: false,
                    bSortable: false
                },
                {
                    sWidth: "35%",
                    bSearchable: false,
                    bSortable: false
                },
                {
                    sWidth: "20%",
                    bSearchable: false,
                    bSortable: false
                }
            ],
            // "scrollY": "50px",
            "scrollCollapse": true,
            "info": true,
            "destroy": true,
            "paging": true,
            responsive: true,
            "searching": true,
            "columnDefs": [{
                "defaultContent": "-",
                "targets": "_all"
            }],
            columns: [{
                    title: "Student Name"
                },
                {
                    title: "Student Email"
                },
                {
                    title: "Max Marks"
                },
                {
                    title: 'Marks scored'
                },
                {
                    title: 'Percentile'
                },
                {
                    title: "Time alloted"
                },
                {
                    title: "Attempts"
                },
                {
                    title: "Date and Time of Test"
                },
            ]
        });

        // $('#subject-table tbody').on('click.DT', 'tr', function () {
        // let data = table.row(this).data();
        // document.location.href = '/admin/viewedit/' + data[0];
        // });
    });
}

function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}