function palindrome(str) {
  const arr = [];
  for(let i=0;i<str.length;++i) {
    const c = str[i];
    if(c <= '9' && c >= '0' || c >= 'a' && c <= 'z')
      arr.push(c.charCodeAt(0)); 
    else if(c <= 'Z' && c >= 'A')
      arr.push(c.charCodeAt(0)+32); 
  };
  for(let s=0,e=arr.length-1;s<=e;++s,--e)
    if(arr[s] !== arr[e])
      return false;
  return true;
}



palindrome("eye");
