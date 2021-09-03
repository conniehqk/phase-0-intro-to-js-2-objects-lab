// Write your solution in this file!
let employee = {'name': 'Connie', 'stresstAddress': 'earth'}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]:value};
}

employee = {'name': 'Connie', 'stresstAddress': 'earth'}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

employee = {'name': 'Connie', 'stresstAddress': 'earth'}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

employee = {'name': 'Connie', 'stresstAddress': 'earth'}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
