<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = \App\Models\Todo::all();
        return view('todo',['todos' => $todos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $todo = \App\Models\Todo::create($request->all());
        return redirect('/todo');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $todo = \App\Models\Todo::find($id);

        if ($todo) {
            return view('todo', ['todo' => $todo]);
        }

        return redirect('/todo')->with('error', 'Todo not found');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $todo = \App\Models\Todo::find($id);

        if (!$todo) {
            $todo->update($request->all());
            return redirect('/todo');
        }

        return redirect('/todo')->with('error', 'Todo not found');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $todo = \App\Models\Todo::find($id);

        if($todo){
            $todo->delete();
            return redirect('/todo');
        }

        return redirect('/todo')->with('error', 'Todo not found');
    }
}
