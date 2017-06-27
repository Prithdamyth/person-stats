
function changedHeading(ev){
    ev.preventDefault()
    
    const f = ev.target
    const name = f.personName.value
    const p = document.createElement('p')
    const age = f.personAge.value
    const div = document.querySelector('#stats')
    
    p.textContent = `${name}, ${age}`
    div.appendChild(p)

    const color = document.getElementById("color").value;
    p.style.color = color;
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changedHeading)