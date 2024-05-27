<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('assets/css/selected.css') }}">
    <title>Keuze Menu</title>
</head>
<body>
<div class="selectors">
    <div class="moon"></div>
    <div class="container1">
        <img onclick="redirectTime()" id="timed" src="{{asset('assets/images/todotimer.jpeg')}}" alt="">
        <h1>ToDo list with timer</h1>
    </div>
    <div class="container2">
        <img onclick="redirectNoTime()" id="notimed" src="{{asset('assets/images/todonotime.jpg')}}" alt="">
        <h1>ToDo list without timer</h1>
    </div>
</div>
<script src="{{asset('assets/js/keuze.js')}}"></script>
</body>
</html>
