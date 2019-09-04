let count = 0
function myFunction() {
    count++
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "Paragraph changed1.";
  
    } else {
        document.getElementById("demo").innerHTML = "Paragraph changed2.";
  
    }
    }