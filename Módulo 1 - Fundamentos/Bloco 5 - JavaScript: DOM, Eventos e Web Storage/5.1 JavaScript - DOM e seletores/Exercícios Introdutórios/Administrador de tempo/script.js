let headerContainer = document.querySelector('#header-container');

headerContainer.style.backgroundColor = '#00B269ff';
console.log(headerContainer);

let urgenteH = document.querySelectorAll('section.emergency-tasks h3');

for (let i = 0; i < urgenteH.length; i += 1) {
  urgenteH[i].style.backgroundColor = '#A600F3ff';
  urgenteH[i].style.borderTopStyle = 'solid';
  urgenteH[i].style.borderTopColor = '#FFA085ff';
  urgenteH[i].style.borderWidth = '10px';
  urgenteH[i].style.marginTop = '0px';
}

let urgenteDiv = document.querySelectorAll('section.emergency-tasks div');

for (let i = 0; i < urgenteDiv.length; i += 1) {
  urgenteDiv[i].style.backgroundColor = '#FFA085ff';
}

let naoUrgenteH = document.querySelectorAll('section.no-emergency-tasks h3');

for (let i = 0; i < naoUrgenteH.length; i += 1) {
  naoUrgenteH[i].style.backgroundColor = '#1E2020ff';
  naoUrgenteH[i].style.borderTopStyle = 'solid';
  naoUrgenteH[i].style.borderTopColor = '#F9DC5Eff';
  naoUrgenteH[i].style.borderWidth = '10px';
  naoUrgenteH[i].style.marginTop = '0px';
}

let naoUrgenteDiv = document.querySelectorAll('section.no-emergency-tasks div');

for (let i = 0; i < naoUrgenteDiv.length; i += 1) {
  naoUrgenteDiv[i].style.backgroundColor = '#F9DC5Eff';
}

let footer = document.querySelector('#footer-container');

footer.style.backgroundColor = '#003230ff';