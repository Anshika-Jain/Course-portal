window.addEventListener('load', () => {
  activeHome();
  addTestCards();
});

const activeHome = () => {
  $("#nav-dashboard").attr('class', 'active');
  $("#nav-test-kit").attr('class', 'inactive');
  $("#nav-result").attr('class', 'inactive');
};

const addTestCards = async () => {
  await db.collection("tests").doc("subjectNames")
    .get().then(async (doc) => {
      for (let i = 0; i <= Object.keys(doc.data()).length - 1; i++) {
        if (Object.keys(doc.data())[i] !== "count") {
          let data = Object.keys(doc.data())[i];
          let desc = '';

          await db.collection(data).doc("description").get().then(doc => {
            desc = doc.data().about
          }).catch(error => {
            console.error("Error writing document: ", error);
            alert('failed to save data, please contact support');
          });

          if (desc === '') {
            desc = "None given"
          }

          $('#container').append(` <div class="card col-8 col-lg-3 col-xl-3  shadow" style="width: 20rem;"> \
            <img class="heading" \
              src="https://kimscrane.com/shop/5135-large_default/glassine-paper-aka-kite-paper-cherry-red-color.jpg"> \
            <div class="card-body"> \
              <h5 class="card-title">${data}</h5> \
              <p class="card-text">${desc} \
                . </p> \
              <a href="#" id="${data}" onclick="checkValue(${data})" class="btn btn-primary btn-sm ">Access Test <i class="fas fa-lock"></i></a> \
              <a href="#" class="btn btn-primary btn-sm">Access Course</a> \
            </div> \
            </div>`);
        }
      }
    }).catch(error => {
      console.error("Error writing document: ", error);
      alert('failed to save data, please contact support');
    });
}

const checkValue = async (name) => {
  let ans = prompt("Are you ready to attend the test ? (Enter yes to continue)")
  if (ans == "yes" || ans == "Yes") {

    let testName;
    await db.collection("users").doc(auth.currentUser.uid).get().then(doc => {
      testName = doc.data().currentTest
    }).catch(error => {
      console.error("Error writing document: ", error);
      alert('failed to load data, please contact support');
    });

    if (testName == "") {

      await db.collection("users").doc(auth.currentUser.uid).set({
        currentTest: name.id,
      }, {
        merge: true
      }).catch(error => {
        console.error("Error writing document: ", error);
        alert('failed to save data, please contact support');
      });
      window.location.href = "/testkit/" + name.id;

    } else
      alert("It is strongly advised to take only one test at a time.")
  }
}