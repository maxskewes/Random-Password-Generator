
//possible values for loop
function UpsLowsNumsSps() {
    let complexity = document.getElementById("slider").value;
  
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function UpsOnly() {
    let complexity = document.getElementById("slider").value;
  
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function LowsOnly() {
    let complexity = document.getElementById("slider").value;
  
    let values = "abcdefghijklmnopqrstuvwxyz";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function NumsOnly() {
    let complexity = document.getElementById("slider").value;
  
    let values = "0123456789";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function CharsOnly() {
    let complexity = document.getElementById("slider").value;
  
    let values = "!@#$%&";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function UpsLows() {
    let complexity = document.getElementById("slider").value;
  
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function UpsNums() {
    let complexity = document.getElementById("slider").value;
  
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function UpsChars() {
    let complexity = document.getElementById("slider").value;
  
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function LowsNums() {
    let complexity = document.getElementById("slider").value;
  
    let values = "abcdefghijklmnopqrstuvwxyz0123456789";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function LowsChars() {
    let complexity = document.getElementById("slider").value;
  
    let values = "abcdefghijklmnopqrstuvwxyz!@#$%&";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function NumsChars() {
    let complexity = document.getElementById("slider").value;
  
    let values = "0123456789!@#$%&";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function UpsLowsNums() {
    let complexity = document.getElementById("slider").value;
  
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function UpsLowsChars() {
    let complexity = document.getElementById("slider").value;
  
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

function UpsNumsChars() {
    let complexity = document.getElementById("slider").value;
  
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}
function LowsNumsChars() {
    let complexity = document.getElementById("slider").value;
  
    let values = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


//display new password
document.getElementById("display").value = password;

 //previous passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

//set default password length
document.getElementById("length").innerHTML = "Length: 65";

//display slider length
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 7){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
}

//copy to clipboard button
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard");
}