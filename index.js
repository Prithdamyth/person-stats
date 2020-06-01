
function handleSubmit(ev){
    ev.preventDefault()
    
    const f = ev.target
	const person = {
		name: f.personName.value,
		age: f.personAge.value,
		favColor: renderColor(f.textColor.value)
	}
	const list = renderList(person)
	
	
    const div = document.querySelector('#stats')
    
    //list.appendChild(renderListItem('Name', name))
    //list.appendChild(renderListItem('Age', age))
    //colorItem.style.backgroundColor = color;
    //list.appendChild(renderListItem('Color', color))
    
    //list.textContent = `${name}, ${age}`
    div.appendChild(list)

    //const color = document.getElementById("color").value;
    //list.style.color = color;
}

function renderColor(color){
   const colorDiv = document.createElement('div')
   colorDiv.style.backgroundColor = color
   colorDiv.style.width = '6rem'
   colorDiv.style.height = '3rem'
   return colorDiv
}

function renderListItem(text, value){
    const item = document.createElement('li')
    item.textContent = `${text}: `
    //Use a try catch block --> try appending value to text, otherwise just add it on
	try{
		item.appendChild(value)
	}catch (e) {
		item.textContent += value
	}
    return item
}

function renderList(person){
	const list = document.createElement('ul')
	Object.keys(person).map((label) => {
		const item = renderListItem(label, person[label])
		list.appendChild(item)
	})
	return list
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)