'use strict';

//elements to use
const options = document.querySelector('.options-list');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const button = document.querySelector('.btn');
const resultsBox = document.querySelector('.results');
const placeholderImage = 'https://placehold.it/200x200';


//function to print cards
const printCards = number => {
  const newCardList = document.createElement('ul');
  newCardList.classList.add('card-list');

  const newCard = document.createElement('li');
  newCard.classList.add('card');

  const newImage1 = document.createElement('img');
  newImage1.classList.add('front-image');
  newImage1.setAttribute('src', placeholderImage);

  newCardList.appendChild(newCard);
  resultsBox.appendChild(newCardList);
};

//function to create the correct number of cards
const getCards = () => {
  if (option1.checked === true) {
    console.log(4);
  }
  else if (option2.checked === true) {
    console.log(6);
  }
  else if (option3.checked === true) {
    console.log(8);
  }
  else {
    console.log('No number chosen');
  }
};

button.addEventListener('click', getCards);
