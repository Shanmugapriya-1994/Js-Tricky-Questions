function summation(a)
{
  let sum = 0
  for(let i=0;i<a.length;i++){
      sum += a[i] 
      
  }
return sum
}

const a = [1,2,3,4,5]

const result = summation(a)
console.log("Sum of array Element is : " +result)

//o/p  Sum of array Element is : 15