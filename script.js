//accessing all elements 
const container = document.querySelector('.container');
const img = document.querySelector('img');
const profileInfo = document.querySelector('.profile-info');
const nextBtn = document.querySelector('#next');

//Generator is a function
function* createPeopleIterator() {
    let index = 0; //define an index to keep track of where we are
    while (true) { //it will always be true and keeps going through the profile of people, so we don't need a conditional here
      yield people[index++ % people.length]; //going to pause wherever we call next. It will return the person from the people array, and then we want the index using the modulus operator
    }  //return the current person we are on and keep track of them based on their index
}

//initialize the iterator from that function
const iterator = createPeopleIterator();
