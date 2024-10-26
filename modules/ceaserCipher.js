export default function ceaserFunction (string, shiftFactor){

    const chars = string.split("");
    const encryptedTextArr = [];

    chars.forEach(elem => { 
        let originalChar = elem.charCodeAt(0);

        // If the original character is not a letter keep it the same.
        if( originalChar < 65 || originalChar > 91 && originalChar < 97 || originalChar > 122){
            encryptedTextArr.push(originalChar);
            return;
        }
        
        let shiftedChar = originalChar + shiftFactor;
        
        // If the shifted character is out of range, wrap it back around.
        if(shiftedChar > 122 && originalChar > 97){
            shiftedChar = (shiftedChar - 122) + 96;
        } 
        if(shiftedChar > 90 && originalChar < 91){
            shiftedChar = (shiftedChar - 90) + 64;
        }


        encryptedTextArr.push(shiftedChar);
    });

    return String.fromCharCode(...encryptedTextArr);
}