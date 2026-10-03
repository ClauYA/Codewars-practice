  // get current time
  //convert years, months and days in miliseconds with getTime()
  //multiply milisec times sec, times minutes and times hours
  //Math floor round down without decimals
function ageInDays(year, month, day){
    const currentDate = new Date(); 
    const birth = new Date(year, month -1 , day);
    const days=Math.floor((currentDate.getTime()-birth.getTime())/(1000*60*60*24))

    return `You are ${days} days old`;
}   
ageInDays(2007,11,27)