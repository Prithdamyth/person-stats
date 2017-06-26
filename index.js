function changeHeading(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const heading = document.querySelector('h1')
    heading.textContent = name

}
/*const btn = document.querySelector('button')
btn.addEventListener('click', changeHeading)


const p = document.querySelector('#instructions')
p.addEventListener('click', changeHeading)*/

const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', changeHeading)