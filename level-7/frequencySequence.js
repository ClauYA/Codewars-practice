//two inputs is a string and character that is going to be replace with in the middle of it
//validate that is a string
//output has to be the time that the string appears separated by the second input


//Pseudo
//I can loop thr two for loops the str and sum the times is being used and save in an array
//join the array with the sep as a parameter
function freqSeq(str, sep){
    
const timesArray=[];       
    for(let i=0; i<str.length; i++){
        let count = 0;
        for(let j=0; j<str.length;j++){
            if(str[i]===str[j]){
                count++;
            }
        }
        timesArray.push(count)
        count=1
        
    }
   
     str=timesArray.join(sep)
      console.log(str)
     return str
}

freqSeq('hello world','-')