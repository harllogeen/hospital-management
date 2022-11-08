let requestsCont = document.querySelector('#appointment-requests')

const requests = [
    {name: 'Pollock James', purpose: 'Online Consultation', time: '10: 00', date: '4th July'},
    {name: 'Adetomiwa Bolanle', purpose: 'Surgery', time: '12: 00', date: '4th July'},
    {name: 'Isaac Adebola', purpose: 'Checkup', time: '15: 00', date: '4th July'},
    {name: 'Ifeoluwa James', purpose: 'Vaccine Inject', time: '18: 00', date: '4th July'},
]

let i = 0
for (let request of requests){
    requestsCont.innerHTML +=`
    <div class="f-container gap2" id="request${i}">
        <div class="flex gap1">
            <img src="../images/pic-3.png" class="patientNotImage">
            <div>
                <h4 class="m-btm-1 f-18">${request.name} </h4>
                <p class="f-16">${request.purpose}</p>
                <div class="flex gap1 line-h">
                    <p class="f-15">${request.date}</p>
                    <p class="f-15">${request.time}</p>
                </div>
            </div>
        </div>
        <div class="flex gap1">
            <p class="green" onclick="hideRequest(${i},1)"><i class="far fa-check-circle"></i></p>
            <p class="red" onclick="hideRequest(${i})"><i class="fa fa-times-circle-o"></i></p>
        </div>
    </div>
    `
    i++
}

const hideRequest = (id,check) => {
    let parent = document.getElementById(`request${id}`)
    parent.style.display = 'none'
    if(check){
        document.querySelector('#requestAccepted').style.display = 'block'
    }

    setTimeout(() => {
        document.querySelector('#requestAccepted').style.display = 'none'
    }, 2000)
}