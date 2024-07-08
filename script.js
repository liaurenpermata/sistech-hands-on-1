let val1 = parseInt(getRandomNumber(1,9));
let val2 = parseInt(getRandomNumber(1,9));

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function submitAnswer(){

    document.getElementById("container-jawaban-salah").style.display = "none";
    document.getElementById("container-jawaban-benar").style.display = "none";

    let value = document.getElementById("inputAnswer").value;
    console.log("value", value)
    
    if (value != (val1 + val2)) {
        document.getElementById("container-jawaban-salah").style.display = "block";
        document.getElementById("jawabanYangBenar").innerHTML = parseInt(val1+val2);
    } else if(value == (val1+val2)){
        document.getElementById("container-jawaban-benar").style.display = "block";
    }
}

function resetNumbers() {
    val1 = parseInt(getRandomNumber(1,9));
    val2 = parseInt(getRandomNumber(1,9));
    
    document.getElementById("number1").innerHTML = val1;
    document.getElementById("number2").innerHTML = val2;
    
    document.getElementById("inputAnswer").value = "";

    document.getElementById("container-jawaban-salah").style.display = "none";
    document.getElementById("container-jawaban-benar").style.display = "none";
}


document.getElementById("container-jawaban-salah").style.display = "none";
document.getElementById("container-jawaban-benar").style.display = "none";

document.getElementById("number1").innerHTML = val1;
document.getElementById("number2").innerHTML = val2;


document.getElementById("btn-submit").addEventListener("click", submitAnswer);

document.getElementById("btn-reset").addEventListener("click", resetNumbers);