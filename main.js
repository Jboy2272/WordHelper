
var button = document.getElementById("confirmBtnContent")

confirmed = 0

button.onclick = function() {
    if (confirmed == 0) {
        document.getElementById("confirmBtnContent").style.backgroundColor = "#0F0"
        document.getElementById("confirmBtnContent").innerHTML = "Edit Letters"
        confirmed = 1

        for (var i = 1; i < 8; i++) {
        var id = "hex-text-" + i
        document.getElementById(id).setAttribute("readonly", "")
        }
    } else {
        document.getElementById("confirmBtnContent").style.backgroundColor = "#3298dc"
        document.getElementById("confirmBtnContent").innerHTML = "Confirm Letters"
        confirmed = 0

        for (var i = 1; i < 8; i++) {
        var id = "hex-text-" + i
        document.getElementById(id).removeAttribute("readonly")
        }
    }
}


function shuffle() {
    lettersArray = [
        document.getElementById("hex-text-1").value, 
        document.getElementById("hex-text-2").value, 
        document.getElementById("hex-text-3").value, 
        document.getElementById("hex-text-5").value, 
        document.getElementById("hex-text-6").value, 
        document.getElementById("hex-text-7").value
    ]
    var m = lettersArray.length, t, i;
  
    while (m) {
  
      i = Math.floor(Math.random() * m--);
  
      t = lettersArray[m];
      lettersArray[m] = lettersArray[i];
      lettersArray[i] = t;
    }

    document.getElementById("hex-text-1").value = lettersArray[0]
    document.getElementById("hex-text-2").value = lettersArray[1]
    document.getElementById("hex-text-3").value = lettersArray[2]
    document.getElementById("hex-text-5").value = lettersArray[3]
    document.getElementById("hex-text-6").value = lettersArray[4]
    document.getElementById("hex-text-7").value = lettersArray[5]

    return lettersArray;
}