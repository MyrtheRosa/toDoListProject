const inputField = document.querySelector(".inputTextArea");
const inputTitleField = document.querySelector(".inputTitleArea");
const bezigheidList = document.getElementById("bezigheid");
const toDoList = document.getElementById("toDoList");
const pendingNum = document.getElementById("pendingNum");
const clearButton = document.getElementById("clearButton");

const infoBox = document.getElementById("sendInfo");

const filters = document.getElementById("filterToDo");
const filterDiv = document.querySelector(".filterDiv");

const options = document.querySelectorAll(".options");

if (filterDiv.style.left === "50rem") {
    filters.addEventListener("click", function () {
        if (filterDiv.style.left === "50rem") {
            filterDiv.style.left = "32rem";
            filterDiv.style.opacity = 1;
            filters.style.color = "var(--main-color-hover)";
        } else {
            filterDiv.style.left = "50rem";
            filterDiv.style.opacity = 0;
            filters.style.color = "var(--main-color)";
        }
    });
} else {
    filters.addEventListener("click", function () {
        if (filterDiv.style.left === "65rem") {
            filterDiv.style.left = "54.5rem";
            filterDiv.style.opacity = 1;
            filters.style.color = "var(--main-color-hover)";
        } else {
            filterDiv.style.left = "65rem";
            filterDiv.style.opacity = 0;
            filters.style.color = "var(--main-color)";
        }
    });
}

const filterRadios = document.querySelectorAll(".filterDiv input.filter");
filterRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
        const selectedFilter = document.querySelector(
            ".filterDiv input.filter:checked"
        ).value;

        const options = document.querySelectorAll(".options");

        if (radio.value === "tags") {
            filterDiv.style.height = "14rem";
            options.forEach((option) => {
                const div1 = document.createElement("div");
                const input1 = document.createElement("input");
                input1.type = "checkbox";
                input1.checked = true;
                input1.classList.add("school");
                const label1 = document.createElement("label");
                label1.textContent = "School";

                div1.appendChild(label1);
                div1.appendChild(input1);

                const div2 = document.createElement("div");
                const input2 = document.createElement("input");
                input2.type = "checkbox";
                input2.checked = true;
                input2.classList.add("work");
                const label2 = document.createElement("label");
                label2.textContent = "Work";

                div2.appendChild(label2);
                div2.appendChild(input2);

                const div3 = document.createElement("div");
                const input3 = document.createElement("input");
                input3.type = "checkbox";
                input3.checked = true;
                input3.classList.add("sport");
                const label3 = document.createElement("label");
                label3.textContent = "Sport";

                div3.appendChild(label3);
                div3.appendChild(input3);

                const div4 = document.createElement("div");
                const input4 = document.createElement("input");
                input4.type = "checkbox";
                input4.checked = true;
                input4.classList.add("hobby");
                const label4 = document.createElement("label");
                label4.textContent = "Hobby";

                div4.appendChild(label4);
                div4.appendChild(input4);

                const div5 = document.createElement("div");
                const input5 = document.createElement("input");
                input5.type = "checkbox";
                input5.checked = true;
                input5.classList.add("other");
                input5.classList.add("none");
                const label5 = document.createElement("label");
                label5.textContent = "Other";

                div5.appendChild(label5);
                div5.appendChild(input5);

                [input1, input2, input3, input4, input5].forEach((input) => {
                    input.addEventListener("change", function () {
                        const todos = document.querySelectorAll("#toDoList li");

                        todos.forEach(function (todo) {
                            if (todo.classList.contains(input.classList[0])) {
                                todo.style.display = input.checked
                                    ? "block"
                                    : "none";
                            }
                        });
                    });
                });

                option.appendChild(div1);
                option.appendChild(div2);
                option.appendChild(div3);
                option.appendChild(div4);
                option.appendChild(div5);
            });
        } else {
            filterDiv.style.height = "7rem";
            options.forEach((option) => {
                option.innerHTML = "";
            });
        }

        const todos = document.querySelectorAll("#toDoList li");

        todos.forEach(function (todo) {
            const todoValue = todo.getAttribute("data-bezigheid");
            if (todoValue === selectedFilter || selectedFilter === "none") {
                todo.style.display = "block";
            } else if (selectedFilter === "tags") {
                todo.style.display = "block";
            } else {
                todo.style.display = "none";
            }
        });
    });
});

function allTasks() {
    let tasks = document.querySelectorAll(".pending");

    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
    let allLists = document.querySelectorAll("#list");
    if (allLists.length > 0) {
        toDoList.style.marginTop = "20px";
        clearButton.disabled = false;
        clearButton.style.pointerEvents = "auto";
        return;
    }
    clearButton.disabled = true;
    toDoList.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
}

function inputOnClick(event) {
    const inputVal = inputField.value;
    const inputTitleVal = inputTitleField.value;

    if (
        (event.key === "Enter" && inputTitleVal.length > 0) ||
        (event.key === "Enter" && inputVal.length > 0)
    ) {
        infoBox.submit();
    }
}

inputField.addEventListener("keyup", inputOnClick);
inputTitleField.addEventListener("keyup", inputOnClick);
bezigheidList.addEventListener("keyup", inputOnClick);

function getAllTodos() {
    axios
        .get("/todo")
        .then((response) => {
            console.log("Data ontvangen van API:", response.data);
            loadFromDB(response.data);
        })
        .catch((error) => {
            console.error("Fout bij het ophalen van data:", error);
        });
}

function handleStatus(e) {
    const checkbox = e.querySelector("input");
    if (checkbox.checked === false) {
        checkbox.checked = true;
    } else if (checkbox.checked === true) {
        checkbox.checked = false;
    }
    e.classList.toggle("pending");
}

async function clear() {
    // Haal alle taken op
    const response = await axios
        .get("/todo")
        .then((response) => {
            const todos = response.data;
            const todoIds = todos.map((todo) => todo.id);

            todoIds.forEach((id) => {
                deleteRequest(id);
            });

            window.location.reload();
        })
        .catch((error) => {
            console.error("Fout bij het ophalen van data:", error);
            window.location.reload();
        });
}

document.getElementById("clearButton").addEventListener("click", clear);

async function deleteRequest(id) {
    const response = await axios
        .delete(`/todo/delete/${id}`)
        .then((response) => {
            console.log("Data verwijderd van API:", response.data);
            return response;
            window.location.reload();
            getAllTodos();
        })
        .catch((error) => {
            console.error(error);
            window.location.reload();
        });
}

function loadFromDB(todos) {
    toDoList.innerHTML = "";

    todos.forEach((task) => {
        console.log(task);
        let liTag = `<li id="list" class="${task.completed ? "" : "pending"} ${
            task.bezigheid || "none"
        }" data-bezigheid="${task.bezigheid || "none"}"
        data-id=${task.id} onclick="handleStatus(this)">
            <input type="checkbox" ${task.completed ? "checked" : ""} />
            <div id="iteminfo">
            <span class="position-absolute top-0 start-120 translate-middle badge rounded-pill ${
                task.bezigheid
            }">${task.bezigheid}</span>
            <h5 id="task"><b>${task.title}</b></h5>
            <p id="task">${task.description ? task.description : ""}</p>
            </div>
            <i class="uil uil-edit edit" onclick="window.location='/todo/${
                task.id
            }/edit'"></i>
            <i class="uil uil-trash delete" onclick='deleteRequest(${
                task.id
            })'></i>
            </li>`;

        toDoList.insertAdjacentHTML("beforeend", liTag);
    });

    allTasks();
}

document.addEventListener("DOMContentLoaded", function () {
    getAllTodos();
});
