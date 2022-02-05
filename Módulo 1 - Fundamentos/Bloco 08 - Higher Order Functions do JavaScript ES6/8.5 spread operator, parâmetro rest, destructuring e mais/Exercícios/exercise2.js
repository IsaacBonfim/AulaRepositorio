const sum = (...args) => { 
  let total = 0;
  
  args.forEach((arg) => total += arg);

  return total;
};

console.log(sum(2, 2, 1, 88, -7, -47.34, -1.12, 0.46));
