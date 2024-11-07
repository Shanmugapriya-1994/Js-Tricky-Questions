const groupBy = (array, key) => {
    return array.reduce((result, currentItem) => {
      const groupKey = currentItem[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(currentItem);
      return result;
    }, {});
  };
    const products = [ 
      { id: 1, category: 'fruit' }, 
      { id: 2, category: 'vegetable' }, 
      { id: 3, category: 'fruit' } 
    ];
  
  const groupedByCat = groupBy(products, "category");
  console.log(groupedByCat);
//   //o/p  {
//   fruit: [ { id: 1, category: 'fruit' }, { id: 3, category: 'fruit' } ],
//   vegetable: [ { id: 2, category: 'vegetable' } ]
// }