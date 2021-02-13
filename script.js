const container = document.getElementById('container')
const colors = ['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787']

const squares = 399;

for(let i = 0; i < squares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => addColor(square))

    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}

function addColor(element) {
    const color = getColor()
    element.style.background = color
    element.style.boxShadow = `0 0 4px ${color},0 0 12px ${color}`
}

function removeColor(element) {
    element.style.background = 'rgb(78, 78, 78)'
    element.style.boxShadow = 'none'
    
}

function getColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}