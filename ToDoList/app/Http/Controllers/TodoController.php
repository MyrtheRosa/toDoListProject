<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $bezigheid = $request->get('bezigheid');

        $todos = auth()->user()->todos()->when($bezigheid, function ($query, $bezigheid) {
            return $query->where('bezigheid', $bezigheid);
        })->get();

    //    return view('todo', ['todos' => $todos]);
    //    return $todos;
    // return json_encode($todos);
    return response()->json($todos);
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
        $request->validate([
            'title' => 'required',
            // other validation rules...
        ]);

        $todo = new Todo;
        $todo->title = $request->title;
        $todo->description = $request->description;
        $todo->bezigheid = $request->bezigheid;
        $todo->user_id = auth()->id();
        $todo->save();

        return redirect()->back();
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
            return view('edit', ['todo' => $todo]);
        }

        return redirect()->back()->with('error', 'Todo not found');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $todo = Todo::find($id);
        $todo ->title = $request->title;
        $todo ->description = $request->description;
        $todo->save();

        return redirect('/todos');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $todo = \App\Models\Todo::find($id);

        if($todo){
            return $todo;
        }

        return redirect('/todos')->with('error', 'Todo not found');
    }

    public function delete(string $id)
    {
        $todo = \App\Models\Todo::find($id);

        if($todo){
            $todo->delete();
            return redirect()->back();
        }

        return redirect('/todos')->with('error', 'Todo not found');
    }

    public function deleteAll()
{
    \Log::info('deleteAll methode aangeroepen');

    $todos = Todo::all();

    if ($todos->isNotEmpty()) {
        foreach ($todos as $todo) {
            $todo->delete();
            \Log::info('Todo verwijderd: ' . $todo->id);
        }
        \Log::info('Alle todos verwijderd');
        return response()->json(['message' => 'All todos deleted successfully.']);
    }

    \Log::info('Geen todos gevonden');
    return response()->json(['message' => 'No todos found.'], 404);
}



}
