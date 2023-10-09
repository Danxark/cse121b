/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Danny Alonzo',
    photo: 'images/danfoto.png',

favoriteFoods: [
    'Ceviche',
    'encebollado',
    'Arroz con camaron',
    'French fries',
    'Apple Pie'
],
hobbies: [
    'Play Guitar',
    'Play videogames',
    'play Voleyball',
    'Play Soccer'
]
}
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Portoviejo, Ec',
        length: '25 years'
    }
);


/* DOM Manipulation - Output */
document.getElementById('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#name').alt = myProfile.photo;
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favortie-foods').appendChild(li);
})
myProfile.hobbies.forEach(hobbie => {
    let ul = document.createElement('ul');
    ul.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(ul);
})
myProfile.hobbies.forEach(hobbie => {
    let ul = document.createElement('ul');
    ul.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(ul);
})



/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


