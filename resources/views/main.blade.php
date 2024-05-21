<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List || HTML CSS JavaScript</title>

    <link rel="stylesheet" href="toDoListStyle.css"/>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">
</head>
<body>
    <div id="display">
        <div id="inputField">
            <textarea id="inputTextArea" placeholder="Enter your new to-do"></textarea>
            <i class="uil uil-notes note-icon"></i>
        </div>
        <ul id="toDoList"></ul>
        <div id="pendingTasks">
            <span>You have <span id="pendingNum">no </span> tasks pending. </span>
            <button id="clearButton">Clear All</button>
        </div>
    </div>
    <script src="toDoScript.js"></script>
</body>
</html>
</body>
</html>
