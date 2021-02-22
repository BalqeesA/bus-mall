
let fristImageElement = document.getElementById('frist-image');
let secondImageElement = document.getElementById('second-image');
let thiredImageElement = document.getElementById('thired-image');
let maxAttempts = 25;
let userAttemptsCounter = 0;
let fristImageIndex;
let secondImageIndex;
let thiredImageIndex;

function producteImage(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    producteImage.allImages.push(this);
}

producteImage.allImages = [];

new producteImage('bag', 'images\bag.jpg');
new producteImage('banana', 'images\banana.jpg');
new producteImage('bathroom', 'images\bathroom.jpg');
new producteImage('boots', 'images\boots.jpg');
new producteImage('breakfast', 'images\breakfast.jpg');
new producteImage('bubblegum', 'images\bubblegum.jpg');
new producteImage('cthulhu', 'images\cthulhu.jpg');
new producteImage('dog-duck', 'images\dog-duck.jpg');
new producteImage('dragon', 'images\dragon.jpg');
new producteImage('pen', 'images\pen.jpg');
new producteImage('pet-sweep', 'images\pet-sweep.jpg');
new producteImage('scissors', 'images\scissors.jpg');
new producteImage('sweep', 'images\sweep.png');
new producteImage('tauntaun', 'images\tauntaun.jpg');
new producteImage('unicorn', 'images\nicorn.jpg');
new producteImage('usb', 'images\sb.gif');
new producteImage('water-can', 'images\water-can.jpg');
new producteImage('wine-glass', 'images\wine-glass.jpg');

console.log(producteImage.allImages);

function generateRandomIndex() {
    return Math.floor(Math.random() * producteImage.allImages.length);
}
console.log( Math.floor( Math.random() * producteImage.allImages.length));


function renderThreeImages() {

    fristImageIndex = generateRandomIndex();

    do {
        fristImageIndex = generateRandomIndex();
    } while (fristImageIndex === secondImageIndex === thiredImageIndex) {
        producteImage.allImages

        console.log(producteImage.allImages[fristImageIndex, secondImageIndex, thiredImageIndex]);

        fristImageElement.src = producteImage.allImages[fristImageIndex].source;

        secondImageElement.src = producteImage.allImages[secondImageIndex].source;

        thiredImageElement.src = producteImage.allImages[thiredImageIndex].source;

    }

   

renderThreeImages(fristImageElement, secondImageElement, thiredImageElement);
}
 
    fristImageElement.addEventListener('click', handleUserClick);
    secondImageElement.addEventListener('click', handleUserClick);
    thiredImageElement.addEventListener('click', handleUserClick);
    
function handleUserClick(event) {

    userAttemptsCounter++;

    console.log(event.target.id);

    if (userAttemptsCounter < maxAttempts) {
        
        if (event.target.id === 'frist-image') {
            producteImage.allImages[fristImageIndex].votes++

        } else if(event.target.id === 'second-image' ) {
            producteImage.allImages[secondImageIndex].votes++

        }else {
            producteImage.allImages[thiredImageIndex].votes++
        }


        renderthreeImages();
    }
    else {
       
        let list = document.getElementById('results-list');
        let producteResult;
        for (let i = 0; i < producteImage.allImages.length; i++) {
            producteResult = document.createElement('li');
            list.appendChild(producteResult);
            producteResult.textContent = producteImage.allImages[i].name + ' has ' + producteImage.allImages[i].votes + ' votes';
        }
        

    }
}

fristImageElement.removeEventListener('click', handleUserClick);
secondImageElement.removeEventListener('click', handleUserClick);
thiredImageElement.removeEventListener('click', handleUserClick);
