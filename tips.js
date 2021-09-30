function invisibility() {
    document.getElementById("reset").style.display = "none";
}

function calculator() {
    var x = parseFloat(document.getElementById("bill").value);
    var y = parseFloat(document.getElementById("people").value);
    var z = parseFloat(document.getElementById("custom").value);
    percentage = keyPressed;
    if (z > 0) {
        percentage = z / 100;
    }   
    if (x > 0 & percentage > 0) {
        if (y == 0) {
            document.getElementById("warning").style.color = "red";
        }
        else if (y > 0) {
            
            tip = (x * percentage).toFixed(2);
            tipEach = (tip / y).toFixed(2);
            document.getElementById("result").innerHTML = '$' + tip;
            document.getElementById("result2").innerHTML = '$' + tipEach;

        }
        if (percentage == .05) {
            document.getElementById("5").style.backgroundColor = 'Red';
        }
        document.getElementById("calculate").style.display = "none";
        document.getElementById("reset").style.display = "inline";
    }
}
function clearBtns(){
    for (var j = 0; j < tipsTotal; j++) {
        tips[j].style.backgroundColor = "#01464b";
    }  
}
function reset() {
    document.getElementById("reset").style.display = "none";
    document.getElementById("bill").value = null;
    document.getElementById("people").value = null;
    document.getElementById("custom").value = null;
    document.getElementById("result").innerHTML = null;
    document.getElementById("result2").innerHTML = null;
    document.getElementById("warning").style.color = "white";
    keyPressed = null;
    clearBtns();
    document.getElementById("calculate").style.display = "inline";
}

function getPercent(key) {
    key = key.slice(0, -1);
    key = parseFloat(key);
    key = key / 100;
    return key;
}

var tips = document.querySelectorAll(".tipBtn");
var tipsTotal = tips.length;
var keyPressed;
txtField = document.getElementById("custom");
for (var i = 0; i < tipsTotal; i++) {
    tips[i].addEventListener("click", function () {
        keyPressed = getPercent(this.innerHTML);
        clearBtns(); 
        this.style.backgroundColor = "#27c2ac";
        txtField.value = null;

    });
}



