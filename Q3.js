function hasDuplicates(array) {
    return new Set(array).size !== array.length;
    
    //new Set(array)  new set of array created by unique elements
    //new Set(array).size  the size of the that means length of the unique element array
    // array.length given array length
  }
  
  
  console.log(hasDuplicates([1, 2, 3, 4, 5,1]));  //o/p true
  console.log(hasDuplicates([1, 2, 3, 4, 5]));  //o/p  false