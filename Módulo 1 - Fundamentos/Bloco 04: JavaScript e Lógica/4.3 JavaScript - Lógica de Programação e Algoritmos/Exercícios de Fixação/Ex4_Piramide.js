let n = 10;

for (var x = 1; x <= n; x += 2){
  
  let linhas = "";

  for (var y = 0; y < n; y += 1){

    if (y >= n-x) {

      linhas += "*";

    } else if (y < (n-x)/2){

      linhas += " ";

    }

  }  
  
  console.log(linhas);

}