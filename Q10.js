
function average(a)
{
  let sum = 0
  for(let i=0;i<a.length;i++)
  {
      sum += a[i] 
  }
// return sum
const aver = sum / a.length
return aver
}

const a = [1,2,3,4,5]
const result = average(a)
console.log("Average of array Elements is : " +result)
//o/p Average of array Elements is : 3