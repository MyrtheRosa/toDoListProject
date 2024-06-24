const img1 = document.querySelector("#timed");
const img2 = document.getElementById("notimed");

function redirectTime() {
    document.location.href = "http://127.0.0.1:8000/todo/timer";
}

function redirectNoTime() {
    document.location.href = "http://127.0.0.1:8000/todos";
}
