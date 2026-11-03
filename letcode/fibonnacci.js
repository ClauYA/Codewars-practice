 
 //Parameters is an integer input
 //Return a list of a fibonnacci sequence until infinite
 //se usa yield porque un generador no calcula todo de golpe: entrega un valor y se queda pausado hasta que alguien pida el siguiente.
 //tomar el cuenta q no hay un n osea q no se necesita el for 
var fibGenerator = function*() {
    let a=0;
    let b=1;
  while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */