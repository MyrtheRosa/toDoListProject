<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDo List</title>

    <link rel="stylesheet" href="{{ asset('assets/css/todo.css') }}">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</head>
<body>
    <section>
    <div id="stars"></div>
    <div id="moon"></div>
    <img src="{{asset('assets/images/mountains_front.png')}}" id="mountains_front" />
    <button id="settings">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
          </svg>
    </button>
    <div class="menuDiv">
        <h5>Settings</h5>
        <div class="colors">
            <ol>
                <li>Midnight Blue</li>
                <li>Sunshine</li>
                <li>Pink Ivory</li>
                <li>Forest Green</li>
                <li>Caramel Machiato</li>
            </ol>
        </div>
    </div>
    <div id="display">
        <div id="inputField">
            <textarea id="inputTitleArea" placeholder="Enter your to-do title"></textarea>
            <i class="uil uil-notes note-icon"></i>
        </div>
        <br>
        <div id="inputField">
            <textarea id="inputTextArea" placeholder="Enter your new to-do"></textarea>
        </div>
        {{-- <button>Aesthetic Warning</button> --}}
        <ul id="toDoList"></ul>
        <div id="pendingTasks">
            <span>You have <span id="pendingNum">no </span> tasks pending. </span>
            <button id="clearButton" disabled>Clear All</button>
        </div>
    </div>
</section>

    <script src="{{ asset('assets/js/todo.js') }}"></script>
</body>
</html>
