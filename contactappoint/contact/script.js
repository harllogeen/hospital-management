let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


// localStorage session
let name = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let message = document.getElementById('message')
let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    contactInfo = {}

    if (name !== '' && email !== '' && phone !== "" && message !== '') {
        contactInfo.name = name.value
        contactInfo.email = email.value
        contactInfo.phone = phone.value
        contactInfo.message = message.value
        console.log(contactInfo)
        localStorage.setItem('mess', JSON.stringify(contactInfo))

    } else {
        alert(`please enter your info`)
    }
});