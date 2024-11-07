function checking(a)
{
    // const falsy = a.filter(value => Boolean(value));
    const falsy =a. filter(Boolean)
 
    return falsy
}

const a = [0, 1, false, 2, '', 3]

const result = checking(a)
console.log(result)
//o/p  [ 1, 2, 3 ]