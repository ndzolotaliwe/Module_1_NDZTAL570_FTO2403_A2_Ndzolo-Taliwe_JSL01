function validateSyntax() {
    let input = document.getElementById('petInput').value
    let result = ''; 
    let regex = /^pet_[a-zA-Z0-9]+$/; 
    if (regex.test(input)) {
        result = 'Valid Syntax \u{1F7E2}'; 
    } else {
        result = 'Invalid Syntax \u{1F534} ';  
    }

            document.getElementById('result').innerText = result;
}


 