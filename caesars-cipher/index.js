function shiftCharBy(shiftAmount) {
  return function decrypt(char) {
     if (char < 'A' || char > 'Z') {
       // special characters are not coded
       return char;
     }
     const charCode = char.charCodeAt(0);
     const shiftedCharCode = charCode+((charCode < 65+13) ? 13 : -13)
     return String.fromCharCode(shiftedCharCode);
    
  }
}

const caesarsChiper = shiftCharBy(13)

function rot13(str) { // LBH QVQ VG!
  return str.split('').map(caesarsChiper).join('');
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
