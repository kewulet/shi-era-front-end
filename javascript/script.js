
alert("this is simple java project");
const button = document.getElementById('button');
const imgg = document.getElementById('imgg');


if (button && imgg) {
    button.addEventListener('click', () => {

        imgg.classList.toggle('hidden');

        if (imgg.classList.contains('hidden')) {
            button.textContent = 'Show Content';
        } else {
            imgg.textContent = 'Hide Content';

        }
    });
} else {
    console.error("Button or image element not found.  Check your HTML IDs.");
}


function myFunction() {
    const jimmaElements = document.getElementsByClassName("jimma")
    for (let i = 0; i < jimmaElements.length; i++) {
        jimmaElements[i].innerHTML = "about Jimma university website.";
    }
}
myFunction();


if (firstName === '') {
    alert('Please enter your first name.');
    return;
}

if (lastName === '') {
    alert('Please enter your last name.');
    return;
}

if (email === '') {
    alert('Please enter your email.');
    return;
}


if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
}

if (password === '') {
    alert('Please enter your password.');
    return;
}
alert('Form is valid!  You would typically submit it here.');


 

