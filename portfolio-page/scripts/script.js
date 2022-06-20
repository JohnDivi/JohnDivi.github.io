function remove() {
    var elem = document.getElementById("welcome");
    elem.className = "remove-welcome";
    setTimeout(function() {
        elem.remove();
    }, 750);
    
    return false;
}
