function botao() {
    var body = document.body;
    var header = document.querySelector("header");
    var footer = document.querySelector("footer");

    var bgColor = window.getComputedStyle(body).backgroundColor.toLowerCase();

    
    switch (bgColor) {
        case "rgb(255, 255, 255)":  
            body.style.backgroundColor = "black";
            body.style.color = "white";
            header.style.background = "linear-gradient(90deg, #0f0c29 0%, #302b63 100%)";
            footer.style.background = "#333";
            break;

        default: 
            body.style.backgroundColor = "white";
            body.style.color = "black";
            header.style.background = "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)";
            footer.style.background = "#2575fc";
            left.style.background = "#2575fc";
            break;
    }
}


