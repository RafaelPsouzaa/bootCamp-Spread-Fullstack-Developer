function filterPar(arr){
    return arr.filter(callback);

}

function callback(item){
    return item % 2 === 0;
}

const myArray =[2,4,45,65,56,75,22,44,92,86];

console.log(filterPar(myArray));