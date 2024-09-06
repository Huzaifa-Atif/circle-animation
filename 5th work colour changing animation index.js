var h1 = document.getElementById("heading")
var container = document.getElementById("container-js")

// This code will log "Hello, World!" to the console every 1 second (1000 milliseconds)
setInterval(function () {
    if (h1.innerHTML == "left") {
        container.style.backgroundColor = "red"
        container.style.justifyContent = "center"
        container.style.alignItems = "flex-start"
        h1.innerHTML = "top"
    }

    else if(h1.innerHTML == "top") {
        container.style.backgroundColor = "orange"
        container.style.alignItems = "center"
        container.style.justifyContent = "flex-end"
        h1.innerHTML = "right"
    }

    else if(h1.innerHTML == "right") {
        container.style.backgroundColor = "yellow"
        container.style.justifyContent = "center"
        container.style.alignItems = "flex-end"
        h1.innerHTML = "bottom"
    }
    
    else {
        h1.innerHTML = "left"
        container.style.backgroundColor = "blue"
         container.style.alignItems = "center"
        container.style.justifyContent = "flex-start"
    }
}, 1000);
  