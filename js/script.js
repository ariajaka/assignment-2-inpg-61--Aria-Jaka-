const btnSubmit = document.getElementById('btn-submit')
const btnShow = document.getElementById('btn-show')

let inputNama = document.querySelector('#input-nama')
let inputRole = document.querySelector('#input-role')
let inputAvailability = document.querySelector('#input-availability')
let inputAge = document.querySelector('#input-age')
let inputLokasi = document.querySelector('#input-lokasi')
let inputExperience = document.querySelector('#input-experience')
let inputEmail = document.querySelector('#input-email')
let textNama = document.querySelector('#text-nama')
let textRole = document.querySelector('#text-role')
let textAvailability = document.querySelector('#text-availability')
let textAge = document.querySelector('#text-age')
let textLokasi = document.querySelector('#text-lokasi')
let textExperience = document.querySelector('#text-experience')
let textEmail = document.querySelector('#text-email')
let formData = document.getElementById('form-data')

//secara default, ketika form disubmit, page akan kerefresh
//sehingga perubahan data tidak kelihatan
//untuk handle refresh, function akan menerima parameter bawaan
//yaitu event.
//rules dalam project, ; => tidak wajib di js
btnSubmit.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(inputNama.value, inputRole.value, inputAvailability.value, inputAge.value, inputLokasi.value, inputExperience.value, inputEmail.value, 'hasil')
    // textNama.innerHTML = `<h1>${inputNama.value}</h1>`
    // textUsia.innerText = `<h1>${inputUsia.value}</h1>`
    textNama.innerText = inputNama.value
    textRole.innerText = inputRole.value
    textAvailability.innerText = inputAvailability.value
    textAge.innerText = inputAge.value
    textLokasi.innerText = inputLokasi.value
    textExperience.innerText = inputExperience.value
    textEmail.innerText = inputEmail.value
    formData.style.display = 'none'
})

btnShow.addEventListener('click', function (event) {
    event.preventDefault()
    if (formData.style.display == 'none') {
        formData.style.display = 'block'
        inputNama.value = textNama.innerText
        inputRole.value = textRole.innerText
        inputAvailability.value = textAvailability.innerText
        inputAge.value = textAge.innerText
        inputLokasi.value = textLokasi.innerText
        inputExperience.value = textExperience.innerText
        inputEmail.value = textEmail.innerText
    } else {
        formData.style.display = 'none'
    }
})