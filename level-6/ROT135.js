//Parameters: input of a string
//Return: same string with different letters +13 positions for letters and +5 positions for numbers
//Example:Gur dhvpx oebja sbk whzcf bire gur 7 ynml qbtf"), "The quick brown fox jumps over the 2 lazy dogs 
//Pesudo: ASCII and regex
function ROT135(input){
 return input.replace(/[a-z0-9]/gi, (c) => {
    if (c >= "0" && c <= "9") {
      return String.fromCharCode(((c.charCodeAt(0) - 48 + 5) % 10) + 48);
    }
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
}
//this a solution I was thinking of but i couldn't think about how to replace it I saw the solution 
function ROT135(input) {
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const nop = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm5678901234"
  return input.replace(/[A-Za-z0-9]/g, c => nop[abc.indexOf(c)])
}
console.log(ROT135("The quick brown fox jumps over the 2 lazy dogs"))