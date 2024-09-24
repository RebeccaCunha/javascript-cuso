let valores = [5, 2, 9, 7, 8]
valores.sort()
//valores.push (10)

//Criei um índice fora da sequência e o valor foi adicionado, porém a ordem apresentada segue contínua
valores[7] = 3

/*for(pos =0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`À posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(2)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`) 
}

