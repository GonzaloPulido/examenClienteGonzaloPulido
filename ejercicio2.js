// *** Variables ***
const listaResultado = []

// *** Comprobar año bisiesto ***
function isLeapYear(num1,num2){
    // Entrada numerica
    if(typeof(num1) != "number" || typeof(num2) != "number"){
        return "El numero proporcionado no es valido"
    }else{
        //Numeros entre 2001 y 2500
        if((num1 >= 2001 && num1 <= 2500) && (num2 >= 2001 && num2 <= 2500)){
            // Paso los numeros a int (Para que no entre Float)
            num1 = parseInt(num1)
            num2 = parseInt(num2)
            if(num1 < num2){
                for (let i = num1; i <= num2; i++){
                    if ((i % 4 === 0 )||(i % 100 === 0 && i % 400 === 0)){
                        listaResultado.push(i)
                    }
                }
            }else{
                for (let i = num2; i <= num2; i++){
                    if ((i % 4 === 0 )||(i % 100 === 0 && i % 400 === 0)){
                        listaResultado.push(i)
                    }
                }
            }
            return listaResultado

        }else{
            return "Numero fuera de rango"
        }
    }
}

console.log(isLeapYear(2001,2500))