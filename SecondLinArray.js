let arr = [1,2,3,4,5,6,7,8];
let max = arr[0];
let secondMax = arr[0];

for(let i = 1;i<arr.length;i++ ){
    if(arr[i]>max){
        secondMax = max;
        max = arr[i];

    }else if(arr[i]>secondMax && arr[i]!= max){
        secondMax = arr[i]
    }

}
console.log(secondMax);