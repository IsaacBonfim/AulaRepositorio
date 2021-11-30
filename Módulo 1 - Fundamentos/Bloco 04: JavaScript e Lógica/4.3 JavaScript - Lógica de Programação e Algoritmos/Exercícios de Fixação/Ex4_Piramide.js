let n = 5;

for (let x = 1; x <= n; x += 2){
  
  let linhas = "";

  for (let y = 0; y < n; y += 1){

    if (y >= n-x) {

      linhas += "*";

    } else if (y < (n-x)/2){

      linhas += " ";

    }

  }  
  
  console.log(linhas);

}