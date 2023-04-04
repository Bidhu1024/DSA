function intersection(arr1,arr2){
    const res = arr1.filter(x=>arr2.indexOf(x) !==-1)
    return res;
}


const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6];

const final = intersection(arr1,arr2);
console.log(final);