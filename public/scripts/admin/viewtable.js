window.addEventListener('load', function () {
    getDataAndAppend();
})

const getDataAndAppend = async () => {
    let dataSet = []
    let subjectNames = []
    let subjectIndices = []
    let subjectDesc = []
    let userAttempts = []

    await db.collection("tests").doc("subjectNames").get()
        .then(doc => {
            for (let i = 0; i <= Object.keys(doc.data()).length - 1; i++) {
                if (Object.keys(doc.data())[i] != "count") {
                    subjectNames[i] = Object.keys(doc.data())[i]
                }
            }
        }).catch(error => {
            console.error("Error writing document: ", error);
            alert('failed to load data, please contact support');
        });

    subjectNames = filter_array(subjectNames)

    for (let i = 0; i < subjectNames.length; i++) {
        await db.collection("tests").doc(subjectNames[i]).get()
            .then(doc => {
                if (doc)
                    subjectIndices[i] = doc.data().index;
                else
                    subjectIndices[i] = ""
            }).catch(error => {
                console.error("Error writing document: ", error);
                alert('failed to load data, please contact support');
            });

        await db.collection(subjectNames[0]).doc("description").get()
            .then(doc => {
                if (doc)
                    subjectDesc[i] = doc.data().about;
                else
                    subjectDesc[i] = ""
            }).catch(error => {
                console.error("Error writing document: ", error);
                alert('failed to load data, please contact support');
            });

        await db.collection(subjectNames[i] + "Tests").doc("attempts").get()
            .then(doc => {
                if (doc)
                    userAttempts[i] = doc.data().count;
                else
                    userAttempts[i] = ""
            }).catch(error => {
                console.error("Error writing document: ", error);
                alert('failed to load data, please contact support');
            });

        dataSet[i] = [subjectNames[i], subjectIndices[i], userAttempts[i], subjectDesc[i]];
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
                    title: "Subject Name"
                },
                {
                    title: "Questions Available"
                },
                {
                    title: 'Users Attempted'
                },
                {
                    title: 'Description'
                },
                // {
                //     title: "Institute"
                // },
                // {
                //     title: "City"
                // },
                // {
                //     title: 'Referred'
                // },
            ]
        });

        $('#subject-table tbody').on('click.DT', 'tr', function () {
            let data = table.row(this).data();
            document.location.href = '/admin/viewedit/' + data[0];
        });
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