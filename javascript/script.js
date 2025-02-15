const password = document.getElementsByClassName("password");
const length = 10;
const upperCase = ABCDEFGHIJKLMNOPQRSTUVWXYZ;
const loweCase = abcdefghijklmnopqrstuvwxyz;
const number = "0123456789";
const symbole = " @!$%#^&*{}<>/=-";
const allChars = uppeCase + lowerCase + number + symbole;

function createPassword() {
    let password = "";
    password += upperCase[maths.floor(Math.random() * upperCase.length)];
    password += symbole[maths.floor(Math.random() * symbole.length)];
    password += number[maths.floor(Math.random() * number.length)];
    password += lowerCase[maths.floor(Math.random() * lowerCase.length)];
    while (length > password.length) {
        password += allChars[maths.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;

}


const img = document.getElementsByTagName("img");
const p = document.getElementsByTagName("p");
const color = ('green', 'red', 'yellow',);

img.style.background = 'green';
p.addEventListner('click' function ()){
    const colorIndex = parseInt(Math.random() * colors * length);
    img.style.background = color[colorIndex];
}
