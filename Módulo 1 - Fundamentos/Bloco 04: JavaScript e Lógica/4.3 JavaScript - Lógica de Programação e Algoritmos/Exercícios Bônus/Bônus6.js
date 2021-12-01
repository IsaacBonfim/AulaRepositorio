let n = 5;

let divisores = 0;

for (let i = 1; i <= n; i++){

  if(n % i === 0){

    divisores++;

  }    
}    

if (divisores === 2) {

  console.log(n + " é um numero primo");

} else {

  console.log(n + " não é um numero primo");

}