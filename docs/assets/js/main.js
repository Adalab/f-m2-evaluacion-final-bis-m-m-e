"use strict";const option1=document.querySelector("#option1"),option2=document.querySelector("#option2"),option3=document.querySelector("#option3"),button=document.querySelector(".btn"),resultsBox=document.querySelector(".results"),apiUrl="https://raw.githubusercontent.com/Adalab/cards-data/master/",adalabImage="https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB";let cardToCompare,acc=0;const hideCards=(e,t,a,c)=>{e.classList.toggle("hidden"),t.classList.toggle("hidden"),a.classList.toggle("hidden"),c.classList.toggle("hidden")},compareCards=(e,t)=>{const a=cardToCompare.childNodes[0],c=cardToCompare.childNodes[1];return a.id===e.id?(console.log("It's a match!"),cardToCompare="",acc=0):(console.log("It's not a match :("),setTimeout(function(){var o,s,d;o=c,s=e,d=t,a.classList.toggle("hidden"),o.classList.toggle("hidden"),s.classList.toggle("hidden"),d.classList.toggle("hidden")},2e3),cardToCompare="",acc=0)},flipCards=e=>{const t=e.currentTarget.childNodes[0],a=e.currentTarget.childNodes[1];if(t.classList.toggle("hidden"),a.classList.toggle("hidden"),0===acc)return cardToCompare=e.currentTarget,++acc;1===acc&&compareCards(t,a)},addCardListener=()=>{const e=document.querySelectorAll(".card");for(const t of e)t.addEventListener("click",flipCards)},printCards=e=>{resultsBox.innerHTML="";const t=document.createElement("ul");t.classList.add("card-list",`number${e}`),fetch(`${apiUrl}${e}.json`).then(e=>e.json()).then(a=>{for(let c=0;c<e;c++){const e=a[c].image,o=a[c].name,s=a[c].pair,d=document.createElement("li");d.classList.add("card");const r=document.createElement("img");r.classList.add("front-image","hidden","image"),r.setAttribute("id",s),r.setAttribute("src",e),r.setAttribute("alt",o);const n=document.createElement("img");n.classList.add("back-image","image"),n.setAttribute("src",adalabImage),n.setAttribute("id",s),d.appendChild(r),d.appendChild(n),t.appendChild(d)}resultsBox.appendChild(t),addCardListener()})},checkSavedNumber=()=>{const e=localStorage.getItem("NumberOfCards");e?(printCards(e),"4"===e?option1.checked=!0:"6"===e?option2.checked=!0:option3.checked=!0):console.log("No saved number")},saveNumber=e=>{localStorage.setItem("NumberOfCards",e)},getCards=()=>{!0===option1.checked?(printCards(4),saveNumber(4)):!0===option2.checked?(printCards(6),saveNumber(6)):!0===option3.checked?(printCards(8),saveNumber(8)):console.log("No number chosen")};checkSavedNumber(),button.addEventListener("click",getCards);