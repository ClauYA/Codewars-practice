//PREP
//Parameters
// input is a non negative number
//Return 
// a single digit number
//Examples
//54599=>5+4+5+9+9=32=>3+2=5
//Pseudo
//n>0
//poner los numeros en un array
//metodo reduce
//condicion y pregunta si el resultado es length=1
//if yes para y retorna if not vuelve a llamar a la funcion

function digitalRoot(n) {
 let vectorN=[]
 let inicial=0;
    if(n>=0){
        n=String(n)
        for(let i=0;i<n.length;i++){
            vectorN.push(n[i])
        }
    }else return;
    vectorN=Array.from(String(n),Number);
    let result=vectorN.reduce((acc,valor)=>acc+valor, inicial)
    if(result<10)
        return result
    return digitalRoot(result);
}
console.log(digitalRoot(0))