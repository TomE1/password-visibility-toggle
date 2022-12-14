let pounds = document.querySelector('.pounds'),
 kilograms = document.querySelector('.kilograms'),
 grams = document.querySelector('.grams'),
 ounces = document.querySelector('.ounces'),
 form = document.querySelector('form'),
 
 form.addEventListener('input', convertWeight);


function convertWeight(e){
  if(e.target.classList.contains('pounds')){
console.log('wahala');
  }
 }