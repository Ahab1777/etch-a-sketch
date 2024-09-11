//TODO
//erase previous grid when a new one is created


const container = document.querySelector('.container')


const gridGenerator = (width, length) => {
    const square = document.createElement('div')
    // document.square.style.width = `${1/16}%`
    square.classList.add("square")
    for (let i = 0 ; i < width ; i++){
        for (let j = 0 ; j < length ; j++){
            const clonedSquare = square.cloneNode(true)
            if (j === 15) {
                clonedSquare.classList.add("sixteenth")
            }
            container.appendChild(clonedSquare)
        }
    } 
}

// gridGenerator(16 , 16)

//apply trail effect to grid
const styleSquares = (gridSize) => {
    const squareNode = container.childNodes
    for (let i = 0 ; i < squareNode.length ; i++){
        squareNode[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'white'
            
        })
        squareNode[i].style.flex = `1 0 calc(100% * (1/(${gridSize})))`
    }
}

const requestNewGridSize = () => {
    let newGridSize = prompt("What size of grid do you want?")
    if (newGridSize > 100) {
        newGridSize = prompt("The maximum size of a grid is 100 (100x100). Please, provide a new size for the grid:")
    }
    return parseInt(newGridSize)
}

const newGridBtn = document.querySelector(".new-grid-btn")

newGridBtn.addEventListener('click', () => {
    while (container.firstChild){
        container.firstChild.remove()
    }
    const gridSize = requestNewGridSize()
    gridGenerator(gridSize, gridSize)
    styleSquares(gridSize)
})

