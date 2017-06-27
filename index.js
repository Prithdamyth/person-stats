function changeHeading(ev){
    
}
const p = document.querySelector('#stats p')
p.style.display = 'none'

function changeParagraph(ev){
    ev.preventDefault()
    const f = ev.target
    p.style.display = ''
    const name = f.personName.value
    const heading = document.querySelector('h1')
    p.textContent += name
    
}
/*const btn = document.querySelector('button')
btn.addEventListener('click', changeHeading)


const p = document.querySelector('#instructions')
p.addEventListener('click', changeHeading)*/

const personForm = document.querySelector("#person-form1")
personForm.addEventListener('submit', changeParagraph)