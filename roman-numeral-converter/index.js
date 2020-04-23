const DIGITS = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000,2000,3000,4000];
const ROMANS = 'I,II,III,IV,V,VI,VII,VIII,IX,X,XX,XXX,XL,L,LX,LXX,LXXX,XC,C,CC,CCC,CD,D,DC,DCC,DCCC,CM,M,MM,MMM,MMMM'.split(',');

function convertToRoman(num) {
 let str = "";
 for(let x = 1000; x >= 1; x /= 10) {
    while(num >= x)
    {
        const ind = DIGITS.indexOf((Math.floor(num/x))*x);
        str = str + ROMANS[ind];
        num -= DIGITS[ind];
    }
  }
  return str;
}

convertToRoman(3999);
