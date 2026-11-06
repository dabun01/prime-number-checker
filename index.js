function isPrime(num){
    let isPrime = true
    if (num <= 1){
        isPrime = false
    }else{
        for (let i = 2; i * i <= num; i++){
            if (num % i === 0){
                isPrime = false;
                break;
            } 
        }
    }
    return isPrime
}

module.exports = {
    isPrime
}