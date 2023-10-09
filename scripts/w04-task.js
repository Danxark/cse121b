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
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Portoviejo, Ec',
        length: '25 years'
    }
)


/* DOM Manipulation - Output */
document.querySelector('#name').textContent= myProfile.name;
let photo = document.querySelector('#photo');
photo.setAttribute('src',myProfile.photo);
photo.setAttribute('alt',myProfile.name);
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
myProfile.placesLived.forEach(length => {
    let dd = document.createElement('dd');
    ul.textContent = length;
    document.querySelector('#places-lived').appendChild(dd);
})



/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


