//Calculate 10! factorial or what
let prod = 1

for(let i = 1; i <= 10; i++){
    prod *= i   
}

console.log(prod)

console.log("----  better -------")

let nNum = 10;

function FactorialN(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i
    }
    return result
}

console.log(FactorialN(nNum))

