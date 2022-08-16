"use strict";
const maxRounds = 25;
let vote = [[],[]];
function Product(name, file) {
    this.name = name;
    this.file = file;
    this.shown = 0;
    this.clicked = 0;
}
let allProducts = [
    new Product ('bag','img/bag.jpg'),
    new Product ('banana', 'img/banana.jpg'),
    new Product ('bathroom', 'img/bathroom.jpg'),
    new Product ('boots', 'img/boots.jpg'),
    new Product ('breakfast','img/breakfast.jpg'),
    new Product ('bubblegum','img/bubblegum.jpg'),
    new Product ('chair', 'img/chair.jpg'),
    new Product ('cthulhu', 'img/cthulhu.jpg'),
    new Product ('dog-duck', 'img/dog-duck.jpg'),
    new Product ('dragon', 'img/dragon.jpg'),
    new Product ('pen', 'img/pen.jpg'),
    new Product ('pet-sweep', 'img/pet-sweep.jpg'),
    new Product ('scissors', 'img/scissors.jpg'),
    new Product ('shark', 'img/shark.jpg'),
    new Product ('sweep','img/sweep.png'),
    new Product ('tauntaun', 'img/tauntaun.jpg'),
    new Product ('unicorn', 'img/unicorn.jpg'),
    new Product ('water-can', 'img/water-can.jpg'),
    new Product ('wine-glass', 'img/wine-glass.jpg')
];
let currentRound = 0;
function random() {
    return Math.floor(Math.random() * allProducts.length) 
};
let img = [document.getElementById('productImage1'), document.getElementById('productImage2'), document.getElementById('productImage3')];  
let rObj1, rObj2, rObj3;
let rObj = [rObj1, rObj2, rObj3];
function randomImg() {
    let rImg1, rImg2, rImg3;
    let rImg = [rImg1, rImg2, rImg3]
    rImg[0] = random();
    rImg[1] = random();
    rImg[2] = random();
    while (rImg[0] === rImg[1]) {
        rImg[1] = random();
    };
    while (rImg[1] === rImg[2] || rImg[0] === rImg[2]){
        rImg[2] = random();
    };
    for (let i = 0; i < rObj.length; i++) {
        rObj[i] = allProducts[rImg[i]]
        img[i].src = rObj[i].file;
        img[i].id = rObj[i].name;
        img[i].alt = rObj[i].name;
        img[i].title = rObj[i].name;
    }
    rObj[0].shown += 1;
    rObj[1].shown += 1;
    rObj[2].shown += 1;
}
randomImg();   
let button = [document.getElementById('productButton1'), document.getElementById('productButton2'), document.getElementById('productButton3')];
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', showNewImage);
};
function showNewImage(e) {
    let objName = e.target.id
    if (objName === rObj[0].name){
        rObj[0].clicked+= 1;
        vote[0].push(`${rObj[0].name}`)
        vote[1].push(`${rObj[0].clicked}`)
    } else if (objName === rObj[1].name){
        rObj[1].clicked+= 1;
        vote[0].push(`${rObj[1].name}`)
        vote[1].push(`${rObj[1].clicked}`)
    } else if (objName === rObj[2].name){
        rObj[2].clicked+= 1;
        vote[0].push(`${rObj[2].name}`)
        vote[1].push(`${rObj[2].clicked}`)
    }
    currentRound++; 
    if (currentRound === maxRounds) {   
        for (let i = 0; i < button.length; i++) {
            button[i].removeEventListener('click', showNewImage);
            button[i].hidden = true;
        }
    }
    randomImg();
};
displayInfoBtn.addEventListener('click', displayResults)
function displayResults(){
    let li = document.createElement('ul');
    display.appendChild(li);
    for (let i = 0; i < allProducts.length; i++){
        let result = document.createElement('li');
        result.textContent = `${allProducts[i].name} had ${allProducts[i].clicked} votes, and was seen ${allProducts[i].shown} times.`
        li.appendChild(result);
    }
    displayInfoBtn.removeEventListener('click', displayResults);
}