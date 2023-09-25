/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Danny Alonzo';
let currentYear = '2023';
let profilePicture = 'images/danfoto.png';






/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</Strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute(`alt`, fullName);





/* Step 5 - Array */
const favoritefood = ["Ceviche", "French Fries", "Seco de Pollo", "Pizza"];
foodElement.innerHTML += `<br>${favoritefood}`;
const favoritefood1 = ["Encebollado"];
const favoritefood2 = favoritefood.shift;
favoritefood.push(favoritefood1);
foodElement.innerHTML += `<br>${favoritefood}`;
favoritefood.shift();
foodElement.innerHTML += `<br>${favoritefood}`;
favoritefood.pop()
foodElement.innerHTML += `<br>${favoritefood}`;











