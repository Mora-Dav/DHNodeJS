let numeros =[1,2,3,4,5,6,7];
function encontreUn5 (numeros){
    let i = numeros[0];
    do {
        if (numeros[i]!= 5){

            console.log (numeros[i])
        }else{
            console.log ("se encontró un 5!")
        }

    } while ( i<=numeros.length)
}