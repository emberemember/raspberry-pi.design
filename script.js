var count = 1;
function setColor(btn, color) {
    var property = document.getElementById(btn);
    if (count == 0) {
        property.style.backgroundColor = "#49276D"
        count = 1;        
    }
    else {
        property.style.backgroundColor = "#e010b0"
        count = 0;
    }
}