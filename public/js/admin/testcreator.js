var quesEntered = [];
var opt1Entered = [];
var opt2Entered = [];
var opt3Entered = [];
var opt4Entered = [];
var ansEntered  = [];
var counter = 1;
var TestName;
var Theme;
var Score;
var Totalscore;
var Time;
var Totaltime;



function Saveinfo() {
    TestName = document.getElementById('testname').value;

    Theme = document.getElementById('theme').value;
    
    Score = document.getElementById('score').value;
    Totalscore = Score*20;

    selectElement2 = document.querySelector('#time-dd'); 
    Time = selectElement2.value; 
    Totaltime = Time*20;
    
    if(TestName === '' || Theme === '' || Score === '' || Time === ''){

        alert("Please fill all fields.");

    }else{

        document.getElementById("info-blank").style.visibility="hidden";
        document.getElementById("node-blank").style.visibility="visible";
        document.getElementById("node-blank").style.top= "-550px";
    }

    
}    



function Savenode() {
    
    quesEntered[counter] = document.getElementById('ques').value;
    opt1Entered[counter] = document.getElementById('opt1').value;
    opt2Entered[counter] = document.getElementById('opt2').value;
    opt3Entered[counter] = document.getElementById('opt3').value;
    opt4Entered[counter] = document.getElementById('opt4').value;
    ansEntered[counter] = document.getElementById('ans').value;
    
    if(quesEntered[counter] === '' || opt1Entered[counter] === '' || opt2Entered[counter] === '' ||  opt3Entered[counter] === '' ||  opt4Entered[counter] === '' || ansEntered[counter] === ''){
        alert("Please fill all fields.");
    }else
    {
        counter++;

        document.getElementById("queno").innerHTML ='Question '+ counter +'.';

        document.getElementById('ques').value = '';
        document.getElementById('opt1').value = '';
        document.getElementById('opt2').value = '';
        document.getElementById('opt3').value = '';
        document.getElementById('opt4').value = '';
        document.getElementById('ans').value = '';
    }

    if(counter === 21){
        document.getElementById("node-blank").style.visibility="hidden";
        document.getElementById("savetestbtn").style.visibility="visible";
  
    }
    
}

