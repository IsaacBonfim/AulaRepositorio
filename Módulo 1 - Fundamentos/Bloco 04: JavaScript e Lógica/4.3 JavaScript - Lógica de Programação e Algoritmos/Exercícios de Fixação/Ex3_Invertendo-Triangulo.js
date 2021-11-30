let n = 5;

for (var x = 0; x < n; x += 1){
  
  let linhas = "";

  for (var y = 0; y <= n; y += 1){

    if (y >= n-x){

      linhas += "*";

    } else {

      linhas += " ";

    }

  }  
  
  console.log(linhas);

}