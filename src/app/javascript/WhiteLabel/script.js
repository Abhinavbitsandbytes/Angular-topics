let test = {
    a: 123,
    b: 456
}
function tester(c,d){
    console.log(this.a, this.b, c, d)
}

Function.prototype.myCall = function(obj, ...args){
    obj._this = this
return obj._this(...args);

}


tester.myCall(test, 6, 9)