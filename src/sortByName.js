const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */
function sortByName(customers) {
    let sortedNames = []
    let fullName = customers.map((customer) => {return customer.lastName + customer.firstName})

    const sortBySurname = sort(compare, fullName);

    sortBySurname.forEach((name) => {
        let lastName = name.slice(0, 1);
        let firstName = name.slice(1);
        let completeName = { firstName, lastName}
        sortedNames.push(completeName);
    })
    return sortedNames;
}

function compare(nameOne, nameTwo){
    if (nameOne === nameTwo) return 0;
    if (nameOne > nameTwo) return 1;
    if (nameOne < nameTwo) return -1;
}

module.exports = sortByName;
