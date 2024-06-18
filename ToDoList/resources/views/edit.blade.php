<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href=" {{ asset('assets/css/edit.css') }} ">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">
    <title>Edit Todo Nr.{{ $todo->id }}</title>
</head>
<body>
    <section>
        <div id="stars"></div>
        <div id="moon"></div>
        <div id="mountains_front"></div>

        <button id="settings">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-gear-fill"
                viewBox="0 0 16 16">
                <path
                    d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
        </button>

        <div class="menuDiv">
            <div class="topMenu">
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
                <button class="editBtn" onclick="window.location = '/profile'">
                    <i class="uil uil-edit-alt"></i>
                </button>
                <button id="logButton" onclick="document.getElementById('logout-form').submit();">
                    <i class="bi bi-box-arrow-right"></i>
                </button>
                <h5>Settings</h5>
            </div>
            <div class="colors">
                <ol>
                    <li><input type="color" id="favcolor" value="#0a3ca7" disabled> Midnight Blue <input type="radio"
                            name="selectColor" id="none" value="Midnight" checked></li>
                    <li><input type="color" id="favcolor" value="#F9C93A" disabled> Sunshine <input type="radio"
                            name="selectColor" value="Sunshine" id="none"></li>
                    <li><input type="color" id="favcolor" value="#F8AAF2" disabled> Pink Ivory <input type="radio"
                            name="selectColor" value="Pink" id="none"></li>
                    <li><input type="color" id="favcolor" value="#76CB6E" disabled> Forest Green <input type="radio"
                            name="selectColor" value="Forest" id="none"></li>
                    <li><input type="color" id="favcolor" value="#CBAD6E" disabled> Caramel Machiato <input type="radio"
                            name="selectColor" value="Caramel" id="none"></li>
                </ol>
            </div>
            <a href="../todos" id="redirection">Go To Non Timed ToDo</a>
        </div>

        <div class="editForm">
            <h1>Edit ToDo {{$todo->id}}</h1>
            <form action="/todo/{{ $todo->id }}" method="POST" style="display: flex; flex-direction:column;">
                @csrf
                @method('PUT')
                <label for="title">Title</label>
                <input type="text" name="title" value="{{ $todo->title }}">
                <label for="description">Description</label>
                <textarea style="" name="description">{{ $todo->description }}</textarea>
                <button type="submit">Update Todo</button>
            </form>
        </div>
    </section>
    <script src=" {{ asset('assets/js/theme.js') }} "></script>
</body>
</html>
