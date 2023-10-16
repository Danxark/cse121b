/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeList = []
const templeElement = []
function outputTemples(templeList){
    console.log('TEMPLE OUTPUT PARAM', templeList )
    const templeDiv = document.getElementById('temples').innerHTML
    templeList.forEach(temple => {
        const templeNameh3 = document.createElement('h3')
        console.log('temple',temple);
        templeNameh3.innerHTML = temple.templeName
        templeDiv.append(templeNameh3)
    });

}


/* async displayTemples Function */

async function getTempledata(){
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    console.log('TEMPLE DATA:', templeList);
    templeList = response.json()
}
getTempledata()
function reset() {
    document.querySelector('#temples').textContent = ''
}
/* async getTemples Function using fetch()*/


/* reset Function */
function sortTemples(){
    reset()
    const sortedTemple = templeList.sort(compare)
    console.log('SORTED LIST', sortedTemples);
    outputTemples(sortedTemples)
}
function compare(temple1, temple2) {
    console.log('TEMPLES', temple1);
    if(temple1.templeName > temple2.templeName){
        return 1
    }
    if (temple1.templeName < temple2.templeName){
        return -1
    }
    else{
        return 0
    }



}
document.querySelector('#sortBy').addEventListener
('click', sortTemples)


/* sortBy Function */





/* Event Listener */
