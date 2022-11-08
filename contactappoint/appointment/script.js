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



// session storage
let name = document.getElementById('name')
let email = document.getElementById('email')
let number = document.getElementById('number')
let date = document.getElementById('date')
let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    appointment = {}

    if (name !== '' && email !== '' && number !== "" && date !== '') {
        appointment.name = name.value
        appointment.email = email.value
        appointment.number = number.value
        appointment.date = date.value
        console.log(appointment)
        localStorage.setItem('mess', JSON.stringify(appointment))

    } else {
        alert(`please enter your info`)
    }
});