var CourseName;
var Category;
var Code;
var Level;
var About;

function Saveinfo() {
    CourseName = document.getElementById('coursename').value;

    selectElement1 = document.querySelector('#category-dd'); 
    Category = selectElement1.value; 
    
    Code = document.getElementById('code').value;
    

    selectElement2 = document.querySelector('#diffi-dd'); 
    Level = selectElement2.value; 
   
    
    if(CourseName === '' || Category === '' || Code === '' || Level === ''){

        alert("Please fill all fields.");

    }else{

        document.getElementById("info-blank").style.visibility="hidden";
        document.getElementById("basic-info").style.visibility="visible";
        
        document.getElementById("CName").innerHTML = 'COURSE NAME : '+ CourseName;
        document.getElementById("Ccode").innerHTML = 'Course Code : '+ Code;
        document.getElementById("basic-info").style.top= "-1150px";
        document.getElementById("node-blank").style.visibility="visible";
        document.getElementById("node-blank").style.top= "-500px";
        document.getElementById("section").style.visibility="visible";
        document.getElementById("section").style.top= "-450px";

    }

    
}    


function Savenode() {

    About = document.getElementById('about').value;

    if(About === ''){

        alert("Please add a description for course.");

    }else{

        document.getElementById("CName").innerHTML = 'COURSE NAME : '+ CourseName;
    document.getElementById("Ccategory").innerHTML = 'Category : '+ Category;
    document.getElementById("Ccode").innerHTML = 'Course Code : '+ Code;
    document.getElementById("Cdifficulty").innerHTML = 'Level of Course : '+ Level;
    document.getElementById("Cabout").innerHTML = About;

    document.getElementById("node-blank").style.visibility="hidden";
    document.getElementById("node-list").style.visibility="visible";
    document.getElementById("node-list").style.top="-1150px";
    }
    

}

function cancel(){
    document.getElementById('coursename').value = '';
    document.getElementById('code').value = '';
}

function Resetinfo(){
        document.getElementById('about').value = '';
        
}
