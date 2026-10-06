 //par: lenght/2 and then get the middle and the next to it
  //impar: length/2 and just get the one from the middle 
function getMiddle(s) {
    if(s.length%2==0)
    {
        let f=(s.length/2);
        return `${s[f-1]}${s[f]}`
    }else{
        let f=Math.floor((s.length/2));
        return `${s[f]}`
    }
}
console.log(getMiddle('Holam'));