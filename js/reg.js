let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmpassword')
let male = document.getElementById('male')
let female = document.getElementById('female')
let email = document.getElementById('email')
let number = document.getElementById('number')
let message = document.getElementById('message')
let postal = document.getElementById('postal')
let checkbox = document.getElementById('checkbox')

let params = window.location.search

let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    contactInfo = {}
    console.log(contactInfo)

    if (firstname.value !== '' && lastname.value !== '' && password.value !== '' &&
        confirmPassword.value !== '' && male.value !== '' && female.value !== '' &&
        email.value !== '' && number.value !== '' && message.value !== '' &&
        postal.value !== '' && checkbox.value !== '') {
        contactInfo.firstname = firstname.value
        contactInfo.lastname = lastname.value
        contactInfo.username = password.value
        contactInfo.confirmPassword = confirmPassword.value
        contactInfo.male = male.value
        contactInfo.female = female.value
        contactInfo.email = email.value
        contactInfo.number = number.value
        contactInfo.message = message.value
        contactInfo.postal = postal.value
        contactInfo.checkbox = checkbox.value


        sessionStorage.setItem('mess', JSON.stringify(contactInfo))
        document.getElementById('firstname').value = ""
        document.getElementById('lastname').value = ""
        document.getElementById('password').value = ""
        document.getElementById('confirmpassword').value = ""
        document.getElementById('male').value = ""
        document.getElementById('female').value = ""
        document.getElementById('email').value = ""
        document.getElementById('number').value = ""
        document.getElementById('message').value = ""
        document.getElementById('postal').value = ""
        document.getElementById('checkbox').value = ""
    } else {
        alert(`Enter your information`)
    }
    window.location = "admin.html"
})