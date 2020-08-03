

//Number Generation Part
function pinGeneration() {
    let pin = Math. floor(1000 + Math. random() * 9000); 
    document.getElementById("pin-display").value = pin;
}

let generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", pinGeneration);



