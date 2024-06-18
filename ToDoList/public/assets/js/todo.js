const inputField = document.getElementById("inputTextArea");
const inputTitleField = document.getElementById("inputTitleArea");
const bezigheidList = document.getElementById("bezigheid");
const toDoList = document.getElementById("toDoList");
const pendingNum = document.getElementById("pendingNum");
const clearButton = document.getElementById("clearButton");

const filters = document.getElementById("filterToDo");
const filterDiv = document.querySelector(".filterDiv");

const options = document.querySelectorAll(".options");

// const charCountLabel = document.getElementById("charCount");
// const todoCountLabel = document.getElementById("todoCount");

// const MAX_TOTAL_LENGTH = 74;
// const MAX_TODO_COUNT = 5;

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

// inputField.addEventListener("input", checkTotalLength);
// inputTitleField.addEventListener("input", checkTotalLength);

// function checkTotalLength() {
//     const charFullLabel = document.getElementById("charFullLabel");
//     const totalLength = inputField.value.length + inputTitleField.value.length;

//     if (totalLength >= MAX_TOTAL_LENGTH) {
//         inputField.value = inputField.value.slice(
//             0,
//             MAX_TOTAL_LENGTH - inputTitleField.value.length
//         );
//         inputTitleField.value = inputTitleField.value.slice(
//             0,
//             MAX_TOTAL_LENGTH - inputField.value.length
//         );
//         charFullLabel.style.color = "darkred";
//     } else if (totalLength >= 70 && totalLength <= 74) {
//         charFullLabel.style.color = "red";
//     } else if (totalLength >= 50 && totalLength < 70) {
//         charFullLabel.style.color = "orange";
//     } else {
//         charFullLabel.style.color = "var(--main-color)";
//     }
//     charCountLabel.textContent = `${totalLength}`;
// }

// inputField.addEventListener("input", checkTotalLength);
// inputTitleField.addEventListener("input", checkTotalLength);

// function checkTodoCount() {
//     const todoFullLabel = document.getElementById("todoFullLabel");
//     const todoCount = toDoList.children.length;

//     if (todoCount >= MAX_TODO_COUNT) {
//         inputField.disabled = true;
//         inputTitleField.disabled = true;
//         inputField.value = "";
//         inputTitleField.value = "";
//         todoCountLabel.textContent = `${MAX_TODO_COUNT}`;
//         todoFullLabel.style.color = "darkred";
//     } else if (todoCount === 4 && todoCount < 5) {
//         inputField.disabled = false;
//         inputTitleField.disabled = false;
//         todoCountLabel.textContent = `${todoCount}`;
//         todoFullLabel.style.color = "red";
//     } else if (todoCount === 3 && todoCount < 4) {
//         inputField.disabled = false;
//         inputTitleField.disabled = false;
//         todoCountLabel.textContent = `${todoCount}`;
//         todoFullLabel.style.color = "orange";
//     } else {
//         inputField.disabled = false;
//         inputTitleField.disabled = false;
//         todoFullLabel.style.color = "var(--main-color)";
//         todoCountLabel.textContent = `${todoCount}`;
//     }
// }

// inputField.addEventListener("input", checkTodoCount);
// inputTitleField.addEventListener("input", checkTodoCount);

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

function addSpecialTask(inputVal, inputTitleVal, bezigheid) {
    if (toDoList.children.length < MAX_TODO_COUNT) {
        if (inputVal.includes("!DESC!")) {
            inputVal = inputVal.replace("!DESC!", "");
        }

        let liTag = `<li id="list" class="pending ${
            bezigheid || "none"
        }" data-bezigheid="${bezigheid}" onclick="handleStatus(this)">
    <input type="checkbox" />
    <div id="iteminfo">
    <span class="position-absolute top-0 start-120 translate-middle badge rounded-pill ${bezigheid}">${bezigheid}</span>
    <h5 id="task"><b>${inputTitleVal}</b></h5>
    <p id="task">${inputVal}</p>
    </div>
    <i class="uil uil-trash" onclick="deleteTask(this)" ></i>
    </li>`;

        toDoList.insertAdjacentHTML("beforeend", liTag);
        inputField.value = "";
        inputTitleField.value = "";
        bezigheidList.value = "other";
        allTasks();
        // saveToCookie();
    }
}

