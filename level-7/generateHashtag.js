//input a string
//first we can lower case all the string
//split into an array
//use substring to get the first element substring(0,1)
//put in uppercase that substring and splice 

function generateHashtag (str){
    if(str !=='')
    {
        let minus = str.toLowerCase();
        let frase = minus.split(' ');
        for(let i=0;i<frase.length;i++){

            if(!frase[i][0]){
                console.log('verifica q es lower case')
            }
    }
    console.log(frase)
    }else{
        return false;
    }
  
}

generateHashtag('Do We have A Hashtag')