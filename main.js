const body = document.getElementsByTagName("body")[0] 
// возвращает HTMLCollection (массивоподобный объект) с элементами <body>, но так как на странице только один <body>, берем его через [0].
// Теперь переменная body содержит ссылку на <body>, что позволяет изменять его стили.

// body.style.background = "red" turns the whole page into red

function setColor(name){
    body.style.backgroundColor = name;
}

// setColor("green") // call function

function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}

randomColor()