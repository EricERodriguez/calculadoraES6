
let operandoDos = () => parseInt(document.getElementById("operandoDos").value)

let operandoUno = () => parseInt(document.getElementById("operandoUno").value)

let suma = () =>{
    let num1 = operandoUno();
    let num2 = operandoDos();
    let suma = num1 + num2
    document.getElementById("resultado").innerHTML = `${suma}`
}

let resta = () =>{
    let num1 = operandoUno();
    let num2 = operandoDos();
    let resta = num1 - num2
    document.getElementById("resultado").innerHTML = `${resta}`
}

let multiplicacion = () =>{
    let num1 = operandoUno();
    let num2 = operandoDos();
    let multiplicacion = num1 * num2
    document.getElementById("resultado").innerHTML = `${multiplicacion}`
}

let division = () =>{
    let num1 = operandoUno();
    let num2 = operandoDos();
    let division = num1 / num2
    document.getElementById("resultado").innerHTML = `${division}`
}