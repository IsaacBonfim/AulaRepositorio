let n = 100;
let nPrimos = 2;

for (let i = 0; i <= n; i++){
  
  let divisores = 0;
    
  for (let j = 0; j <= n; j++){
        
    if(i % j === 0){
  
      divisores++;
  
    }    
  }
    
  if (divisores === 2) {
  
    nPrimos = i;

  }   
}

console.log(nPrimos);