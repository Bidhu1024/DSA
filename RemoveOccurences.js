const removeElement = (arr,val)=>{
    let res = arr.filter((ar)=> ar!=val);
    console.log(res,">Result");
    
    arr.length = 0;
    arr.push(...res)
    return res.length;
    }

let arr = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6];

let val = 3;

let length = removeElement(arr,val);



console.log(arr," final array");