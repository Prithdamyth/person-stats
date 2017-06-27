
function changedHeading(ev){
    ev.preventDefault()
    
    const f = ev.target
    const name = f.personName.value
    const list = document.createElement('ul')
    const age = f.personAge.value
    const div = document.querySelector('#stats')
    const color = f.textColor.value;

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${name}`
    list.appendChild(nameItem)

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`
    list.appendChild(ageItem)
    
    const colorItem = document.createElement('li')
    colorItem.textContent = `Color: ${color}`
    list.appendChild(colorItem)
    
    //list.textContent = `${name}, ${age}`
    div.appendChild(list)

    //const color = document.getElementById("color").value;
    list.style.color = color;
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changedHeading)