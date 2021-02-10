fetch ("ateam.json")
.then (function(response) {
    return response.json()
})
.then (function(data) {
    console.log("JSON-datan", data);
    printEmp(data);
})

const root = document.getElementById("root");
const ul = document.createElement("ul");
root.appendChild(ul);

function printEmp(emp) {

    //sortera array efter age
    // console.log("sorterad array yngst först", emp);
    emp.sort(function (a, b) {
        return b.age - a.age;
    });    

    for (person in emp) {
        // console.log("tar den sorterade emp", emp);
        // console.log("emp[person]", emp[person]);
        // console.log("vi vill skriva ut: ", emp[person].email);

        empTemplate = `<li>${emp[person].title}, ${emp[person].name}, ${emp[person].email}</li>`;

        ul.insertAdjacentHTML("afterbegin", empTemplate);
    }
};

/*
Använd fetch för att hämta alla anställda och skriv sedan ut som lista "ul" med varje anställd som en "li" (en rad) med titel, namn och e-mailadress. De anställda skall sorteras enligt yngst först.
*/