const inputField = document.getElementById("inputTextArea");
const inputTitleField = document.getElementById("inputTitleArea");
const toDoList = document.getElementById("toDoList");
const pendingNum = document.getElementById("pendingNum");
const clearButton = document.getElementById("clearButton");

const settings = document.getElementById("settings");
const settingDiv = document.querySelector(".menuDiv");

settings.addEventListener("click", function () {
    if (settingDiv.style.right === "10px") {
        settingDiv.style.right = "-300px";
        settings.style.right = "10px";
        settings.style.color = "gray";
    } else {
        settingDiv.style.right = "10px";
        settings.style.color = "darkgray";
        settings.style.right = "270px";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="selectColor"]');

    // Functie om de geselecteerde kleurenthema op te slaan als cookie
    function saveColorTheme(theme) {
        document.cookie =
            "colorTheme=" +
            theme +
            "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    }

    // Functie om de waarde van de cookie op te halen
    function getCookie(cname) {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // Functie om de kleurenthema toe te passen op basis van de gegeven waarde
    function applyColorTheme(theme) {
        switch (theme) {
            case "Midnight":
                document.documentElement.style.setProperty(
                    "--main-color",
                    "rgba(20, 88, 233, 0.719)"
                );
                document.documentElement.style.setProperty(
                    "--main-color-hover",
                    "rgb(25, 109, 243)"
                );
                document.documentElement.style.setProperty(
                    "--main-color-active",
                    "rgba(14, 67, 181, 0.719)"
                );
                document.documentElement.style.setProperty(
                    "--main-text",
                    "rgb(25, 109, 243)"
                );
                document.documentElement.style.setProperty(
                    "--toDO-text",
                    "white"
                );
                document.documentElement.style.setProperty(
                    "--grad1",
                    "#2b1055"
                );
                document.documentElement.style.setProperty(
                    "--grad2",
                    "#4070f4"
                );
                document.documentElement.style.setProperty(
                    "--note",
                    "rgba(51, 150, 255, 0.815)"
                );
                document.documentElement.style.setProperty(
                    "--main-img",
                    "url(../images/stars.png)"
                );
                document.documentElement.style.setProperty(
                    "--main-obj",
                    "url(../images/moon.png)"
                );
                document.documentElement.style.setProperty(
                    "--main-obj2",
                    "url(../images/mountains_front.png)"
                );
                break;

            case "Sunshine":
                document.documentElement.style.setProperty(
                    "--main-color",
                    "rgba(233, 198, 20, 0.719)"
                );
                document.documentElement.style.setProperty(
                    "--main-color-hover",
                    "rgb(243, 167, 25)"
                );
                document.documentElement.style.setProperty(
                    "--main-color-active",
                    "rgba(181, 128, 14, 0.719)"
                );
                document.documentElement.style.setProperty(
                    "--main-text",
                    "rgb(243, 196, 25)"
                );
                document.documentElement.style.setProperty(
                    "--toDO-text",
                    "white"
                );
                document.documentElement.style.setProperty(
                    "--grad1",
                    "#6eeaf8"
                );
                document.documentElement.style.setProperty(
                    "--grad2",
                    "#1eb7c5"
                );
                document.documentElement.style.setProperty(
                    "--note",
                    "rgba(211, 170, 24, 0.815)"
                );
                document.documentElement.style.setProperty(
                    "--main-img",
                    "none"
                );
                document.documentElement.style.setProperty(
                    "--main-obj",
                    "none"
                );
                document.documentElement.style.setProperty(
                    "--main-obj2",
                    "url(../images/sunshine.jpg)"
                );
                break;

            case "Pink":
                document.documentElement.style.setProperty(
                    "--main-color",
                    "#f29de1"
                );
                document.documentElement.style.setProperty(
                    "--main-color-hover",
                    "rgb(255, 88, 252)"
                );
                document.documentElement.style.setProperty(
                    "--main-color-active",
                    "rgba(181, 14, 181, 0.719)"
                );
                document.documentElement.style.setProperty(
                    "--main-text",
                    "rgb(212, 79, 219)"
                );
                document.documentElement.style.setProperty(
                    "--toDO-text",
                    "white"
                );
                document.documentElement.style.setProperty("--grad1", "none");
                document.documentElement.style.setProperty("--grad2", "none");
                document.documentElement.style.setProperty(
                    "--note",
                    "rgba(228, 109, 255, 0.815)"
                );
                document.documentElement.style.setProperty(
                    "--main-img",
                    "none"
                );
                document.documentElement.style.setProperty(
                    "--main-obj",
                    "none"
                );
                document.documentElement.style.setProperty(
                    "--main-obj2",
                    "url(../images/pink.jpeg)"
                );
                break;

            case "Forest":
                document.documentElement.style.setProperty(
                    "--main-color",
                    "rgba(46, 207, 51, 0.719)"
                );
                document.documentElement.style.setProperty(
                    "--main-color-hover",
                    "rgb(47, 171, 63)"
                );
                document.documentElement.style.setProperty(
                    "--main-color-active",
                    "rgba(14, 181, 45, 0.719)"
                );
                document.documentElement.style.setProperty(
                    "--main-text",
                    "rgb(64, 155, 78)"
                );
                document.documentElement.style.setProperty(
                    "--toDO-text",
                    "white"
                );
                document.documentElement.style.setProperty("--grad1", "none");
                document.documentElement.style.setProperty("--grad2", "none");
                document.documentElement.style.setProperty(
                    "--note",
                    "rgba(37, 157, 45, 0.815)"
                );
                document.documentElement.style.setProperty(
                    "--main-img",
                    "none"
                );
                document.documentElement.style.setProperty(
                    "--main-obj",
                    "none"
                );
                document.documentElement.style.setProperty(
                    "--main-obj2",
                    "url(../images/forest.jpeg)"
                );
                break;

            case "Caramel":
                document.documentElement.style.setProperty(
                    "--main-color",
                    "rgba(216, 199, 132, 0.719)"
                );
                document.documentElement.style.setProperty(
                    "--main-color-hover",
                    "rgb(156, 137, 73)"
                );
                document.documentElement.style.setProperty(
                    "--main-color-active",
                    "rgba(181, 139, 14, 0.719)"
                );
                document.documentElement.style.setProperty(
                    "--main-text",
                    "rgb(214, 186, 96)"
                );
                document.documentElement.style.setProperty(
                    "--toDO-text",
                    "white"
                );
                document.documentElement.style.setProperty("--grad1", "none");
                document.documentElement.style.setProperty("--grad2", "none");
                document.documentElement.style.setProperty(
                    "--note",
                    "rgba(230, 183, 122, 0.815)"
                );
                document.documentElement.style.setProperty(
                    "--main-img",
                    "none"
                );
                document.documentElement.style.setProperty(
                    "--main-obj",
                    "none"
                );
                document.documentElement.style.setProperty(
                    "--main-obj2",
                    "url(../images/caramel.jpg)"
                );
                break;
        }
    }

    // Lees de opgeslagen kleurenthema uit de cookie en pas deze toe
    const savedTheme = getCookie("colorTheme");
    if (savedTheme) {
        applyColorTheme(savedTheme);
        const savedRadio = document.querySelector(
            `input[name="selectColor"][value="${savedTheme}"]`
        );
        if (savedRadio) {
            savedRadio.checked = true;
        }
    }

    // Voeg event listeners toe aan elke radio button
    radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            const selectedTheme = this.value;
            applyColorTheme(selectedTheme);
            saveColorTheme(selectedTheme);
        });
    });
});

