// For Each
let arr = [1,2,3,4]
Array.prototype.myForEach = function(cb){
    for(let i=0; i<this.length; i++){
        cb(this[i])
    }
}
// arr.myForEach((item)=>{
//     console.log(item*5);
// })



// map
Array.prototype.myMap = function(cb){
    let ans=[];
    for(let i=0; i<this.length; i++){
ans.push(cb(this[i]));
    }
    return ans;
}

// let out = arr.myMap((item)=>{
//     return item*2
// })
// console.log(out)



// filter
Array.prototype.myFilter = function (cb) {
    let ans = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i]))
        ans.push(this[i]);
    }
    return ans;
}
// let out = arr.myFilter((item)=>{
//     return item>2
// })
// console.log(out)


// Bind

const test = {
    a: '123',
    b: '234',

}

function tester(){
    console.log(this.a, this.b)
}
test._this()

Function.prototype.myBind = function(scope, ...args){
    scope._this = this;
    return function(){
                // why scope._this is working and this() is not
        return scope._this(...args)
    }
}

const bindExecutor = tester.myBind(test)
bindExecutor()