

const btnEl = document.querySelector('.start');
const messageEl = document.querySelector('.message');
const sumEl = document.querySelector('.sum-el');
const cardsEl = document.querySelector('.cards-el');
let flag = 1;
let sum = 0;
btnEl.addEventListener('click', () => {
    cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
'J', 'Q', 'K'];

if(flag == 1){
    let first = Math.floor(Math.random() * 12);
    Num1 = cards[first];
    if(Num1 === 'J' || Num1 === 'K' || Num1 === 'Q'){
        sum += 10;
    }
    else{
        sum += parseInt(Num1);
    }
    let second = Math.floor(Math.random() * 12);
    Num2 = cards[second];
    if(Num2 === 'J' || Num2 === 'K' || Num2 === 'Q'){
        sum += 10;
    }
    else{
        sum += parseInt(Num2);
    }
    let message = "Do you want another card?";
    cardsEl.textContent = 'Cards: ' + Num1 + ' ' + Num2;
    sumEl.textContent = 'Sum: ' + sum;
    messageEl.textContent = message;
    btnEl.textContent = "New card";
    cardsArray = [Num1, Num2];
    flag++;
}

else if(flag > 1){
    let newCard = Math.floor(Math.random() * 12);
    Num = cards[newCard];
    if(Num === 'J' || Num === 'K' || Num === 'Q'){
        sum += 10;
    }
    else{
        sum += parseInt(Num);
    }
    if(sum == 21){
        message = "You got a BlackJack!";
        messageEl.textContent = message;
        cardsArray.push(Num);
        cardsEl.textContent = 'Cards: ' + cardsArray.join(' ');
        sumEl.textContent = 'Sum: ' + sum;
        btnEl.textContent = 'Start Game';
        flag = 1;
        sum = 0;
    }
    else if(sum > 21){
        message = "You have more than 21. Game over!";
        messageEl.textContent = message;
        cardsArray.push(Num);
        cardsEl.textContent = 'Cards: ' + cardsArray.join(' ');
        sumEl.textContent = 'Sum: ' + sum;
        btnEl.textContent = 'Start Game';
        flag = 1;
        sum = 0;
    }
    else if(sum < 20){
        let message = "Do you want another card?";
        cardsArray.push(Num);
        cardsEl.textContent = 'Cards: ' + cardsArray.join(' ');
        sumEl.textContent = 'Sum: ' + sum;
        messageEl.textContent = message;
        btnEl.textContent = "New card";
        flag++;
    }
}
   
});