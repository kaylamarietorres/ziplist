function zipList(list1, list2) {
  if (list1.length !== list2.length) {
    throw new Error('Both input lists must have equal length');
  }
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}
// Example:
const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
console.log(zipList(list1, list2)); // Output: ['a', 1, 'b', 2, 'c', 3]
function zipListTheSimpleWay(list3, list4) {
  if (list3.length !== list4.length) {
    throw new Error('Both input lists must have equal length');
  }
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(list1, list2)); // Output: ['a', 1, 'b', 2, 'c', 3]
