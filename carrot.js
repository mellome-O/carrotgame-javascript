function createCarrot(){
    const body = document.querySelector("body");
    const carrotDiv = document.createElement('div');
    const carrotImg = documnet.createElement('img');

    carrotImg.setAttribute('src', 'img/carrot.png');
    carrotDiv.appendChild(carrotImg);

    body.appendChild(carrotDiv);

    carrotDiv.setAttribute('id', 'carrot-div');
}

createCarrot();