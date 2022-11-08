const admittedPatients = [{
        id: 'h01',
        total: '06',
        name: 'Alugbin Oluwaseyi',
        department: 'doctor at work',

        available: true
    }, {
        id: 'h02',
        total: 110,
        name: 'daniel wales',
        department: 'satisfied patients',

        available: true
    }, {
        id: 'h03',
        total: 26,
        name: 'grace brees',
        department: 'bed facility',

        available: true
    }, {
        id: 'h04',
        total: 10,
        name: 'Akindele Mathew',
        department: 'available hospitals',

        available: true
    }

]

// let myHospital = 0
// let mydoctor = []
hospital.forEach(myHospital => {
    console.log(myHospital.department)
});
document.getElementById('h1').innerHTML = hospital[0]['total']
document.getElementById('department1').innerHTML = hospital[0]['department']
document.getElementById('h2').innerHTML = hospital[1]['total']
document.getElementById('department2').innerHTML = hospital[1]['department']
document.getElementById('h3').innerHTML = hospital[2]['total']
document.getElementById('department3').innerHTML = hospital[2]['department']
document.getElementById('h4').innerHTML = hospital[3]['total']
document.getElementById('department4').innerHTML = hospital[3]['department']