<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index() {
        return view('todo');
    }

    public function create() {
        //
    }

    public function delete() {
        //
    }

    public function checked() {
        //
    }

    public function store(Request $request) {
        // Handle the request...
        return redirect()->route('todo.get');
    }
}