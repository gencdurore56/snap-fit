/* 
Filename: ComplexCode.js
Content: Complex JavaScript Code
*/

// Complex Math Utility Functions
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  
  if (n === 1 || n === 2) {
    return 1;
  }
  
  let a = 1, b = 1, c;
  
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  
  return b;
}

// Complex Data Structure
class Employee {
  constructor(name, age, department) {
    this.name = name;
    this.age = age;
    this.department = department;
  }
  
  getEmployeeInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`;
  }
  
  static createEmployeeList() {
    const employees = [];
    
    employees.push(new Employee("John Doe", 30, "Sales"));
    employees.push(new Employee("Jane Smith", 25, "Marketing"));
    employees.push(new Employee("Bob Johnson", 35, "IT"));
    
    return employees;
  }
}

// Complex Algorithm
function findDuplicateNumbers(numbers) {
  const duplicateNumbers = [];
  const counts = {};
  
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  for (const key in counts) {
    if (counts[key] > 1) {
      duplicateNumbers.push(Number(key));
    }
  }
  
  return duplicateNumbers;
}

// Complex User Interface
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const departmentInput = document.getElementById("departmentInput");
  const resultDiv = document.getElementById("result");
  
  const employee = new Employee(nameInput.value, parseInt(ageInput.value), departmentInput.value);
  
  resultDiv.innerText = `New Employee Created: ${employee.getEmployeeInfo()}`;
  
  nameInput.value = "";
  ageInput.value = "";
  departmentInput.value = "";
});

// Complex Function Composition
function compose(...functions) {
  return function(x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  }
}

function addOne(x) {
  return x + 1;
}

function double(x) {
  return x * 2;
}

const complexFunction = compose(addOne, double);
const result = complexFunction(5);
console.log(result); // Output: 11

// Complex Asynchronous Operation
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function complexAsyncOperation() {
  try {
    console.log("Starting complex asynchronous operation...");
    await delay(2000);
    console.log("Performing task 1...");
    await delay(1500);
    console.log("Performing task 2...");
    await delay(3000);
    console.log("Complex asynchronous operation completed successfully.");
  } catch(error) {
    console.error("An error occurred during complex asynchronous operation:", error);
  }
}

complexAsyncOperation();