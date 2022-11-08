// localStorage session
let username = document.getElementById('username')
let password = document.getElementById('password')
let params = window.location.search

let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    contactInfo = {}
    console.log(contactInfo)

    if (username.value !== '' && password.value !== '') {
        contactInfo.username = username.value
        contactInfo.password = password.value

        sessionStorage.setItem('mess', JSON.stringify(contactInfo))
        if (params === '?admin') {
            window.open(`../dashboard/dashboard.html`, '_self')
        } else if (params === '?patient') {
            window.open(`../dashboard/patients.html`, '_self')
        } else if (params === '?doctor') {
            window.open(`../dashboard/doctors.html`, '_self')
        } else if (params === '?nurse') {
            window.open(`../dashboard/nurse.html`, '_self')
        }

    } else {
        alert(`please enter your info`)
    }
});