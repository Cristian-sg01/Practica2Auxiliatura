function parImpar(num, variable){
    resultado =[]
    for(let i=0; i <= num; i++){
    if (i%2 == variable ){
        resultado.push(i)
    }
}
return resultado;
}
parImpar(100)