//********************jQuery for vertical navbar********************



$('#sidebarCollapse').on('click', function () {
    $('#sidebar').slideToggle("slow", "linear", function () {
      $('.text').toggleClass('addMargin')
      $('#sidebarCollapse').toggleClass('addMargin')
    });
  
  });
  
  
  //***********************Vanilla Javascript*****************************
  
  var btnIagree = document.querySelector("#iAgree")
  var min = document.querySelector("#min")
  var sec = document.querySelector("#sec")
  var nextBtn = document.querySelector("#next")
  var submitBtn = document.querySelector("#submit")
  var backBtn = document.querySelector("#back")
  var set = document.querySelectorAll(".set")
  var start = document.querySelector("#start")
  var timer = document.querySelector("#timer")
  var input = document.querySelectorAll("input")
  var label = document.querySelectorAll("label")
  var exitBtn = document.querySelector("#exit")
  var duration = 0;
  var display = document.querySelector("#display")
  var score = document.querySelector("#score")
  var buttons = document.querySelectorAll("div [class='buttons']")
  var userInput = []
  var i
  var j
  var k = 0;
  var countNext = 0;
  var countSubmit = 0;
  var countBack = 0;
  var minValue = 0;
  var minTimer = 30;
  var secValue = 0;
  var secTimer = 60;
  var minsTaken = 0;
  var secsTaken = 0;
  var m = 0;
  var n = 0;
  var timeout;
  var result = 0;
  var counter1 = 0;
  var counter2 = 0;
  var element = []
  
  backBtn.disabled = true
  backBtn.classList.add("cursor")
  
  
  iAgree.addEventListener("click", function () {
    start.classList.remove("hide")
    iAgree.classList.add("hide")
  })
  
  
  start.addEventListener("click", function () {
    start.classList.add("hide");
    set[m].classList.remove("hide")
    nextBtn.classList.remove("hide")
    submitBtn.classList.remove("hide")
    backBtn.classList.remove("hide")
    timer.classList.remove("hide")
    secValue = setInterval(function () {
  
      if (secTimer > 0) {
        secTimer -= 1
        if (secTimer >= 10) {
          sec.textContent = secTimer
        } else {
          sec.textContent = "0" + secTimer
        }
  
      } else {
  
        secTimer = 60
        secTimer -= 1
        if (secTimer > 10) {
          sec.textContent = secTimer
        } else {
          sec.textContent = "0" + secTimer
        }
      }
  
  
    }, 1000)
  
    minValue = setInterval(function () {
      minTimer -= 1
  
      if (minTimer >= 0) {
  
        if (minTimer > 10) {
          min.textContent = minTimer
        } else {
          min.textContent = "0" + minTimer
        }
  
      }
  
    }, 60000)
  
    function stop() {
  
      clearInterval(minValue);
      clearInterval(secValue);
      for (i = 0; i < 3; i++) {
        if (!(set[i].classList.contains("hide")))
          set[i].classList.add("hide")
      }
      nextBtn.classList.add("hide")
      submitBtn.classList.add("hide")
      backBtn.classList.add("hide")
      timer.classList.add("hide")
      exitBtn.classList.remove("hide")
      for (j = 0; i < answers.length; j++) {
        if (userInput[j] === answers[j]) {
          result += 1;
        }
      }
  
      duration = "30:00"
    }
  
    timeout = setTimeout(stop, 1800000)
  });
  
  
  
  
  //Questions for the test
  
  questions = {
    0: "Suppose we want to arrange five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack?",
    1: " Can we align a Block element by setting the left and right margins ?",
    2: "What should be the table width, so that the width of a table adjust to the current width of the browser window?",
    3: "How can we write comment along with CSS code ?",
    4: "Which CSS property is used to control the text size of an element ?",
    5: "HTML stands for?",
    6: "The attribute of <form> tag?",
    7: "The body tag is usually used after ?",
    8: " If we want define style for an unique element, then which css selector will we use ?",
    9: "If we want to show an Arrow as cursor, then which value we will use ?",
    10: "If we want to use a nice looking green dotted border around an image, which css property will we use?",
    11: "Which of the following is not JavaScript Data Types?",
    12: "Inside which HTML element do we put the JavaScript?",
    13: "HTML is what type of language ?",
    14: "Fundamental HTML Block is known as ___________.",
    15: "How can you make a bulleted list with numbers?",
    16: "What tag is used to display a picture in a HTML page?",
    17: "HTML web pages can be read and rendered by _________.",
    18: "Tags and texts that are not directly displayed on the page are written in _____ section.",
    19: "Which of the following is not a browser ?"
  }
  
  //Values for "id", "value", and "for" attributes of input and label tags.
  
  var idValueFor = ["d", "s", "z", "x",
    "yes", "no",
    "640", "100", "full-screen", "1200",
    "asterisk", "slash", "exclamation", "at",
    "fstyle", "tsize", "tstyle", "fsize",
    "hypertext", "hightext", "hypertabular", "none1",
    "method", "action", "both",
    "title", "head1", "form", "script1",
    "id", "text", "class", "none2",
    "pointer", "default", "arrow", "notallowed",
    "color", "decoration", "style", "none3",
    "undefined", "number", "float", "null",
    "script2", "head2", "link", "meta",
    "scripting", "markup", "network", "none4",
    "body1", "tag", "attribute", "none5",
    "list", "li", "ol", "ul",
    "picture", "src", "alt", "img",
    "compiler", "browser", "server",
    "head3", "html", "body2",
    "bing", "google", "opera", "firefox"
  ]
  
  
  //Options for each question of the test
  
  var optionsDisplay = {
    0: ["d-index", "s-index", "z-index", "x-index"],
    1: ["Yes, we can", "Not Possible"],
    2: ["640 pixels", "100%", "full-screen", "1200 pixels"],
    3: ["/* a comment */", "/ a comment /", " !a comment!", "@ a comment @"],
    4: ["font-style", "text-size", "text-style", "font-size"],
    5: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of the above"],
    6: ["Method", "Action", "Both"],
    7: ["Title Tag", "Head Tag", "Form Tag", "Script Tag"],
    8: ["Id", "Text", "Class", "None of the above"],
    9: ["Pointer", "Default", "Arrow", "Not-Allowed"],
    10: ["border-color", "border-decoration", "border-style", "None of the above"],
    11: ["undefined", "number", "float", "null"],
    12: ["<script>", "<head>", "<link>", "<meta>"],
    13: ["Scripting Language", "Markup Language", "Network Protocol", "None of the above"],
    14: ["HTML Body", "HTML Tag", "HTML Attribute", "None of these"],
    15: ["<list>", "<li>", "<ol>", "<ul>"],
    16: ["picture", "src", "alt", "img"],
    17: ["Compiler", "Web Browser", "Server", "Interpreter"],
    18: ["<head>", "<html>", "<body>"],
    19: ["Microsofts Bing", "Google", "Opera", "Firefox"]
  }
  
  
  //Answers
  answers = ["z", "yes", "100", "asterisk", "fsize", "hypertext", "both", "head1", "id", "default", "style", "float", "script2", "markup", "tag", "ul", "img", "browser", "head3", "bing"];
  
  userInput.length = Object.keys(questions).length;
  
  
  for (i = 0; i < idValueFor.length; i++) {
    input[i].id = idValueFor[i]
    input[i].value = idValueFor[i]
    label[i].htmlFor = idValueFor[i]
  }
  
  
  for (i = 0; i < Object.keys(optionsDisplay).length; i++) {
    for (j = 0; j < Object.keys(optionsDisplay[i]).length; j++) {
      label[k++].textContent = optionsDisplay[i][j]
    }
  }
  
  
  
  
  for (i = 0; i < Object.keys(questions).length; i++) {
    element[i] = document.getElementsByName(i)
  }
  
  
  
  
  
  
  var parah = document.querySelectorAll(".parah");
  for (i = 0; i < Object.keys(questions).length; i++) {
    parah[i].textContent = questions[i]
  }
  
  
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
  
  })
  
  
  
  
  submitBtn.addEventListener("click", function () {
    countSubmit += 1
    counter1 = 0
    counter2 = 0
    backBtn.disabled = true
    backBtn.classList.add("cursor")
    m = (countNext + countSubmit) - countBack
  
  
    for (i = 0; i < ((countNext * 4 + countSubmit * 4) - (countBack * 4)); i++)
      for (j = 0; j < element[i].length; j++) {
        if ((element[i][j]).checked) {
          //Option selected by the user is stored in the "userInput" array
          userInput[i] = element[i][j].value;
        }
      }
  
  
  
    if (m < ((Object.keys(questions).length / 4) - 1)) {
      set[m - 1].classList.add("hide")
      set[m].classList.remove("hide")
  
    } else if (m === ((Object.keys(questions).length / 4) - 1)) {
      set[m - 1].classList.add("hide")
      set[m].classList.remove("hide")
      nextBtn.classList.add("hide")
      submitBtn.textContent = "Finish"
    } else {
  
      set[m - 1].classList.add("hide")
      submitBtn.classList.add("hide")
      backBtn.classList.add("hide")
      exitBtn.classList.remove("hide")
      clearTimeout(timeout)
      clearInterval(minValue)
      clearInterval(secValue)
      if ((60 - sec.textContent) > 9) {
        secsTaken = 60 - parseInt(sec.textContent)
      } else {
        secsTaken = "0" + (60 - parseInt(sec.textContent))
      }
  
      if (30 - min.textContent > 9) {
        minsTaken = 30 - parseInt(min.textContent)
      } else {
        minsTaken = "0" + (30 - parseInt(min.textContent))
      }
  
      timer.classList.add("hide")
      for (i = 0; i < answers.length; i++) {
        if (userInput[i] === answers[i]) {
          result += 1
        }
      }
    }
  
    duration = minsTaken + ":" + secsTaken
  })
  
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
  
  })
  
  exitBtn.addEventListener("click", function () {
    if (result < 10) {
      result = "0" + result
    }
    localStorage.setItem("resultValue", result);
    localStorage.setItem("timeTaken", duration);
    window.location.href = "result.js";
  })