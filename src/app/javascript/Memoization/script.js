
function sum(n){
    let acc=0;
for(let i=0; i<n;i++){
acc=acc+i;
}
return acc;
}

function memo(fn){
    let cache = {};
    return function(...args){
        // args will have value which we will pass while calling run()
    let n = args[0];
    if(n in cache){
        return cache[n]
    }
    else{
        const data = fn(n);
        cache[n]=data;
        return data;
    }
}
}
const run = memo(sum)
// run(5)


