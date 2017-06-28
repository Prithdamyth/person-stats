
function changedHeading(ev){
    ev.preventDefault()
    
    const f = ev.target
    const name = f.personName.value
    const list = document.createElement('ul')
    const age = f.personAge.value
    const div = document.querySelector('#stats')
    const color = f.textColor.value;
    
    renderListItem(list, 'Name', name)
    
    renderListItem(list, 'Age', age)
    
    const colorItem = document.createElement('li')
    colorItem.textContent = `Color: `

    colorItem.appendChild(renderColor(color))

    //colorItem.style.backgroundColor = color;
    list.appendChild(colorItem)
    
    //list.textContent = `${name}, ${age}`
    div.appendChild(list)

    //const color = document.getElementById("color").value;
    list.style.color = color;
}

function renderColor(color){
   const colorDiv = document.createElement('div')
   colorDiv.style.backgroundColor = color
   colorDiv.style.width = '6rem'
   colorDiv.style.height = '3rem'
   return colorDiv
}

function renderListItem(list, text, value){
    const item = document.createElement('li')
    item.textContent = `${text}: ${value}`
    list.appendChild(item)
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changedHeading)