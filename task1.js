 
 function getUniques(Arr){
  let outputArray = [];
  
  for (let i = 0; i < Arr.length; i++) {
    let isDuplicate = false;
  
    // Check if the current element is already in the outputArray
    for (let j = 0; j < outputArray.length; j++) {
      if (Arr[i] === outputArray[j]) {
        isDuplicate = true;
        break;
      }
    }
  
    // If not a duplicate, add it to the outputArray
    if (!isDuplicate) {
      outputArray.push(Arr[i]);
    }
  }
  return outputArray;
} 
  //example1
  console.log('example1 [ 12,11,41,51,12,51,2,11,3]:--->',getUniques([ 12,11,41,51,12,51,2,11,3]));
  
  //example2
  console.log('example2 [ 1,121,4,551,5,3,4,2,6,4,1,3,5,6,0]:---->',getUniques([ 1,121,4,551,5,3,4,2,6,4,1,3,5,6,0]));