const people = [
    {
      name: 'Jamie Williams',
      age: 26,
      gender: 'female',
      location: 'Los Angeles, CA',
      imageURL: 'https://randomuser.me/api/portraits/women/1.jpg',
      looking: 'Female looking for male',
    },
    {
      name: 'John Smith',
      age: 35,
      gender: 'male',
      location: 'New York, NY',
      imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
      looking: 'Male looking for female',
    },
    {
      name: 'Bob Johnson',
      age: 42,
      gender: 'male',
      location: 'Chicago, IL',
      imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
      looking: 'Male looking for male',
    },
    {
      name: 'Shannon Jackson',
      age: 29,
      gender: 'female',
      location: 'Los Angeles, CA',
      imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
      looking: 'Female looking for female',
    },
  ];

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


nextBtn.addEventListener('click', () => {
    const person = iterator.next().value;//when the button is clicked we use the iterator to get the current person
    img.src = person.imageURL //we also change the image to the current person's
    profileInfo.querySelector('h3').textContent = person.name; //changes the person's name
    profileInfo.querySelectorAll('p')[0].textContent = `${person.age} Years Old`; //changes age 
    profileInfo.querySelectorAll('p')[1].textContent = `From ${person.location}`; //location 
    profileInfo.querySelectorAll('p')[2].textContent = person.looking; //preference
});

nextBtn.click(); //we want the page to run when we come to it