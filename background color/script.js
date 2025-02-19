const changeColor = document.getElementById('changeColor');
const box = document.getElementById('box');
function getRandomColor() {
    const letter = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color +=
         letter[Math.floor(Math.random() * 20)];
    }
    return color;
}
changeColor.addEventListener('click', function (){
    const randomColor = getRandomColor();
     document.body.style.backgroundColor = randomColor;
});