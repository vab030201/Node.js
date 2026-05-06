const SalesEmployee = require("./SalesEmployee");
const SalesManager = require("./SalesManager");



//entry point

let emp1 = new SalesEmployee(
    1, "Amit", "Sharma", "amit@company.com",
    "9999999999", "Mumbai",
    new Date(1995, 4, 12),
    1000, 5000, 20000,
    100000, 120000
);

let emp2 = new SalesManager(
    2, "Neha", "Patil", "neha@company.com",
    "8888888888", "Pune",
    new Date(1990, 2, 22),
    1500, 7000, 30000,
    200000, 250000, 10000
);

// Polymorphism
emp1.doWork();
emp2.doWork();

console.log(emp1.toString());
console.log("Salary:", emp1.computePay());

console.log(emp2.toString());
console.log("Salary:", emp2.computePay());