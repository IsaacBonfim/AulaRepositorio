let n = 5;

for (let x = 0; x < n; x += 1){
  
  let linhas = "";

  for (let y = 0; y <= n; y += 1){

    if (y >= n-x){

      linhas += "*";

    } else {

      linhas += " ";

    }

  }  
  
  console.log(linhas);

}