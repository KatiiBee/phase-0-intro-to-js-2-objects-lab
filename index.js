// Write your solution in this file!
const employee = {
    name:'Sam',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key]= value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = Object.assign ({}, employee)
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (employee, key, value) {
    employee[key]=value;
    return employee;
}