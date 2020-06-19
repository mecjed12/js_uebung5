

var numbers = [];
document.getElementById("output").innerHTML = numbers;

function addnumber() {
    var inputNumbers = document.getElementById("number").value.split(',');
    var realNumbers = [inputNumbers.length];
    for(var i = 0; i < inputNumbers.length; i++){
        realNumbers[i] = parseInt(inputNumbers[i]);
    }
    document.getElementById("output").innerHTML = Math.min(...realNumbers);
}