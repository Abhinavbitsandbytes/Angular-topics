
function getData(){
    console.log('fetching data from api...')
}
function doSomeMagic(fn, d){
    let timer;
    return function (){
        let context=this;
        let args=argument;
    clearTimeout(timer)
   timer = setTimeout(() => {
        fn.apply(context, args);
    }, d);
}
}
const betterFunction = doSomeMagic(getData, 2000)






