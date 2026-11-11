//Parameters: h*0.66
//return times seen
//example:h = 30.0, bounce = 0.66, window = 1.5 =>15
//pseudo: conditions h>=0 || bounce>0 && bounce<1 || window > h
//if yes let seen = 0; seen+=1; h*=bounce
//if not return -1


function bouncingBall(h,  bounce,  window) {
  if( h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
  let seen = 0;
  
  while(h > window){
    seen += 1
    h *= bounce
    if(h > window) seen += 1
  }
  
  return seen;
}