let form = document.querySelector("form");
let name_input = document.querySelector("#name-input");
let age_input = document.querySelector("#age-input");
let tbody = document.querySelector("tbody");

function clearFunc() {
    localStorage.clear()
    displayData()
}

function displayData() {
    let data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    tbody.innerHTML = null;
    if (data != null) {
        data.forEach(element => {
            let row = document.createElement("tr");
            let nameData = document.createElement("td");
            let ageData = document.createElement("td");
            nameData.innerText = element.name;
            ageData.innerText = element.age;
            row.append(nameData, ageData);
            tbody.append(row);
        });
    }
}

displayData();


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data;
    if (localStorage.getItem("data") == null) {
        data = [];
    } else {
        data = JSON.parse(localStorage.getItem("data"));
    };
    let obj = {};
    obj.name = name_input.value;
    obj.age = age_input.value;
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));
    displayData();
    form.reset();
});