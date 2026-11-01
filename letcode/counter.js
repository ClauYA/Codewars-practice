 //Parameters n
 //Return array n, n+1 ,n+2...
 //Example ["call","call","call","call","call"] => [-2,-1,0,1,2]
 //Pseudo save n in a variable to keep it alive
 //increment the variable and save it in array
 //return the array
 //using closure 
var createCounter = function(n) {
    let count = n-1

    return function() {
        count++
        return count
    };
};