const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const months = (obj) => {
  const [...spring] = obj.spring;
  const [...summer] = obj.summer;
  const [...autumn] = obj.autumn;
  const [...winter] = obj.winter;

  const [ last, first, second ] = winter;
  
  const year = [first, second, ...spring, ...summer, ...autumn, last];

  return year
}

console.log(months(yearSeasons));
