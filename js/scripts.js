const pippo = new Date();

console.log(pippo);
console.log(pippo.getHours());
console.log(pippo.getMinutes());
console.log(pippo.getSeconds());
console.log(pippo.getFullYear());


/* 
--------------------------------
*/
// Genero un numero random compreso tra 0 e 1 (1 escluso)
const randomNumber = Math.random();
console.log(randomNumber);

	
// Restituisce un numero tra 1 e 100 
console.log(Math.floor(Math.random() * 100) + 1);


/* 
--------------------------------
MANIPOLAZIONE DEL DOM
--------------------------------
*/

const mainLi = document.getElementById('main-link');
console.log('mainLi', mainLi, typeof mainLi);
console.log('mainLi.innerHTML', mainLi.innerHTML, typeof mainLi.innerHTML);
console.log('mainLi.innerText', mainLi.innerText, typeof mainLi.innerText);

// mainLi.innerHTML = mainLi.innerHTML + 'Ciao raghi';
mainLi.innerHTML += 'Ciao raghi';

const secondLi = document.querySelector('ul > li:nth-child(2)');
console.log('secondLi', secondLi, typeof secondLi);

// secondLi.innerHTML += '<span style="color: red;">Altro testo</span>';
secondLi.append('<span style="color: red;">Altro testo</span>');

const outerSpan = document.querySelector('header > span');
// secondLi.append(outerSpan);
secondLi.prepend(outerSpan);

const mainTitle = document.querySelector('h1');
console.log('mainTitle.classList', mainTitle.classList, typeof mainTitle.classList);
console.log('mainTitle.className', mainTitle.className, typeof mainTitle.className);

// mainTitle.className = 'bordered';
// console.log('mainTitle.className', mainTitle.className, typeof mainTitle.className);

mainTitle.classList.remove('lined-through');
mainTitle.classList.add('gino');
console.log('mainTitle.classList', mainTitle.classList, typeof mainTitle.classList);

console.log('mainTitle.style', mainTitle.style, typeof mainTitle.style);
mainTitle.style.backgroundColor = 'aquamarine';

const myButton = document.getElementById('clickable-button');
// const myButton = document.querySelector('#clickable-button');

// myButton.addEventListener(
//     COSAUNO, -> L'evento che voglio intercettare -> stringa che corrisponde al nome dell'evento
//     COSADUE  -> Come reagisco a questo evento -> definizione di funzione
// );

const ageInput = document.querySelector('#age-input');
console.log('SINCRONO', 'ageInput.value', ageInput.value, typeof ageInput.value);

myButton.addEventListener('click', function() {
    // alert('Hai vinto!');
    console.log('ASINCRONO', 'ageInput.value', ageInput.value, typeof ageInput.value);
    console.log(parseInt(ageInput.value), typeof parseInt(ageInput.value));
    console.log(parseFloat(ageInput.value), typeof parseFloat(ageInput.value));
});