//We will call this function while adding, deleting and checking/unchecking the task
function allTasks() {
    let tasks = document.querySelectorAll(".pending");

    //if task.length = 0-> num text will be no, if not then pending value will be tasks.length
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

// console.log(inputField, toDoList, pendingNum, clearButton);
function inputOnClick(event) {
    let inputVal = inputField.value.trim(); //Trim function removes space of front and back of the inputed value
    let inputTitleVal = inputTitleField.value.trim(); //Trim function removes space of front and back of the inputed value

    //if enter button is clicked and inputed value length is greater than 0
    if (event.key === "Enter" && inputTitleVal.length > 0) {
        let liTag = `<li id="list" class="pending"  onclick="handleStatus(this)">
        <input type="checkbox"/>
        <div id="iteminfo">
            <h5 id="task"><b>${inputTitleVal}</b></h5>
            <p id="task">${inputVal}</p>
        </div>
        <i class="uil uil-trash" onclick="deleteTask(this)" ></i>
    </li>`;
        toDoList.insertAdjacentHTML("beforeend", liTag); //insert liTag into div
        inputField.value = ""; //removing value from input field
        inputTitleField.value = ""; //removing value from input field
        allTasks();
        saveToCookie();
    }
}

inputField.addEventListener("keyup", inputOnClick);
inputTitleField.addEventListener("keyup", inputOnClick);

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
            title: item.querySelector("h5").innerHTML,
            para: item.querySelector("p").innerHTML,
            checked: item.querySelector("input").checked,
        });
    });

    const myJson = JSON.stringify(itemsToSave);
    document.cookie = "myTODOs=" + myJson + "; expires=1 jan 2050 12:00:00 UTC";
}

function loadFromCookie() {
    const loadedCookie = getCookie("myTODOs");
    if ((loadFromCookie = getCookie("myTODOs"))) {
        const todos = JSON.parse(loadedCookie);
        todos.forEach((task) => {
            console.log(task);
            let liTag = `<li id="list" class="${
                task.checked ? "" : "pending"
            }"  onclick="handleStatus(this)">
        <input type="checkbox" ${task.checked ? "checked" : ""} />
        <div id="iteminfo">
            <h5 id="task"><b>${task.title}</b></h5>
            <p id="task">${task.para}</p>
        </div>
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
