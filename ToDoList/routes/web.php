<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

Route::get('/', function () {
    return view('welcome');
});

// Auth::routes();

Route::middleware('auth')->group(function () {
    Route::post('/todo', [TodoController::class, 'store'])->name('todo');
    Route::get('/todo', [TodoController::class, 'index'])->name('todo.get');

    Route::get('/keuze', function() {
        return view('dashboard');
    })->name('keuze');

    Route::get('/todo/timer', function () {
        return view('todotimer');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
