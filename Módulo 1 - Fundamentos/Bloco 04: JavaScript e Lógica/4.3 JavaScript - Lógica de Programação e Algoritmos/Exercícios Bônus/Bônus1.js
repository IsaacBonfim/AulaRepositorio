let n = 9;
let d = (n-1)/2;
let e = (n-1)/2;

for (let x = 1; x <= n; x += 2){
  
  let linhas = "";

  for (let y = 0; y < n; y += 1){

    if (x === n || y === d || y === e) {
    
      linhas += "*";
    
    }else {

      linhas += " ";

    }

  }
  
  d += 1;
  e -= 1;
  
  console.log(linhas);

}