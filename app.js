
let fristImageElement = document.getElementById('frist-image');
let secondImageElement = document.getElementById('second-image');
let thiredImageElement = document.getElementById('thired-image');

let maxAttempts = 25;
let userAttemptsCounter = 0;

let fristImageIndex;
let secondImageIndex;
let thiredImageIndex;
let producteName = [];
let producteVote = [];
let producteshown = [];

function producteImage(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shown = 0;
    producteImage.allImages.push(this);
    producteName.push(name);
 
   
}

producteImage.allImages = [];

function setItems() {
    let stringObject= JSON.stringify(producteImage.allImages)
    localStorage.setItem('items',stringObject)
}
function getItems() {
  
    
    let data=JSON.parse(  localStorage.getItem('items'));

     if (data!==null) {
         console.log('dataaaaa',data);
        producteImage.allImages=data

         
      
     }
}

new producteImage('bag', 'images/bag.jpg');
new producteImage('banana', 'images/banana.jpg');
new producteImage('bathroom', 'images/bathroom.jpg');
new producteImage('boots', 'images/boots.jpg');
new producteImage('breakfast', 'images/breakfast.jpg');
new producteImage('bubblegum', 'images/bubblegum.jpg');
new producteImage('cthulhu', 'images/cthulhu.jpg');
new producteImage('dog-duck', 'images/dog-duck.jpg');
new producteImage('dragon', 'images/dragon.jpg');
new producteImage('pen', 'images/pen.jpg');
new producteImage('pet-sweep', 'images/pet-sweep.jpg');
new producteImage('scissors', 'images/scissors.jpg');
new producteImage('sweep', 'images/sweep.png');
new producteImage('tauntaun', 'images/tauntaun.jpg');
new producteImage('unicorn', 'images/nicorn.jpg');
new producteImage('usb', 'images/sb.gif');
new producteImage('water-can', 'images/water-can.jpg');
new producteImage('wine-glass', 'images/wine-glass.jpg');

console.log(producteImage.allImages);





function generateRandomIndex() {
    return Math.floor(Math.random() * producteImage.allImages.length);
}



function renderThreeImages() {



    do {
        fristImageIndex = generateRandomIndex();
        secondImageIndex = generateRandomIndex();
        thiredImageIndex = generateRandomIndex();
    } while (fristImageIndex === secondImageIndex || fristImageIndex === thiredImageIndex || secondImageIndex === thiredImageIndex)

  
    fristImageElement.src = producteImage.allImages[fristImageIndex].source;
    producteImage.allImages[fristImageIndex].shown++;
   

    secondImageElement.src = producteImage.allImages[secondImageIndex].source;
    producteImage.allImages[secondImageIndex].shown++;
   

    thiredImageElement.src = producteImage.allImages[thiredImageIndex].source;
    producteImage.allImages[thiredImageIndex].shown++;
   
}

getItems();
console.log('after get item',producteImage.allImages);

renderThreeImages();
console.log('vote shown before clicking,',producteshown);
let button = document.getElementById('result');
button.addEventListener('click', viewList)

fristImageElement.addEventListener('click', handleUserClick);
secondImageElement.addEventListener('click', handleUserClick);
thiredImageElement.addEventListener('click', handleUserClick);

function handleUserClick(event) {

    userAttemptsCounter++;

    console.log(event.target.id);

    if (userAttemptsCounter <= maxAttempts) {

        if (event.target.id === 'frist-image') {
            producteImage.allImages[fristImageIndex].votes++
            
            setItems();



        } else if (event.target.id === 'second-image') {
            producteImage.allImages[secondImageIndex].votes++
            setItems();
            
        } else {
            producteImage.allImages[thiredImageIndex].votes++
            setItems();
            
        }
       
        


        renderThreeImages();
        // viewChart();
    }
    else {

        button.className = '';
        // product
        for (let i = 0; i < producteImage.allImages.length; i++) {
           producteVote.push( producteImage.allImages[i].votes);
           producteshown.push( producteImage.allImages[i].shown);

            
        }




        fristImageElement.removeEventListener('click', handleUserClick);
        secondImageElement.removeEventListener('click', handleUserClick);
        thiredImageElement.removeEventListener('click', handleUserClick);


      


        viewChart();

    }
}

function viewList() {
    let producteResult;
    for (let i = 0; i < producteImage.allImages.length; i++) {
        producteResult = document.createElement('li');
        button.appendChild(producteResult);
        producteResult.textContent = producteImage.allImages[i].name + ' has ' + producteImage.allImages[i].votes + ' votes and it was shown  ' + producteImage.allImages[i].shown;
      
        producteVote.push(producteImage.allImages[i].votes);
        producteVote.push(producteImage.allImages[i].shown);

    }

    button.removeEventListener('click', viewList);
}

console.log('outside', producteshown);

function viewChart() {
    console.log('inside', producteVote);
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
       
        type: 'bar',

        data: {
            labels: producteName,
            datasets: [


                {
                    label: 'votes',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: producteVote
                }, {
                    label: 'shown',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: producteshown
                }


            ]
        },

       
        options: {}
    });
    console.log('yppppp', producteshown);
    console.log('lllllllllll', producteVote);
}



