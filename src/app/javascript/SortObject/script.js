let arr = [
    {
        name: 'yoyo',
        age: 6
    },
    {
        name: 'aoyo',
        age: 6
    },
    {
        name: 'fims',
        age: 6
    },
    {
        name: 'ritz',
        age: 6
    },
]
arr.sort((a,b )=>{
    if (a.name.toLowerCase() < b.name.toLowerCase()){
        return -1;
    }
    else if (a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
    }
    else{
        return 0;
    }
})

console.log(arr);