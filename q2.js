//Print the odd numbers less than 100
for(let i = 1; i <= 100; i++){
    if(i%2 !== 0){
        console.log(i)
    }
}
console.log("-------------- better -------------------")
// better version
for(let i = 1; i <= 100; i += 2){
    console.log(i)
}