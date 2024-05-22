const inputField = document.getElementById("inputTextArea");
const toDoList = document.getElementById("toDoList");
const pendingNum = document.getElementById("pendingNum");
const clearButton = document.getElementById("clearButton");

//We will call this function while adding, deleting and checking/unchecking the task
function allTasks() {
    let tasks = document.querySelectorAll(".pending");

    //if task.length = 0-> num text will be no, if not then pending value will be tasks.length
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
    let allLists = document.querySelectorAll("#list");
    if (allLists.length > 0) {
        toDoList.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return;
    }
    toDoList.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
}

// console.log(inputField, toDoList, pendingNum, clearButton);
function inputOnClick(event) {
    let inputVal = inputField.value.trim(); //Trim function removes space of front and back of the inputed value

    //if enter button is clicked and inputed value length is greater than 0
    if (event.key === "Enter" && inputVal.length > 0) {
        let liTag = `<li id="list" class="pending"  onclick="handleStatus(this)">
        <input type="checkbox"/>
        <span id="task">${inputVal}</span>
        <i class="uil uil-trash" onclick="deleteTask(this)" ></i>
    </li>`;
        toDoList.insertAdjacentHTML("beforeend", liTag); //insert liTag into div
        inputField.value = ""; //removing value from input field
        allTasks();
        saveToCookie();
    }
}

inputField.addEventListener("keyup", inputOnClick);

//checking and unchecking the checkbox while we click on a task
function handleStatus(e) {
    const checkbox = e.querySelector("input"); //getting checkbox
    //  optie 1: checkbox.checked = checkbox.checked ? false : true;
    //optie 2:
    if (checkbox.checked === false) {
        checkbox.checked = true;
    } else if (checkbox.checked === true) {
        checkbox.checked = false;
    }
    e.classList.toggle("pending");
    allTasks();
    saveToCookie();
}

//deleting task while clicking on trash icon
function deleteTask(e) {
    e.parentElement.remove(); //removing parent element
    allTasks();
    saveToCookie();
}

//deleting all the tasks while we click on the clear button
function clear(event) {
    toDoList.innerHTML = " ";
    allTasks();
    saveToCookie();
}
clearButton.addEventListener("click", clear);

function saveToCookie() {
    let toDo = document.querySelectorAll("#toDoList li");

    const itemsToSave = [];
    toDo.forEach((item) => {
        itemsToSave.push({
            title: item.querySelector("span").innerHTML,
            checked: item.querySelector("input").checked,
        });
    });

    const myJson = JSON.stringify(itemsToSave);
    document.cookie =
        "myCookie=" + myJson + "; expires=1 jan 2050 12:00:00 UTC";
}

function loadFromCookie() {
    const loadedCookie = getCookie("myCookie");
    if ((loadFromCookie = getCookie("myCookie"))) {
        const todos = JSON.parse(loadedCookie);
        todos.forEach((task) => {
            console.log(task);
            let liTag = `<li id="list" class="${
                task.checked ? "" : "pending"
            }"  onclick="handleStatus(this)">
        <input type="checkbox" ${task.checked ? "checked" : ""} />
        <span id="task">${task.title}</span>
        <i class="uil uil-trash" onclick="deleteTask(this)" ></i>
    </li>`;
            toDoList.insertAdjacentHTML("beforeend", liTag);
        });
    }
    allTasks();
}

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
loadFromCookie();
