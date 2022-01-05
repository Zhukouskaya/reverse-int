module.exports = function reverse (n) {
  let str;
  if (n > 0) {
    str = String(n);
  } else { 
    str = String(Math.abs(n));
  }
  
  let w = str.toString();
  let e = w.split("").reverse().join("");
  let reverseResalt  = Number(e);

  return reverseResalt ;
  //
} 

