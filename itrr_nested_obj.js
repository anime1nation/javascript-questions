// to change the value of nested object 
// const assignmentObject = {
//   "Name": "Random person",
//   "Address": {
//      "addressLine1": "SCO 62",
//      "addressLine2": "City heart",
//      "city": "Mohali",
//      "state": "Punjab",
//    },
//    "educationQualification": {
//      "10th": {
//          "Marks": 400,
//          "Percentage": "80%",
//       },
//      "12th": {
//          "Marks": 400,
//          "Percentage": "80%",
//       },
//      "graduation": {
//          "Marks": 400,
//          "Percentage": "80%",
//       },
//      "postGraduation": {
//          "Marks": 400,
//          "Percentage": "80%",
//       },
//    }
// }

// function updatedObj(obj,keyToUpdate,value) {
//    if(typeof obj !== 'object' || obj === null) {
//     return obj
//    }
//    if(obj.hasOwnProperty(keyToUpdate)){
//     obj[keyToUpdate] = value
//    //  return obj
//    }

//    for(const key in obj){
//     if(obj.hasOwnProperty(key)){
//         obj[key] = updatedObj(obj[key],keyToUpdate,value)
//     }
//    }
// return obj
// }
// const up = updatedObj(assignmentObject,"Marks","Haryana")
// console.log(up)


// find the missing number in shorted array of 1 to 10 

// let arr = [1,2,4,6,3,7,8,10]
// function findMissingNumbers(arr) {
//    const missingNumbers = [];
//    for(let i= 1; i<=10; i++) {
//       let found = false
//       for(let j=0; j<=arr.length; j++) {
//       if(arr[j] === i){
//          found = true
//          break;
//       }
//       }
//       if(!found){
//          missingNumbers.push(i)
//       }
//    }
//    return missingNumbers
// }
// console.log(findMissingNumbers(arr))

// fill the array with number 1 to 100
// let arr = []
// for(let i = 0; i <100;i++) {
//    arr[i] = i+1
// }
// console.log(arr);

//flat the nested array 

// let arr = [1,2,4,5,[55,33,22,66,[332,522,52,[323,6564,653,[321,977]]]]]

// function flatArray(arr){
//    let flat = []
//    function recSearch(inarr){
//       for(let i=0;i<inarr.length;i++){
//          // console.log(inarr[i])
//       Array.isArray(inarr[i])?recSearch(inarr[i]):flat.push(inarr[i])
//       }
//    }
//    // console.log(flat);
//    recSearch(arr);
//    return flat
// }
// console.log(flatArray(arr));

//find max and min number in array 

// function findmaxandmin(arr){
//    let max = arr[0];
//    let min = arr[0];
//  function recSearch(inarr){
//    for (let i=0;i<inarr.length;i++){
//       if(Array.isArray(inarr[i])){
//          recSearch(inarr[i]);
//       }
//       if(inarr[i] > max){
//           max = inarr[i]
//       }else if(inarr[i]<min){
//           min = min[i]
//       }
//    }
//  }
//  recSearch(arr);
//  return {'min':min,'max':max}
// }
// console.log(findmaxandmin(arr));

//find latgest number in unshorted array

// let arr = [1,65,87,95,95,3,2,45,0,0,6,9,33]

// function  largestinarr(arr){
//    let largest = -1
//    let secondlar = -1
//    for(let i=0;i<arr.length;i++){
//       if(arr[i]>largest){
//          secondlar = largest
//          largest = arr[i]
//       }
//       else if(arr[i] !== largest&& arr[i] > secondlar){
//          secondlar =arr[i]
//       }}

//    return{largest:largest,secondlar:secondlar}
// }
// console.log(largestinarr(arr));


// to short and unique the array

// let arr = [101,65,87,95,95,3,2,45,0,0,6,9,33]

// function shortarr(arr) {
//    let short =[]
//    for(let i=0;i<arr.length;i++){
//       // let swapped = false
//       for(let j=0;j<arr.length-1;j++){
//          console.log(arr[j],arr[j+1]);
//          if(arr[j]>arr[j+1]){
//             const temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1]=temp
//             // swapped = true
//          }
//          console.log(arr);
//       }
//    }
//    for(let i=0;i<arr.length;i++){
//    if(arr[i]!==arr[i+1]){
//       short.push(arr[i])
//    }
// }
//    return {shorted:arr,uniqure:short}
// }
// console.log(shortarr(arr));

// let arr = [1,2,3,4,5,6,7,8,9,10]

// function rotatearr(arr,k){
//   let left =0
//   let right = arr.length-1
//  reverse(arr,left,right)
//  console.log(arr);
//  reverse(arr,left,k-1)
//  console.log(arr);
//  reverse(arr,k,right)
//   return arr
// }
// function reverse(arr,left,right){
//    while(left < right){
//       // console.log(right,left);
//       const temp = arr[left]
//       arr[left++] = arr[right]
//       arr[right--] = temp
//      }
// }
// console.log(rotatearr(arr,5));

//remove duplicate number 

// let arr= [1,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,]
// function unique(arr){
//    let uni =[]
//    for (let i = 0; i < arr.length; i++) {
//       if(arr[i]!==arr[i+1]){
//          uni.push(arr[i])
//       }
//    }
//    return uni
// }
// console.log(unique(arr));

// let arr =[1,2,2,2,2,2,3,3,4,5,5,5,5,,6,7,7]
// function duplicatenum(arr){
//    const drr =[]
//    const obs={}
//    for(let i=0;i<arr.length;i++){
//       console.log(obs);
//       if(obs[arr[i]]){
//          if(obs[arr[i]]===1){
//             drr.push(arr[i])
//          }
//          obs[arr[i]] = obs[arr[i]]+1
//       }else{
//          obs[arr[i]]=1
//       }
//    }
//    return drr
// }
// console.log(duplicatenum(arr));

// return ana array with commulatative add 

// let arr = [1,2,3,4]

// function cadd(arr){
//    let result =[arr[0]]
//    for(let i=1;i<arr.length;i++)
//    {
//       result.push(arr[i]+result[i-1])
//    }
//    return result
// }
// console.log(cadd(arr));

// function callback(){
//    console.log(1);
//  new Promise(function(resolve,reject){
//       setTimeout(() => {
         
//          console.log(5);
//          resolve()
//       }, 1000)
//    }).then(()=>
//    console.log(6))
// }
// callback()