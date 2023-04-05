function kth(arr,k){
    arr.sort((a,b)=>b-a);
    return arr[k-1];
}

let arr = [1,2,3,4,5,6];
let k = 6;

let res = kth(arr,k);

console.log(res);