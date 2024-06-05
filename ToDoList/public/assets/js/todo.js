const inputField = document.getElementById("inputTextArea");
const inputTitleField = document.getElementById("inputTitleArea");
const bezigheidList = document.getElementById("bezigheid");
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

    function saveColorTheme(theme) {
        document.cookie =
            "colorTheme=" +
            theme +
            "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    }

    if (!document.cookie.includes("colorTheme")) {
        saveColorTheme("Midnight");
    }

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

    function applyColorTheme(theme) {
        const themes = {
            Midnight: {
                "--main-color": "rgba(20, 88, 233, 0.719)",
                "--main-color-hover": "rgb(25, 109, 243)",
                "--main-color-active": "rgba(14, 67, 181, 0.719)",
                "--main-text": "rgb(25, 109, 243)",
                "--toDO-text": "white",
                "--grad1": "#2b1055",
                "--grad2": "#4070f4",
                "--note": "rgba(51, 150, 255, 0.815)",
                "--main-img": "url(../images/stars.png)",
                "--main-obj": "url(../images/moon.png)",
                "--main-obj2": "url(../images/mountains_front.png)",
                "--school": "#0171c6",
                "--work": "#2f58c7",
                "--sport": "#5073d4",
                "--hobby": "#2d4da5",
                "--other": "#6a82c2",
            },
            Sunshine: {
                "--main-color": "rgba(233, 198, 20, 0.719)",
                "--main-color-hover": "rgb(243, 167, 25)",
                "--main-color-active": "rgba(181, 128, 14, 0.719)",
                "--main-text": "rgb(243, 196, 25)",
                "--toDO-text": "white",
                "--grad1": "#6eeaf8",
                "--grad2": "#1eb7c5",
                "--note": "rgba(211, 170, 24, 0.815)",
                "--main-img": "none",
                "--main-obj": "none",
                "--main-obj2": "url(../images/sunshine.jpg)",
                "--school": "#ffae0d",
                "--work": "#dc970e",
                "--sport": "#e2b65c",
                "--hobby": "#f6c259",
                "--other": "#c98f1a",
            },
            Pink: {
                "--main-color": "#f29de1",
                "--main-color-hover": "rgb(255, 88, 252)",
                "--main-color-active": "rgba(181, 14, 181, 0.719)",
                "--main-text": "rgb(212, 79, 219)",
                "--toDO-text": "white",
                "--grad1": "none",
                "--grad2": "none",
                "--note": "rgba(228, 109, 255, 0.815)",
                "--main-img": "none",
                "--main-obj": "none",
                "--main-obj2": "url(../images/pink.jpeg)",
                "--school": "#ff0df3",
                "--work": "#db45d4",
                "--sport": "#b822b1",
                "--hobby": "#e38cde",
                "--other": "#ac0aa4",
            },
            Forest: {
                "--main-color": "rgba(46, 207, 51, 0.719)",
                "--main-color-hover": "rgb(47, 171, 63)",
                "--main-color-active": "rgba(14, 181, 45, 0.719)",
                "--main-text": "rgb(64, 155, 78)",
                "--toDO-text": "white",
                "--grad1": "none",
                "--grad2": "none",
                "--note": "rgba(37, 157, 45, 0.815)",
                "--main-img": "none",
                "--main-obj": "none",
                "--main-obj2": "url(../images/forest.jpeg)",
                "--school": "#3fce4b",
                "--work": "#29bf53",
                "--sport": "#38a146",
                "--hobby": "#71d37b",
                "--other": "#0a8710",
            },
            Caramel: {
                "--main-color": "rgba(216, 199, 132, 0.719)",
                "--main-color-hover": "rgb(156, 137, 73)",
                "--main-color-active": "rgba(181, 139, 14, 0.719)",
                "--main-text": "rgb(214, 186, 96)",
                "--toDO-text": "white",
                "--grad1": "none",
                "--grad2": "none",
                "--note": "rgba(230, 183, 122, 0.815)",
                "--main-img": "none",
                "--main-obj": "none",
                "--main-obj2": "url(../images/caramel.jpg)",
                "--school": "#dcc176",
                "--work": "#bf9c29",
                "--sport": "#a18838",
                "--hobby": "#cfbd83",
                "--other": "#876c0a",
            },
        };

        function applyTheme(themeName) {
            const theme = themes[themeName];
            for (const property in theme) {
                document.documentElement.style.setProperty(
                    property,
                    theme[property]
                );
            }
        }
        applyTheme(theme);
    }

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

    radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            const selectedTheme = this.value;
            applyColorTheme(selectedTheme);
            saveColorTheme(selectedTheme);
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
    if (inputVal.includes("!DESC!")) {
        inputVal = inputVal.replace("!DESC!", "");
    }

    let liTag = `<li id="list" class="pending ${bezigheid}" data-bezigheid="${bezigheid}"  onclick="handleStatus(this)">
        <input type="checkbox"/>
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
    bezigheidList.value = "";
    allTasks();
    saveToCookie();
}

function inputOnClick(event) {
    let inputVal = inputField.value.trim();
    let inputTitleVal = inputTitleField.value.trim();
    let bezigheid = bezigheidList.value.trim();

    if (
        (event.key === "Enter" && inputTitleVal.length > 0) ||
        (event.key === "Enter" &&
            inputVal.length > 0 &&
            inputVal.includes("!DESC!"))
    ) {
        addSpecialTask(inputVal, inputTitleVal, bezigheid);
    }
}

inputField.addEventListener("keyup", inputOnClick);
inputTitleField.addEventListener("keyup", inputOnClick);
bezigheidList.addEventListener("keyup", inputOnClick);

function handleStatus(e) {
    const checkbox = e.querySelector("input");
    if (checkbox.checked === false) {
        checkbox.checked = true;
    } else if (checkbox.checked === true) {
        checkbox.checked = false;
    }
    e.classList.toggle("pending");
    allTasks();
    saveToCookie();
}

function deleteTask(e) {
    const taskToRemove = e.parentElement;
    taskToRemove.remove();
    allTasks();
    saveToCookie();

    removeFromSavedTasks(taskToRemove);
}

function removeFromSavedTasks(taskToRemove) {
    const loadedCookie = getCookie("myTODOs");
    if (loadedCookie == getCookie("myTODOs")) {
        let todos = JSON.parse(loadedCookie);
        const taskId = taskToRemove.id;
        todos = todos.filter((task) => task.title !== taskId);
        const myJson = JSON.stringify(todos);
        document.cookie =
            "myTODOs=" + myJson + "; expires=1 jan 2050 12:00:00 UTC";
    }
}

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
            bezigheid: item.getAttribute("data-bezigheid"),
        });
    });

    const myJson = JSON.stringify(itemsToSave);
    document.cookie =
        "myTODOs=" + myJson + "; expires=1 jan 2050 12:00:00 UTC; path=/";
}

function loadFromCookie() {
    const loadedCookie = getCookie("myTODOs");
    if (loadedCookie == getCookie("myTODOs")) {
        toDoList.innerHTML = "";

        const todos = JSON.parse(loadedCookie);
        todos.forEach((task) => {
            let liTag = `<li id="list" class="${
                task.checked ? "" : "pending"
            } ${task.bezigheid}" data-bezigheid="${
                task.bezigheid
            }" onclick="handleStatus(this)">
        <input type="checkbox" ${task.checked ? "checked" : ""} />
        <div id="iteminfo">
        <span class="position-absolute top-0 start-120 translate-middle badge rounded-pill ${
            task.bezigheid
        }">${task.bezigheid}</span>
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
