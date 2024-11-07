
function intersect(a, b)
{
    const intersection = a.filter(value => b.includes(value));
 
    return intersection
}

const a = [1,2,3]
const b = [2,3,4,5]

const result = intersect(a,b)
console.log("Intersection values of two  array : " +result)
//o/p Intersection values of two  array : 2,3