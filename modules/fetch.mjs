export const data = fetch ("ateam.json")
.then (function(response) {
    return response.json()
})
.then (function(data) {
    // console.log("JSON-datan", data);
    // printEmp(data);
    return data;
})
