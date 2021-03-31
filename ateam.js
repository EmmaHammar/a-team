import {data} from './modules/fetch.mjs';

data.then(data => {
    // console.log("data from fetch.mjs:", data);
    printEmp(data); 
});

const root = document.getElementById("root");
const ul = document.createElement("ul");
root.appendChild(ul);

function printEmp(employees) {
    sortByAge(employees);

    for (let employee in employees) {
        const employeeTemplate = `<li>${employees[employee].title}, ${employees[employee].name}, ${employees[employee].email}</li>`;

        ul.insertAdjacentHTML("afterbegin", employeeTemplate);
    }
};

function sortByAge(employees) {
    employees.sort(function (a, b) {
        return b.age - a.age;
    });    
}

/*
Använd fetch för att hämta alla anställda och skriv sedan ut som lista "ul" med varje anställd som en "li" (en rad) med titel, namn och e-mailadress. De anställda skall sorteras enligt yngst först.
*/