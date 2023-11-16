const user = prompt("Ваше ім'я", 'User');

const nameUser = document.getElementById('name');
const point1 = document.getElementById('pointsUser');
const point2 = document.getElementById('pointsComp');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');


const arrayImg = ["images/6D.png","images/6H.png",
"images/7D.png","images/7H.png",
"images/8D.png","images/8H.png",
"images/9D.png","images/9H.png",
"images/10D.png","images/10H.png",
"images/AD.png","images/AH.png",
"images/JD.png","images/JH.png",
"images/KD.png","images/KH.png",
"images/QD.png","images/QH.png"];

const arrayNominal = [6,6,7,7,8,8,9,9,10,10,11,11,2,2,4,4,3,3];


nameUser.innerHTML = user;

let count1=0;
let count2=0;
let i=0;

const btn = document.querySelector('#btn');

btn.onclick = function(){
    if(i<3){
        const n1 = Math.floor(Math.random()*arrayImg.length);
        const n2 = Math.floor(Math.random()*arrayImg.length);
    
        card1.style.backgroundImage = `url(${arrayImg[n1]})`;
        card1.style.backgroundSize="100%";

        card2.style.backgroundImage = `url(${arrayImg[n2]})`;
        card2.style.backgroundSize="100%";

        count1+=arrayNominal[n1];
        count2+=arrayNominal[n2];

        point1.innerHTML = count1;
        point2.innerHTML = count2;
    }else{
        Winner();
    }
    i++;
};

function Winner(){
    if(count1==count2){
        alert("Нічия");
        Reset();
    }else if(count1>count2){
        alert("Ти виграв");
        Reset();
    }else if(count2>count1){
        alert("Ти програв");
        Reset();
    }
};

function Reset(){
    point1.innerHTML = null;
    point2.innerHTML = null;
    count1=null;        
    count2=null;
    i=-1;
    card2.style.backgroundImage = `url(images/red_back.png)`;
    card1.style.backgroundImage = `url(images/red_back.png)`;
}