function Savetest() {
    document.getElementById("savetestbtn").style.visibility="hidden";
    document.getElementById("node-blank").style.visibility="hidden";
    document.getElementById("node-list").style.visibility="visible";
    document.getElementById("node-list").style.top="-1150px";

    document.getElementById("TName").innerHTML = 'TEST NAME : '+ TestName;
    document.getElementById("Ttheme").innerHTML = 'Topic : '+ Theme;
    document.getElementById("totaltime").innerHTML = 'Total Time alloted : '+ Totaltime +' Minutes';
    document.getElementById("totalscore").innerHTML = 'Maximum Marks : '+ Totalscore;

    document.getElementById("question1").innerHTML ='1.'+ quesEntered[1];
    document.getElementById("1option1").innerHTML = opt1Entered[1];
    document.getElementById("1option2").innerHTML = opt2Entered[1];
    document.getElementById("1option3").innerHTML = opt3Entered[1];
    document.getElementById("1option4").innerHTML = opt4Entered[1];
    document.getElementById("1answer").innerHTML = 'Answer: ' + ansEntered[1];

    document.getElementById("question2").innerHTML ='2.'+ quesEntered[2];
    document.getElementById("2option1").innerHTML = opt1Entered[2];
    document.getElementById("2option2").innerHTML = opt2Entered[2];
    document.getElementById("2option3").innerHTML = opt3Entered[2];
    document.getElementById("2option4").innerHTML = opt4Entered[2];
    document.getElementById("2answer").innerHTML = 'Answer: ' +  ansEntered[2];

    document.getElementById("question3").innerHTML ='3.'+ quesEntered[3];
    document.getElementById("3option1").innerHTML = opt1Entered[3];
    document.getElementById("3option2").innerHTML = opt2Entered[3];
    document.getElementById("3option3").innerHTML = opt3Entered[3];
    document.getElementById("3option4").innerHTML = opt4Entered[3];
    document.getElementById("3answer").innerHTML = 'Answer: ' +  ansEntered[3];

    document.getElementById("question4").innerHTML ='4.'+ quesEntered[4];
    document.getElementById("4option1").innerHTML = opt1Entered[4];
    document.getElementById("4option2").innerHTML = opt2Entered[4];
    document.getElementById("4option3").innerHTML = opt3Entered[4];
    document.getElementById("4option4").innerHTML = opt4Entered[4];
    document.getElementById("4answer").innerHTML = 'Answer: ' +  ansEntered[4];

    document.getElementById("question5").innerHTML ='5.'+ quesEntered[5];
    document.getElementById("5option1").innerHTML = opt1Entered[5];
    document.getElementById("5option2").innerHTML = opt2Entered[5];
    document.getElementById("5option3").innerHTML = opt3Entered[5];
    document.getElementById("5option4").innerHTML = opt4Entered[5];
    document.getElementById("5answer").innerHTML = 'Answer: ' +  ansEntered[5];

    document.getElementById("question6").innerHTML ='6.'+ quesEntered[6];
    document.getElementById("6option1").innerHTML = opt1Entered[6];
    document.getElementById("6option2").innerHTML = opt2Entered[6];
    document.getElementById("6option3").innerHTML = opt3Entered[6];
    document.getElementById("6option4").innerHTML = opt4Entered[6];
    document.getElementById("6answer").innerHTML = 'Answer: ' +  ansEntered[6];

    document.getElementById("question7").innerHTML ='7.'+ quesEntered[7];
    document.getElementById("7option1").innerHTML = opt1Entered[7];
    document.getElementById("7option2").innerHTML = opt2Entered[7];
    document.getElementById("7option3").innerHTML = opt3Entered[7];
    document.getElementById("7option4").innerHTML = opt4Entered[7];
    document.getElementById("7answer").innerHTML = 'Answer: ' +  ansEntered[7];

    document.getElementById("question8").innerHTML ='8.'+ quesEntered[8];
    document.getElementById("8option1").innerHTML = opt1Entered[8];
    document.getElementById("8option2").innerHTML = opt2Entered[8];
    document.getElementById("8option3").innerHTML = opt3Entered[8];
    document.getElementById("8option4").innerHTML = opt4Entered[8];
    document.getElementById("8answer").innerHTML = 'Answer: ' +  ansEntered[8];

    document.getElementById("question9").innerHTML ='9.'+ quesEntered[9];
    document.getElementById("9option1").innerHTML = opt1Entered[9];
    document.getElementById("9option2").innerHTML = opt2Entered[9];
    document.getElementById("9option3").innerHTML = opt3Entered[9];
    document.getElementById("9option4").innerHTML = opt4Entered[9];
    document.getElementById("9answer").innerHTML = 'Answer: ' +  ansEntered[9];

    document.getElementById("question10").innerHTML ='10.'+ quesEntered[10];
    document.getElementById("10option1").innerHTML = opt1Entered[10];
    document.getElementById("10option2").innerHTML = opt2Entered[10];
    document.getElementById("10option3").innerHTML = opt3Entered[10];
    document.getElementById("10option4").innerHTML = opt4Entered[10];
    document.getElementById("10answer").innerHTML = 'Answer: ' +  ansEntered[10];

    document.getElementById("question11").innerHTML ='11.'+ quesEntered[11];
    document.getElementById("11option1").innerHTML = opt1Entered[11];
    document.getElementById("11option2").innerHTML = opt2Entered[11];
    document.getElementById("11option3").innerHTML = opt3Entered[11];
    document.getElementById("11option4").innerHTML = opt4Entered[11];
    document.getElementById("11answer").innerHTML = 'Answer: ' +  ansEntered[11];

    document.getElementById("question12").innerHTML ='12.'+ quesEntered[12];
    document.getElementById("12option1").innerHTML = opt1Entered[12];
    document.getElementById("12option2").innerHTML = opt2Entered[12];
    document.getElementById("12option3").innerHTML = opt3Entered[12];
    document.getElementById("12option4").innerHTML = opt4Entered[12];
    document.getElementById("12answer").innerHTML = 'Answer: ' +  ansEntered[12];

    document.getElementById("question13").innerHTML ='13.'+ quesEntered[13];
    document.getElementById("13option1").innerHTML = opt1Entered[13];
    document.getElementById("13option2").innerHTML = opt2Entered[13];
    document.getElementById("13option3").innerHTML = opt3Entered[13];
    document.getElementById("13option4").innerHTML = opt4Entered[13];
    document.getElementById("13answer").innerHTML = 'Answer: ' +  ansEntered[13];

    document.getElementById("question14").innerHTML ='14.'+ quesEntered[14];
    document.getElementById("14option1").innerHTML = opt1Entered[14];
    document.getElementById("14option2").innerHTML = opt2Entered[14];
    document.getElementById("14option3").innerHTML = opt3Entered[14];
    document.getElementById("14option4").innerHTML = opt4Entered[14];
    document.getElementById("14answer").innerHTML = 'Answer: ' +  ansEntered[14];

    document.getElementById("question15").innerHTML ='15.'+ quesEntered[15];
    document.getElementById("15option1").innerHTML = opt1Entered[15];
    document.getElementById("15option2").innerHTML = opt2Entered[15];
    document.getElementById("15option3").innerHTML = opt3Entered[15];
    document.getElementById("15option4").innerHTML = opt4Entered[15];
    document.getElementById("15answer").innerHTML = 'Answer: ' +  ansEntered[15];

    document.getElementById("question16").innerHTML ='16.'+ quesEntered[16];
    document.getElementById("16option1").innerHTML = opt1Entered[16];
    document.getElementById("16option2").innerHTML = opt2Entered[16];
    document.getElementById("16option3").innerHTML = opt3Entered[16];
    document.getElementById("16option4").innerHTML = opt4Entered[16];
    document.getElementById("16answer").innerHTML = 'Answer: ' +  ansEntered[16];

    document.getElementById("question17").innerHTML ='17.'+ quesEntered[17];
    document.getElementById("17option1").innerHTML = opt1Entered[17];
    document.getElementById("17option2").innerHTML = opt2Entered[17];
    document.getElementById("17option3").innerHTML = opt3Entered[17];
    document.getElementById("17option4").innerHTML = opt4Entered[17];
    document.getElementById("17answer").innerHTML = 'Answer: ' +  ansEntered[17];

    document.getElementById("question18").innerHTML ='18.'+ quesEntered[18];
    document.getElementById("18option1").innerHTML = opt1Entered[18];
    document.getElementById("18option2").innerHTML = opt2Entered[18];
    document.getElementById("18option3").innerHTML = opt3Entered[18];
    document.getElementById("18option4").innerHTML = opt4Entered[18];
    document.getElementById("18answer").innerHTML = 'Answer: ' +  ansEntered[18];

    document.getElementById("question19").innerHTML ='19.'+ quesEntered[19];
    document.getElementById("19option1").innerHTML = opt1Entered[19];
    document.getElementById("19option2").innerHTML = opt2Entered[19];
    document.getElementById("19option3").innerHTML = opt3Entered[19];
    document.getElementById("19option4").innerHTML = opt4Entered[19];
    document.getElementById("19answer").innerHTML = 'Answer: ' +  ansEntered[19];

    document.getElementById("question20").innerHTML ='20.'+ quesEntered[20];
    document.getElementById("20option1").innerHTML = opt1Entered[20];
    document.getElementById("20option2").innerHTML = opt2Entered[20];
    document.getElementById("20option3").innerHTML = opt3Entered[20];
    document.getElementById("20option4").innerHTML = opt4Entered[20];
    document.getElementById("20answer").innerHTML = 'Answer: ' +  ansEntered[20];

}

function cancel(){
    document.getElementById('testname').value = '';
    document.getElementById('score').value = '';
}

function Resetinfo(){
        document.getElementById('ques').value = '';
        document.getElementById('opt1').value = '';
        document.getElementById('opt2').value = '';
        document.getElementById('opt3').value = '';
        document.getElementById('opt4').value = '';
        document.getElementById('ans').value = '';
}

function clearques(){
    document.getElementById('ques').value = '';
}

function clearopt1(){
    document.getElementById('opt1').value = '';
}

function clearopt2(){
    document.getElementById('opt2').value = '';
}

function clearopt3(){
    document.getElementById('opt3').value = '';
}

function clearopt4(){
    document.getElementById('opt4').value = '';
}

function clearans(){
    document.getElementById('ans').value = '';
}
