

let qr_code = document.querySelector("#qr-code");
let code_img = document.querySelector("#code-img");
let loader = document.querySelector("#loading");

qr_code.addEventListener("click", () => {
   
    loader.style.display = "block";
    qr_code.innerHTML = "Creating..";
    

    // Ensure the image `onload` event is set before changing `src`
    codeImg.onload = function() {
        loader.style.display = "none";
        codeImg.style.display = "block";
        qr_code.innerHTML = "CREATE QR"
    };

    // Get the input value correctly
    let input = document.querySelector("#input").value;
    
    // Encode the input value to handle special characters
    let encodedInput = encodeURIComponent(input);
    
    let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedInput}`;
    
    // Set the source of the image
    codeImg.src = api;
});

document.getElementById("input").addEventListener("keydown", function(event){
    if(event.key==='Enter'){
        loader.style.display = "block";
        qr_code.innerHTML = "Creating..";
        
    
        // Ensure the image `onload` event is set before changing `src`
        codeImg.onload = function() {
            loader.style.display = "none";
            codeImg.style.display = "block";
            qr_code.innerHTML = "CREATE QR"
        };
    
        // Get the input value correctly
        let input = document.querySelector("#input").value;
        
        // Encode the input value to handle special characters
        let encodedInput = encodeURIComponent(input);
        
        let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedInput}`;
        
        // Set the source of the image
        codeImg.src = api;
    }
});
