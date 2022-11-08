let params = window.location.search

const openNext = () => {
    window.open(`./login/index.html${params}`, '_self')

}
const openRegForms = () => {
    console.log(params)
    if (params === '?patient') {
        window.open(`../patientform/patient.html`, '_self')
    } else {
        window.open(`reg.html${params}`, '_self')
    }

}