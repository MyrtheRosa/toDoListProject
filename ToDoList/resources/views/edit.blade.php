@extends('layouts.app')

@section('content')
    <form action="/todo/{{ $todo->id }}" method="POST">
        @csrf
        @method('PUT')
        <input type="text" name="title" value="{{ $todo->title }}">
        <textarea name="description">{{ $todo->description }}</textarea>
        <button type="submit">Update Todo</button>
    </form>
@endsection
