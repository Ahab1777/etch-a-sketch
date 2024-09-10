
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

// const squaresNode = document.querySelectorAll('.square')

gridGenerator(16 , 16)

const squareNode = container.childNodes

for (let i = 0 ; i < squareNode.length ; i++){
    squareNode[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'white'
        
    })
}




//     squaresNode[i].computedStyleMap.backgroundColor = 'white'
    // squaresNode[i].addEventListener('mouseover', () => {
    //     squaresNode[i].style.backgroundColor = 'white'
    // })
// }
//create square div
//request width and length of grid
//insert into container div the number of squares (w x l)
//make container flexbox so that grid respects the desired width and length