// Function Of Show Number
const Show = (n)=>{
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Memoization Function
const Memoization = (fun) => {
    let cache = {};
    return function (...agrs) {
        let n = agrs[0];
        if (n in cache) {
            console.log("In cache");
            return cache[n];
        } else {
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

const MemoObj = Memoization(Show);
console.time();
console.log(MemoObj(5));
console.timeEnd();


console.time();
console.log(MemoObj(5));
console.timeEnd();