// function inputOnClick(event) {
//     let inputVal = inputField.value.trim();
//     let inputTitleVal = inputTitleField.value.trim();
//     let bezigheid = bezigheidList.value.trim();

//     if (
//         (event.key === "Enter" && inputTitleVal.length > 0) ||
//         (event.key === "Enter" &&
//             inputVal.length > 0 &&
//             inputVal.includes("!DESC!"))
//     ) {
//         addSpecialTask(inputVal, inputTitleVal, bezigheid);
//     }
// }

// inputField.addEventListener("keyup", inputOnClick);
// inputTitleField.addEventListener("keyup", inputOnClick);
// bezigheidList.addEventListener("keyup", inputOnClick);

function handleStatus(e) {
    const checkbox = e.querySelector("input");
    if (checkbox.checked === false) {
        checkbox.checked = true;
    } else if (checkbox.checked === true) {
        checkbox.checked = false;
    }
    e.classList.toggle("pending");
    allTasks();
    // saveToCookie();
}

function deleteTask(e) {
    const taskToRemove = e.parentElement;
    taskToRemove.remove();
    allTasks();
    // saveToCookie();

    removeFromSavedTasks(taskToRemove);
    checkTodoCount();
}

function removeFromSavedTasks(taskToRemove) {
    const loadedCookie = getCookie("myTODOs");
    if (loadedCookie == getCookie("myTODOs")) {
        let todos = JSON.parse(loadedCookie);
        const taskId = taskToRemove.id;
        todos = todos.filter((task) => task.title !== taskId);
        const myJson = JSON.stringify(todos);
        document.cookie =
            "myTODOs=" + myJson + "; expires=1 jan 2050 12:00:00 UTC; path=/";
    }
}

function clear(event) {
    toDoList.innerHTML = " ";
    allTasks();
    // saveToCookie();
    checkTodoCount();
}
clearButton.addEventListener("click", clear);

function getAllTodos() {
    axios
        .get("/todo")
        .then((response) => {
            console.log("Data ontvangen van API:", response.data);
            loadFromCookie(response.data);
        })
        .catch((error) => {
            console.error("Fout bij het ophalen van data:", error);
        });
}

function deleteRequest(id) {
    axios
        .delete(`/todo/delete/${id}`)
        .then((response) => {
            console.log("Data verwijderd van API:", response.data);
            getAllTodos();
        })
        .catch((error) => {
            console.error(error);
        });
}

function loadFromCookie(todos) {
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
    console.log("Document is geladen");
    getAllTodos();
});

// function getAllTodos() {
//     axios.get("/todo").then((response) => {
//         console.log("Data ontvangen van API:", response.data);
//     });
// }

// // function saveTodo() {
// //     axios.post("/api/todos/store")
// //     });
// // }

// function loadFromCookie() {
//     getAllTodos();
//     // const loadedCookie = getCookie("myTODOs");
//     // if (loadedCookie == getCookie("myTODOs")) {
//     toDoList.innerHTML = "";

//     const todos = response.data;
//     todos.forEach((task) => {
//         let liTag = `<li id="list" class="${task.checked ? "" : "pending"} ${
//             task.bezigheid || "none"
//         }" data-bezigheid="${
//             task.bezigheid || "none"
//         }" onclick="handleStatus(this)">
//             <input type="checkbox" ${task.checked ? "checked" : ""} />
//             <div id="iteminfo">
//             <span class="position-absolute top-0 start-120 translate-middle badge rounded-pill ${
//                 task.bezigheid
//             }">${task.bezigheid}</span>
//             <h5 id="task"><b>${task.title}</b></h5>
//             <p id="task">${task.para}</p>
//             </div>
//             <i class="uil uil-trash" onclick="deleteTask(this)" ></i>
//             </li>`;

//         toDoList.insertAdjacentHTML("beforeend", liTag);
//     });
//     // }
//     allTasks();
// }

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document
    .getElementById("deleteCookiesBtn")
    .addEventListener("click", function () {
        window.location.reload();
        document.cookie.split(";").forEach(function (cookie) {
            const cookieName = cookie.split("=")[0].trim();
            if (cookieName.startsWith("myTODOs")) {
                document.cookie =
                    cookieName +
                    "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        });

        window.location.reload();
    });
