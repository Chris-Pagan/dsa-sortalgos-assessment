/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */

 function searchByName(firstName, lastName, customers) {
     if (Array.isArray(customers)){
         let lowerIndex = 0;
         let upperIndex = customers.length -1;
         while (lowerIndex <= upperIndex){
             const index = Math.floor((upperIndex + lowerIndex) / 2);
             const firstNameCompare = compare(customers[index].firstName, firstName);
             const lastNameCompare = compare(customers[index].lastName, lastName);
             if (lastNameCompare > 0) {
                 lowerIndex = index + 1;
             }
             if (lastNameCompare === 0){
                 if (firstNameCompare > 0 ) lowerIndex = index + 1;
                 if (firstNameCompare < 0 ) lowerIndex = index - 1;
                 if (firstNameCompare === 0 ) return index;
             }
             if (lastNameCompare < 0) upperIndex = index - 1;
         }
     }

     return -1
 }

 function compare(element, target) {
     if (element === target ) return 0;
     if (element < target ) return 1;
     if (element > target ) return -1;
 }

 module.exports = searchByName;
 