const employee = {
  name: " ",
  streetAddress: " ",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
  const newEmployeeObject = { ...object };
  newEmployeeObject[key] = value;
  return newEmployeeObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "phone", "0"));
// console.log(employee)

function deleteFromEmployeeByKey(object, key) {
  const deletedEmployeeKey = { ...object };
  delete deletedEmployeeKey[key];
  return deletedEmployeeKey;
}
function destructivelyDeleteFromEmployeeByKey(object, key) {
  delete object[key];
  return object;
}
