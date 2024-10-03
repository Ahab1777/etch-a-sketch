//TODO
//erase previous grid when a new one is created


const container = document.querySelector('.container')
const newGridBtn = document.querySelector(".new-grid-btn")
const root = document.documentElement

const gridGenerator = (width, length) => {
    const square = document.createElement('div')
    square.classList.add("square")
    for (let i = 0 ; i < width ; i++){
        for (let j = 0 ; j < length ; j++){
            const clonedSquare = square.cloneNode(true)
            if (j === 15) {
                //for testing
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
            //grabs current opacity and adds 10%
            e.target.style.backgroundColor = 'black'
            let currentOpacity = Number(e.target.style.opacity)
            currentOpacity += 0.1
            e.target.style.opacity = currentOpacity
            console.log(typeof(currentOpacity))
        })
        squareNode[i].style.flex = `1 0 calc(100% * (1/(${gridSize})))`
    }
}

//prompt for grid size
const requestNewGridSize = () => {
    let newGridSize = prompt("What size of grid do you want?")
    if (newGridSize > 100) {
        newGridSize = prompt("The maximum size of a grid is 100 (100x100). Please, provide a new size for the grid:")
    }
    return parseInt(newGridSize)
}


newGridBtn.addEventListener('click', () => {
    while (container.firstChild){
        container.firstChild.remove()
    }
    const gridSize = requestNewGridSize()
    gridGenerator(gridSize, gridSize)
    styleSquares(gridSize)
})

console.log(root.style)

const colorRandomizer = () => {

}