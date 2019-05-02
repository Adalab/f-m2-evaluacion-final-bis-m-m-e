'use strict';

//elements to use
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const button = document.querySelector('.btn');
const resultsBox = document.querySelector('.results');
const apiUrl = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';
const adalabImage = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';


//function to print cards
const printCards = number => {
  resultsBox.innerHTML = '';
  const newCardList = document.createElement('ul');
  newCardList.classList.add('card-list');
  const url = `${apiUrl}${number}.json`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < number; i++) {
        const img = data[i].image;
        const alt = data[i].name;
        const id = data[i].pair;
        const newCard = document.createElement('li');
        newCard.classList.add('card');

        const newImage1 = document.createElement('img');
        newImage1.classList.add('front-image');
        newImage1.classList.add('hidden');
        newImage1.setAttribute('id', id);
        newImage1.setAttribute('src', img);
        newImage1.setAttribute('alt', alt);

        const newImage2 = document.createElement('img');
        newImage2.classList.add('back-image');
        newImage2.setAttribute('src', adalabImage);
        newImage2.setAttribute('id', id);

        newCard.appendChild(newImage1);
        newCard.appendChild(newImage2);
        newCardList.appendChild(newCard);
      }
      resultsBox.appendChild(newCardList);
    });
};

const checkSavedNumber = () => {
  const savedNumber = localStorage.getItem('NumberOfCards');
  if (savedNumber) {
    printCards(savedNumber);
  }
  else {
    console.log('No saved number');
  }
};

//function to save the data
const saveNumber = number => {
  localStorage.setItem('NumberOfCards', number);
};

//function to create the correct number of cards and save the value
const getCards = () => {
  if (option1.checked === true) {
    printCards(4);
    saveNumber(4);
  }
  else if (option2.checked === true) {
    printCards(6);
    saveNumber(6);
  }
  else if (option3.checked === true) {
    printCards(8);
    saveNumber(8);
  }
  else {
    console.log('No number chosen');
  }
};

checkSavedNumber();
button.addEventListener('click', getCards);
